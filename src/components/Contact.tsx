"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  Bot,
} from "lucide-react";

const chatLinks = [
  {
    label: "GitHub",
    value: "@alnafs23",
    href: personalInfo.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Alina Fadlila Syifa",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+62 851-4701-6817",
    href: `https://wa.me/${personalInfo.whatsapp}`,
    icon: MessageCircle,
  },
];

export default function Contact() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSend = () => {
    const subject = encodeURIComponent(
      `Halo Alina — pesan dari ${form.name || "portofolio"}`
    );
    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 border-t border-slate-900 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 mb-12"
        >
          <h2 className="text-3xl font-bold">Mari Berkolaborasi</h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Terbuka untuk peluang magang, kolaborasi proyek, maupun diskusi
            seputar analisis data, sistem informasi, dan business
            intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Chat Room */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4 text-slate-300 font-semibold text-sm">
              <Bot size={16} className="text-cyan-400" />
              Chat Room
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-300 max-w-[85%] mb-4"
            >
              Halo! 👋 Terima kasih sudah mampir ke portofolio saya. Yuk
              terhubung lewat salah satu channel di bawah ini:
            </motion.div>

            <div className="space-y-2 mt-auto">
              {chatLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    transition={{ delay: 0.15 + index * 0.08 }}
                    className="flex items-center gap-3 bg-slate-950 border border-slate-800 hover:border-cyan-500/40 rounded-xl px-3 py-2.5 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                      <Icon size={15} className="text-cyan-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">{link.label}</p>
                      <p className="text-sm text-slate-200 truncate">
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Form kontak cepat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-3"
          >
            <p className="text-sm font-semibold text-slate-300 mb-1">
              Kirim Pesan Langsung
            </p>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama Anda..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="email@anda.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-slate-500 mb-1 block">
                Pesan
              </label>
              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Tulis pesan Anda..."
                rows={4}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 resize-none"
              />
            </div>
            <motion.button
              onClick={handleSend}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-500 text-slate-950 font-semibold rounded-lg text-sm hover:bg-cyan-400 transition-colors"
            >
              <Send size={15} />
              Send
            </motion.button>
            <p className="text-[11px] text-slate-600 text-center">
              Akan membuka aplikasi email default Anda.
            </p>
          </motion.div>
        </div>

        <p className="text-xs text-slate-600 pt-12 text-center font-mono">
          &copy; {year ?? ""} {personalInfo.name}. Built with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
