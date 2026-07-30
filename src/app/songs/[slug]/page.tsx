import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { northbound } from "@/content/albums";
import { getAdjacentSongs, getSongBySlug, songs } from "@/content/songs";

import styles from "./page.module.scss";

type SongPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({ params }: SongPageProps): Promise<Metadata> {
  const { slug } = await params;
  const song = getSongBySlug(slug);

  if (!song) return {};

  return {
    title: `${song.title} | Northbound Project`,
    description: song.description,
  };
}

export default async function SongPage({ params }: SongPageProps) {
  const { slug } = await params;
  const song = getSongBySlug(slug);

  if (!song) notFound();

  const { previous, next } = getAdjacentSongs(slug);
  const streamingLinks = song.streamingLinks.filter((link) => link.href);

  return (
    <main className={styles.page}>
      <article>
        <header className={styles.hero}>
          <div className={styles.coverWrap}>
            <Image
              className={styles.cover}
              src={northbound.cover}
              alt={northbound.coverAlt}
              width={900}
              height={900}
              sizes="(max-width: 56rem) 88vw, 38vw"
            />
          </div>

          <div className={styles.intro}>
            <p className={styles.chapter}>Song {String(song.albumTrack).padStart(2, "0")}</p>
            <p className={styles.album}>{northbound.title} · {song.year}</p>
            <h1>{song.title}</h1>
            <p className={styles.description}>{song.description}</p>
            <blockquote>{song.lyricExcerpt}</blockquote>
          </div>
        </header>

        <section className={styles.story} aria-labelledby="story-title">
          <div className={styles.sectionLabel}>
            <p>Behind the song</p>
            <h2 id="story-title">Why this song exists.</h2>
          </div>
          <div className={styles.storyCopy}>
            {song.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className={styles.details} aria-label="Song details">
          <dl>
            <div><dt>Mood</dt><dd>{song.mood}</dd></div>
            <div><dt>Themes</dt><dd>{song.themes.join(" · ")}</dd></div>
            <div><dt>Album</dt><dd><Link href="/music">{northbound.title}</Link></dd></div>
            <div><dt>Label</dt><dd>{northbound.label}</dd></div>
          </dl>
        </section>

        <section className={styles.lyricsPreview} aria-labelledby="lyrics-title">
          <p className={styles.eyebrow}>Lyrics</p>
          <h2 id="lyrics-title">Read the words.</h2>
          <p>{song.lyricExcerpt}</p>
          <Link href={`/lyrics/${song.slug}`}>Open full lyrics</Link>
        </section>

        <section className={styles.credits} aria-labelledby="credits-title">
          <div>
            <p className={styles.eyebrow}>Credits</p>
            <h2 id="credits-title">The record.</h2>
          </div>
          <dl>
            <div><dt>Artist</dt><dd>{song.credits.artist}</dd></div>
            <div><dt>Written by</dt><dd>{song.credits.writer}</dd></div>
            <div><dt>Produced by</dt><dd>{song.credits.producer}</dd></div>
          </dl>
        </section>

        <section className={styles.streaming} aria-labelledby="streaming-title">
          <p className={styles.eyebrow}>Listen</p>
          <h2 id="streaming-title">Follow the song.</h2>
          {streamingLinks.length > 0 ? (
            <ul>
              {streamingLinks.map((link) => (
                <li key={link.name}><a href={link.href ?? undefined}>{link.name}</a></li>
              ))}
            </ul>
          ) : (
            <p>Streaming links will be added when the official release becomes available.</p>
          )}
        </section>

        <nav className={styles.songNavigation} aria-label="Song navigation">
          {previous ? (
            <Link href={`/songs/${previous.slug}`}>
              <span>Previous song</span>
              <strong>← {previous.title}</strong>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/songs/${next.slug}`}>
              <span>Next song</span>
              <strong>{next.title} →</strong>
            </Link>
          ) : <span />}
        </nav>
      </article>
    </main>
  );
}
