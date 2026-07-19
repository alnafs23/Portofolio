"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const menuItems = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Soft Skill", href: "#softskills" },
  { label: "Tools", href: "#tools" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Sertifikat", href: "#certifications" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

const initials = personalInfo.name
  .split(" ")
  .map((n) => n[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const handleLinkClick = (href: string) => {
    setActive(href);
    setIsOpen(false);
  };

  // Menandai menu aktif sesuai section yang sedang terlihat di layar
  useEffect(() => {
    const sections = menuItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sidebar kiri — desktop */}
      <motion.nav
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex fixed top-0 left-0 bottom-0 z-50 w-56 flex-col justify-between border-r border-slate-800 bg-slate-950/80 backdrop-blur-md px-6 py-8"
      >
        <div>
          <a
            href="#home"
            className="font-bold text-xl tracking-wider text-white inline-flex items-center gap-2"
          >
            <span className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-sm">
              {initials}
            </span>
          </a>

          <div className="flex flex-col gap-1 mt-10">
            {menuItems.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`relative px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-slate-950 bg-white"
                      : "text-slate-400 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        <p className="text-[11px] text-slate-600 font-mono leading-relaxed">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
      </motion.nav>

      {/* Top bar ringkas — mobile & tablet */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-5 py-3"
      >
        <a
          href="#home"
          className="font-bold text-lg tracking-wider text-white"
        >
          {initials}
        </a>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          className="text-slate-300 hover:text-white transition-colors"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {/* Dropdown menu — mobile & tablet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-16 left-1/2 -translate-x-1/2 z-40 w-[85%] max-w-sm bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-4 flex flex-col gap-1 shadow-xl shadow-black/40"
          >
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className="text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors px-4 py-3 rounded-lg text-sm font-medium"
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
