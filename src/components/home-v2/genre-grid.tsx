import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const genreColors = [
  'bg-red-500/20 hover:bg-red-500/30',
  'bg-blue-500/20 hover:bg-blue-500/30',
  'bg-green-500/20 hover:bg-green-500/30',
  'bg-yellow-500/20 hover:bg-yellow-500/30',
  'bg-purple-500/20 hover:bg-purple-500/30',
  'bg-pink-500/20 hover:bg-pink-500/30',
  'bg-indigo-500/20 hover:bg-indigo-500/30',
  'bg-teal-500/20 hover:bg-teal-500/30',
];

type GenreGridProps = {
  genres: string[];
};

export function GenreGrid({ genres }: GenreGridProps) {
  return (
    <section>
      <h2 className="text-3xl font-headline font-bold mb-6">Browse by Genre</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {genres.map((genre, index) => (
          <Link href={`/search?genre=${encodeURIComponent(genre)}`} key={genre}>
            <Card className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${genreColors[index % genreColors.length]}`}>
              <h3 className="font-semibold text-foreground">{genre}</h3>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
