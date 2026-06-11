import { home } from "@/content/home";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function CtaFinal() {
  const { ctaFinal } = home;
  return (
    <section className="bg-ink">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight text-white sm:text-5xl">
          {ctaFinal.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
          {ctaFinal.body}
        </p>
        <WhatsAppButton
          label={ctaFinal.cta}
          className="mt-8 w-full sm:w-auto"
        />
        <p className="mt-4 text-sm text-zinc-400">{ctaFinal.trust}</p>
      </div>
    </section>
  );
}
