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

const siteUrl = "https://northbound-project.com";
const spotifyArtistUrl = "https://open.spotify.com/artist/3chBK0d2JV4bGVAZo0RvQ2";

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({ params }: SongPageProps): Promise<Metadata> {
  const { slug } = await params;
  const song = getSongBySlug(slug);

  if (!song) return {};

  const canonicalPath = `/songs/${song.slug}`;

  return {
    title: song.title,
    description: song.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "music.song",
      url: canonicalPath,
      siteName: "Northbound Project",
      title: `${song.title} | Northbound Project`,
      description: song.description,
      images: [
        {
          url: northbound.cover,
          width: 1254,
          height: 1254,
          alt: northbound.coverAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${song.title} | Northbound Project`,
      description: song.description,
      images: [northbound.cover],
    },
  };
}

export default async function SongPage({ params }: SongPageProps) {
  const { slug } = await params;
  const song = getSongBySlug(slug);

  if (!song) notFound();

  const { previous, next } = getAdjacentSongs(slug);
  const streamingLinks = song.streamingLinks.filter((link) => link.href);
  const songSameAs = streamingLinks.map((link) => link.href).filter((href): href is string => Boolean(href));
  const albumSameAs = northbound.streamingPlatforms
    .map((platform) => platform.href)
    .filter((href): href is string => Boolean(href));
  const firstLyricSection = song.lyrics[0]?.split("\n") ?? [];
  const lyricPreview =
    firstLyricSection.length > 1 ? firstLyricSection.slice(1).join("\n") : song.lyricExcerpt;
  const songUrl = `${siteUrl}/songs/${song.slug}`;
  const albumUrl = `${siteUrl}/music`;
  const coverUrl = `${siteUrl}${northbound.cover}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    "@id": `${songUrl}#music-recording`,
    url: songUrl,
    name: song.title,
    description: song.description,
    image: coverUrl,
    datePublished: northbound.releaseDateIso,
    genre: northbound.genre,
    position: song.albumTrack,
    ...(songSameAs.length > 0 ? { sameAs: songSameAs } : {}),
    byArtist: {
      "@type": "MusicGroup",
      name: song.credits.artist,
      url: siteUrl,
      sameAs: [spotifyArtistUrl],
    },
    composer: {
      "@type": "Person",
      name: song.credits.writer,
    },
    producer: [
      {
        "@type": "MusicGroup",
        name: "Northbound Project",
        url: siteUrl,
        sameAs: [spotifyArtistUrl],
      },
      {
        "@type": "Organization",
        name: "Open Road Records",
        url: "https://open-road-records.com",
      },
    ],
    inAlbum: {
      "@type": "MusicAlbum",
      "@id": `${albumUrl}#music-album`,
      url: albumUrl,
      name: northbound.title,
      image: coverUrl,
      datePublished: northbound.releaseDateIso,
      numTracks: northbound.trackCount,
      genre: northbound.genre,
      ...(albumSameAs.length > 0 ? { sameAs: albumSameAs } : {}),
      byArtist: {
        "@type": "MusicGroup",
        name: northbound.artist,
        url: siteUrl,
        sameAs: [spotifyArtistUrl],
      },
      publisher: {
        "@type": "Organization",
        name: northbound.label,
        url: "https://open-road-records.com",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": songUrl,
    },
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
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
            <span className={styles.coverTrack} aria-hidden="true">
              {String(song.albumTrack).padStart(2, "0")}
            </span>
          </div>

          <div className={styles.intro}>
            <p className={styles.chapter}>Northbound. · Song {String(song.albumTrack).padStart(2, "0")}</p>
            <p className={styles.album}>{northbound.releaseType} · {song.year}</p>
            <h1>{song.title}</h1>
            <p className={styles.description}>{song.description}</p>
            <blockquote>{song.lyricExcerpt}</blockquote>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} href={`/lyrics/${song.slug}`}>
                Read full lyrics
              </Link>
              <Link className={styles.secondaryAction} href="/music">
                View the album
              </Link>
            </div>
          </div>
        </header>

        <section className={styles.story} aria-labelledby="story-title">
          <div className={styles.sectionLabel}>
            <p>01 · Behind the song</p>
            <h2 id="story-title">Why this song exists.</h2>
          </div>
          <div className={styles.storyCopy}>
            {song.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className={styles.details} aria-label="Song details">
          <div className={styles.detailIntro}>
            <p className={styles.eyebrow}>02 · Character</p>
            <h2>The shape of the song.</h2>
          </div>
          <div className={styles.detailContent}>
            <div className={styles.moodBlock}>
              <span>Mood</span>
              <p>{song.mood}</p>
            </div>
            <div className={styles.themeBlock}>
              <span>Themes</span>
              <ul>
                {song.themes.map((theme) => <li key={theme}>{theme}</li>)}
              </ul>
            </div>
            <dl>
              <div><dt>Album</dt><dd><Link href="/music">{northbound.title}</Link></dd></div>
              <div><dt>Track</dt><dd>{String(song.albumTrack).padStart(2, "0")} of {northbound.trackCount}</dd></div>
              <div><dt>Label</dt><dd>{northbound.label}</dd></div>
              <div><dt>Year</dt><dd>{song.year}</dd></div>
            </dl>
          </div>
        </section>

        <section className={styles.lyricsPreview} aria-labelledby="lyrics-title">
          <p className={styles.eyebrow}>03 · Lyrics</p>
          <div className={styles.lyricsHeading}>
            <h2 id="lyrics-title">The words.</h2>
            <p>Read the complete lyric as it appears on the record.</p>
          </div>
          <blockquote>{lyricPreview}</blockquote>
          <Link href={`/lyrics/${song.slug}`}>Read full lyrics <span aria-hidden="true">→</span></Link>
        </section>

        <section className={styles.credits} aria-labelledby="credits-title">
          <div>
            <p className={styles.eyebrow}>04 · Credits</p>
            <h2 id="credits-title">The record.</h2>
          </div>
          <dl>
            <div><dt>Artist</dt><dd>{song.credits.artist}</dd></div>
            <div><dt>Written by</dt><dd>{song.credits.writer}</dd></div>
            <div><dt>Produced by</dt><dd>{song.credits.producer}</dd></div>
          </dl>
        </section>

        <section className={styles.streaming} aria-labelledby="streaming-title">
          <p className={styles.eyebrow}>05 · Listen</p>
          <h2 id="streaming-title">Follow the song.</h2>
          {streamingLinks.length > 0 ? (
            <ul>
              {streamingLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href ?? undefined} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Streaming links will appear here as soon as the official release is available.</p>
          )}
        </section>

        <nav className={styles.songNavigation} aria-label="Song navigation">
          {previous ? (
            <Link className={styles.previousSong} href={`/songs/${previous.slug}`}>
              <span>Previous · {String(previous.albumTrack).padStart(2, "0")}</span>
              <strong>{previous.title}</strong>
              <em aria-hidden="true">←</em>
            </Link>
          ) : <span />}
          {next ? (
            <Link className={styles.nextSong} href={`/songs/${next.slug}`}>
              <span>Next · {String(next.albumTrack).padStart(2, "0")}</span>
              <strong>{next.title}</strong>
              <em aria-hidden="true">→</em>
            </Link>
          ) : <span />}
        </nav>
      </article>
    </main>
  );
}
