import { home } from "@/content/home";
import Logo, { LogoMark } from "@/components/ui/Logo";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Hero() {
  const { hero } = home;
  return (
    <header id="hero" className="relative overflow-hidden bg-night">
      <LogoMark className="pointer-events-none absolute -right-24 top-32 hidden w-[560px] opacity-[0.04] lg:block" />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-16 pt-3 sm:px-8 sm:pb-24 sm:pt-6">
        <div className="py-1 sm:py-2">
          <Logo />
        </div>
        {/* Compacto no mobile de propósito: o botão precisa aparecer sem scroll até em 320×568 */}
        <div className="mt-5 max-w-3xl sm:mt-16">
          <h1 className="text-[1.75rem] font-[420] leading-[1.15] tracking-[0.01em] text-starlight sm:text-5xl sm:font-[360] sm:leading-[1.1] lg:text-6xl">
            {hero.headlineStart}{" "}
            <span className="font-[530]">{hero.headlineEmphasis}</span>
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-normal text-silver sm:mt-6 sm:text-xl sm:leading-relaxed">
            {hero.subheadline}
          </p>
          <WhatsAppButton
            label={hero.cta}
            className="mt-5 w-full sm:mt-8 sm:w-auto"
          />
          <p className="mt-4 text-sm tracking-[0.02em] text-silver">{hero.trust}</p>
        </div>
      </div>
    </header>
  );
}
