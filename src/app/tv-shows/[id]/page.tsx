import * as React from 'react';
import { getTVShowById, getTVShows } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, Calendar, Tv, PlayCircle, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { TVShowRow } from '@/components/tv-show-row';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

type TVShowDetailPageProps = {
  params: {
    id: string;
  };
};

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const generateRandomTitle = () => {
    const words = ["Secrets", "Lies", "Beginnings", "Endings", "The Truth", "Consequences", "Revelations", "The Journey", "Homecoming", "Betrayal", "Redemption", "The Past", "The Future"];
    return words[Math.floor(Math.random() * words.length)];
}

const generateEpisodeData = (seasonNumber: number) => {
    const episodeCount = Math.floor(Math.random() * 5) + 8; // 8 to 12 episodes
    return Array.from({ length: episodeCount }, (_, i) => {
        const episodeNumber = i + 1;
        return {
            id: `s${seasonNumber}e${episodeNumber}`,
            title: `Episode ${episodeNumber}: ${generateRandomTitle()}`,
            description: loremIpsum.substring(0, Math.floor(Math.random() * 80) + 100), // 100-180 chars
            duration: `${Math.floor(Math.random() * 15) + 42}m`,
            thumbnail: `https://placehold.co/320x180.png?text=S${seasonNumber}E${episodeNumber}`
        };
    });
};


export async function generateMetadata({ params }: TVShowDetailPageProps) {
  const show = await getTVShowById(params.id);
  if (!show) {
    return { title: 'TV Show Not Found' };
  }
  return {
    title: `${show.title} | CineStream`,
    description: show.description,
  };
}

export default async function TVShowDetailPage({ params }: TVShowDetailPageProps) {
  const show = await getTVShowById(params.id);
  const allShows = await getTVShows();

  if (!show) {
    notFound();
  }

  const relatedShows = allShows.filter(s => s.genres.includes(show.genres[0]) && s.id !== show.id).slice(0, 10);
  const posterHint = show.genres.join(' ').toLowerCase();

  return (
    <div>
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <Image
          src={show.poster}
          alt={show.title}
          fill
          className="object-cover object-top"
          priority
          data-ai-hint={posterHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container -mt-32 relative z-10 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Image
              src={show.poster}
              alt={show.title}
              width={500}
              height={750}
              className="rounded-lg shadow-xl w-full"
              data-ai-hint={posterHint}
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">{show.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span>{show.rating}/10</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{show.startYear} - {show.endYear ?? 'Present'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tv className="w-5 h-5" />
                <span>{show.seasons} {show.seasons > 1 ? 'Seasons' : 'Season'}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {show.genres.map((genre) => (
                <Badge key={genre} variant="secondary">{genre}</Badge>
              ))}
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
                                const episodes = generateEpisodeData(seasonNum);
                                return (
                                <TabsContent key={seasonNum} value={`season-${seasonNum}`}>
                                   <div className="space-y-4 mt-4">
                                        {episodes.map((episode, index) => (
                                            <React.Fragment key={episode.id}>
                                                <div className="flex items-start gap-4 p-2 rounded-lg hover:bg-muted/50">
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
          </div>
        </div>
      </div>
      
      <div className="py-10">
        <TVShowRow title="Related TV Shows" shows={relatedShows} />
      </div>
    </div>
  );
}
