'use client';

import { Search, Gamepad2 } from 'lucide-react';
import { Link } from './Link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TopBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="bg-white border-b-4 border-cyan-400 shadow-md sticky top-0 z-40">
      <div className="px-4 py-3">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-3">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-rose-400 to-rose-500 rounded-lg">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg text-gray-800">
                Steal a Brainrot
              </span>
            </Link>
          </div>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search games..."
              className="w-full px-4 py-2 pl-10 rounded-lg border-2 border-cyan-400 focus:border-cyan-500 focus:outline-none bg-white text-sm"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Search className="w-4 h-4" />
            </button>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </form>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-rose-400 to-rose-500 rounded-lg">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-800">
              Steal a Brainrot
            </span>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH GAMES"
                className="w-full px-4 py-2 pl-4 pr-10 rounded-lg bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm font-medium text-gray-700 placeholder-gray-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

