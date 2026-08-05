"use client";
import { motion } from "framer-motion";
import { personalInfo, hardSkillsData } from "@/data/portfolioData";
import ImageSlot from "@/components/ImageSlot";
import {
  Code2,
  Database,
  Brain,
  FileSpreadsheet,
  Layers,
  Terminal,
  Globe,
  PenTool,
  Palette,
  Presentation,
} from "lucide-react";

// Ikon & warna aksen tiap tool — disamakan dengan nama di portfolioData.ts
const toolMeta: Record<
  string,
  { icon: typeof Code2; color: string; category: string }
> = {
  "Python (Data Science)": { icon: Code2, color: "bg-blue-500/15 text-blue-400", category: "Language" },
  SQL: { icon: Database, color: "bg-cyan-500/15 text-cyan-400", category: "Query Language" },
  "Machine Learning": { icon: Brain, color: "bg-purple-500/15 text-purple-400", category: "Concept" },
  "Microsoft Excel": { icon: FileSpreadsheet, color: "bg-emerald-500/15 text-emerald-400", category: "Spreadsheet" },
  "Microsoft Fabric": { icon: Layers, color: "bg-sky-500/15 text-sky-400", category: "Data Platform" },
  Python: { icon: Code2, color: "bg-blue-500/15 text-blue-400", category: "Language" },
  "C Programming": { icon: Terminal, color: "bg-slate-500/15 text-slate-300", category: "Language" },
  "Web Development": { icon: Globe, color: "bg-indigo-500/15 text-indigo-400", category: "Web" },
  Figma: { icon: PenTool, color: "bg-pink-500/15 text-pink-400", category: "Design App" },
  Canva: { icon: Palette, color: "bg-teal-500/15 text-teal-400", category: "Design App" },
  Mentimeter: { icon: Presentation, color: "bg-orange-500/15 text-orange-400", category: "Presentation" },
};

const allTools = Object.values(hardSkillsData).flat();

export default function About() {
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
              className="w-20 h-20 rounded-full shrink-0 border border-slate-800"
            />
            <h2 className="text-3xl font-bold border-l-4 border-cyan-400 pl-4">
              Tentang Saya
            </h2>
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
              className="inline-block mt-2 px-5 py-2.5 bg-cyan-500 text-slate-950 font-semibold rounded-full text-sm hover:bg-cyan-400 transition-colors"
            >
              Download CV
            </a>
          )}
        </motion.div>

        {/* Kolom kanan: grid Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-1">Tools & Technologies</h3>
          <p className="text-sm text-slate-500 mb-5">My Professional Skills</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {allTools.map((tool, index) => {
              const meta = toolMeta[tool.name] ?? {
                icon: Code2,
                color: "bg-slate-500/15 text-slate-300",
                category: "Skill",
              };
              const Icon = meta.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  title={tool.desc}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-3 hover:border-cyan-500/40 transition-colors cursor-default"
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 ${meta.color}`}
                  >
                    <Icon size={16} />
                  </div>
                  <p className="text-xs font-semibold text-slate-200 leading-snug">
                    {tool.name}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {meta.category}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
