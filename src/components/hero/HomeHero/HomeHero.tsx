import Image from "next/image";

import Button from "@/components/ui/Button";

import styles from "./HomeHero.module.scss";

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.imageLayer} aria-hidden="true">
        <Image
          className={styles.heroImage}
          src="/images/hero/northbound-hero-cinematic.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <div className={styles.coordinates} aria-hidden="true">
        <span className={styles.north}>N</span>
        <span className={styles.compassLine} />
        <span className={styles.compassStar}>✦</span>
        <span>51.8426° N</span>
        <span>5.8520° E</span>
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Open Road Records presents</p>

        <h1 className={styles.title} id="home-hero-title">
          <span>Northbound</span>
          <span>Project</span>
        </h1>

        <p className={styles.tagline}>Stories told through Americana.</p>

        <div className={styles.actions}>
          <Button href="#music">Listen now</Button>
          <Button href="#story" variant="text">
            Discover the story
          </Button>
        </div>
      </div>

      <a className={styles.scrollCue} href="#journey" aria-label="Continue to the next chapter">
        <span>Begin the journey</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </a>
    </section>
  );
}
