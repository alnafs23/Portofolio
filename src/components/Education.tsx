"use client";
import { motion } from "framer-motion";
import { educationData } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { t, pick } = useLanguage();

  return (
    <section id="education" className="py-24 max-w-4xl mx-auto px-4">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl font-bold">{t.education.title}</h2>
        <p className="text-slate-400">{t.education.subtitle}</p>
      </div>

      <div className="relative pl-8 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center">
              <GraduationCap size={12} className="text-cyan-400" />
            </span>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400">
                  {edu.level}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {edu.period}
                </span>
              </div>
              <h3 className="font-semibold text-slate-100">
                {edu.institution}
              </h3>
              {edu.major.id && (
                <p className="text-sm text-slate-400 mt-0.5">
                  {pick(edu.major)}
                </p>
              )}
              {edu.note && (
                <p className="text-xs text-emerald-400 mt-1">
                  {pick(edu.note)}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
