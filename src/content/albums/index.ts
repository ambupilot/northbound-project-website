import { northbound } from "./northbound";

export type { Album, AlbumTrack } from "./types";

export const albums = [northbound];
export { northbound };

export function getAlbumBySlug(slug: string) {
  return albums.find((album) => album.slug === slug);
}
