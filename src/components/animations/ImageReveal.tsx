"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Dispara no load em vez de no scroll (hero). */
  onLoad?: boolean;
  delay?: number;
}

/**
 * Revela o conteúdo com um wipe de clip-path (de baixo para cima) e um leve
 * scale na imagem interna. Detalhe de reveal cinematográfico.
 */
export default function ImageReveal({
  children,
  className = "",
  onLoad = false,
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const inner = el.querySelector<HTMLElement>("[data-reveal-inner]");

    const tl = gsap.timeline({
      delay,
      defaults: { ease: "power4.out" },
      ...(onLoad
        ? {}
        : {
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }),
    });

    tl.fromTo(
      el,
      { clipPath: "inset(100% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2 }
    );
    if (inner) {
      tl.fromTo(
        inner,
        { scale: 1.25 },
        { scale: 1, duration: 1.4 },
        0
      );
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [onLoad, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
