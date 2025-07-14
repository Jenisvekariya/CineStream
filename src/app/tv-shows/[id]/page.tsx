import { getTVShowById, getTVShows } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, Calendar, Tv, Clapperboard } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { TVShowRow } from '@/components/tv-show-row';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


type TVShowDetailPageProps = {
  params: {
    id: string;
  };
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
                            <TabsList>
                                {Array.from({ length: show.seasons }, (_, i) => i + 1).map(seasonNum => (
                                    <TabsTrigger key={seasonNum} value={`season-${seasonNum}`}>Season {seasonNum}</TabsTrigger>
                                ))}
                            </TabsList>
                             {Array.from({ length: show.seasons }, (_, i) => i + 1).map(seasonNum => (
                                <TabsContent key={seasonNum} value={`season-${seasonNum}`}>
                                   <div className="p-4 text-center text-muted-foreground bg-muted/50 rounded-lg mt-4">
                                        <p>Episode information for Season {seasonNum} would be displayed here.</p>
                                    </div>
                                </TabsContent>
                            ))}
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
