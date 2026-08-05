"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificationsData } from "@/data/portfolioData";
import { X, Award } from "lucide-react";
import ImageSlot from "@/components/ImageSlot";

export default function Certifications() {
  const [selected, setSelected] = useState<
    (typeof certificationsData)[0] | null
  >(null);

  return (
    <section id="certifications" className="py-24 max-w-5xl mx-auto px-4">
      <div className="text-center mb-16 space-y-2">
        <h2 className="text-3xl font-bold">Sertifikasi</h2>
        <p className="text-slate-400">
          Kursus dan pelatihan yang telah saya selesaikan.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificationsData.map((cert, index) => (
          <motion.button
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => cert.image && setSelected(cert)}
            className="text-left bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-colors group"
          >
            <ImageSlot
              src={cert.image}
              alt={cert.title}
              className="w-full h-40"
            />
            <div className="p-4 flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <Award size={15} className="text-cyan-400" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-slate-100 text-sm leading-snug group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {cert.issuer} &middot; {cert.year}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Tutup"
                className="absolute top-3 right-3 z-10 p-2 bg-slate-950/70 rounded-full text-slate-300 hover:text-white"
              >
                <X size={18} />
              </button>
              <ImageSlot
                src={selected.image}
                alt={selected.title}
                className="w-full h-72"
              />
              <div className="p-5">
                <h3 className="font-semibold text-slate-100">
                  {selected.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {selected.issuer} &middot; {selected.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
