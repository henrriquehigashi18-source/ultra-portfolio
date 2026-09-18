import { home } from "@/content/home";
import { whatsappLink } from "@/lib/whatsapp";
import ScrollReveal from "@/components/animations/ScrollReveal";
import WaveBackdrop from "@/components/ui/WaveBackdrop";

const icons: Record<string, React.ReactNode> = {
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
      <path d="m9 16 2 2 4-4" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M8 20h8M5 7h14M12 4l-7 3M12 4l7 3" />
      <path d="M5 7 2.5 13h5L5 7Z" />
      <path d="M19 7l-2.5 6h5L19 7Z" />
    </>
  ),
  cutlery: (
    <>
      <path d="M5 3v7a2 2 0 0 0 4 0V3M7 10v11" />
      <path d="M17 3c-1.5 1.5-2 3-2 5s.5 2 2 2 2 0 2-2-.5-3.5-2-5Zm0 9v9" />
    </>
  ),
  store: (
    <>
      <path d="M4 9h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9Z" />
      <path d="M3 9 5 4h14l2 5" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </>
  ),
  chat: (
    <path d="M21 12c0 4.418-4.03 8-9 8-1.02 0-2-.14-2.91-.4L4 21l1.48-3.86C4.55 15.86 4 14 4 12c0-4.418 4.03-8 8-8s9 3.582 9 8z" />
  ),
};

function Icon({ name, className }: { name: string; className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

export default function ParaQuem() {
  const { paraQuem } = home;
  const [featured, ...rest] = paraQuem.items;

  return (
    <section
      data-frame-label={paraQuem.frameLabel}
      className="relative overflow-hidden bg-canvas"
    >
      <WaveBackdrop heightClass="h-[32%]" opacityClass="opacity-35" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <ScrollReveal>
          <p className="flex items-center gap-3 text-[0.65rem] font-[500] uppercase tracking-[0.22em] text-night/55">
            <span aria-hidden="true" className="block h-px w-8 bg-mercury" />
            {paraQuem.eyebrow}
          </p>
          <h2 className="font-display mt-5 max-w-2xl text-3xl font-[300] leading-tight tracking-[-0.02em] text-night sm:text-[2.6rem]">
            {paraQuem.title}{" "}
            <span className="font-[700] text-mercury">{paraQuem.titleStrong}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          {/* Card destaque */}
          <article className="relative flex flex-col justify-between rounded-[28px] border border-mercury/35 bg-surface/90 p-8 ring-1 ring-mercury/15">
            <span className="inline-flex w-fit rounded-full border border-mercury/50 px-4 py-1 text-xs font-[600] text-mercury">
              Mais atendido
            </span>
            <span className="my-10 flex justify-center">
              <Icon name={featured.icon} className="h-24 w-24 text-mercury" />
            </span>
            <div>
              <span aria-hidden="true" className="block h-px w-8 bg-mercury" />
              <h3 className="mt-4 text-xl font-[700] text-night">
                {featured.name}
              </h3>
              <p className="mt-1 text-night/65">{featured.note}</p>
            </div>
          </article>

          {/* Demais segmentos + convite */}
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((item) => (
              <article
                key={item.name}
                className="rounded-[24px] border border-night/8 bg-surface/90 p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-20px_rgba(14,14,14,0.25)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-night/10 bg-surface">
                  <Icon name={item.icon} className="h-6 w-6 text-mercury" />
                </span>
                <h3 className="mt-5 text-lg font-[700] text-night">{item.name}</h3>
                <p className="mt-1 text-night/65">{item.note}</p>
              </article>
            ))}

            <a
              href={whatsappLink(paraQuem.outro.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-[24px] border border-night/12 bg-surface/85 p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-mercury/50 hover:shadow-[0_16px_36px_-20px_rgba(14,14,14,0.25)] sm:col-span-2"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-night/10 bg-surface">
                <Icon name="chat" className="h-6 w-6 text-mercury" />
              </span>
              <span className="flex-1">
                <span className="block text-lg font-[700] text-night">
                  {paraQuem.outro.title}
                </span>
                <span className="block text-night/65">{paraQuem.outro.body}</span>
              </span>
              <span
                aria-hidden="true"
                className="text-xl text-mercury transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
