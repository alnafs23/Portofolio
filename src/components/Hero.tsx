"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { ArrowUpRight, Circle } from "lucide-react";
import ImageSlot from "@/components/ImageSlot";
import { useLanguage } from "@/context/LanguageContext";

function useTypewriter(text: string, speed = 40, startDelay = 500) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return displayed;
}

export default function Hero() {
  const { t, pick } = useLanguage();
  const typedRole = useTypewriter(pick(personalInfo.role));
  const firstName = personalInfo.name.split(" ")[0];
  const hasPhoto = Boolean(personalInfo.photoUrl);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 pt-28 pb-16 relative"
    >
      <div
        className={`max-w-5xl mx-auto w-full grid gap-12 items-center ${
          hasPhoto ? "md:grid-cols-2" : "justify-items-center text-center"
        }`}
      >
        {/* Kolom kiri: teks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`space-y-6 ${
            hasPhoto ? "text-center md:text-left" : "text-center max-w-2xl"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-xs text-emerald-400 font-mono">
            <Circle size={7} className="fill-emerald-400 text-emerald-400" />
            {t.hero.openForOpportunities}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight break-words">
            {t.hero.greeting}{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 font-mono min-h-[1.6em]">
            {typedRole}
            <span className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle" />
          </p>

          <p
            className={`text-slate-400 leading-relaxed max-w-md ${
              hasPhoto ? "mx-auto md:mx-0" : "mx-auto"
            }`}
          >
            {pick(personalInfo.aboutTagline)}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 pt-2 justify-center ${
              hasPhoto ? "md:justify-start" : ""
            }`}
          >
            {personalInfo.resumeUrl && (
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white font-semibold rounded-full"
              >
                {t.hero.downloadCV}
              </motion.a>
            )}
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(6, 182, 212, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-full inline-flex items-center justify-center gap-2"
            >
              {t.hero.exploreProjects} <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Kolom kanan: kartu foto holografik — hanya tampil jika foto tersedia */}
        {hasPhoto && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 sm:w-72"
            >
              {/* Cincin cahaya holografik berputar */}
              <div className="absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,#22d3ee,#34d399,#a78bfa,#22d3ee)]" />

              <div className="relative bg-slate-900 border border-slate-800 rounded-[1.75rem] p-4 overflow-hidden">
                <ImageSlot
                  src={personalInfo.photoUrl}
                  alt={`Foto profil ${personalInfo.name}`}
                  className="w-full aspect-[3/4] rounded-2xl"
                />
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-100 text-sm truncate">
                      {firstName}
                    </p>
                    <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <Circle
                        size={6}
                        className="fill-emerald-400 text-emerald-400"
                      />
                      {t.hero.online}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="text-[11px] font-semibold px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-full text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors shrink-0"
                  >
                    {t.hero.contactMe}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-600 text-xs font-mono tracking-widest"
      >
        {t.hero.scroll}
      </motion.div>
    </section>
  );
}
