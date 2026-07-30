import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { northbound } from "@/content/albums";
import { getSongBySlug } from "@/content/songs";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Northbound. | Northbound Project",
  description: northbound.description,
};

export default function MusicPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="album-title">
        <div className={styles.artwork}>
          <Image
            src={northbound.cover}
            alt={northbound.coverAlt}
            fill
            priority
            sizes="(max-width: 56rem) 86vw, 38vw"
          />
        </div>

        <div className={styles.intro}>
          <p className={styles.chapter}>Chapter two · The album</p>
          <p className={styles.releaseType}>
            {northbound.releaseType} ·{" "}
            <time dateTime={northbound.releaseDateIso}>{northbound.releaseDate}</time>
          </p>
          <h1 id="album-title">{northbound.title}</h1>
          <p className={styles.lead}>{northbound.introduction}</p>
          <p className={styles.description}>{northbound.description}</p>

          <dl className={styles.meta}>
            <div>
              <dt>Tracks</dt>
              <dd>{northbound.trackCount}</dd>
            </div>
            <div>
              <dt>Genre</dt>
              <dd>{northbound.genre}</dd>
            </div>
            <div>
              <dt>Label</dt>
              <dd>{northbound.label}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={styles.tracklist} aria-labelledby="tracklist-title">
        <header>
          <p className={styles.eyebrow}>The record</p>
          <h2 id="tracklist-title">Tracklist</h2>
          <p>
            The complete ten-track sequence. Unannounced titles remain hidden until their official
            reveal.
          </p>
        </header>

        <ol>
          {northbound.tracks.map((track) => {
            const song = track.songSlug ? getSongBySlug(track.songSlug) : undefined;

            return (
              <li key={track.trackNumber}>
                <span className={styles.number}>{String(track.trackNumber).padStart(2, "0")}</span>
                <div>
                  <h3>{song?.title ?? "Title to be revealed"}</h3>
                  <p>{song?.description ?? "A chapter still waiting to be opened."}</p>
                </div>
                {song ? <Link href={`/lyrics/${song.slug}`}>Read lyrics</Link> : <span className={styles.pending}>Coming soon</span>}
              </li>
            );
          })}
        </ol>
      </section>

      <section className={styles.streaming} aria-labelledby="streaming-title">
        <div>
          <p className={styles.eyebrow}>Listen</p>
          <h2 id="streaming-title">Streaming soon.</h2>
        </div>
        <ul>
          {northbound.streamingPlatforms.map((platform) => (
            <li key={platform.name}>
              {platform.href ? (
                <a href={platform.href} target="_blank" rel="noreferrer">
                  {platform.name}
                </a>
              ) : (
                <span>{platform.name}</span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
