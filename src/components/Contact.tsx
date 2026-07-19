"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  User,
} from "lucide-react";

type ChatMessage = {
  id: number;
  from: "bot";
  text: string;
};

const scriptedMessages: ChatMessage[] = [
  {
    id: 1,
    from: "bot",
    text: `Selamat datang di web Portofolio saya, semoga suka 👋`,
  },
  {
    id: 2,
    from: "bot",
    text: "Yuk, ngobrol dulu kalau ada yang ingin ditanyakan.",
  },
  {
    id: 3,
    from: "bot",
    text: "Atau langsung sapa saya lewat salah satu kanal di bawah ini.",
  },
];

const quickLinks = [
  {
    label: "GitHub",
    icon: Github,
    href: personalInfo.github,
    external: true,
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: personalInfo.linkedin,
    external: true,
  },
  {
    label: "Email",
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: `https://wa.me/${personalInfo.whatsapp}`,
    external: true,
  },
];

function ChatRoom() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (visibleCount >= scriptedMessages.length) return;
    setTyping(true);
    const typingTimer = setTimeout(() => {
      setTyping(false);
      setVisibleCount((c) => c + 1);
    }, 900);
    return () => clearTimeout(typingTimer);
  }, [visibleCount]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full min-h-[420px]">
      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-800 bg-slate-950/40">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-300" />
        </span>
        <MessageCircle size={16} className="text-white" />
        <h3 className="font-semibold text-slate-100 text-sm">Ruang Obrolan</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 px-5 py-5 space-y-3 overflow-y-auto">
        <AnimatePresence initial={false}>
          {scriptedMessages.slice(0, visibleCount).map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-2.5"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-white to-slate-400 flex items-center justify-center text-[10px] font-bold text-slate-950 shrink-0">
                {personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="max-w-[80%]">
                <p className="text-[11px] text-slate-500 mb-1">
                  {personalInfo.name.split(" ")[0]}
                </p>
                <div className="bg-slate-800/80 text-slate-200 text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 leading-relaxed">
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {typing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-white to-slate-400 flex items-center justify-center text-[10px] font-bold text-slate-950 shrink-0">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div className="bg-slate-800/80 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-slate-400"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Quick links pengganti "Login with Google" pada referensi */}
      <div className="border-t border-slate-800 px-5 py-4 space-y-2">
        <p className="text-[11px] text-slate-500 text-center">
          Sapa saya langsung lewat salah satu kanal ini
        </p>
        <div className="grid grid-cols-2 gap-2">
          {quickLinks.map(({ label, icon: Icon, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-slate-800/70 border border-slate-700 hover:border-white/40 hover:bg-slate-800 text-xs font-medium text-slate-200 transition-colors"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Halo dari ${name || "Website Portofolio"}`,
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name || "(tanpa nama)"} (${email || "tanpa email"})`,
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.location.href = mailtoHref;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 h-full min-h-[420px]"
    >
      <div>
        <h3 className="font-semibold text-slate-100">Kirim Pesan</h3>
        <p className="text-xs text-slate-500 mt-1">
          Isi form ini dan klien email Anda akan terbuka otomatis dengan pesan
          siap kirim.
        </p>
      </div>

      <label className="text-sm text-slate-400 flex flex-col gap-1.5">
        Nama Lengkap
        <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 focus-within:border-white/40 rounded-lg px-3 py-2.5">
          <User size={15} className="text-slate-600 shrink-0" />
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama..."
            className="bg-transparent outline-none text-sm text-slate-200 placeholder:text-slate-600 w-full"
          />
        </div>
      </label>

      <label className="text-sm text-slate-400 flex flex-col gap-1.5">
        Email
        <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 focus-within:border-white/40 rounded-lg px-3 py-2.5">
          <Mail size={15} className="text-slate-600 shrink-0" />
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email..."
            className="bg-transparent outline-none text-sm text-slate-200 placeholder:text-slate-600 w-full"
          />
        </div>
      </label>

      <label className="text-sm text-slate-400 flex flex-col gap-1.5 flex-1">
        Pesan
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tulis pesan Anda..."
          rows={4}
          className="flex-1 bg-slate-950 border border-slate-800 focus-within:border-white/40 rounded-lg px-3 py-2.5 outline-none text-sm text-slate-200 placeholder:text-slate-600 resize-none"
        />
      </label>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-950 font-semibold rounded-full hover:bg-slate-200 transition-colors"
      >
        <Send size={16} />
        {sent ? "Membuka email..." : "Kirim"}
      </motion.button>
    </form>
  );
}

export default function Contact() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 border-t border-slate-900 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-bold">Mari Berkolaborasi</h2>
          <p className="text-slate-400">
            Hubungi saya atau mulai obrolan langsung — terbuka untuk peluang
            magang, kolaborasi proyek, maupun diskusi seputar data & sistem
            informasi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          <ChatRoom />
          <ContactForm />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {quickLinks.map(({ label, icon: Icon, href, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
              className="p-3 bg-slate-900 border border-slate-800 hover:border-white/30 text-slate-400 hover:text-white rounded-full transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-slate-600 pt-10 font-mono text-center">
          &copy; {year ?? ""} {personalInfo.name}. Dibuat dengan Next.js &
          Tailwind CSS.
        </p>
      </motion.div>
    </section>
  );
}
