"use client";
import { motion } from "framer-motion";
import { softSkillsData } from "@/data/portfolioData";
import {
  Brain,
  MessageSquareText,
  Users,
  Clock,
  Search,
  Sparkles,
} from "lucide-react";

const icons = [Brain, MessageSquareText, Users, Clock, Search, Sparkles];

export default function SoftSkills() {
  return (
    <section id="softskills" className="py-24 max-w-5xl mx-auto px-4">
      <div className="text-center mb-16 space-y-2">
        <h2 className="text-3xl font-bold">Soft Skills</h2>
        <p className="text-slate-400">
          Kemampuan interpersonal yang mendukung kerja analitis sehari-hari.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {softSkillsData.map((skill, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-3">
                <Icon size={18} className="text-emerald-400" />
              </div>
              <h3 className="font-semibold text-slate-100 mb-1.5">
                {skill.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
