import { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import Layout from '../components/Layout';
import GameCard from '../components/GameCard';
import GameGrid from '../components/GameGrid';
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
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Search Games</h1>

          <div className="relative mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for games..."
                className="w-full pl-14 pr-14 py-4 bg-slate-800 text-white rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-500 transition-colors text-lg"
                autoFocus
              />
              {query && (
                <button
                  onClick={handleClear}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              )}
            </div>
          </div>

          {isSearching && (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-slate-400">Searching...</p>
            </div>
          )}

          {!isSearching && hasSearched && (
            <>
              {results.length > 0 ? (
                <>
                  <div className="mb-6">
                    <p className="text-slate-400">
                      Found <span className="text-white font-semibold">{results.length}</span>{' '}
                      {results.length === 1 ? 'game' : 'games'} for{' '}
                      <span className="text-cyan-400 font-semibold">"{query}"</span>
                    </p>
                  </div>
                  <GameGrid>
                    {results.map((game) => (
                      <GameCard key={game.id} game={game} />
                    ))}
                  </GameGrid>
                </>
              ) : (
                <div className="text-center py-16">
                  <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-2">No Results Found</h2>
                  <p className="text-slate-400 mb-6">
                    We couldn't find any games matching{' '}
                    <span className="text-cyan-400 font-semibold">"{query}"</span>
                  </p>
                  <button
                    onClick={handleClear}
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-lg text-white font-semibold transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </>
          )}

          {!hasSearched && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Start Searching</h2>
              <p className="text-slate-400">
                Enter a game name or keyword to find your next adventure
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
