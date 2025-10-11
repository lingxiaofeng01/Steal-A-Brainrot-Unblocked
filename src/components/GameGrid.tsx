import { ReactNode } from 'react';

interface GameGridProps {
  children: ReactNode;
}

export default function GameGrid({ children }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {children}
    </div>
  );
}
