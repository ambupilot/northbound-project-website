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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const headerClassName = [
    styles.header,
    isScrolled ? styles.scrolled : "",
    isOpen ? styles.menuOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  const menuClassName = [
    styles.mobileMenu,
    isOpen ? styles.mobileMenuOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
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
      </header>

      <div
        id="mobile-menu"
        className={menuClassName}
        aria-hidden={!isOpen}
      >
        <div className={styles.mobileMenuInner}>
          <p className={styles.mobileEyebrow}>Northbound Project</p>
          <Navigation mobile onNavigate={() => setIsOpen(false)} />
          <div className={styles.mobileFooter}>
            <span>Americana · Roots · Stories from the road</span>
            <span>Open Road Records</span>
          </div>
        </div>
      </div>
    </>
  );
}
