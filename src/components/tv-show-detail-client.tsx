
'use client';

import * as React from 'react';
import type { TVShow } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { PlayCircle, Clock } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { X } from 'lucide-react';

type Episode = {
    id: string;
    title: string;
    description: string;
    duration: string;
    thumbnail: string;
    videoUrl: string;
};

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const generateRandomTitle = () => {
    const words = ["Secrets", "Lies", "Beginnings", "Endings", "The Truth", "Consequences", "Revelations", "The Journey", "Homecoming", "Betrayal", "Redemption", "The Past", "The Future"];
    return words[Math.floor(Math.random() * words.length)];
}

const generateEpisodeData = (seasonNumber: number): Episode[] => {
    const episodeCount = Math.floor(Math.random() * 5) + 8; // 8 to 12 episodes
    return Array.from({ length: episodeCount }, (_, i) => {
        const episodeNumber = i + 1;
        return {
            id: `s${seasonNumber}e${episodeNumber}`,
            title: `Episode ${episodeNumber}: ${generateRandomTitle()}`,
            description: loremIpsum.substring(0, Math.floor(Math.random() * 80) + 100), // 100-180 chars
            duration: `${Math.floor(Math.random() * 15) + 42}m`,
            thumbnail: `https://placehold.co/320x180.png?text=S${seasonNumber}E${episodeNumber}`,
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        };
    });
};

type TVShowDetailClientProps = {
  show: TVShow;
  children?: React.ReactNode;
};

export function TVShowDetailClient({ show, children }: TVShowDetailClientProps) {
  const [playingEpisode, setPlayingEpisode] = React.useState<Episode | null>(null);

  if (children) {
     if (playingEpisode) {
      return (
        <div className="relative w-full h-[50vh] md:h-[70vh] bg-black">
          <iframe
            src={`${playingEpisode.videoUrl}?autoplay=1`}
            title={playingEpisode.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
           <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white hover:text-white"
            onClick={() => setPlayingEpisode(null)}
            >
             <X className="h-6 w-6" />
           </Button>
        </div>
      );
    }
    return <>{children}</>;
  }


  return (
     <div className="space-y-8 pt-4">
        <div>
            <h2 className="text-2xl font-headline font-semibold mb-2">Storyline</h2>
            <p className="text-muted-foreground whitespace-pre-wrap">{show.description}</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Seasons & Episodes</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="season-1" className="w-full">
                    <TabsList className="overflow-x-auto">
                        {Array.from({ length: show.seasons }, (_, i) => i + 1).map(seasonNum => (
                            <TabsTrigger key={seasonNum} value={`season-${seasonNum}`}>Season {seasonNum}</TabsTrigger>
                        ))}
                    </TabsList>
                     {Array.from({ length: show.seasons }, (_, i) => i + 1).map(seasonNum => {
                        const episodes = generateEpisodeData(seasonNum);
                        return (
                        <TabsContent key={seasonNum} value={`season-${seasonNum}`}>
                           <div className="space-y-4 mt-4">
                                {episodes.map((episode, index) => (
                                    <React.Fragment key={episode.id}>
                                        <div className="flex items-start gap-4 p-2 rounded-lg hover:bg-muted/50 cursor-pointer" onClick={() => setPlayingEpisode(episode)}>
                                            <div className="relative flex-shrink-0">
                                                <Image src={episode.thumbnail} alt={episode.title} width={160} height={90} className="rounded-md object-cover" data-ai-hint="tv episode"/>
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                                                    <PlayCircle className="w-8 h-8 text-white"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-semibold text-foreground">{episode.title}</h4>
                                                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{episode.description}</p>
                                                <div className="flex items-center text-xs text-muted-foreground mt-2">
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    <span>{episode.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                        {index < episodes.length - 1 && <Separator />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </TabsContent>
                    )})}
                </Tabs>
            </CardContent>
        </Card>
    </div>
  )
}
