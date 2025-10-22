import { Star, Play, Clock } from 'lucide-react';
import Image from 'next/image';
import { Link } from './Link';
import type { Game } from '../lib/types';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/${game.slug}`}>
      <div className="group relative bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-md">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={game.cover}
            alt={`${game.title} - Free Online Game | Play Unblocked`}
            width={400}
            height={250}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 bg-cyan-500 rounded-full shadow-lg">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </div>

          {game.isFeatured && (
            <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full text-xs font-semibold text-white shadow-lg">
              Featured
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1 group-hover:text-cyan-600 transition-colors">
            {game.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-3">
            {game.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag.slug}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md font-medium"
              >
                {tag.name}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1 text-yellow-500">
              <Star className="w-4 h-4 fill-yellow-500" />
              <span className="font-semibold text-gray-700">{game.rating.toFixed(1)}</span>
            </div>

            {game.duration && (
              <div className="flex items-center space-x-1 text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{game.duration}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
