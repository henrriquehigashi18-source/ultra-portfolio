import { home } from "@/content/home";
import { whatsappLink } from "@/lib/whatsapp";

export default function ParaQuem() {
  const { paraQuem } = home;
  return (
    <section className="border-t border-lead/20 bg-night">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl text-3xl font-[360] tracking-[0.01em] text-starlight sm:text-4xl">
          {paraQuem.title}
        </h2>
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {paraQuem.items.map((item) => (
            <li
              key={item.name}
              className={`border p-7 ${
                "featured" in item && item.featured
                  ? "border-ghost/60 bg-graphite"
                  : "border-lead/40"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-[480] text-starlight">{item.name}</h3>
                {"featured" in item && item.featured && (
                  <span className="shrink-0 rounded-[40px] bg-ghost/20 px-3 py-1 text-xs font-[480] tracking-[0.02em] text-starlight">
                    Mais atendido
                  </span>
                )}
              </div>
              <p className="mt-1 text-silver">{item.note}</p>
            </li>
          ))}
          <li>
            <a
              href={whatsappLink(paraQuem.outro.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col justify-center border border-dashed border-lead/60 p-7 transition-colors hover:border-ghost hover:bg-graphite"
            >
              <h3 className="text-lg font-[480] text-starlight">
                {paraQuem.outro.title}
              </h3>
              <p className="mt-1 font-[480] text-starlight">
                {paraQuem.outro.body}{" "}
                <span aria-hidden="true" className="text-ghost">
                  →
                </span>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
