import Button from "@/components/ui/Button";

import styles from "./LatestRelease.module.scss";

export function LatestRelease() {
  return (
    <section className={styles.section} id="music" aria-labelledby="latest-release-title">
      <div className={styles.inner}>
        <div className={styles.artwork} aria-label="Northbound album artwork placeholder">
          <div className={styles.artworkSky} />
          <div className={styles.artworkRoad} />
          <div className={styles.artworkCopy}>
            <span>Northbound Project</span>
            <strong>Northbound.</strong>
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.chapter}>Chapter two · Latest release</p>
          <p className={styles.releaseType}>Debut album · 27 August 2026</p>
          <h2 className={styles.title} id="latest-release-title">
            Northbound.
          </h2>
          <p className={styles.introduction}>
            Ten songs about the roads we choose, the people who travel with us and the moments
            that keep calling us home.
          </p>
          <p className={styles.details}>
            A cinematic collection shaped by Americana, roots and personal storytelling — written
            for long drives, quiet evenings and everything waiting beyond the next bend.
          </p>

          <div className={styles.actions}>
            <Button href="#streaming">Listen to the album</Button>
            <Button href="#story" variant="text">
              Discover the story
            </Button>
          </div>

          <dl className={styles.meta}>
            <div>
              <dt>Tracks</dt>
              <dd>10</dd>
            </div>
            <div>
              <dt>Genre</dt>
              <dd>Americana · Roots</dd>
            </div>
            <div>
              <dt>Label</dt>
              <dd>Open Road Records</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
