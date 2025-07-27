export type MovieQuality = {
  quality: '720p' | '1080p' | '2K' | '4K';
  price: number;
  downloadLink: string;
  streamLink: string;
  fileSize: string;
};

export type Review = {
  id: string;
  author: string;
  avatarUrl: string;
  date: string;
  rating: number;
  title: string;
  text: string;
};

export type Comment = {
  id: string;
  author: string;
  avatarUrl: string;
  date: string;
  text: string;
};

export type ContentItem = Movie | TVShow;

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
  views: number;
  likes: number;
  dislikes: number;
  reviews: Review[];
  comments: Comment[];
  type: 'movie';
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
  views: number;
  likes: number;
  dislikes: number;
  reviews: Review[];
  comments: Comment[];
  type: 'tv-show';
};
