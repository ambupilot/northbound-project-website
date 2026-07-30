import { HomeHero } from "@/components/hero/HomeHero";
import { FeaturedSongs } from "@/components/music/FeaturedSongs";
import { HomeLyrics } from "@/components/music/HomeLyrics/HomeLyrics";
import { LatestRelease } from "@/components/music/LatestRelease";
import { HomeStory } from "@/components/story/HomeStory";

import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className={styles.journey} id="journey" aria-labelledby="journey-title">
        <div className={styles.journeyInner}>
          <p className={styles.chapter}>Chapter one</p>
          <h2 className={styles.heading} id="journey-title">
            Every song begins somewhere.
          </h2>
          <p className={styles.copy}>
            Northbound Project follows the roads between memory and possibility — Americana, roots
            and personal stories shaped by time, distance and hope.
          </p>
        </div>
      </section>

      <LatestRelease />
      <HomeStory />
      <FeaturedSongs />
      <HomeLyrics />
    </>
  );
}
