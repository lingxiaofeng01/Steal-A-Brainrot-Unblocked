import { Play } from 'lucide-react';

interface GamePreviewProps {
  title: string;
  description: string;
  thumbnail: string;
  gameSlug?: string;
  tags?: string[];
  onPlayClick: () => void;
  backgroundColor?: string;
}

export default function GamePreview({
  title,
  description,
  thumbnail,
  gameSlug,
  tags = [],
  onPlayClick,
  backgroundColor = 'from-orange-400 via-orange-300 to-orange-200'
}: GamePreviewProps) {
  return (
    <div className={`relative w-full bg-gradient-to-br ${backgroundColor} rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl`}>
      {/* PC端布局：左右结构 */}
      <div className="hidden md:flex md:items-center md:justify-between md:min-h-[500px] lg:min-h-[600px] xl:min-h-[650px] md:px-12 lg:px-16 xl:px-20 md:py-12 lg:py-16">
        {/* 左侧内容 */}
        <div className="flex-1 max-w-xl lg:max-w-2xl pr-8 lg:pr-12">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6 lg:mb-8 leading-tight">
            {title}
          </h1>

          <p className="text-base lg:text-lg xl:text-xl text-gray-800 mb-8 lg:mb-10 leading-relaxed">
            {description}
          </p>

          <button
            onClick={onPlayClick}
            className="group inline-flex items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-gray-900 hover:bg-black text-white font-bold text-lg lg:text-xl rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Play className="w-5 h-5 lg:w-6 lg:h-6 fill-white" />
            <span>PLAY GAME</span>
          </button>
        </div>

        {/* 右侧圆形图片 */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-white/20">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 移动端布局：上下结构 */}
      <div className="md:hidden flex flex-col items-center text-center px-6 py-10 sm:px-8 sm:py-12 min-h-[550px] sm:min-h-[600px]">
        {/* 上方圆形图片 */}
        <div className="mb-8">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl ring-6 ring-white/20">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 下方内容 */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-gray-800 mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto">
            {description}
          </p>

          <button
            onClick={onPlayClick}
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gray-900 hover:bg-black text-white font-bold text-base sm:text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105 mx-auto"
          >
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
            <span>PLAY GAME</span>
          </button>
        </div>
      </div>

      {/* 装饰性渐变光晕 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl lg:rounded-[3rem]">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-48 sm:h-48 bg-white/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

