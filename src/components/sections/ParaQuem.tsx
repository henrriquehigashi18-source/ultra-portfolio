import { home } from "@/content/home";
import { whatsappLink } from "@/lib/whatsapp";

export default function ParaQuem() {
  const { paraQuem } = home;
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
          {paraQuem.title}
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paraQuem.items.map((item) => (
            <li
              key={item.name}
              className={`rounded-2xl border p-6 ${
                "featured" in item && item.featured
                  ? "border-2 border-brand"
                  : "border-zinc-200"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold">{item.name}</h3>
                {"featured" in item && item.featured && (
                  <span className="shrink-0 rounded-full bg-brand px-3 py-1 text-xs font-bold text-ink">
                    Mais atendido
                  </span>
                )}
              </div>
              <p className="mt-1 text-zinc-600">{item.note}</p>
            </li>
          ))}
          <li>
            <a
              href={whatsappLink(paraQuem.outro.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col justify-center rounded-2xl border-2 border-dashed border-zinc-300 p-6 transition-colors hover:border-brand"
            >
              <h3 className="text-lg font-bold">{paraQuem.outro.title}</h3>
              <p className="mt-1 font-semibold">
                {paraQuem.outro.body} <span aria-hidden="true">→</span>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
