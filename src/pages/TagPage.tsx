import { useEffect } from 'react';
import { Star } from 'lucide-react';
import Layout from '../components/Layout';
import { getGamesByTag } from '../utils/gameUtils';
import { isRealGame } from '../data/games';

interface TagPageProps {
  tag: string;
  title: string;
  description: string;
  emoji: string;
  gradient: string;
}

export default function TagPage({ tag, title, description, emoji, gradient }: TagPageProps) {
  // 使用工具函数筛选包含该标签的游戏
  const filteredGames = getGamesByTag(tag);

  useEffect(() => {
    document.title = `${title} Games - Steal a Brainrot`;
  }, [title]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section */}
        <section className={`bg-gradient-to-r ${gradient} py-16 border-b-4 border-cyan-400`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-8xl mb-6">{emoji}</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {title} Games
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
              <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-white font-bold text-lg">
                  {filteredGames.length} {filteredGames.length === 1 ? 'Game' : 'Games'} Available
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-8 border-2 border-orange-300">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="text-3xl">{emoji}</span>
              All {title} Games
            </h2>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredGames.map((game, i) => {
                if (!isRealGame(game)) return null;
                return (
                  <a
                    key={i}
                    href={`/${game.slug}`}
                    className="group cursor-pointer block"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl bg-white">
                      <img
                        src={game.image}
                        alt={game.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2">
                      <p className="text-center text-sm font-semibold text-white truncate">
                        {game.name}
                      </p>
                      {game.rating && (
                        <div className="flex items-center justify-center gap-1 mt-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span className="text-xs text-gray-300 font-medium">{game.rating.toFixed(1)}</span>
                        </div>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">😢</div>
              <p className="text-xl text-gray-400">No games found for this tag yet.</p>
              <p className="text-gray-500 mt-2">Check back soon for new games!</p>
            </div>
          )}
        </section>

        {/* Tag Info Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">{emoji}</span>
              About {title} Games
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {description}
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border-2 border-cyan-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">🎮 Total Games</h3>
                  <p className="text-3xl font-bold text-cyan-600">{filteredGames.length}</p>
                  <p className="text-sm text-gray-600 mt-2">Available to play now</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">⭐ Average Rating</h3>
                  <p className="text-3xl font-bold text-orange-600">
                    {filteredGames.length > 0 
                      ? (filteredGames.reduce((sum, g) => sum + g.rating, 0) / filteredGames.length).toFixed(1)
                      : '0.0'
                    }
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Based on player reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tags */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="text-3xl">🏷️</span>
              Explore More Tags
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { name: 'Brainrot', emoji: '🧠', slug: 'brainrot', gradient: 'from-purple-500 to-pink-500' },
              { name: 'Casual', emoji: '🎮', slug: 'casual', gradient: 'from-blue-500 to-cyan-500' },
              { name: 'Meme', emoji: '😂', slug: 'meme', gradient: 'from-yellow-500 to-orange-500' },
              { name: 'Clicker', emoji: '👆', slug: 'clicker', gradient: 'from-green-500 to-teal-500' },
              { name: 'Roblox', emoji: '🎲', slug: 'roblox', gradient: 'from-red-500 to-pink-500' },
              { name: 'Puzzle', emoji: '🧩', slug: 'puzzle', gradient: 'from-indigo-500 to-purple-500' },
            ].filter(t => t.slug !== tag.toLowerCase()).map((tagItem, i) => (
              <a
                key={i}
                href={`/tag/${tagItem.slug}`}
                className="group cursor-pointer block"
              >
                <div className={`aspect-square rounded-xl bg-gradient-to-br ${tagItem.gradient} flex items-center justify-center border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl`}>
                  <span className="text-5xl">{tagItem.emoji}</span>
                </div>
                <p className="text-center text-sm font-semibold text-white mt-2">{tagItem.name}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

