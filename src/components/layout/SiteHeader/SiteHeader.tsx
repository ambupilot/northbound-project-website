"use client";

import { useEffect, useState } from "react";

import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import styles from "./SiteHeader.module.scss";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const headerClassName = [styles.header, isScrolled ? styles.scrolled : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName}>
      <div className={styles.inner}>
        <Logo />
        <div className={styles.desktopNavigation}>
          <Navigation />
        </div>
        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={[styles.mobileMenu, isOpen ? styles.mobileMenuOpen : ""]
          .filter(Boolean)
          .join(" ")}
        aria-hidden={!isOpen}
      >
        <Navigation mobile onNavigate={() => setIsOpen(false)} />
      </div>
    </header>
  );
}
