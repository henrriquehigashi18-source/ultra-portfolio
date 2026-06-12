import { home } from "@/content/home";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function CtaFinal() {
  const { ctaFinal } = home;
  return (
    <section className="border-t border-lead/30 bg-deep">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-24 text-center sm:px-8 sm:py-32">
        <h2 className="mx-auto max-w-2xl text-3xl font-[360] tracking-[0.01em] text-starlight sm:text-5xl">
          {ctaFinal.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-silver">
          {ctaFinal.body}
        </p>
        <WhatsAppButton label={ctaFinal.cta} className="mt-10 w-full sm:w-auto" />
        <p className="mt-4 text-sm tracking-[0.02em] text-silver">{ctaFinal.trust}</p>
      </div>
    </section>
  );
}
