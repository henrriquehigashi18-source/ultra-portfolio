import { home } from "@/content/home";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Magnetic from "@/components/animations/Magnetic";
import WaveBackdrop from "@/components/ui/WaveBackdrop";

export default function CtaFinal() {
  const { ctaFinal, sobreMim } = home;
  return (
    <section
      id="contato"
      data-frame-label={ctaFinal.frameLabel}
      className="relative overflow-hidden bg-canvas"
    >
      <WaveBackdrop heightClass="h-[40%]" opacityClass="opacity-70" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8 sm:py-32">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.65rem] font-[500] uppercase tracking-[0.22em] text-night/55">
            {ctaFinal.eyebrow}
          </p>
          <span
            aria-hidden="true"
            className="mx-auto mt-3 block h-[3px] w-12 rounded bg-mercury"
          />

          <h2 className="font-display mt-6 text-3xl font-[700] leading-[1.05] tracking-[-0.025em] text-night sm:text-5xl lg:text-[3.5rem]">
            {ctaFinal.headline}
            <span className="block font-[400]">
              {ctaFinal.headlineRest}{" "}
              <span className="font-[700] text-mercury">
                {ctaFinal.headlineStrong}
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-night/65">
            {ctaFinal.body}{" "}
            <span className="font-[700] text-night">{ctaFinal.bodyStrong}</span>
          </p>

          <ul className="mt-9 flex flex-col items-center gap-3">
            {sobreMim.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-center gap-3 font-[600] text-night"
              >
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

          <div className="mt-10 flex flex-col items-center gap-4">
            <Magnetic strength={0.4}>
              <WhatsAppButton label={ctaFinal.cta} />
            </Magnetic>
            <p className="text-sm tracking-[0.02em] text-night/60">
              {ctaFinal.trust}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
