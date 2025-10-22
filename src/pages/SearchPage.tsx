'use client';

import { useEffect, useState } from 'react';
import { Search, X, Sparkles, Zap } from 'lucide-react';
import NewBadge from '../components/NewBadge';
import { searchGames } from '../lib/api';
import type { Game } from '../lib/types';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Game[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) {
      setQuery(q);
      performSearch(q);
    }
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  async function performSearch(searchQuery: string) {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setHasSearched(true);

    try {
      const games = await searchGames(searchQuery);
      setResults(games);

      const url = new URL(window.location.href);
      url.searchParams.set('q', searchQuery);
      window.history.replaceState({}, '', url.toString());
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setHasSearched(false);
    const url = new URL(window.location.href);
    url.searchParams.delete('q');
    window.history.replaceState({}, '', url.toString());
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={i} className="bg-cyan-500/30 text-cyan-400 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Search Games
              </h1>
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <p className="text-slate-400 text-lg">Find your next favorite unblocked game</p>
          </div>

          {/* Search Input */}
          <div className="relative mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-lg group-focus-within:blur-xl transition-all" />
              <div className="relative bg-slate-700 backdrop-blur-xl rounded-2xl border-2 border-slate-600 group-focus-within:border-cyan-400 group-focus-within:bg-slate-700/90 transition-all shadow-lg">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-cyan-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for games, tags, or keywords..."
                  className="w-full pl-16 pr-14 py-5 bg-transparent text-white rounded-2xl focus:outline-none text-lg placeholder-slate-400 transition-colors"
                  autoFocus
                />
                {query && (
                  <button
                    onClick={handleClear}
                    className="absolute right-5 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-600 rounded-lg transition-colors text-slate-300 hover:text-white"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Loading State */}
          {isSearching && (
            <div className="text-center py-16">
              <div className="flex justify-center mb-6">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse" />
                  <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-blue-400 rounded-full animate-spin" />
                </div>
              </div>
              <p className="text-slate-300 text-lg font-medium">Searching for games...</p>
            </div>
          )}

          {/* Results State */}
          {!isSearching && hasSearched && (
            <>
              {results.length > 0 ? (
                <>
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-slate-300 text-lg">
                        <span className="text-cyan-400 font-bold text-2xl">{results.length}</span>
                        <span className="text-slate-400 ml-2">
                          {results.length === 1 ? 'game found' : 'games found'}
                        </span>
                      </p>
                      <p className="text-slate-500 text-sm mt-1">
                        for <span className="text-cyan-400 font-semibold">"{query}"</span>
                      </p>
                    </div>
                    <Zap className="w-8 h-8 text-orange-400 opacity-50" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
                    {results.map((game) => (
                      <a
                        key={game.id}
                        href={`/${game.slug}`}
                        className="group cursor-pointer block"
                      >
                        <div className="relative aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl bg-white">
                          {game.releasedAt && <NewBadge releaseDate={game.releasedAt} />}
                          <img
                            src={game.cover}
                            alt={game.title}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-center text-sm font-semibold text-gray-700 mt-2 truncate">
                          {game.title}
                        </p>
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-20">
                  <div className="mb-6">
                    <Search className="w-20 h-20 text-slate-600 mx-auto mb-4 opacity-50" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-3">No Games Found</h2>
                  <p className="text-slate-400 text-lg mb-2">
                    We couldn't find any games matching
                  </p>
                  <p className="text-cyan-400 font-semibold text-xl mb-8">"{query}"</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handleClear}
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg text-white font-semibold transition-all transform hover:scale-105"
                    >
                      Try Another Search
                    </button>
                    <a
                      href="/all"
                      className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-semibold transition-colors"
                    >
                      Browse All Games
                    </a>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Initial State */}
          {!hasSearched && (
            <div className="text-center py-20">
              <div className="mb-8">
                <div className="inline-block p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6">
                  <Search className="w-16 h-16 text-cyan-400" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Ready to Find Your Game?</h2>
              <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
                Search by game name, tag, or keyword to discover your next favorite unblocked game
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                {['Puzzle', 'Action', 'Clicker', 'Multiplayer'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 bg-slate-700/50 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500 rounded-lg text-slate-300 hover:text-cyan-400 transition-all text-sm font-medium"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
