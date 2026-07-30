import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "text";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classNames = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

    return (
      <Link className={classNames} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as NativeButtonProps;

  return (
    <button className={classNames} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
