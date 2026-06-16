"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  /** Cada string vira uma linha revelada por máscara. */
  lines: readonly string[];
  className?: string;
  /** Atraso inicial (s) antes da primeira linha. */
  delay?: number;
  /** Dispara no load (hero) em vez de no scroll. */
  onLoad?: boolean;
  as?: "h1" | "h2" | "h3" | "p";
}

export default function TextReveal({
  lines,
  className = "",
  delay = 0,
  onLoad = false,
  as = "h2",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targets = el.querySelectorAll<HTMLElement>("[data-line]");
    if (prefersReduced) {
      gsap.set(targets, { y: "0%", opacity: 1 });
      return;
    }

    gsap.set(targets, { yPercent: 115 });

    const anim = gsap.to(targets, {
      yPercent: 0,
      duration: 1.1,
      ease: "power4.out",
      stagger: 0.12,
      delay,
      ...(onLoad
        ? {}
        : {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }),
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [delay, onLoad]);

  return (
    <Tag ref={ref as never} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <span data-line className="block will-change-transform">
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
