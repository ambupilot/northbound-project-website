import type { CSSProperties } from "react";

import { primaryNavigation } from "@/content/navigation";

import styles from "./Navigation.module.scss";

type NavigationProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export default function Navigation({ mobile = false, onNavigate }: NavigationProps) {
  return (
    <nav aria-label="Primary navigation">
      <ul className={mobile ? styles.mobileList : styles.list}>
        {primaryNavigation.map((item, index) => (
          <li
            key={item.href}
            style={mobile ? ({ "--menu-index": index } as CSSProperties) : undefined}
          >
            <a className={styles.link} href={item.href} onClick={onNavigate}>
              {mobile && (
                <span className={styles.mobileNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
