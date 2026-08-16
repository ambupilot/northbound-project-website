"use client";

import { useEffect, useRef, useState } from "react";

import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import styles from "./SiteHeader.module.scss";

export default function SiteHeader() {
  const mobileNavigationRef = useRef<HTMLDetailsElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navigation = mobileNavigationRef.current;

    if (!navigation) {
      return;
    }

    const syncOpenState = () => {
      document.body.style.overflow = navigation.open ? "hidden" : "";
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && navigation.open) {
        navigation.open = false;
        syncOpenState();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && navigation.open) {
        navigation.open = false;
        syncOpenState();
      }
    };

    navigation.addEventListener("toggle", syncOpenState);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      navigation.removeEventListener("toggle", syncOpenState);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileNavigation = () => {
    const navigation = mobileNavigationRef.current;

    if (navigation) {
      navigation.open = false;
      document.body.style.overflow = "";
    }
  };

  const headerClassName = [styles.header, isScrolled ? styles.scrolled : ""]
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
        </div>
      </header>

      <details ref={mobileNavigationRef} className={styles.mobileNavigation}>
        <summary
          className={styles.menuButton}
          aria-controls="mobile-menu"
          aria-label="Open or close menu"
        >
          <span />
          <span />
        </summary>

        <div id="mobile-menu" className={styles.mobileMenu}>
          <div className={styles.mobileMenuInner}>
            <p className={styles.mobileEyebrow}>Northbound Project</p>
            <Navigation mobile onNavigate={closeMobileNavigation} />
            <div className={styles.mobileFooter}>
              <span>Americana · Roots · Stories from the road</span>
              <span>Open Road Records</span>
            </div>
          </div>
        </div>
      </details>
    </>
  );
}
