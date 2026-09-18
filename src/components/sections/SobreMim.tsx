import Image from "next/image";
import { home } from "@/content/home";
import ScrollReveal from "@/components/animations/ScrollReveal";
import WaveBackdrop from "@/components/ui/WaveBackdrop";

export default function SobreMim() {
  const { sobreMim } = home;
  return (
    <section
      data-frame-label={sobreMim.frameLabel}
      className="relative overflow-hidden bg-canvas"
    >
      <WaveBackdrop heightClass="h-[28%]" opacityClass="opacity-35" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-16">
          {/* Texto */}
          <ScrollReveal>
            <p className="flex items-center gap-3 text-[0.65rem] font-[500] uppercase tracking-[0.22em] text-night/55">
              <span aria-hidden="true" className="block h-px w-8 bg-mercury" />
              {sobreMim.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-4xl font-[300] tracking-[-0.02em] text-night sm:text-5xl">
              {sobreMim.title}{" "}
              <span className="font-[700]">{sobreMim.titleStrong}</span>
            </h2>
            <p className="font-display mt-6 text-2xl font-[400] leading-snug tracking-[-0.01em] text-night sm:text-[1.75rem]">
              {sobreMim.lead}{" "}
              <span className="font-[700] text-mercury">
                {sobreMim.leadStrong}
              </span>
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-night/65">
              {sobreMim.intro}
            </p>

            <dl className="mt-10 space-y-8">
              {sobreMim.people.map((person, i) => (
                <div
                  key={person.name}
                  className={i > 0 ? "border-t border-night/10 pt-8" : ""}
                >
                  <dt className="font-display text-2xl font-[700] tracking-[-0.01em] text-night">
                    {person.name}
                  </dt>
                  <dd className="mt-1 text-[0.7rem] font-[600] uppercase tracking-[0.18em] text-mercury">
                    {person.role}
                  </dd>
                  <dd className="mt-2 leading-relaxed text-night/65">
                    {person.body}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>

          {/* Fotos + fecho */}
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-5">
              {sobreMim.people.map((person) => (
                <div
                  key={person.name}
                  className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-night/5"
                >
                  <Image
                    src={person.photo}
                    alt={person.photoAlt}
                    fill
                    sizes="(min-width: 1024px) 320px, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="font-display mt-8 text-2xl font-[400] leading-snug tracking-[-0.01em] text-night sm:text-3xl">
              {sobreMim.closing}{" "}
              <span className="block font-[700] text-mercury">
                {sobreMim.closingStrong}
              </span>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
