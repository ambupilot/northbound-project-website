import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import styles from "./Container.module.scss";

type ContainerWidth = "standard" | "wide" | "narrow";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  width?: ContainerWidth;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  width = "standard",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  const classNames = [styles.container, styles[width], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}
