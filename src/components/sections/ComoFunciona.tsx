import { home } from "@/content/home";
import ScrollReveal from "@/components/animations/ScrollReveal";
import WaveBackdrop from "@/components/ui/WaveBackdrop";

const icons = [
  // Diagnóstico — lupa/conversa
  <path key="0" d="M21 12c0 4.418-4.03 8-9 8-1.02 0-2-.14-2.91-.4L4 21l1.48-3.86C4.55 15.86 4 14 4 12c0-4.418 4.03-8 8-8s9 3.582 9 8z" />,
  // Proposta — documento
  <g key="1">
    <path d="M14 3v5h5" />
    <path d="M5 3h9l5 5v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M9 13h6M9 17h6" />
  </g>,
  // Entrega — check
  <g key="2">
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </g>,
];

export default function ComoFunciona() {
  const { comoFunciona } = home;
  return (
    <section
      id="como-funciona"
      data-frame-label={comoFunciona.frameLabel}
      className="relative overflow-hidden bg-canvas"
    >
      <WaveBackdrop heightClass="h-[34%]" opacityClass="opacity-40" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <ScrollReveal>
          <p className="flex items-center gap-3 text-[0.65rem] font-[500] uppercase tracking-[0.22em] text-night/55">
            <span aria-hidden="true" className="block h-px w-8 bg-mercury" />
            {comoFunciona.eyebrow}
          </p>
          <h2 className="font-display mt-5 text-3xl font-[300] tracking-[-0.02em] text-night sm:text-[2.6rem]">
            {comoFunciona.title}{" "}
            <span className="font-[700]">{comoFunciona.titleStrong}</span>
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-night/65">
            {comoFunciona.subtitle}
          </p>
        </ScrollReveal>
        <ScrollReveal stagger className="mt-14 grid gap-6 sm:grid-cols-3">
          {comoFunciona.steps.map((step, i) => (
            <article
              key={step.title}
              className="group relative overflow-hidden rounded-2xl border border-night/8 bg-surface p-7 shadow-[0_1px_2px_rgba(14,14,14,0.04)] transition-[transform,box-shadow] duration-300 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-[3px] before:bg-mercury before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-14px_rgba(14,14,14,0.22)] hover:before:opacity-100"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-4 select-none text-[70px] font-[800] leading-none text-night/[0.05]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-night/12 bg-surface shadow-[0_1px_2px_rgba(14,14,14,0.04)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-mercury"
                  aria-hidden="true"
                >
                  {icons[i]}
                </svg>
              </span>
              <span
                aria-hidden="true"
                className="relative mt-6 block h-px w-8 bg-mercury"
              />
              <h3 className="relative mt-4 text-lg font-[700] text-night">
                {step.title}
              </h3>
              <p className="relative mt-2 leading-relaxed text-night/65">{step.body}</p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
