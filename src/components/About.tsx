"use client";
import { motion } from "framer-motion";
import { personalInfo, statsData } from "@/data/portfolioData";
import ImageSlot from "@/components/ImageSlot";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t, pick } = useLanguage();

  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-5">
          <ImageSlot
            src={personalInfo.photoUrl}
            alt={`Foto profil ${personalInfo.name}`}
            label={`Foto profil ${personalInfo.name}`}
            className="w-20 h-20 rounded-full shrink-0 border border-slate-800"
          />
          <h2 className="text-3xl font-bold border-l-4 border-cyan-400 pl-4">
            {t.about.title}
          </h2>
        </div>
        <p className="text-lg text-slate-300 font-semibold">
          {pick(personalInfo.aboutTagline)}
        </p>
        <p className="text-slate-400 leading-relaxed">
          {pick(personalInfo.aboutDescription)}
        </p>

        {personalInfo.resumeUrl && (
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-5 py-2.5 bg-cyan-500 text-slate-950 font-semibold rounded-full text-sm hover:bg-cyan-400 transition-colors"
          >
            {t.hero.downloadCV}
          </a>
        )}

        {/* Kartu statistik singkat — mengisi ruang & memberi kredibilitas cepat */}
        <div className="grid grid-cols-3 gap-4 pt-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.value + index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center hover:border-cyan-500/40 transition-colors"
            >
              <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 mt-1">{pick(stat.label)}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
