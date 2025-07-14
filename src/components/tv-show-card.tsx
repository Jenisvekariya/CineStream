import Link from 'next/link';
import Image from 'next/image';
import type { TVShow } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Tv, Star } from 'lucide-react';

type TVShowCardProps = {
  show: TVShow;
};

export function TVShowCard({ show }: TVShowCardProps) {
  const posterHint = show.genres.join(' ').toLowerCase();

  return (
    <Link href={`/tv-shows/${show.id}`} className="block group relative overflow-hidden rounded-lg shadow-lg aspect-[2/3] transition-transform duration-300 ease-in-out hover:scale-105">
      <Image
        src={show.poster}
        alt={show.title}
        width={500}
        height={750}
        className="w-full h-full object-cover"
        data-ai-hint={posterHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="absolute top-2 left-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="h-9 w-9 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center">
            <Tv className="h-5 w-5 text-primary-foreground" />
        </div>
      </div>

      <div className="absolute top-2 right-2 flex flex-col items-end gap-1 z-10">
        {show.endYear === null ? (
          <Badge variant="secondary" className="text-xs bg-green-600/80 text-white border-0">Ongoing</Badge>
        ) : (
          <Badge variant="secondary" className="text-xs">Ended</Badge>
        )}
        {show.isFree && <Badge className="text-xs bg-primary">Free</Badge>}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
           <h3 className="font-headline text-lg font-bold text-white truncate">{show.title}</h3>
           <div className="text-sm text-muted-foreground flex items-center justify-between">
             <span>
                {show.startYear} - {show.endYear ?? 'Present'}
             </span>
             <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-primary" />
                <span>{show.rating}</span>
             </div>
           </div>
      </div>
    </Link>
  );
}
