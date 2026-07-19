"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, statsData } from "@/data/portfolioData";
import { ArrowUpRight, Github, Linkedin, Quote } from "lucide-react";
import ImageSlot from "@/components/ImageSlot";

function useTypewriter(text: string, speed = 45, startDelay = 600) {
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

/**
 * Kartu foto holografik — memiringkan sesuai posisi kursor, dan warna sinar
 * pelanginya ikut bergeser mengikuti gerakan kursor (mirip efek di video referensi).
 */
function HolographicCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    rotateX: 0,
    rotateY: 0,
    mx: 50,
    my: 50,
    opacity: 0,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    setStyle({
      rotateX: (0.5 - py) * 18,
      rotateY: (px - 0.5) * 18,
      mx: px * 100,
      my: py * 100,
      opacity: 1,
    });
  };

  const handleLeave = () => {
    setStyle((s) => ({ ...s, rotateX: 0, rotateY: 0, opacity: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto w-full max-w-xs sm:max-w-sm"
      style={{ perspective: "1200px" }}
    >
      {/* Aura di belakang kartu */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-emerald-500/20 blur-2xl" />

      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative rounded-[1.75rem] p-[1.5px] transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `rotateX(${style.rotateX}deg) rotateY(${style.rotateY}deg)`,
          transformStyle: "preserve-3d",
          background: `radial-gradient(circle at ${style.mx}% ${style.my}%, #22d3ee, #a855f7, #34d399, #22d3ee)`,
        }}
      >
        <div className="relative overflow-hidden rounded-[1.7rem] bg-slate-950">
          {/* Foto profil */}
          <div className="relative aspect-[4/5] w-full">
            <ImageSlot
              src={personalInfo.photoUrl}
              alt={`Foto profil ${personalInfo.name}`}
              label="Foto profil Anda"
              className="absolute inset-0 w-full h-full"
              iconSize={32}
            />
            {/* Overlay gradasi bawah agar teks tetap terbaca */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

            {/* Sinar holografik yang mengikuti kursor */}
            <div
              className="pointer-events-none absolute inset-0 mix-blend-color-dodge transition-opacity duration-300"
              style={{
                opacity: style.opacity * 0.55,
                background: `radial-gradient(circle at ${style.mx}% ${style.my}%, rgba(255,255,255,0.9), transparent 45%)`,
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: style.opacity * 0.35,
                background: `linear-gradient(115deg, transparent 20%, #22d3ee55 35%, #a855f755 50%, #34d39955 65%, transparent 80%)`,
                backgroundSize: "250% 250%",
                backgroundPosition: `${style.mx}% ${style.my}%`,
              }}
            />

            {/* Nama & role mengambang di atas foto */}
            <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
              <span className="text-lg font-bold tracking-tight text-white drop-shadow-lg">
                {personalInfo.name.split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.8)] mt-1.5" />
            </div>
          </div>

          {/* Footer kartu: kontak singkat */}
          <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-slate-950/90 px-4 py-3">
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-slate-400 truncate hover:text-white transition-colors"
            >
              @{personalInfo.githubHandle}
            </a>
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Github size={14} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#contact"
                className="ml-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const typedRole = useTypewriter(personalInfo.role);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-12 pt-8 lg:pt-0 pb-16 relative"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-8 items-center w-full">
        {/* Kolom kiri: teks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6 text-center md:text-left order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-300 font-mono">
            Terbuka untuk Peluang Karier
          </div>

          <div className="inline-flex items-start gap-2 max-w-md mx-auto md:mx-0 rounded-2xl rounded-tl-sm bg-slate-900/80 border border-slate-800 px-4 py-3 text-sm text-slate-300 italic">
            <Quote size={16} className="text-white shrink-0 mt-0.5" />
            <span>&ldquo;{personalInfo.heroQuote}&rdquo;</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight break-words">
            Halo, saya{" "}
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-medium font-mono min-h-[1.6em]">
            {typedRole}
            <span className="inline-block w-[2px] h-[1em] bg-white ml-1 animate-pulse align-middle" />
          </p>

          <p className="text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0">
            {personalInfo.aboutTagline} Fokus pada analisis data, sistem
            informasi, dan pengembangan solusi berbasis data untuk keputusan
            bisnis yang lebih baik.
          </p>

          <div className="flex justify-center md:justify-start gap-8 pt-1">
            {statsData.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
            {personalInfo.resumeUrl ? (
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.35)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-slate-950 font-semibold rounded-full flex items-center justify-center gap-2"
              >
                Unduh CV
              </motion.a>
            ) : null}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.35)" }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 font-semibold rounded-full flex items-center justify-center gap-2 ${
                personalInfo.resumeUrl
                  ? "bg-slate-900 border border-slate-800 hover:border-slate-700 text-white"
                  : "bg-white text-slate-950"
              }`}
            >
              Lihat Proyek Saya <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Kolom kanan: kartu foto holografik */}
        <div className="order-1 md:order-2">
          <HolographicCard />
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-600 text-xs font-mono tracking-widest"
      >
        GULIR
      </motion.div>
    </section>
  );
}
