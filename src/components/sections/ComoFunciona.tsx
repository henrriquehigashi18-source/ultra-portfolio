import { home } from "@/content/home";
import ScrollReveal from "@/components/animations/ScrollReveal";

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
    <section id="como-funciona" className="bg-deep">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-[700] text-starlight sm:text-4xl">
            {comoFunciona.title}
          </h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-[3px] w-12 rounded bg-mercury" />
        </ScrollReveal>
        <ScrollReveal stagger className="mt-14 grid gap-6 sm:grid-cols-3">
          {comoFunciona.steps.map((step, i) => (
            <article
              key={step.title}
              className="relative overflow-hidden rounded-2xl bg-graphite p-7"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-7 right-2 select-none text-[120px] font-[800] leading-none text-white/[0.05]"
              >
                {i + 1}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-mercury">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                >
                  {icons[i]}
                </svg>
              </span>
              <h3 className="relative mt-5 text-lg font-[700] text-starlight">
                {step.title}
              </h3>
              <p className="relative mt-2 leading-relaxed text-silver">{step.body}</p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
