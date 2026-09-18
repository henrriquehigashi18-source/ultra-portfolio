export const WHATSAPP_NUMBER = "5584981507876";

export const DEFAULT_MESSAGE = "Olá! Vi o site da BL Swell e quero saber mais";

export function whatsappLink(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
