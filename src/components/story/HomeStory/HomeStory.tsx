import Button from "@/components/ui/Button";

import styles from "./HomeStory.module.scss";

export function HomeStory() {
  return (
    <section className={styles.section} id="story" aria-labelledby="story-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.chapter}>Chapter three · The story</p>
          <h2 className={styles.title} id="story-title">
            Some stories are better sung than spoken.
          </h2>

          <div className={styles.copy}>
            <p>
              Northbound Project began with a simple idea: to turn the moments that stay with us into
              songs that can travel further than words alone.
            </p>
            <p>
              What started as an exploration of songwriting became a collection shaped by Americana,
              roots and cinematic storytelling — songs about roads, choices, memory, hope and home.
            </p>
          </div>

          <Button href="#featured-songs" variant="text">
            Continue the journey
          </Button>
        </div>

        <aside className={styles.quote} aria-label="Northbound Project statement">
          <span className={styles.quoteMark} aria-hidden="true">
            “
          </span>
          <blockquote>
            Each song tells a different story. Together, they form one journey.
          </blockquote>
          <p>Northbound Project</p>
        </aside>
      </div>
    </section>
  );
}
