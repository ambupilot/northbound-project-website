import { betweenTheFields } from "./between-the-fields";
import { crossing } from "./crossing";
import { energized } from "./energized";
import { firstLight } from "./first-light";
import { homebound } from "./homebound";
import { ifTimeHadWaited } from "./if-time-had-waited";
import { keeperOfTheLight } from "./keeper-of-the-light";
import { northernLights } from "./northern-lights";
import { oneMoreMile } from "./one-more-mile";
import type { Song } from "./types";
import { whereTheRiverSlows } from "./where-the-river-slows";

export type { Song } from "./types";

const albumWriter = "Martijn Kerssing";

export const songs: Song[] = [
  firstLight,
  homebound,
  energized,
  oneMoreMile,
  crossing,
  keeperOfTheLight,
  betweenTheFields,
  ifTimeHadWaited,
  northernLights,
  whereTheRiverSlows,
]
  .map((song) => ({
    ...song,
    credits: {
      ...song.credits,
      writer: albumWriter,
    },
  }))
  .sort((a, b) => a.albumTrack - b.albumTrack);

export const featuredSongs = songs
  .filter((song) => song.featuredOrder !== undefined)
  .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));

export function getSongBySlug(slug: string) {
  return songs.find((song) => song.slug === slug);
}

export function getAdjacentSongs(slug: string) {
  const currentIndex = songs.findIndex((song) => song.slug === slug);

  if (currentIndex === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: songs[currentIndex - 1],
    next: songs[currentIndex + 1],
  };
}
