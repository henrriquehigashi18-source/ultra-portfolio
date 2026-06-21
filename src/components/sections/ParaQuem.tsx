import { home } from "@/content/home";
import { whatsappLink } from "@/lib/whatsapp";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ParaQuem() {
  const { paraQuem } = home;
  return (
    <section className="bg-canvas">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <ScrollReveal>
          <h2 className="font-display max-w-2xl text-3xl font-[600] leading-tight tracking-[-0.02em] text-night sm:text-4xl">
            {paraQuem.title}
          </h2>
          <span aria-hidden="true" className="mt-3 block h-[3px] w-12 rounded bg-mercury" />
        </ScrollReveal>
        <ScrollReveal stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {paraQuem.items.map((item) => (
            <div
              key={item.name}
              className={`group relative overflow-hidden rounded-2xl border bg-surface p-7 shadow-[0_1px_2px_rgba(14,14,14,0.04)] transition-[transform,box-shadow] duration-300 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-mercury before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-14px_rgba(14,14,14,0.22)] hover:before:opacity-100 ${
                "featured" in item && item.featured
                  ? "border-mercury/40 ring-1 ring-mercury/30"
                  : "border-night/8"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-[700] text-night">{item.name}</h3>
                {"featured" in item && item.featured && (
                  <span className="shrink-0 rounded-full border border-mercury/50 px-3 py-1 text-xs font-[600] text-mercury">
                    Mais atendido
                  </span>
                )}
              </div>
              <p className="mt-1 text-night/65">{item.note}</p>
            </div>
          ))}
          <a
            href={whatsappLink(paraQuem.outro.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-night/25 p-7 transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-mercury hover:bg-surface hover:shadow-[0_12px_30px_-14px_rgba(14,14,14,0.22)]"
          >
            <h3 className="text-lg font-[700] text-night">{paraQuem.outro.title}</h3>
            <p className="mt-1 font-[600] text-night">
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
