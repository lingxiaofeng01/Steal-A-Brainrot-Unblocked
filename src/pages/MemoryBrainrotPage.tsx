import { useState } from 'react';
import { Play, Maximize, ExternalLink, Star, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { hasTagPage, getTagSlug } from '../utils/tagUtils';
import GamePreview from '../components/GamePreview';
import StarRating from '../components/StarRating';
import Comments from '../components/Comments';
import NewBadge from '../components/NewBadge';
import { allGames, isRealGame } from '../data/games';

export default function MemoryBrainrotPage() {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const game = {
    title: 'Memory Brainrot',
    slug: 'memory-brainrot',
    subtitle: 'Match Meme Pairs!',
    description: 'The ultimate puzzle game that combines fun, laughter, and brain training! Flip cards to match pairs while encountering iconic characters from the Italian Brainrot universe.',
    playUrl: 'https://html5.gamedistribution.com/rvvASMiM/0eec782d61e6449ab2e3ecc02272bcad/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3N0ZWFsLWJyYWlucm90LmlvLyIsInBhcmVudERvbWFpbiI6InN0ZWFsLWJyYWlucm90LmlvIiwidG9wRG9tYWluIjoic3RlYWwtYnJhaW5yb3QuaW8iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9',
    thumbnail: '/images/thumbnails/memory-brainrot.jpg',
    rating: 5.0,
    playCount: 90,
    tags: ['Brainrot', 'Memory', 'Puzzle', 'Meme', 'Brain', 'Casual'],
    backgroundColor: 'from-indigo-400 via-purple-400 to-pink-400'
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-900">
        <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=1920&h=1080&fit=crop)',
              filter: 'blur(12px)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-blue-600/20 to-cyan-600/20" />

          <div className="relative z-10 w-full max-w-6xl">
            {!showGame ? (
              <GamePreview
                title={game.title}
                description={game.description}
                thumbnail={game.thumbnail}
                onPlayClick={handlePlayClick}
                backgroundColor={game.backgroundColor}
              />
            ) : (
              <div id="game-container" className="relative bg-black rounded-3xl overflow-hidden border-4 border-cyan-400 shadow-2xl">
                <div className="aspect-video relative">
                  <iframe
                    id="game"
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    seamless
                    scrolling="no"
                    className="absolute inset-0 w-full h-full border-0"
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

        <div className="bg-white">
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

          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">📖</span>
                About Memory Brainrot
              </h2>
            </div>

            <div className="prose max-w-none">
              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎮 Hilarious Gameplay with Iconic Meme Heroes</h3>
                <p className="text-gray-700 leading-relaxed">
                  In Memory Brainrot, players dive into a colorful cartoon world filled with legendary meme heroes. Each character brings their unique charm and humor, making every game session a delightful experience. As you flip cards, you'll encounter familiar faces that will evoke laughter and nostalgia.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Two Difficulty Levels</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-lg border-2 border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-3xl">😊</span>
                      <h4 className="text-lg font-bold text-gray-800">Easy Mode</h4>
                    </div>
                    <p className="text-gray-700 mb-2 font-semibold">Perfect For Beginners</p>
                    <p className="text-gray-600 text-sm">
                      For those new to memory games or looking for a more relaxed experience. Face fewer cards, making it easier to remember their positions while enjoying charming visuals and quirky sounds.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg border-2 border-red-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-3xl">🔥</span>
                      <h4 className="text-lg font-bold text-gray-800">Hard Mode</h4>
                    </div>
                    <p className="text-gray-700 mb-2 font-semibold">A True Test Of Memory</p>
                    <p className="text-gray-600 text-sm">
                      If you're up for a challenge! This level increases the number of cards, making it more difficult to remember their locations. Ideal for seasoned gamers looking to push their cognitive abilities to the limit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🌟 Brain-Boosting Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  Memory Brainrot is not just a game - it's a brain-boosting adventure that combines entertainment with cognitive training. Improve your memory skills, enhance your concentration, and sharpen your mental agility. Compete with friends to see who can achieve the highest score and become the ultimate Memory Brainrot champion!
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
