
'use client';

import { useState, useEffect } from 'react';
import { X, Film } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type VideoPlayerProps = {
  videoUrl: string;
  onClose: () => void;
};

export function VideoPlayer({ videoUrl, onClose }: VideoPlayerProps) {
  const [loading, setLoading] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Simulate loading time for the animation
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setHiding(true);
    setTimeout(onClose, 300); // Wait for animation to finish
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in-0',
        hiding && 'animate-out fade-out-0'
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white hover:text-white rounded-full h-10 w-10"
        onClick={handleClose}
      >
        <X className="h-6 w-6" />
        <span className="sr-only">Close player</span>
      </Button>

      {loading ? (
        <div className="flex flex-col items-center justify-center gap-4 text-white">
          <div className="relative h-16 w-16">
            <Film className="h-16 w-16 text-primary animate-pulse" />
            <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-ping" />
          </div>
          <span className="text-2xl font-headline font-bold">CineStream</span>
          <p className="text-muted-foreground">Loading player...</p>
        </div>
      ) : (
        <div className="w-full h-full max-w-4xl max-h-[80vh] aspect-video animate-in zoom-in-75">
            <iframe
                src={`${videoUrl}?autoplay=1`}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-2xl"
            ></iframe>
        </div>
      )}
    </div>
  );
}
