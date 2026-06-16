"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  /** Texto completo da métrica, ex: "3× mais conversas iniciadas pelo site". */
  text: string;
  className?: string;
}

/**
 * Anima o primeiro número encontrado no texto (ex: 3, 2, 10) de 0 até o valor,
 * preservando o restante da string. Respeita reduced-motion.
 */
export default function CountUp({ text, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = text.match(/\d+([.,]\d+)?/);
    if (!match) {
      el.textContent = text;
      return;
    }

    const target = parseFloat(match[0].replace(",", "."));
    const decimals = match[0].includes(",") || match[0].includes(".") ? 1 : 0;
    const before = text.slice(0, match.index);
    const after = text.slice((match.index ?? 0) + match[0].length);

    const render = (val: number) => {
      const num = decimals
        ? val.toFixed(decimals).replace(".", ",")
        : Math.round(val).toString();
      el.textContent = `${before}${num}${after}`;
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.textContent = text;
      return;
    }

    const counter = { val: 0 };
    render(0);

    const anim = gsap.to(counter, {
      val: target,
      duration: 1.4,
      ease: "power2.out",
      onUpdate: () => render(counter.val),
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [text]);

  return <span ref={ref} className={className}>{text}</span>;
}
