import { featuredSongs } from "@/content/songs";

import styles from "./FeaturedSongs.module.scss";

export function FeaturedSongs() {
  return (
    <section className={styles.section} id="featured-songs" aria-labelledby="featured-songs-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.chapter}>Chapter four · Featured songs</p>
          <h2 className={styles.title} id="featured-songs-title">
            Four stories from the road.
          </h2>
          <p className={styles.introduction}>
            A selection of songs that trace the album&apos;s journey from first light to reflection,
            renewal and the steady pull of home.
          </p>
        </header>

        <ol className={styles.songList}>
          {featuredSongs.map((song) => (
            <li className={styles.song} key={song.slug}>
              <span className={styles.featuredNumber} aria-hidden="true">
                {String(song.featuredOrder).padStart(2, "0")}
              </span>

              <div className={styles.songContent}>
                <div className={styles.songHeading}>
                  <h3>{song.title}</h3>
                  <span>Album track {String(song.albumTrack).padStart(2, "0")}</span>
                </div>
                <p className={styles.description}>{song.description}</p>
                <p className={styles.excerpt}>{song.lyricExcerpt}</p>
              </div>

              <div className={styles.actions} aria-label={`${song.title} links`}>
                <a href={`#lyrics-${song.slug}`}>Read lyrics</a>
                <a href="#streaming">Listen</a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
