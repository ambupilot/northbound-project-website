import { primaryNavigation } from "@/content/navigation";

import { Logo } from "../Logo";
import styles from "./SiteFooter.module.scss";

const streamingLinks = ["Spotify", "Apple Music", "YouTube"];

export default function SiteFooter() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
          <p>Americana, roots and personal stories from the open road.</p>
        </div>

        <div>
          <h2 className={styles.heading}>Navigation</h2>
          <ul className={styles.list}>
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Listen</h2>
          <ul className={styles.list}>
            {streamingLinks.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 Open Road Records</span>
        <span>Northbound Project</span>
      </div>
    </footer>
  );
}
