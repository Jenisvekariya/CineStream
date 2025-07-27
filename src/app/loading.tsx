'use client';

import { useState, useEffect } from 'react';
import { Film } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Loading() {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // This timer ensures the loader is visible for a minimum duration, preventing flashes on fast loads.
    const timer = setTimeout(() => {
      setIsHiding(true);
    }, 1500); // Enforce a 1.5-second minimum display time for the animation to be perceived.

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-transform duration-700 ease-in-out',
          isHiding ? '-translate-x-full' : 'translate-x-0'
        )}
      >
        <div className="flex items-center gap-4">
          <Film className="h-12 w-12 animate-pulse text-primary" />
          <span className="text-2xl font-headline font-bold">CineStream</span>
        </div>
      </div>
    </>
  );
}
