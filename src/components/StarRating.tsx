import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface StarRatingProps {
  gameSlug: string;
  initialRating?: number;
  totalVotes?: number;
  onRatingChange?: (newRating: number, totalVotes: number) => void;
}

// 生成浏览器指纹（简化版）
function getBrowserFingerprint(): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('fingerprint', 2, 2);
  }
  
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    screen.colorDepth,
    screen.width + 'x' + screen.height,
    new Date().getTimezoneOffset(),
    canvas.toDataURL()
  ].join('|');
  
  // 简单哈希
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return 'fp_' + Math.abs(hash).toString(36);
}

export default function StarRating({ 
  gameSlug, 
  initialRating = 0, 
  totalVotes = 0,
  onRatingChange 
}: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [votes, setVotes] = useState(totalVotes);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 加载用户之前的评分
  useEffect(() => {
    loadUserRating();
    loadRatingStats();
  }, [gameSlug]);

  const loadUserRating = async () => {
    try {
      const fingerprint = getBrowserFingerprint();
      const { data, error } = await supabase
        .from('game_ratings')
        .select('rating')
        .eq('game_slug', gameSlug)
        .eq('user_fingerprint', fingerprint)
        .single();

      if (data && !error) {
        setUserRating(data.rating);
      }
    } catch (err) {
      console.error('Error loading user rating:', err);
    }
  };

  const loadRatingStats = async () => {
    try {
      const { data, error } = await supabase
        .from('game_ratings')
        .select('rating')
        .eq('game_slug', gameSlug);

      if (data && !error) {
        const totalRatings = data.length;
        const avgRating = totalRatings > 0 
          ? data.reduce((sum, r) => sum + r.rating, 0) / totalRatings 
          : 0;
        
        setRating(avgRating);
        setVotes(totalRatings);
        
        if (onRatingChange) {
          onRatingChange(avgRating, totalRatings);
        }
      }
    } catch (err) {
      console.error('Error loading rating stats:', err);
    }
  };

  const handleStarClick = async (starValue: number) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      const fingerprint = getBrowserFingerprint();
      
      // 尝试插入或更新评分
      const { error } = await supabase
        .from('game_ratings')
        .upsert({
          game_slug: gameSlug,
          user_fingerprint: fingerprint,
          rating: starValue
        }, {
          onConflict: 'game_slug,user_fingerprint'
        });

      if (error) throw error;

      setUserRating(starValue);
      await loadRatingStats();
    } catch (err) {
      console.error('Error submitting rating:', err);
      alert('评分提交失败，请稍后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayRating = hoveredStar !== null ? hoveredStar : (userRating || rating);

  return (
    <div className="flex items-center gap-3">
      {/* 星星评分 */}
      <div 
        className="flex items-center gap-1 p-2 bg-white rounded-lg border-2 border-gray-200 shadow-sm"
        onMouseLeave={() => setHoveredStar(null)}
      >
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= Math.round(displayRating);
          const isPartial = star === Math.ceil(displayRating) && displayRating % 1 !== 0;
          
          return (
            <button
              key={star}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoveredStar(star)}
              disabled={isSubmitting}
              className="relative transition-transform hover:scale-110 disabled:opacity-50"
            >
              {/* 背景星星（灰色） */}
              <Star 
                className="w-7 h-7 text-gray-300" 
                fill="currentColor"
              />
              
              {/* 前景星星（黄色） */}
              {isFilled && (
                <Star 
                  className="absolute inset-0 w-7 h-7 text-yellow-400 transition-all" 
                  fill="currentColor"
                  style={{
                    clipPath: isPartial 
                      ? `inset(0 ${100 - (displayRating % 1) * 100}% 0 0)` 
                      : 'none'
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* 评分信息 */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900">
            {rating.toFixed(1)}
          </span>
          <span className="text-sm text-gray-500">/5</span>
        </div>
        <div className="text-xs text-gray-500">
          {votes} {votes === 1 ? 'vote' : 'votes'}
        </div>
      </div>

      {/* 用户评分提示 */}
      {userRating && (
        <div className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
          You rated: {userRating} ⭐
        </div>
      )}
    </div>
  );
}

