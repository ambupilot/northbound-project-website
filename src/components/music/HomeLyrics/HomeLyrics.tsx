import Link from "next/link";

import { featuredSongs } from "@/content/songs";

import styles from "./HomeLyrics.module.scss";

export function HomeLyrics() {
  return (
    <section className={styles.section} id="lyrics" aria-labelledby="lyrics-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.chapter}>Chapter five · Lyrics</p>
          <h2 className={styles.title} id="lyrics-title">
            Written between the lines.
          </h2>
          <p className={styles.introduction}>
            Four fragments from Northbound — stories of departure, momentum, memory and the light
            that guides us home.
          </p>
        </header>

        <ol className={styles.list}>
          {featuredSongs.map((song) => (
            <li className={styles.item} id={`lyrics-${song.slug}`} key={song.slug}>
              <div>
                <p className={styles.track}>Track {String(song.albumTrack).padStart(2, "0")}</p>
                <h3>{song.title}</h3>
              </div>
              <blockquote>{song.lyricExcerpt}</blockquote>
              <Link href={`/lyrics/${song.slug}`}>Read lyrics</Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
