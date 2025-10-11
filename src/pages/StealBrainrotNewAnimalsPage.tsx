import { useState } from 'react';
import { Play, Maximize, ExternalLink, Star, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { hasTagPage, getTagSlug } from '../utils/tagUtils';
import GamePreview from '../components/GamePreview';
import StarRating from '../components/StarRating';
import Comments from '../components/Comments';
import NewBadge from '../components/NewBadge';
import { allGames, isRealGame } from '../data/games';

export default function StealBrainrotNewAnimalsPage() {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Steal Brainrot: New Animals game data
  const game = {
    title: 'Steal Brainrot: New Animals',
    slug: 'steal-brainrot-new-animals',
    subtitle: 'Meme Animal Stealing Adventure!',
    description: 'A colourful arcade obby that immerses you in a world of hilarious Italian animal memes. Build your collection of meme animals to earn money while sneaking into other players\' bases!',
    playUrl: 'https://st.8games.net/7/8g/igra-ukradi-brejnrot-novye-zhivotnye/',
    thumbnail: '/images/thumbnails/steal-brainrot-new-animals.png',
    rating: 3.5,
    playCount: 3970,
    tags: ['Brainrot', 'Roblox', 'Meme', 'Collection', 'Arcade', 'Casual'],
    backgroundColor: 'from-lime-400 via-green-400 to-emerald-400'
  };

  const handlePlayClick = () => {
    setShowGame(true);
  };

  const handleFullscreen = () => {
    const container = document.getElementById('game-container');
    if (!document.fullscreenElement && container) {
      container.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-800 to-cyan-900">
        {/* Game Display Area */}
        <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 relative">
          {/* 背景图 */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=1920&h=1080&fit=crop)',
              filter: 'blur(12px)',
            }}
          />

          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-teal-600/20 to-cyan-600/20" />

          {/* 游戏卡片 */}
          <div className="relative z-10 w-full max-w-6xl">
            {!showGame ? (
              /* 游戏预览卡片 */
              <GamePreview
                title={game.title}
                description={game.description}
                thumbnail={game.thumbnail}
                onPlayClick={handlePlayClick}
                backgroundColor={game.backgroundColor}
              />
            ) : (
              /* 游戏播放中 */
              <div id="game-container" className="relative bg-black rounded-3xl overflow-hidden border-4 border-cyan-400 shadow-2xl">
                <div className="aspect-video relative">
                  <iframe
                    id="iframehtml5"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    src={game.playUrl}
                  />
                </div>
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <button
                    onClick={handleFullscreen}
                    className="p-3 bg-gray-900/80 hover:bg-gray-800 rounded-lg transition-colors shadow-lg"
                    title="Fullscreen"
                  >
                    <Maximize className="w-5 h-5 text-white" />
                  </button>
                  <a
                    href={game.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/80 hover:bg-gray-800 rounded-lg transition-colors shadow-lg"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Game Info Section - 白色背景 */}
        <div className="bg-white">
          {/* 游戏标题和标签 */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-2xl p-6 border-4 border-cyan-400 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg border-2 border-white">
                    <img
                      src={game.thumbnail}
                      alt={game.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{game.title}</h2>
                  
                  {/* Star Rating */}
                  <div className="mb-4">
                    <StarRating gameSlug={game.slug} />
                  </div>
                  <p className="text-gray-700 text-lg mb-4">{game.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag, i) => {
                      const isClickable = hasTagPage(tag);
                      const TagElement = isClickable ? 'a' : 'span';
                      return (
                        <TagElement
                          key={i}
                          {...(isClickable ? { href: `/tag/${getTagSlug(tag)}` } : {})}
                          className={`px-4 py-2 bg-gray-800 text-white font-semibold rounded-full shadow-md hover:bg-gray-700 ${
                            isClickable
                              ? 'hover:bg-cyan-50 hover:border-cyan-500 transition-colors cursor-pointer'
                              : 'opacity-75 cursor-default'
                          }`}
                        >
                          {tag}
                        </TagElement>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Games */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                More Brainrot Games
              </h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {allGames.slice(0, 12).map((game, i) => (
                <a
                  key={i}
                  href={isRealGame(game) ? `/${game.slug}` : '#'}
                  className="group cursor-pointer block"
                  onClick={(e) => !isRealGame(game) && e.preventDefault()}
                >
                  <div className={`relative aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl ${isRealGame(game) ? 'bg-white' : `bg-gradient-to-br ${game.color}`}`}>
                    {isRealGame(game) ? (
                      <>
                        {game.releaseDate && <NewBadge releaseDate={game.releaseDate} />}
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-full h-full object-cover"
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl">
                        {game.emoji}
                      </div>
                    )}
                  </div>
                  <p className="text-center text-sm font-semibold text-gray-700 mt-2 truncate">{game.name}</p>
                </a>
              ))}
            </div>
          </section>

          {/* 游戏详细介绍 */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">📖</span>
                About Steal Brainrot: New Animals
              </h2>
            </div>

            <div className="prose max-w-none">
              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎮 Steal and Build Gameplay</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Steal Brainrot: New Animals is a crazy meme animal-stealing adventure. Its gameplay revolves around collecting meme animals to increase your income and unlock new skills, mixed with fast-paced action to steal and defend your base. Starting with simple memes, you gradually expand your "territory" by shopping smart, but the risk is always lurking—a rebirth can wipe out your progress in exchange for a big reward to help you explode again.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">✨ Special Features</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">🏙️</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Level Design and Challenges</h4>
                      <p className="text-gray-700">The arenas are designed like miniature meme cities, full of clever obstacles and surprises, synchronised with the rhythm of music to create a sense of rhythm. Each area has its own theme, encouraging exploration and learning from failure.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">💡</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Bright Neon Arena and Smart Traps</h4>
                      <p className="text-gray-700">The Foodcourt Freeway features greasy floors and meme fans that can push you off course. Rooftop Zoo uses billboard cables as a zipline, while Aquarium Arcade challenges with a swaying glass tunnel and flickering lights.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">🎵</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Rhythm and Sound Sync</h4>
                      <p className="text-gray-700">Gummy bass music sets the pace: jump on the beat for the perfect ping, and avoid traps on the thump. Miss a beat and the sound dips, reminding you to get back into the groove without interrupting the fun.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">👥</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Social Features and Progression</h4>
                      <p className="text-gray-700">The game encourages interaction through leaderboards and co-op, where you can learn from your friends' ghosts and build a meme community. Progression focuses on skill rather than grind, with fun cosmetics for personalisation.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">🏆</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Leaderboards and Co-ops</h4>
                      <p className="text-gray-700">Friends' ghosts show up on the run, allowing you to steal cool routes. Co-op relay allows for shared gameplay, with one person taking the bottom lane and the other handling the highs, ending with a virtual high-five.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">🎨</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Unlock Cosmetics and Upgrades</h4>
                      <p className="text-gray-700">Coins buy shiny stickers, neon trails for animals, or a fluttering backpack. Animal upgrades fine-tune skills like extending Capybara's Calm time, keeping progression intriguing without overdoing it.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 How to Play</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">💰</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Collect Meme Animals and Make Money</h4>
                      <p className="text-gray-700">Start by farming coins from basic memes, like the cute Tung Tung Sahur. Each new animal brings higher profits, turning your base into a gold mine. Choose carefully because the order of shopping directly affects the speed of development – prioritise those that give double benefits like increased movement speed.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">🕵️</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Steal From Other Players</h4>
                      <p className="text-gray-700">Sneaking into rival bases to "steal" rare animals is the most exciting part. Move stealthily through neon passages, avoiding detection, to bring the loot home. The higher the risk, the bigger the reward, but a small mistake can leave you empty-handed – requiring wisdom and speed.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">🔄</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Rebirth and Rewards System</h4>
                      <p className="text-gray-700">When you have enough coins, activate rebirth to reset your progress but get a giant bonus. These incentives give you a stronger start, making it easier to collect rare memes and expand your base quickly. This feature is a mechanism that encourages risk-taking, turning failure into a stepping stone to big wins.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🐾 Meme Animals and Special Skills</h3>
                <p className="text-gray-700 mb-4">Each animal is not only a collectible but also a "weapon" with unique skills, changing the way you approach levels:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-cyan-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🦫</span>
                      <h4 className="font-bold text-gray-800">Capybara Calm</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Can jump over laser nets without turning into toast</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-cyan-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🎭</span>
                      <h4 className="font-bold text-gray-800">Tralalero Tralala</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Provides cheerful energy, increasing the speed of dancing over obstacles</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-cyan-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">☕</span>
                      <h4 className="font-bold text-gray-800">Ballerina Cappuccino</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Graceful dance helps avoid delicate traps</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-cyan-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🥷</span>
                      <h4 className="font-bold text-gray-800">Cappuccino Assassino</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Specialises in stealth, ideal for late-night heists</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-cyan-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🦎</span>
                      <h4 className="font-bold text-gray-800">Gecko Grip</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Allows for longer wall grips, turning glass walls into safe slides</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-cyan-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🐦</span>
                      <h4 className="font-bold text-gray-800">Pigeon Pop</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Allows for short mid-air jumps to adjust direction</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-cyan-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🦝</span>
                      <h4 className="font-bold text-gray-800">Raccoon Pocket</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Stores temporary items, allowing you to deploy surprises while on the run</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🌟 Why Play Steal Brainrot: New Animals Now?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Steal Brainrot: New Animals is an explosion of Italian memes, parkour, and clever heist strategy, where every run is a joke and a victory. With a friendly design, high accessibility, and a vibrant community, this is the game for anyone who loves fun risks. Play Steal Brainrot now to build the ultimate meme collection and become a brainrot tycoon!
                </p>
              </div>
            </div>
          </section>

          {/* Comments Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <Comments gameSlug={game.slug} />
          </section>
        </div>
      </div>
    </Layout>
  );
}

