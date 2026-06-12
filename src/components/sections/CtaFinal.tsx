import Image from "next/image";
import { home } from "@/content/home";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function CtaFinal() {
  const { ctaFinal, sobreMim } = home;
  return (
    <section id="contato" className="bg-deep">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <ScrollReveal className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="max-w-2xl text-3xl font-[700] leading-tight text-starlight sm:text-4xl lg:text-5xl">
              {ctaFinal.headline}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-silver">
              {ctaFinal.body}
            </p>
            <ul className="mt-7 space-y-3">
              {sobreMim.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 font-[600] text-starlight">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 shrink-0 text-mercury"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton label={ctaFinal.cta} />
              <p className="text-sm tracking-[0.02em] text-silver">{ctaFinal.trust}</p>
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-sm lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-graphite">
              <Image
                src="/paulo-henrique.jpeg"
                alt={sobreMim.photoAlt}
                fill
                sizes="380px"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
