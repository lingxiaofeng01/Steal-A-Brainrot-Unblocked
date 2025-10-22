import { supabase } from '../lib/supabase';

interface HomePageComment {
  user_name: string;
  comment_text: string;
  rating: number;
}

/**
 * 生成首页的三条预设评论（基于关键词）
 * 关键词：unblocked, free, online, no downloads, instant play
 */
export function generateHomePageComments(): HomePageComment[] {
  return [
    {
      user_name: 'Player123',
      comment_text: 'This game is so addictive! Love collecting all the Brainrots! The unblocked version works perfectly at school and work!',
      rating: 5
    },
    {
      user_name: 'GamerPro',
      comment_text: 'Great free online game! No downloads required, instant play. Works perfectly at school! Best unblocked game I\'ve found!',
      rating: 4
    },
    {
      user_name: 'BrainrotFan',
      comment_text: 'The stealing mechanic is so fun! Best idle game ever! Free to play, no downloads, instant play - exactly what I needed!',
      rating: 5
    }
  ];
}

/**
 * 保存首页评论到 Supabase
 */
export async function saveHomePageComments(): Promise<boolean> {
  try {
    const comments = generateHomePageComments();
    
    // 先删除旧的首页评论
    await supabase
      .from('game_comments')
      .delete()
      .eq('game_slug', 'steal-a-brainrot-unblocked')
      .eq('status', 'approved')
      .in('user_name', ['Player123', 'GamerPro', 'BrainrotFan']);

    // 插入新评论
    const { error } = await supabase
      .from('game_comments')
      .insert(
        comments.map(comment => ({
          game_slug: 'steal-a-brainrot-unblocked',
          user_name: comment.user_name,
          comment_text: comment.comment_text,
          rating: comment.rating,
          status: 'approved',
          agreed_terms: true,
          user_email: `${comment.user_name.toLowerCase()}@example.com`
        }))
      );

    if (error) {
      console.error('Error saving home page comments:', error);
      return false;
    }

    console.log('✅ Home page comments saved successfully');
    return true;
  } catch (err) {
    console.error('Error in saveHomePageComments:', err);
    return false;
  }
}

/**
 * 从 Supabase 加载首页评论
 */
export async function getHomePageComments() {
  try {
    const { data, error } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'steal-a-brainrot-unblocked')
      .eq('status', 'approved')
      .order('created_at', { ascending: false })
      .limit(3);

    if (error) {
      console.error('Error loading home page comments:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Error in getHomePageComments:', err);
    return [];
  }
}

/**
 * 格式化时间显示
 */
export function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  
  return date.toLocaleDateString();
}

