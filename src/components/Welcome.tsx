"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Moon, Sun, ArrowDown } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Welcome() {
  const [visible, setVisible] = useState(true);
  const { lang, toggleLang, t, pick } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const handleEnter = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          id="welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-4 bg-slate-950 text-slate-100 overflow-hidden"
        >
          {/* Ambient glow background — muncul membesar dari titik pusat, lalu terus mengambang */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-blob"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none animate-blob [animation-delay:-4s]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.35, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none animate-blob [animation-delay:-8s]"
          />

          {/* Language & theme controls */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-6 right-6 flex items-center gap-2 z-10"
          >
            <button
              onClick={toggleLang}
              aria-label={t.welcome.langToggle}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/80 border border-slate-800 rounded-full text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
            >
              <Languages size={14} />
              {lang === "id" ? "EN" : "ID"}
            </button>
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? t.theme.switchToLight : t.theme.switchToDark
              }
              className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-full text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </motion.div>

          <div className="relative z-10 text-center space-y-5 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-sm sm:text-base font-mono uppercase tracking-[0.3em] text-cyan-400"
            >
              {t.welcome.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            >
              {t.welcome.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-400 leading-relaxed max-w-md mx-auto"
            >
              {t.welcome.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-xs text-slate-500 font-mono"
            >
              {personalInfo.name} &middot; {pick(personalInfo.role)}
            </motion.p>

            <motion.button
              onClick={handleEnter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(6, 182, 212, 0.45)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-flex items-center gap-2 px-7 py-3.5 bg-cyan-500 text-slate-950 font-semibold rounded-full"
            >
              {t.welcome.enter}
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={18} />
              </motion.span>
            </motion.button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}