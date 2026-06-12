import { home } from "@/content/home";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Casos() {
  const { casos } = home;
  return (
    <section id="projetos" className="bg-night">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <ScrollReveal>
          <h2 className="text-3xl font-[700] text-starlight sm:text-4xl">
            {casos.title}
          </h2>
          <span aria-hidden="true" className="mt-3 block h-[3px] w-12 rounded bg-mercury" />
          <p className="mt-5 max-w-2xl text-lg text-silver">{casos.subtitle}</p>
        </ScrollReveal>
        <ScrollReveal stagger className="mt-12 grid gap-8 md:grid-cols-3">
          {casos.items.map((caso) => (
            <article key={caso.name} className="group">
              {/* Slot de imagem — substituir por <Image> quando tiver o screenshot do projeto */}
              <div className="flex aspect-[16/11] w-full items-center justify-center overflow-hidden rounded-xl bg-graphite transition-transform duration-300 group-hover:scale-[1.02]">
                <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 text-lead" aria-hidden="true">
                  <rect x="4" y="10" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="16" cy="22" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="m4 34 10-8 8 6 8-10 14 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="mt-5 text-xs font-[600] uppercase tracking-[0.15em] text-silver">
                {caso.segment}
              </p>
              <h3 className="mt-1 text-xl font-[700] text-starlight">{caso.name}</h3>
              <p className="mt-2 leading-relaxed text-silver">{caso.resultado}</p>
              <p className="mt-3 text-lg font-[700] text-mercury">{caso.metric}</p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
