import type { TVShow } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Calendar, Tv, PlayCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export function TVShowListItem({ show }: { show: TVShow }) {
  return (
    <Card className="overflow-hidden group transition-all hover:shadow-primary/20 hover:border-primary/50">
      <Link href={`/tv-shows/${show.id}`}>
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-48 flex-shrink-0 aspect-video sm:aspect-[2/3]">
            <Image
              src={show.poster}
              alt={show.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <CardContent className="p-4 sm:p-6 flex flex-col justify-center">
            <h3 className="font-headline font-bold text-2xl">{show.title}</h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-2 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-primary" />
                <span className="font-semibold">{show.rating}/10</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{show.startYear} - {show.endYear ?? 'Present'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tv className="w-4 h-4" />
                <span>{show.seasons} {show.seasons > 1 ? 'Seasons' : 'Season'}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {show.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {show.genres.map(genre => (
                <Badge key={genre} variant="secondary">{genre}</Badge>
              ))}
            </div>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}
