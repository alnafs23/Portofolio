"use client";
import { motion } from "framer-motion";
import { toolsData } from "@/data/portfolioData";
import {
  Code2,
  Database,
  BrainCircuit,
  Sheet,
  BarChart3,
  Terminal,
  PenTool,
  Palette,
  Presentation,
  Github,
} from "lucide-react";

const iconMap: Record<string, typeof Code2> = {
  Python: Code2,
  SQL: Database,
  "Machine Learning": BrainCircuit,
  "Microsoft Excel": Sheet,
  "Microsoft Fabric": BarChart3,
  "C Programming": Terminal,
  Figma: PenTool,
  Canva: Palette,
  Mentimeter: Presentation,
  GitHub: Github,
};

export default function ToolsTech() {
  return (
    <section id="tools" className="py-24 max-w-5xl mx-auto px-4">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl font-bold">Tools & Teknologi</h2>
        <p className="text-slate-400">Keahlian Profesional Saya</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {toolsData.map((tool, index) => {
          const Icon = iconMap[tool.name] ?? Code2;
          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-3 hover:border-white/30 hover:shadow-lg hover:shadow-white/5 transition-colors"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: `${tool.color}1A`,
                  color: tool.color,
                }}
              >
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-100 leading-snug truncate">
                  {tool.name}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {tool.category}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
