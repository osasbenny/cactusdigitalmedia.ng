/**
 * WHATSAPP FLOAT — Floating WhatsApp button with QR code popup
 * Midnight Craft Design System
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/2349032353823";
const WHATSAPP_NUMBER = "+234 903 235 3823";

// QR Code SVG for WhatsApp link (generated for https://wa.me/2349032353823)
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(WHATSAPP_URL)}&bgcolor=111827&color=10b981&margin=10`;

export default function WhatsAppFloat() {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      {/* QR Code Popup */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 bg-[#111827] border border-white/10 rounded-2xl p-5 shadow-2xl w-60"
          >
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
              aria-label="Close QR code"
            >
              <X size={16} />
            </button>
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-label text-emerald-400 font-semibold">
                  Chat with us
                </span>
              </div>
              <div className="bg-[#1a2234] rounded-xl p-3 mb-3 flex items-center justify-center">
                <img
                  src={QR_CODE_URL}
                  alt="WhatsApp QR Code"
                  className="w-40 h-40 rounded-lg"
                  loading="lazy"
                />
              </div>
              <p className="text-slate-400 text-xs mb-1">Scan to chat on WhatsApp</p>
              <p className="text-emerald-400 text-xs font-label font-semibold">
                {WHATSAPP_NUMBER}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block w-full bg-[#25D366] hover:bg-[#20BD5C] text-white text-xs font-label font-semibold py-2.5 rounded-lg transition-colors text-center"
              >
                Open WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
        onClick={() => setShowQR(!showQR)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5C] rounded-full flex items-center justify-center shadow-2xl transition-colors whatsapp-float"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.button>
    </>
  );
}
