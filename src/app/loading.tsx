'use client';

import { useState, useEffect } from 'react';
import { Film } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Loading() {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHiding(true);
    }, 2000); // Enforce a 2-second minimum display time

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
