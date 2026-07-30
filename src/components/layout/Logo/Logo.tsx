import Link from "next/link";

import styles from "./Logo.module.scss";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  const classNames = [styles.logo, className].filter(Boolean).join(" ");

  return (
    <Link className={classNames} href="/" aria-label="Northbound Project home">
      Northbound Project
    </Link>
  );
}
