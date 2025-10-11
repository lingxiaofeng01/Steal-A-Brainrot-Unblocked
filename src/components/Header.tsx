import { useState } from 'react';
import { Menu, X, Search, Gamepad2 } from 'lucide-react';
import { Link } from './Link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-white hidden sm:block">
              Steal a Brainrot
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/all" className="text-slate-300 hover:text-white transition-colors">
              Games
            </Link>
            <Link href="/tag/brainrot" className="text-slate-300 hover:text-white transition-colors">
              Brainrot
            </Link>
            <Link href="/search" className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/all"
                className="text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Games
              </Link>
              <Link
                href="/tag/brainrot"
                className="text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Brainrot
              </Link>
              <Link
                href="/search"
                className="text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
