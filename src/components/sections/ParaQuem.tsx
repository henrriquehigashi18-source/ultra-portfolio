import { home } from "@/content/home";
import { whatsappLink } from "@/lib/whatsapp";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ParaQuem() {
  const { paraQuem } = home;
  return (
    <section className="bg-night">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <ScrollReveal>
          <h2 className="max-w-2xl text-3xl font-[700] leading-tight text-starlight sm:text-4xl">
            {paraQuem.title}
          </h2>
          <span aria-hidden="true" className="mt-3 block h-[3px] w-12 rounded bg-mercury" />
        </ScrollReveal>
        <ScrollReveal stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {paraQuem.items.map((item) => (
            <div
              key={item.name}
              className={`rounded-2xl p-7 ${
                "featured" in item && item.featured
                  ? "bg-graphite ring-1 ring-mercury/50"
                  : "bg-graphite"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-[700] text-starlight">{item.name}</h3>
                {"featured" in item && item.featured && (
                  <span className="shrink-0 rounded-full bg-mercury px-3 py-1 text-xs font-[600] text-white">
                    Mais atendido
                  </span>
                )}
              </div>
              <p className="mt-1 text-silver">{item.note}</p>
            </div>
          ))}
          <a
            href={whatsappLink(paraQuem.outro.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-lead/60 p-7 transition-colors hover:border-mercury hover:bg-graphite"
          >
            <h3 className="text-lg font-[700] text-starlight">{paraQuem.outro.title}</h3>
            <p className="mt-1 font-[600] text-starlight">
              {paraQuem.outro.body}{" "}
              <span aria-hidden="true" className="text-mercury">
                →
              </span>
            </p>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
