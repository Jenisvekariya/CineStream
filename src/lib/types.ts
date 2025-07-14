export type MovieQuality = {
  quality: '720p' | '1080p' | '2K' | '4K';
  price: number;
  downloadLink: string;
  streamLink: string;
  fileSize: string;
};

export type Movie = {
  id: string;
  title: string;
  poster: string;
  year: number;
  genres: string[];
  language: string;
  duration: string;
  description: string;
  rating: number;
  qualities: MovieQuality[];
  isFree: boolean;
  trailerUrl: string;
};

export type TVShow = {
  id: string;
  title: string;
  poster: string;
  startYear: number;
  endYear: number | null;
  genres: string[];
  description: string;
  rating: number;
  seasons: number;
  isFree: boolean;
};
