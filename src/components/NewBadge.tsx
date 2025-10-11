interface NewBadgeProps {
  releaseDate: string; // ISO date string
  className?: string;
}

export default function NewBadge({ releaseDate, className = '' }: NewBadgeProps) {
  // Check if game was released within the last 7 days
  const isNew = () => {
    const release = new Date(releaseDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - release.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  if (!isNew()) {
    return null;
  }

  return (
    <div className={`absolute top-2 left-2 z-10 ${className}`}>
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 animate-pulse">
        <span className="text-yellow-300">✨</span>
        NEW
      </div>
    </div>
  );
}

// Helper function to check if a game is new (can be used elsewhere)
export function isGameNew(releaseDate: string): boolean {
  const release = new Date(releaseDate);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - release.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 7;
}

