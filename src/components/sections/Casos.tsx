import Image from "next/image";
import { home } from "@/content/home";
import ScrollReveal from "@/components/animations/ScrollReveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

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
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-graphite transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={caso.image}
                  alt={`Screenshot do projeto ${caso.name}`}
                  fill
                  sizes="(min-width: 1024px) 360px, 90vw"
                  className="object-cover object-top"
                />
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
        <ScrollReveal className="mt-14 flex justify-center">
          <WhatsAppButton label={casos.cta} message={casos.ctaMessage} />
        </ScrollReveal>
      </div>
    </section>
  );
}
