
'use client';

import { useState } from 'react';
import type { Movie, MovieQuality } from '@/lib/types';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlayCircle, ArrowDownToLine, Plus, Check } from 'lucide-react';
import { VideoPlayer } from './video-player';
import { useWatchlist } from '@/hooks/use-watchlist';
import { useToast } from '@/hooks/use-toast';

type MovieDetailClientProps = {
  movie: Movie;
};

export function MovieDetailClient({ movie }: MovieDetailClientProps) {
  const [selectedQuality, setSelectedQuality] = useState<MovieQuality>(movie.qualities[0]);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const { toast } = useToast();

  const isInWatchlist = watchlist.some((item) => item.id === movie.id);

  const handleToggleWatchlist = () => {
    if (isInWatchlist) {
      removeFromWatchlist(movie.id);
      toast({ title: "Removed from My List", description: `"${movie.title}" has been removed from your list.` });
    } else {
      addToWatchlist(movie);
      toast({ title: "Added to My List", description: `"${movie.title}" has been added to your list.` });
    }
  };

  return (
    <div className="space-y-8">
      {isPlayerOpen && (
        <VideoPlayer
          videoUrl={movie.trailerUrl}
          onClose={() => setIsPlayerOpen(false)}
        />
      )}
      <div>
        <h2 className="text-2xl font-headline font-semibold mb-2">Synopsis</h2>
        <p className="text-muted-foreground whitespace-pre-wrap">{movie.description}</p>
      </div>

      <Card>
        <CardHeader className="flex-row items-center justify-between">
            <div>
                <CardTitle>Watch or Download</CardTitle>
                <CardDescription>Select your preferred quality.</CardDescription>
            </div>
            <Button variant="outline" onClick={handleToggleWatchlist}>
                {isInWatchlist ? <Check className="mr-2 h-4 w-4" /> : <Plus className="mr-2 h-4 w-4" />}
                My List
            </Button>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={selectedQuality.quality} className="w-full" onValueChange={(value) => {
            const newQuality = movie.qualities.find(q => q.quality === value);
            if(newQuality) setSelectedQuality(newQuality)
          }}>
            <TabsList className="grid w-full grid-cols-4">
              {movie.qualities.map(q => (
                <TabsTrigger key={q.quality} value={q.quality}>{q.quality}</TabsTrigger>
              ))}
            </TabsList>
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-lg">
                    Price: <span className="font-bold text-primary">${selectedQuality.price.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-2">
                     <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setIsPlayerOpen(true)}>
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Stream Now
                      </Button>
                      <Button size="lg" variant="secondary">
                        <ArrowDownToLine className="mr-2 h-5 w-5" />
                        Download ({selectedQuality.fileSize})
                      </Button>
                  </div>
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
