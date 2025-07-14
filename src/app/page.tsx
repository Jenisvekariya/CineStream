import { FeaturedMovieSlider } from '@/components/featured-movie-slider';
import { MovieRow } from '@/components/movie-row';
import { getMovies } from '@/lib/data';

export default async function Home() {
  const movies = await getMovies();
  const featuredMovies = movies.slice(0, 5);
  const top10Movies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10);
  const trendingMovies = movies.slice(5, 15);
  const newReleases = movies.slice(1, 11).sort(() => 0.5 - Math.random());
  const actionMovies = movies.filter(m => m.genres.includes('Action')).slice(0, 10);
  const comedyMovies = movies.filter(m => m.genres.includes('Comedy')).slice(0, 10);


  return (
    <div className="flex flex-col">
      <FeaturedMovieSlider movies={featuredMovies} />
      <div className="flex flex-col space-y-4 md:space-y-8 lg:space-y-12 py-10">
        <MovieRow title="Top 10 Movies" movies={top10Movies} showRank={true} />
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="New Releases" movies={newReleases} />
        <MovieRow title="Action Movies" movies={actionMovies} />
        <MovieRow title="Comedy" movies={comedyMovies} />
      </div>
    </div>
  );
}
