import { useState, useEffect } from 'react';
import { MessageCircle, Send, User, Mail, AlertCircle, Star } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Comment {
  id: string;
  user_name: string;
  comment_text: string;
  created_at: string;
  status?: string;
  rating?: number;
}

interface CommentsProps {
  gameSlug: string;
}

export default function Comments({ gameSlug }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showPendingMessage, setShowPendingMessage] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  useEffect(() => {
    loadComments();
  }, [gameSlug]);

  const loadComments = async () => {
    try {
      const { data, error } = await supabase
        .from('game_comments')
        .select('*')
        .eq('game_slug', gameSlug)
        .eq('status', 'approved') // 只显示已审核通过的评论
        .order('created_at', { ascending: false })
        .limit(50);

      if (data && !error) {
        setComments(data);
      }
    } catch (err) {
      console.error('Error loading comments:', err);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!userName.trim() || !userEmail.trim() || !commentText.trim()) {
      alert('Please fill in all required fields (Name, Email, Comment)');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      alert('Please enter a valid email address');
      return;
    }

    // Validate terms agreement
    if (!agreedTerms) {
      alert('Please agree to the terms and conditions before commenting');
      return;
    }

    // Check cooldown period (45 seconds)
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;
    if (timeSinceLastSubmit < 45000) {
      const remainingSeconds = Math.ceil((45000 - timeSinceLastSubmit) / 1000);
      alert(`Please wait ${remainingSeconds} seconds before submitting another comment`);
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('game_comments')
        .insert({
          game_slug: gameSlug,
          user_name: userName.trim(),
          user_email: userEmail.trim(),
          comment_text: commentText.trim(),
          rating: rating,
          agreed_terms: agreedTerms,
          status: 'pending' // 默认为待审核状态
        });

      if (error) throw error;

      // 清空表单
      setUserName('');
      setUserEmail('');
      setCommentText('');
      setRating(5);
      setAgreedTerms(false);
      setShowCommentForm(false);
      setLastSubmitTime(now);

      // 显示审核提示
      setShowPendingMessage(true);
      setTimeout(() => setShowPendingMessage(false), 10000); // 10秒后隐藏

      // 重新加载评论
      await loadComments();
    } catch (err) {
      console.error('Error submitting comment:', err);
      alert('Failed to submit comment. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  return (
    <div className="space-y-6">
      {/* 审核提示消息 */}
      {showPendingMessage && (
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 flex items-start gap-3 animate-pulse">
          <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-yellow-900">Your comment is awaiting moderation!</p>
            <p className="text-sm text-yellow-700 mt-1">
              Thank you for your comment. It will be visible after review by our moderators.
            </p>
          </div>
        </div>
      )}

      {/* 评论标题和按钮 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MessageCircle className="w-6 h-6 text-cyan-400" />
          <h3 className="text-2xl font-bold text-gray-900">
            Comments ({comments.length})
          </h3>
        </div>

        {!showCommentForm && (
          <button
            onClick={() => setShowCommentForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Write a Comment
          </button>
        )}
      </div>

      {/* 评论表单 */}
      {showCommentForm && (
        <form onSubmit={handleSubmitComment} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
          <div className="space-y-4">
            {/* 姓名输入 */}
            <div>
              <label htmlFor="userName" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="userName"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                maxLength={50}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                required
              />
            </div>

            {/* 邮箱输入 */}
            <div>
              <label htmlFor="userEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="userEmail"
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  maxLength={100}
                  className="w-full pl-11 pr-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Your email will not be published
              </p>
            </div>

            {/* 评论内容 */}
            <div>
              <label htmlFor="commentText" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Comment <span className="text-red-500">*</span>
              </label>
              <textarea
                id="commentText"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share your thoughts about this game..."
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 outline-none transition-all resize-none"
                required
              />
              <div className="text-xs text-gray-500 mt-1 text-right">
                {commentText.length}/500
              </div>
            </div>

            {/* 评分 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300 fill-gray-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-sm text-gray-600 ml-2">{rating}/5</span>
              </div>
            </div>

            {/* 同意条款复选框 */}
            <div className="flex items-start gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <input
                id="agreedTerms"
                type="checkbox"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                className="mt-1 w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-400"
                required
              />
              <label htmlFor="agreedTerms" className="text-sm text-gray-700 cursor-pointer">
                I have read and agree to the{' '}
                <a href="/terms" className="text-cyan-600 hover:text-cyan-700 font-semibold underline">
                  terms and conditions
                </a>
                . Please leave constructive comments, respect other people's opinions, and stay on topic.
                <span className="text-red-500 ml-1">*</span>
              </label>
            </div>

            {/* 提示信息 */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> All comments are moderated before being published.
                Please allow some time for your comment to appear.
              </p>
            </div>

            {/* 按钮 */}
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Posting...' : 'Post Comment'}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowCommentForm(false);
                  setUserName('');
                  setUserEmail('');
                  setCommentText('');
                  setAgreedTerms(false);
                }}
                className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}

      {/* 评论列表 */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
            <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">No comments yet</p>
            <p className="text-gray-400 text-sm mt-1">Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div 
              key={comment.id} 
              className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-cyan-300 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                {/* 用户头像 */}
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                
                {/* 评论内容 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-gray-900">
                      {comment.user_name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {formatDate(comment.created_at)}
                    </span>
                  </div>

                  {/* 评分显示 */}
                  {comment.rating && (
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < comment.rating!
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300 fill-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">{comment.rating}/5</span>
                    </div>
                  )}

                  <p className="text-gray-700 leading-relaxed">
                    {comment.comment_text}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

