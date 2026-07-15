"use client";
import Whatsapp from "@/components/SVG/whatsapp";
import Instagram from "@/components/SVG/Instagram";
import Facebook from "@/components/SVG/facebook";

import { faFacebookF, faInstagram, faWhatsapp, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import whatsapp from "@/components/SVG/whatsapp";
export default function () {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 p-3">

      {/* Whatsapp Button */}
      <div className="p-1 bg-gradient-to-r from-green-400 to-white-500 rounded-full">
      <a
        href={createWhatsAppLink("Hi, I need help planning a Chitwan Jungle Tour.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-white transition-transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="xl" />
      </a>
      </div>

      {/* Instagram Button */}
      <div className="p-1 bg-gradient-to-r from-pink-400 to-white-500 rounded-full">
      <a
        href="https://www.instagram.com/chitwanjungle01/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Instagram"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500 text-white transition-transform hover:scale-110"
      >
         <FontAwesomeIcon icon={faInstagram} size="xl" />
      </a>
      </div>

      {/* Facebook Button */}
      <div className="p-1 bg-gradient-to-r from-blue-400 to-white-500 rounded-full">
      <a
        href="https://www.facebook.com/fule.chaudhary"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Facebook"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-transform hover:scale-110"
      >
         <FontAwesomeIcon icon={faFacebookF} size="xl" />
      </a>
      </div>

    </div>
  );
}
