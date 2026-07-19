"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, hardSkillsData } from "@/data/portfolioData";
import ImageSlot from "@/components/ImageSlot";

type SkillKey = keyof typeof hardSkillsData;

export default function About() {
  const [activeTab, setActiveTab] = useState<SkillKey>("data & analitik");

  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Kolom kiri: identitas */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-5">
            <ImageSlot
              src={personalInfo.photoUrl}
              alt={`Foto profil ${personalInfo.name}`}
              label="Foto Anda"
              className="w-20 h-20 rounded-full shrink-0 grayscale"
              iconSize={22}
            />
            <div>
              <h2 className="text-3xl font-bold border-l-4 border-white pl-4">
                Tentang Saya
              </h2>
            </div>
          </div>
          <p className="text-lg text-slate-300 font-semibold">
            {personalInfo.aboutTagline}
          </p>
          <p className="text-slate-400 leading-relaxed">
            {personalInfo.aboutDescription}
          </p>
          {personalInfo.resumeUrl && (
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 px-5 py-2.5 bg-white text-slate-950 font-semibold rounded-full text-sm hover:bg-slate-200 transition-colors"
            >
              Unduh CV
            </a>
          )}
        </motion.div>

        {/* Kolom kanan: tab skill interaktif */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 border border-slate-800 p-6 rounded-2xl"
        >
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Keahlian Teknis & Tools
          </h3>
          <div className="flex border-b border-slate-800 mb-6 relative overflow-x-auto">
            {(Object.keys(hardSkillsData) as SkillKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 pb-3 text-sm font-medium capitalize relative transition-colors whitespace-nowrap px-2 ${
                  activeTab === tab ? "text-white" : "text-slate-400"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBorder"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 min-h-[120px]">
            <AnimatePresence mode="popLayout">
              {hardSkillsData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                    delay: index * 0.04,
                  }}
                  className="px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg hover:border-white/40 transition-colors"
                >
                  <p className="text-sm font-mono font-semibold text-slate-200">
                    {skill.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
