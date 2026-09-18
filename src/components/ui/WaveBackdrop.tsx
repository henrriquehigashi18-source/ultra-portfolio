import Image from "next/image";

type WaveBackdropProps = {
  /** Altura da faixa da onda dentro da seção (classe Tailwind de altura). */
  heightClass?: string;
  /** Opacidade da foto — seções de conteúdo denso usam valores menores. */
  opacityClass?: string;
  priority?: boolean;
};

// Faixa de onda ancorada na base da seção. `mix-blend-multiply` derruba o fundo
// branco da foto, e os dois fades dissolvem a imagem no canvas — sem eles a
// água terminaria numa reta horizontal na emenda entre seções, dando aparência
// de slide em vez de página contínua.
export default function WaveBackdrop({
  heightClass = "h-[38%]",
  opacityClass = "opacity-70",
  priority = false,
}: WaveBackdropProps) {
  // A opacidade fica na imagem, não no wrapper: opacity/z-index no pai criariam
  // um contexto de empilhamento e isolariam o mix-blend-multiply.
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden ${heightClass}`}
    >
      <Image
        src="/onda.webp"
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className={`object-cover object-bottom mix-blend-multiply ${opacityClass}`}
      />
      <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-canvas to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-canvas via-canvas/80 to-transparent" />
    </div>
  );
}
