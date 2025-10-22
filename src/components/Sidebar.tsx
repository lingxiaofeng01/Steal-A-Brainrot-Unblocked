'use client';

import { useState } from 'react';
import { Menu, X, Home, Gamepad2, Star, Brain, Smile, Laugh } from 'lucide-react';
import { Link } from './Link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Gamepad2, label: 'NEW GAMES', href: '/all' },
    { icon: Star, label: 'HOT GAMES', href: '/hot' },
    { icon: Brain, label: 'Brainrot Games', href: '/tag/brainrot' },
    { icon: Smile, label: 'Casual Games', href: '/tag/casual' },
    { icon: Laugh, label: 'Meme Games', href: '/tag/meme' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-rose-500 text-white rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-64 lg:w-28
          bg-gradient-to-b from-rose-400 via-rose-500 to-rose-600
          shadow-2xl z-40 transition-transform duration-300 border-r-4 border-rose-700
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full py-4">
          {/* Logo */}
          <div className="px-3 mb-6 hidden lg:block">
            <div className="w-20 h-20 mx-auto bg-white rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Gamepad2 className="w-10 h-10 text-rose-500" />
            </div>
          </div>

          {/* Mobile Logo */}
          <div className="px-4 mb-6 lg:hidden">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                <Gamepad2 className="w-6 h-6 text-rose-500" />
              </div>
              <span className="text-white font-bold text-xl">Menu</span>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                <div className="group flex lg:flex-col items-center lg:items-center gap-3 lg:gap-0 py-3 lg:py-4 px-3 lg:px-2 rounded-lg hover:bg-rose-600 active:bg-rose-700 transition-all duration-200">
                  <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white flex-shrink-0 lg:mb-2" />
                  <span className="text-white text-sm lg:text-xs text-left lg:text-center font-medium leading-tight flex-1 lg:flex-none">
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

