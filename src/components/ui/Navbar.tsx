"use client";

import { useEffect, useRef, useState } from "react";
import { home } from "@/content/home";
import { whatsappLink } from "@/lib/whatsapp";
import Logo from "./Logo";

export default function Navbar() {
  const { nav } = home;
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Esconde ao descer (depois de 120px), revela ao subir.
      if (y > lastY.current && y > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // No topo a navbar está sobre o hero CLARO → texto escuro.
  // Ao rolar vira vidro escuro → texto claro.
  const light = !scrolled;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,backdrop-filter,border-color] duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "border-b border-white/8 bg-night/75 text-starlight backdrop-blur-xl"
          : "border-b border-transparent bg-transparent text-night"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a href="#hero" aria-label="BL Swell — início">
          <Logo />
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`link-underline inline-block py-2 text-sm font-[500] tracking-[0.04em] uppercase transition-colors duration-300 ${
                  light
                    ? "text-night/60 hover:text-night"
                    : "text-silver hover:text-starlight"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-11 items-center rounded-lg border px-4 text-sm font-[600] transition-colors duration-300 hover:bg-mercury hover:text-white active:scale-[0.98] ${
            light
              ? "border-night/30 text-night"
              : "border-mercury/60 text-starlight"
          }`}
        >
          {nav.cta}
        </a>
      </div>
    </nav>
  );
}
