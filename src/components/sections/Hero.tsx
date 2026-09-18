import { home } from "@/content/home";
import { whatsappLink } from "@/lib/whatsapp";
import Navbar from "@/components/ui/Navbar";
import WaveBackdrop from "@/components/ui/WaveBackdrop";
import { LogoMark } from "@/components/ui/Logo";

type Seg = { text: string; strong: boolean; partial?: string };

// Renderiza uma linha da headline com reveal por máscara e peso misto.
function HeadlineLines({
  segments,
  baseDelay,
}: {
  segments: readonly Seg[];
  baseDelay: number;
}) {
  return (
    <>
      {segments.map((seg, i) => (
        <span key={i} className="line-mask">
          <span
            className="line-rise"
            style={{ animationDelay: `${baseDelay + i * 0.08}s` }}
          >
            {seg.partial ? (
              <>
                {seg.text}
                <strong className="font-[700]">{seg.partial}</strong>
              </>
            ) : (
              <span className={seg.strong ? "font-[700]" : "font-[300]"}>
                {seg.text}
              </span>
            )}
          </span>
        </span>
      ))}
    </>
  );
}

// Coluna de apoio nas laterais do hero (só desktop).
function SideNote({
  lines,
  align,
}: {
  lines: readonly string[];
  align: "left" | "right";
}) {
  return (
    <div
      aria-hidden="true"
      className={`hero-fade hidden lg:block ${align === "right" ? "text-right" : ""}`}
      style={{ animationDelay: "1.1s" }}
    >
      <ul className="space-y-1 text-[0.65rem] font-[500] uppercase tracking-[0.22em] text-night/55">
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <span
        className={`mt-3 block h-px w-8 bg-mercury/60 ${align === "right" ? "ml-auto" : ""}`}
      />
    </div>
  );
}

export default function Hero() {
  const { heroEditorial: h } = home;

  return (
    <header
      id="hero"
      data-frame-label={h.frameLabel}
      className="relative overflow-hidden bg-[#edeced] text-night"
    >
      <Navbar />
      <WaveBackdrop heightClass="h-[62%]" opacityClass="opacity-90" priority />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[1320px] items-center gap-6 px-5 pb-16 pt-32 sm:px-8 lg:gap-10">
        {/* Heading semântica única para SEO/leitor de tela */}
        <h1 className="sr-only">{h.ariaHeadline}</h1>

        <SideNote lines={h.sideLeft} align="left" />

        {/* Composição central */}
        <div className="relative flex flex-1 flex-col items-center justify-center gap-9 text-center">
          {/* Onda da marca — marca d'água atrás da manchete */}
          <LogoMark
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34vh] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.06] sm:h-[42vh]"
            color="#0e0e0e"
          />

          <div
            aria-hidden="true"
            className="max-w-3xl text-[2.15rem] leading-[1.08] tracking-[-0.01em] text-night sm:text-5xl lg:text-[3.4rem]"
          >
            <HeadlineLines segments={h.left} baseDelay={0.3} />
            <HeadlineLines segments={h.right} baseDelay={0.46} />
          </div>

          <a
            href={whatsappLink(h.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-fade inline-flex min-h-12 items-center gap-3 rounded-full bg-mercury px-7 py-3 text-xl font-[700] text-white shadow-[0_12px_30px_-10px_rgba(255,79,23,0.6)] active:scale-[0.98]"
            style={{ animationDelay: "0.85s" }}
          >
            <LogoMark className="h-6 w-auto" color="#ffffff" />
            {h.ctaQuestion}
          </a>
        </div>

        <SideNote lines={h.sideRight} align="right" />
      </div>
    </header>
  );
}
