import type { Metadata } from "next";
import Link from "next/link";

import { songs } from "@/content/songs";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Lyrics | Northbound Project",
  description:
    "Read the lyrics and stories behind the songs of Northbound Project.",
};

export default function LyricsIndexPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="lyrics-page-title">
        <div className={styles.heroInner}>
          <p className={styles.chapter}>Chapter five</p>
          <h1 id="lyrics-page-title">Lyrics</h1>
          <p className={styles.introduction}>
            Stories of departure, momentum, memory and the lights that guide us home — collected from
            the road behind <em>Northbound.</em>
          </p>
        </div>
      </section>

      <section className={styles.collection} aria-label="Song lyrics">
        <ol className={styles.list}>
          {songs.map((song) => (
            <li className={styles.song} key={song.slug}>
              <p className={styles.track}>Track {String(song.albumTrack).padStart(2, "0")}</p>
              <div className={styles.songContent}>
                <h2>{song.title}</h2>
                <p>{song.description}</p>
                <blockquote>{song.lyricExcerpt}</blockquote>
              </div>
              <Link href={`/lyrics/${song.slug}`}>Read lyrics</Link>
            </li>
          ))}
        </ol>

        <div className={styles.returnLink}>
          <Link href="/#lyrics">Return to the journey</Link>
        </div>
      </section>
    </main>
  );
}
