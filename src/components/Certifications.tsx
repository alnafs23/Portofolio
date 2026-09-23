"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  certificationsData,
  certificationCategoryLabels,
} from "@/data/portfolioData";
import { X, Award, ChevronDown } from "lucide-react";
import ImageSlot from "@/components/ImageSlot";
import { useLanguage } from "@/context/LanguageContext";

type Cert = (typeof certificationsData)[0];

// Urutan tampil kategori — sesuaikan/tambah di sini kalau ada kategori baru
const CATEGORY_ORDER = [
  "Data Science & AI",
  "Pemrograman & Basis Data",
  "Produktivitas & Desain",
  "Lainnya",
];

export default function Certifications() {
  const [selected, setSelected] = useState<Cert | null>(null);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const { t, pick } = useLanguage();

  const grouped = useMemo(() => {
    const map: Record<string, Cert[]> = {};
    for (const cert of certificationsData) {
      const key = cert.category || "Lainnya";
      if (!map[key]) map[key] = [];
      map[key].push(cert);
    }
    return CATEGORY_ORDER.filter((cat) => map[cat]?.length).map((cat) => ({
      category: cat,
      items: map[cat],
    }));
  }, []);

  const toggleGroup = (cat: string) =>
    setOpenGroups((prev) => ({ ...prev, [cat]: !prev[cat] }));

  return (
    <section id="certifications" className="py-24 max-w-5xl mx-auto px-4">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl font-bold">{t.certifications.title}</h2>
        <p className="text-slate-400">
          {t.certifications.subtitle(certificationsData.length)}
        </p>
      </div>

      <div className="space-y-4">
        {grouped.map((group, gIndex) => {
          // Grup pertama terbuka otomatis, sisanya bisa expand/collapse biar ringkas
          const isOpen = openGroups[group.category] ?? gIndex === 0;
          const categoryLabel = certificationCategoryLabels[group.category]
            ? pick(certificationCategoryLabels[group.category])
            : group.category;
          return (
            <div
              key={group.category}
              className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/40"
            >
              <button
                onClick={() => toggleGroup(group.category)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-900/70 transition-colors"
              >
                <span className="font-semibold text-slate-100 text-sm sm:text-base">
                  {categoryLabel}
                  <span className="ml-2 text-xs text-slate-500 font-normal">
                    ({group.items.length})
                  </span>
                </span>
                <ChevronDown
                  size={18}
                  className={`text-slate-500 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 pt-1">
                      {group.items.map((cert, index) => (
                        <motion.button
                          key={cert.id}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -4 }}
                          transition={{
                            duration: 0.3,
                            delay: Math.min(index, 8) * 0.03,
                          }}
                          onClick={() => setSelected(cert)}
                          className="text-left bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-white/30 hover:shadow-md hover:shadow-white/5 transition-colors group"
                        >
                          {cert.image && (
                            <ImageSlot
                              src={cert.image}
                              alt={cert.title}
                              label={t.certifications.certificateLabel}
                              className="w-full h-16"
                              iconSize={14}
                            />
                          )}
                          <div className="p-2.5 flex gap-2 items-start">
                            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Award size={10} className="text-white" />
                            </div>
                            <div className="min-w-0">
                              <h3 className="font-medium text-slate-100 text-[11px] leading-snug line-clamp-2 group-hover:text-white transition-colors">
                                {cert.title}
                              </h3>
                              <p className="text-[10px] text-slate-500 mt-0.5 truncate">
                                {cert.issuer} &middot; {cert.year}
                              </p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
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
                aria-label={t.certifications.close}
                className="absolute top-3 right-3 z-10 p-2 bg-slate-950/70 rounded-full text-slate-300 hover:text-white"
              >
                <X size={18} />
              </button>
              {selected.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full max-h-[70vh] object-contain bg-slate-950"
                />
              ) : null}
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
