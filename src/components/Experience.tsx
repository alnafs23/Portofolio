"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/portfolioData";
import { Briefcase, CalendarDays } from "lucide-react";
import ImageSlot from "@/components/ImageSlot";
import { useLanguage } from "@/context/LanguageContext";

const filterValues = ["Semua", "Organisasi", "Event"] as const;
type Filter = (typeof filterValues)[number];

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Semua");
  const { t, pick } = useLanguage();

  const filterLabels: Record<Filter, string> = {
    Semua: t.experience.filters.all,
    Organisasi: t.experience.filters.org,
    Event: t.experience.filters.event,
  };

  const filtered = useMemo(() => {
    if (activeFilter === "Semua") return experienceData;
    return experienceData.filter((e) => e.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-4">
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-3xl font-bold">{t.experience.title}</h2>
        <p className="text-slate-400">{t.experience.subtitle}</p>
      </div>

      <div className="flex justify-center gap-2 mb-12 flex-wrap">
        {filterValues.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              activeFilter === f
                ? "bg-cyan-500 text-slate-950 border-cyan-500"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
            }`}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>

      <div className="relative pl-8 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
        {filtered.map((exp, index) => {
          const isOrg = exp.type === "Organisasi";
          const Icon = isOrg ? Briefcase : CalendarDays;
          return (
            <motion.div
              key={exp.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative"
            >
              <span
                className={`absolute -left-8 top-1 w-6 h-6 rounded-full bg-slate-900 border-2 flex items-center justify-center ${
                  isOrg ? "border-cyan-400" : "border-emerald-400"
                }`}
              >
                <Icon
                  size={12}
                  className={isOrg ? "text-cyan-400" : "text-emerald-400"}
                />
              </span>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all flex flex-col sm:flex-row gap-4">
                <ImageSlot
                  src={exp.image}
                  alt={`Dokumentasi ${exp.role}`}
                  className="w-full sm:w-28 h-28 rounded-xl shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isOrg
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {filterLabels[exp.type]}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-100">{exp.role}</h3>
                  <p className="text-sm text-slate-400 mb-2">{exp.org}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pick(exp.desc)}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
