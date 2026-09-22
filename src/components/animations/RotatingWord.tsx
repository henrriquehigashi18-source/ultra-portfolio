"use client";

import { useEffect, useState } from "react";

type RotatingWordProps = {
  words: readonly string[];
  className?: string;
};

const TYPE_MS = 80; // velocidade ao escrever cada letra
const DELETE_MS = 40; // velocidade ao apagar cada letra
const HOLD_MS = 1600; // tempo que a palavra completa permanece

// Apaga e reescreve a última palavra, alternando a lista em loop.
export default function RotatingWord({ words, className = "" }: RotatingWordProps) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let wordIndex = 0;
    let charIndex = words[0].length;
    let deleting = true; // começa segurando a 1ª palavra, depois apaga
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = words[wordIndex];

      if (deleting) {
        charIndex -= 1;
        setText(current.slice(0, charIndex));
        if (charIndex <= 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = setTimeout(tick, TYPE_MS);
          return;
        }
        timer = setTimeout(tick, DELETE_MS);
      } else {
        charIndex += 1;
        setText(current.slice(0, charIndex));
        if (charIndex >= current.length) {
          deleting = true;
          timer = setTimeout(tick, HOLD_MS);
          return;
        }
        timer = setTimeout(tick, TYPE_MS);
      }
    };

    timer = setTimeout(tick, HOLD_MS);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span className={className}>
      {text}
      <span aria-hidden="true" className="rotating-caret text-mercury">
        |
      </span>
    </span>
  );
}
