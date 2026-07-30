import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import styles from "./Section.module.scss";

type SectionSpacing = "compact" | "default" | "large";
type SectionTone = "transparent" | "dark" | "light" | "muted";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  spacing?: SectionSpacing;
  tone?: SectionTone;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function Section<T extends ElementType = "section">({
  as,
  children,
  className,
  spacing = "default",
  tone = "transparent",
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";
  const classNames = [
    styles.section,
    styles[spacing],
    styles[tone],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}
