type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg viewBox="-8 6 150 82" fill="none" className={className} aria-hidden="true">
      <path
        d="M0 78 C 14 78, 16 62, 28 62 C 40 62, 42 78, 54 78 C 66 78, 68 46, 80 46 C 92 46, 94 78, 106 78 C 118 78, 120 18, 132 18"
        stroke="#F97316"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <circle cx="132" cy="18" r="7" fill="#F97316" />
    </svg>
  );
}

type LogoProps = {
  /** Cor do "BL" — grafite no fundo claro, branco no rodapé escuro */
  dark?: boolean;
};

export default function Logo({ dark = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className="h-7 w-auto" />
      <span
        className={`text-xl font-black tracking-tight ${dark ? "text-white" : "text-ink"}`}
      >
        BL<span className="text-brand">Swell</span>
      </span>
    </span>
  );
}
