import { getMovies, getTVShows } from '@/lib/data';
import { HeroV4 } from '@/components/home-v4/hero-v4';
import { ContentGridV4 } from '@/components/home-v4/content-grid-v4';
import { MovieRow } from '@/components/movie-row';

export default async function HomepageV4() {
  const movies = await getMovies();
  const tvShows = await getTVShows();

  const heroMovie = movies[0];
  const gridContent = [...movies.slice(1, 5), ...tvShows.slice(0, 4)];
  const popularMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10);

  return (
    <div className="flex flex-col bg-background text-foreground">
      <HeroV4 item={heroMovie} />
      <div className="container py-12 md:py-16 lg:py-20 space-y-12">
        <ContentGridV4 items={gridContent} />
        <MovieRow title="Popular Movies" movies={popularMovies} />
      </div>
    </div>
  );
}
