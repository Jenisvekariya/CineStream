import { getTVShowById, getTVShows } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, Calendar, Tv } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { TVShowRow } from '@/components/tv-show-row';
import { TVShowDetailClient } from '@/components/tv-show-detail-client';
import { StatsBar } from '@/components/stats-bar';
import { ReviewsSection } from '@/components/reviews-section';
import { CommentsSection } from '@/components/comments-section';

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

  const relatedShows = allShows.filter(s => s.genres.some(genre => show.genres.includes(genre)) && s.id !== show.id).slice(0, 12);
  const posterHint = show.genres.join(' ').toLowerCase();

  return (
    <div>
      <TVShowDetailClient show={show}>
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
      </TVShowDetailClient>

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
            <StatsBar views={show.views} initialLikes={show.likes} initialDislikes={show.dislikes} />
            <TVShowDetailClient show={show} />
          </div>
        </div>
      </div>
      
       <div className="container space-y-12 py-10">
        <ReviewsSection initialReviews={show.reviews} averageRating={show.rating} />
        <CommentsSection initialComments={show.comments} />
      </div>

      <div className="py-10">
        <TVShowRow title="Related TV Shows" shows={relatedShows} />
      </div>
    </div>
  );
}
