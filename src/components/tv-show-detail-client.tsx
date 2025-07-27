
'use client';

import * as React from 'react';
import type { TVShow } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { PlayCircle, Clock, Play, Plus, Check } from 'lucide-react';
import { Separator } from './ui/separator';
import { Skeleton } from './ui/skeleton';
import { VideoPlayer } from './video-player';
import { Button } from './ui/button';
import { StatsBar } from './stats-bar';
import { useWatchlist } from '@/hooks/use-watchlist';
import { useToast } from '@/hooks/use-toast';

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

type TVShowDetailContextType = {
    show: TVShow;
    playingEpisode: Episode | null;
    setPlayingEpisode: (episode: Episode | null) => void;
    seasonsData: Episode[][] | null;
};

const TVShowDetailContext = React.createContext<TVShowDetailContextType | null>(null);

const useTVShowDetail = () => {
    const context = React.useContext(TVShowDetailContext);
    if (!context) {
        throw new Error('useTVShowDetail must be used within a TVShowDetailProvider');
    }
    return context;
};

export function TVShowDetailClient({ show, children }: { show: TVShow, children: React.ReactNode }) {
    const [playingEpisode, setPlayingEpisode] = React.useState<Episode | null>(null);
    const [seasonsData, setSeasonsData] = React.useState<Episode[][] | null>(null);

    React.useEffect(() => {
        const allSeasonsData = Array.from({ length: show.seasons }, (_, i) => generateEpisodeData(i + 1));
        setSeasonsData(allSeasonsData);
    }, [show.seasons]);

    if (playingEpisode) {
        return <VideoPlayer videoUrl={playingEpisode.videoUrl} onClose={() => setPlayingEpisode(null)} />;
    }

    return (
        <TVShowDetailContext.Provider value={{ show, playingEpisode, setPlayingEpisode, seasonsData }}>
            {children}
        </TVShowDetailContext.Provider>
    );
}

export function TVShowContent() {
    const { show, seasonsData, setPlayingEpisode } = useTVShowDetail();
    const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
    const { toast } = useToast();

    const isInWatchlist = watchlist.some((item) => item.id === show.id);

    const handleToggleWatchlist = () => {
        if (isInWatchlist) {
            removeFromWatchlist(show.id);
            toast({ title: "Removed from My List", description: `"${show.title}" has been removed from your list.` });
        } else {
            addToWatchlist(show);
            toast({ title: "Added to My List", description: `"${show.title}" has been added to your list.` });
        }
    };


    const handlePlayFirstEpisode = () => {
        if (seasonsData && seasonsData.length > 0 && seasonsData[0].length > 0) {
            setPlayingEpisode(seasonsData[0][0]);
        }
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button size="lg" className="w-full sm:w-auto flex-grow" onClick={handlePlayFirstEpisode}>
                    <Play className="mr-2 h-6 w-6 fill-current" />
                    Play First Episode
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" onClick={handleToggleWatchlist}>
                    {isInWatchlist ? <Check className="mr-2 h-4 w-4" /> : <Plus className="mr-2 h-4 w-4" />}
                     My List
                </Button>
            </div>
             <div className="mt-4">
                 <StatsBar views={show.views} initialLikes={show.likes} initialDislikes={show.dislikes} />
             </div>
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
                                const episodes = seasonsData ? seasonsData[seasonNum - 1] : null;
                                return (
                                <TabsContent key={seasonNum} value={`season-${seasonNum}`}>
                                <div className="space-y-4 mt-4">
                                        {!episodes ? (
                                            Array.from({ length: 5 }).map((_, idx) => (
                                                <div key={idx} className="flex items-start gap-4 p-2">
                                                    <Skeleton className="w-[160px] h-[90px] rounded-md" />
                                                    <div className="flex-grow space-y-2">
                                                        <Skeleton className="h-5 w-3/4" />
                                                        <Skeleton className="h-4 w-full" />
                                                        <Skeleton className="h-4 w-1/2" />
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            episodes.map((episode, index) => (
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
                                            ))
                                        )}
                                    </div>
                                </TabsContent>
                            )})}
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
