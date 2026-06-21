import Hero from "@/components/sections/Hero";
import Dor from "@/components/sections/Dor";
import Solucao from "@/components/sections/Solucao";
import Casos from "@/components/sections/Casos";
import ComoFunciona from "@/components/sections/ComoFunciona";
import ParaQuem from "@/components/sections/ParaQuem";
import SobreMim from "@/components/sections/SobreMim";
import CtaFinal from "@/components/sections/CtaFinal";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { whatsappLink } from "@/lib/whatsapp";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BL Swell",
  description:
    "Presença digital para negócios locais: sites com captação e agendamento automáticos pelo WhatsApp.",
  founder: { "@type": "Person", name: "Paulo Henrique" },
  areaServed: { "@type": "Country", name: "Brasil" },
  email: "paulohenriquebl01@gmail.com",
  sameAs: ["https://instagram.com/paulohenriquebl"],
  url: whatsappLink(),
};

export default function Home() {
  return (
    <>
      <Hero />
      <main id="conteudo">
        <Dor />
        <Solucao />
        <Casos />
        <ComoFunciona />
        <ParaQuem />
        <SobreMim />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
