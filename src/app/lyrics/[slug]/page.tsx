import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getSongBySlug, songs } from "@/content/songs";

import styles from "./page.module.scss";

type LyricsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({ params }: LyricsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const song = getSongBySlug(slug);

  if (!song) return {};

  return {
    title: `${song.title} lyrics | Northbound Project`,
    description: song.description,
  };
}

export default async function LyricsPage({ params }: LyricsPageProps) {
  const { slug } = await params;
  const song = getSongBySlug(slug);

  if (!song) notFound();

  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.header}>
          <p className={styles.chapter}>Chapter five · Lyrics</p>
          <p className={styles.track}>Northbound. · Track {String(song.albumTrack).padStart(2, "0")}</p>
          <h1>{song.title}</h1>
          <p className={styles.description}>{song.description}</p>
        </header>

        <blockquote className={styles.excerpt}>{song.lyricExcerpt}</blockquote>

        <section className={styles.lyrics} aria-labelledby="full-lyrics-title">
          <h2 id="full-lyrics-title">Lyrics</h2>
          {song.lyrics.length > 0 ? (
            <div className={styles.lyricSections}>
              {song.lyrics.map((section, index) => {
                const [label, ...lines] = section.split("\n");

                return (
                  <section className={styles.lyricSection} key={`${song.slug}-${index}`}>
                    <h3>{label}</h3>
                    <p>{lines.join("\n")}</p>
                  </section>
                );
              })}
            </div>
          ) : (
            <p className={styles.pending}>
              The complete lyrics will be published here with the official release.
            </p>
          )}
        </section>

        <footer className={styles.footer}>
          <dl>
            <div><dt>Artist</dt><dd>{song.credits.artist}</dd></div>
            <div><dt>Written by</dt><dd>{song.credits.writer}</dd></div>
            <div><dt>Produced by</dt><dd>{song.credits.producer}</dd></div>
          </dl>
          <Link href="/lyrics">Back to all lyrics</Link>
        </footer>
      </article>
    </main>
  );
}
