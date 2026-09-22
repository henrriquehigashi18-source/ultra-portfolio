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
}: WaveBackdropProps) {
  // A opacidade fica na imagem, não no wrapper: opacity/z-index no pai criariam
  // um contexto de empilhamento e isolariam o mix-blend-multiply.
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden text-mercury ${heightClass} ${opacityClass}`}
    >
      <div className="orange-glow absolute bottom-[-55%] left-1/2 h-[130%] w-[58%] -translate-x-1/2 opacity-35" />
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M-40 240 C 260 40, 420 300, 720 130 S 1120 40, 1480 210"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-40 270 C 300 80, 470 310, 760 160 S 1130 80, 1480 235"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.65"
          opacity="0.45"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
