import { Search, Gamepad2 } from 'lucide-react';
import { Link } from './Link';

export default function TopBar() {
  return (
    <div className="bg-white border-b-4 border-cyan-400 shadow-md lg:hidden">
      <div className="px-4 py-3">
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
        <div className="relative">
          <input
            type="text"
            placeholder="Search games..."
            className="w-full px-4 py-2 pl-10 rounded-lg border-2 border-cyan-400 focus:border-cyan-500 focus:outline-none bg-white text-sm"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

