"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages, Moon, Sun } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const initials = personalInfo.name
  .split(" ")
  .map((n) => n[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.skills, href: "#softskills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.certificates, href: "#certifications" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl bg-slate-900/60 backdrop-blur-md border border-slate-800 px-6 py-3 rounded-full flex justify-between items-center shadow-lg shadow-black/20"
      >
        <a
          href="#home"
          className="font-bold text-xl tracking-wider text-cyan-400 shrink-0"
        >
          {initials}
        </a>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-5 items-center">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-400 hover:text-white transition-colors relative group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full" />
            </a>
          ))}

          <div className="flex items-center gap-1.5 pl-2 ml-1 border-l border-slate-800">
            <button
              onClick={toggleLang}
              aria-label={t.welcome.langToggle}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-mono text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
            >
              <Languages size={13} />
              {lang === "id" ? "EN" : "ID"}
            </button>
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? t.theme.switchToLight : t.theme.switchToDark
              }
              className="p-1.5 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>

        {/* Mobile/tablet controls */}
        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={toggleLang}
            aria-label={t.welcome.langToggle}
            className="flex items-center gap-1 px-2 py-1.5 rounded-full text-[11px] font-mono text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <Languages size={14} />
            {lang === "id" ? "EN" : "ID"}
          </button>
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? t.theme.switchToLight : t.theme.switchToDark
            }
            className="p-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isOpen}
            className="text-slate-300 hover:text-white transition-colors pl-1"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile/tablet dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[85%] max-w-sm bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-4 flex flex-col gap-1 lg:hidden shadow-xl shadow-black/40"
          >
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors px-4 py-3 rounded-lg text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
