import { northbound } from "@/content/albums";

export type StreamingPlatform = {
  name: string;
  href: string | null;
};

export const latestRelease = {
  title: northbound.title,
  artist: northbound.artist,
  releaseType: northbound.releaseType,
  releaseDate: northbound.releaseDate,
  releaseDateIso: northbound.releaseDateIso,
  cover: northbound.cover,
  coverAlt: northbound.coverAlt,
  introduction: northbound.introduction,
  description: northbound.description,
  tracks: northbound.trackCount,
  genre: northbound.genre,
  label: northbound.label,
  links: {
    primary: "/music",
    lyrics: "/lyrics",
    platforms: northbound.streamingPlatforms satisfies StreamingPlatform[],
  },
} as const;
