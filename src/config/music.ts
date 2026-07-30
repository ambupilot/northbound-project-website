export type StreamingPlatform = {
  name: string;
  href: string | null;
};

export const latestRelease = {
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
  tracks: 10,
  genre: "Americana · Roots",
  label: "Open Road Records",
  links: {
    primary: "#streaming",
    lyrics: "#lyrics",
    platforms: [
      { name: "Spotify", href: null },
      { name: "Apple Music", href: null },
      { name: "YouTube Music", href: null },
      { name: "Amazon Music", href: null },
      { name: "Deezer", href: null },
    ] satisfies StreamingPlatform[],
  },
} as const;
