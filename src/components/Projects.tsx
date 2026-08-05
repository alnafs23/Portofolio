"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData, personalInfo } from "@/data/portfolioData";
import { ExternalLink, Github } from "lucide-react";
import ImageSlot from "@/components/ImageSlot";

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-4">
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="text-slate-400">
          Proyek analisis data dari repository GitHub saya — mencakup proyek
          kuliah maupun latihan mandiri.
        </p>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px] mb-10"
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      <div className="text-center">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-full text-sm font-semibold text-slate-200 transition-colors"
        >
          <Github size={18} />
          Lihat Semua Proyek di GitHub
        </a>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, hue: 190 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    setRotateX(-y / 10);
    setRotateY(x / 10);

    // Posisi kursor (persen) + pergeseran warna (hue) mengikuti gerakan kursor,
    // menyapu dari cyan ke violet saat kursor digerakkan menyilang kartu.
    const px = ((e.clientX - card.left) / card.width) * 100;
    const py = ((e.clientY - card.top) / card.height) * 100;
    const hue = 170 + (px / 100) * 110;
    setSpotlight({ x: px, y: py, hue });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col justify-between overflow-hidden group cursor-pointer transition-colors hover:border-cyan-500/40 ${project.size}`}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight warna yang mengikuti & berubah sesuai posisi kursor */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, hsla(${spotlight.hue}, 90%, 60%, 0.18), transparent 60%)`,
        }}
      />

      <div className="space-y-2 relative" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-start gap-3">
          <ImageSlot
            src={project.image}
            alt={`Screenshot ${project.title}`}
            className="w-11 h-11 rounded-lg shrink-0 border border-slate-800"
          />
          <div className="flex-1 min-w-0 flex items-start justify-between gap-2">
            <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug">
              {project.title}
            </h3>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Buka repository ${project.title} di GitHub`}
              className="text-slate-500 hover:text-white transition-colors shrink-0"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {project.desc}
        </p>
      </div>

      <div
        className="flex flex-wrap gap-1.5 mt-4 relative"
        style={{ transform: "translateZ(20px)" }}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-slate-950 border border-slate-800 text-slate-400 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
