"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  projectsData,
  projectCategories,
  projectCategoryLabels,
  personalInfo,
} from "@/data/portfolioData";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/** Ambil owner/repo dari URL GitHub untuk membangun thumbnail Open Graph resmi GitHub. */
function getGithubOgImage(link: string) {
  try {
    const url = new URL(link);
    const [, owner, repo] = url.pathname.split("/");
    if (!owner || !repo) return null;
    return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
  } catch {
    return null;
  }
}

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof projectCategories)[number]>("Semua");
  const { t, pick } = useLanguage();

  const filtered = useMemo(() => {
    if (activeCategory === "Semua") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-4">
      <div className="text-center mb-8 space-y-2">
        <h2 className="text-3xl font-bold">{t.projects.title}</h2>
        <p className="text-slate-400">{t.projects.subtitle}</p>
      </div>

      {/* Tab filter kategori */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex flex-wrap justify-center gap-1.5 bg-slate-900/70 border border-slate-800 rounded-full p-1.5">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
                activeCategory === cat
                  ? "bg-white text-slate-900"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {projectCategoryLabels[cat]
                ? pick(projectCategoryLabels[cat])
                : cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
      >
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      <div className="text-center">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 hover:border-white/30 rounded-full text-sm font-semibold text-slate-200 transition-colors"
        >
          <Github size={18} />
          {t.projects.viewAllGithub}
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
  const [pos, setPos] = useState({ x: 50, y: 50, active: false });
  const [imgFailed, setImgFailed] = useState(false);
  const { pick } = useLanguage();
  const ogImage = project.image || getGithubOgImage(project.link);
  const showImage = Boolean(ogImage) && !imgFailed;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - card.left) / card.width) * 100;
    const y = ((e.clientY - card.top) / card.height) * 100;
    setPos({ x, y, active: true });
  };

  const handleMouseLeave = () => setPos((p) => ({ ...p, active: false }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Border yang berubah warna mengikuti posisi kursor */}
      <div
        className="absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: pos.active ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x}% ${pos.y}%, #22d3ee, #a855f7 45%, #34d399 80%, transparent 100%)`,
        }}
      />
      <div className="absolute inset-[1px] rounded-2xl bg-slate-900" />

      <div className="relative border border-slate-800 group-hover:border-transparent rounded-2xl bg-slate-900 flex flex-col overflow-hidden h-full">
        {/* Spotlight warna yang mengikuti gerakan kursor */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(300px circle at ${pos.x}% ${pos.y}%, rgba(34,211,238,0.15), rgba(168,85,247,0.1) 40%, transparent 70%)`,
          }}
        />

        {/* Thumbnail proyek — diambil dari social preview repository GitHub */}
        <div className="relative w-full aspect-video bg-slate-950 overflow-hidden">
          {showImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={ogImage as string}
              alt={`Preview repository ${project.title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-700 bg-gradient-to-br from-slate-900 to-slate-950">
              <Github size={32} />
              <span className="text-[10px] font-mono text-slate-600 px-4 text-center leading-snug">
                {project.title}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        </div>

        <div className="p-5 flex-1 flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-base text-slate-100 group-hover:text-white transition-colors leading-snug">
              {project.title}
            </h3>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Buka repository ${project.title} di GitHub`}
              className="text-slate-500 hover:text-white transition-colors shrink-0 relative z-20"
            >
              <ExternalLink size={16} />
            </a>
          </div>
          <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {pick(project.desc)}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-slate-950 border border-slate-800 text-slate-400 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
