export type SongCredits = {
  artist: string;
  writer: string;
  producer: string;
};

export type SongStreamingLink = {
  name: string;
  href: string | null;
};

export type Song = {
  albumTrack: number;
  title: string;
  slug: string;
  year: number;
  description: string;
  lyricExcerpt: string;
  story: string[];
  themes: string[];
  mood: string;
  featuredOrder?: number;
  lyrics: string[];
  credits: SongCredits;
  streamingLinks: SongStreamingLink[];
};
