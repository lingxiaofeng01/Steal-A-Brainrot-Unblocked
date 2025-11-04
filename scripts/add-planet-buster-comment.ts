import { supabase } from '../src/lib/supabase';

/**
 * 为 Planet Buster 添加一条评论到 Supabase
 */
async function addPlanetBusterComment() {
  try {
    console.log('🚀 Adding Planet Buster comment to Supabase...');

    const comment = {
      game_slug: 'planet-buster',
      user_name: 'CosmicDestroyer',
      comment_text: 'Planet Buster is incredibly addictive! The one-button gameplay is so satisfying, and watching planets explode never gets old. The upgrade system keeps me coming back for more. Perfect free online game with no downloads needed!',
      rating: 5,
      status: 'approved',
      agreed_terms: true,
      user_email: 'cosmicdestroyer@example.com'
    };

    // 插入评论
    const { data, error } = await supabase
      .from('game_comments')
      .insert([comment])
      .select();

    if (error) {
      console.error('❌ Error adding comment:', error);
      return false;
    }

    console.log('✅ Planet Buster comment added successfully:', data);
    return true;
  } catch (err) {
    console.error('❌ Error in addPlanetBusterComment:', err);
    return false;
  }
}

// 执行脚本
addPlanetBusterComment()
  .then(() => {
    console.log('✅ Script completed');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Script failed:', err);
    process.exit(1);
  });

