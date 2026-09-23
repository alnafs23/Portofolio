"use client";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { toolsData } from "@/data/portfolioData";
import {
  SiPython,
  SiC,
  SiFigma,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiPhpmyadmin,
  SiXampp,
  SiDiagramsdotnet,
  SiGit,
  SiGithub,
  SiPostman,
  SiWireshark,
  SiWordpress,
  SiNotion,
} from "react-icons/si";
import {
  PiMicrosoftExcelLogoFill,
  PiMicrosoftWordLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from "react-icons/pi";
import { Database, BrainCircuit } from "lucide-react";
import {
  PowerBIIcon,
  CanvaIcon,
  MentimeterIcon,
  CapCutIcon,
  MicrosoftFabricIcon,
  DbDiagramIcon,
} from "@/components/icons/BrandIcons";
import { useLanguage } from "@/context/LanguageContext";

// Tipe longgar yang dipenuhi baik oleh komponen react-icons (IconType) maupun
// komponen SVG custom kita di BrandIcons.tsx — keduanya dirender sebagai
// <Icon size={20} />, jadi propsnya sengaja tidak dibatasi ketat di sini.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ToolIcon = ComponentType<any>;

// Logo resmi (Simple Icons / Phosphor brand marks) — dipakai kalau brand-nya punya logo resmi.
const officialLogoMap: Record<string, ToolIcon> = {
  Python: SiPython,
  "C Programming": SiC,
  "Microsoft Excel": PiMicrosoftExcelLogoFill,
  "Microsoft Word": PiMicrosoftWordLogoFill,
  "Microsoft PowerPoint": PiMicrosoftPowerpointLogoFill,
  Figma: SiFigma,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  "MySQL Workbench": SiMysql,
  phpMyAdmin: SiPhpmyadmin,
  "XAMPP / Laragon": SiXampp,
  "draw.io": SiDiagramsdotnet,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  Wireshark: SiWireshark,
  WordPress: SiWordpress,
  Notion: SiNotion,
};

const fallbackIconMap: Record<string, ToolIcon> = {
  SQL: Database,
  "Machine Learning": BrainCircuit,
  "Microsoft Fabric": MicrosoftFabricIcon,
  "Power BI": PowerBIIcon,
  Canva: CanvaIcon,
  Mentimeter: MentimeterIcon,
  CapCut: CapCutIcon,
  "dbdiagram.io": DbDiagramIcon,
};

export default function ToolsTech() {
  const { t, pick } = useLanguage();

  return (
    <section id="tools" className="py-24 max-w-5xl mx-auto px-4">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl font-bold">{t.tools.title}</h2>
        <p className="text-slate-400">{t.tools.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {toolsData.map((tool, index) => {
          const Icon =
            officialLogoMap[tool.name] ??
            fallbackIconMap[tool.name] ??
            Database;
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
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-100 leading-snug truncate">
                  {tool.name}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {pick(tool.category)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
