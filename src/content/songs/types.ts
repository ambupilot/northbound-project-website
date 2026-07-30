export type SongCredits = {
  artist: string;
  writer: string;
  producer: string;
};

export type Song = {
  albumTrack: number;
  title: string;
  slug: string;
  year: number;
  description: string;
  lyricExcerpt: string;
  featuredOrder?: number;
  lyrics: string[];
  credits: SongCredits;
};
