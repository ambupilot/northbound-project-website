import { energized } from "./energized";
import { firstLight } from "./first-light";
import { ifTimeHadWaited } from "./if-time-had-waited";
import { keeperOfTheLight } from "./keeper-of-the-light";
import type { Song } from "./types";

export type { Song } from "./types";

export const songs: Song[] = [firstLight, energized, keeperOfTheLight, ifTimeHadWaited].sort(
  (a, b) => a.albumTrack - b.albumTrack,
);

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
