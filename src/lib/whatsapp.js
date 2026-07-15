export const WHATSAPP_NUMBER = "9779845043367";

function normalizePhoneNumber(phoneNumber = WHATSAPP_NUMBER) {
  return String(phoneNumber).replace(/\D/g, "");
}

export function createWhatsAppLink(message, phoneNumber = WHATSAPP_NUMBER) {
  const normalizedNumber = normalizePhoneNumber(phoneNumber);
  const text = message ? `?text=${encodeURIComponent(message)}` : "";

  return `https://wa.me/${normalizedNumber}${text}`;
}