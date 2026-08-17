import type { Album } from "./types";

export const northbound: Album = {
  slug: "northbound",
  title: "Northbound.",
  artist: "Northbound Project",
  releaseType: "Debut album",
  releaseDate: "27 August 2026",
  releaseDateIso: "2026-08-27",
  cover: "/images/album/northbound-album-cover.png",
  coverAlt: "Northbound. debut album cover by Northbound Project",
  introduction:
    "Ten songs about the roads we choose, the people who travel with us and the moments that keep calling us home.",
  description:
    "A cinematic collection shaped by Americana, roots and personal storytelling — written for long drives, quiet evenings and everything waiting beyond the next bend.",
  genre: "Americana · Roots",
  label: "Open Road Records",
  trackCount: 10,
  tracks: [
    { trackNumber: 1, songSlug: "first-light" },
    { trackNumber: 2, songSlug: "homebound" },
    { trackNumber: 3, songSlug: "energized" },
    { trackNumber: 4, songSlug: "one-more-mile" },
    { trackNumber: 5, songSlug: "crossing" },
    { trackNumber: 6, songSlug: "keeper-of-the-light" },
    { trackNumber: 7, songSlug: "between-the-fields" },
    { trackNumber: 8, songSlug: "if-time-had-waited" },
    { trackNumber: 9, songSlug: "northern-lights" },
    { trackNumber: 10, songSlug: "where-the-river-slows" },
  ],
  streamingPlatforms: [
    { name: "Spotify", href: "https://open.spotify.com/album/4TE30lkkdfIx5by8yqRAgl" },
    { name: "Apple Music", href: null },
    { name: "YouTube Music", href: null },
    { name: "Amazon Music", href: null },
    { name: "Deezer", href: null },
  ],
};
