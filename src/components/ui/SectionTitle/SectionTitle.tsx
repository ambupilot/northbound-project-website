import type { ReactNode } from "react";

import styles from "./SectionTitle.module.scss";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  const classNames = [styles.root, styles[align], className].filter(Boolean).join(" ");

  return (
    <header className={classNames}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <div className={styles.description}>{description}</div> : null}
    </header>
  );
}
