"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Iniciar conversa no WhatsApp"
      className={`fixed right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-mercury text-white shadow-[0_12px_34px_-12px_rgba(255,90,0,0.9)] transition-[background-color,opacity,transform] duration-300 hover:bg-ghost ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-24 opacity-0"
      }`}
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
