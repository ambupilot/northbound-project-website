import Image from "next/image";

import Button from "@/components/ui/Button";
import { latestRelease } from "@/config/music";

import styles from "./LatestRelease.module.scss";

export function LatestRelease() {
  return (
    <section className={styles.section} id="music" aria-labelledby="latest-release-title">
      <div className={styles.inner}>
        <div className={styles.visual}>
          <div className={styles.glow} aria-hidden="true" />
          <figure className={styles.artwork}>
            <Image
              className={styles.cover}
              src={latestRelease.cover}
              alt={latestRelease.coverAlt}
              fill
              priority={false}
              sizes="(max-width: 56rem) 88vw, (max-width: 80rem) 42vw, 34rem"
            />
          </figure>
          <p className={styles.releaseNote}>Available 27 August 2026</p>
        </div>

        <div className={styles.content}>
          <p className={styles.chapter}>Chapter two · Latest release</p>
          <p className={styles.releaseType}>
            {latestRelease.releaseType} ·{" "}
            <time dateTime={latestRelease.releaseDateIso}>{latestRelease.releaseDate}</time>
          </p>
          <h2 className={styles.title} id="latest-release-title">
            {latestRelease.title}
          </h2>
          <p className={styles.introduction}>{latestRelease.introduction}</p>
          <p className={styles.details}>{latestRelease.description}</p>

          <div className={styles.actions}>
            <Button href={latestRelease.links.primary}>Listen now</Button>
            <Button href={latestRelease.links.lyrics} variant="text">
              View lyrics
            </Button>
          </div>

          <div className={styles.streaming} id="streaming" aria-label="Streaming platforms">
            <p>Streaming soon on</p>
            <ul>
              {latestRelease.links.platforms.map((platform) => (
                <li key={platform.name}>
                  {platform.href ? (
                    <a href={platform.href} target="_blank" rel="noreferrer">
                      {platform.name}
                    </a>
                  ) : (
                    <span aria-disabled="true">{platform.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <dl className={styles.meta}>
            <div>
              <dt>Tracks</dt>
              <dd>{latestRelease.tracks}</dd>
            </div>
            <div>
              <dt>Genre</dt>
              <dd>{latestRelease.genre}</dd>
            </div>
            <div>
              <dt>Label</dt>
              <dd>{latestRelease.label}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
