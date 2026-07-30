export type AlbumTrack = {
  trackNumber: number;
  songSlug?: string;
};

export type Album = {
  slug: string;
  title: string;
  artist: string;
  releaseType: string;
  releaseDate: string;
  releaseDateIso: string;
  cover: string;
  coverAlt: string;
  introduction: string;
  description: string;
  genre: string;
  label: string;
  trackCount: number;
  tracks: AlbumTrack[];
  streamingPlatforms: {
    name: string;
    href: string | null;
  }[];
};
