export type FeaturedSong = {
  albumTrack: number;
  title: string;
  slug: string;
  description: string;
  lyricExcerpt: string;
  featuredOrder: number;
};

export const featuredSongs: FeaturedSong[] = [
  {
    albumTrack: 1,
    title: "First Light",
    slug: "first-light",
    description: "A quiet beginning, where a new road opens before the day has fully arrived.",
    lyricExcerpt: "Every journey begins before the world is ready.",
    featuredOrder: 1,
  },
  {
    albumTrack: 3,
    title: "Energized",
    slug: "energized",
    description: "Forward motion, renewed purpose and the moment hesitation gives way to momentum.",
    lyricExcerpt: "A spark becomes a reason to keep moving.",
    featuredOrder: 2,
  },
  {
    albumTrack: 8,
    title: "If Time Had Waited",
    slug: "if-time-had-waited",
    description: "A reflective song about memory, missed moments and the lives we might have lived.",
    lyricExcerpt: "Some roads remain with us long after we turn away.",
    featuredOrder: 3,
  },
  {
    albumTrack: 6,
    title: "Keeper of the Light",
    slug: "keeper-of-the-light",
    description: "A story of guidance, endurance and the steady light that brings travellers home.",
    lyricExcerpt: "Even in the dark, someone keeps the light alive.",
    featuredOrder: 4,
  },
];
