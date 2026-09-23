import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import ToolsTech from "@/components/icons/Toolstech";
import SoftSkills from "@/components/SoftSkills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

// Titik-titik kecil yang "mengambang" pelan di sepanjang halaman — murni dekoratif,
// dibuat dari daftar posisi acak-tapi-tetap supaya render konsisten di server & client.
const particles: {
  top: string;
  left: string;
  size: number;
  color: string;
  delay: string;
}[] = [
  { top: "8vh", left: "12%", size: 3, color: "bg-cyan-400/50", delay: "0s" },
  {
    top: "18vh",
    left: "82%",
    size: 2,
    color: "bg-emerald-400/50",
    delay: "1.2s",
  },
  {
    top: "45vh",
    left: "6%",
    size: 2.5,
    color: "bg-purple-400/40",
    delay: "2.4s",
  },
  { top: "70vh", left: "90%", size: 3, color: "bg-cyan-400/40", delay: "0.6s" },
  {
    top: "110vh",
    left: "15%",
    size: 2,
    color: "bg-emerald-400/40",
    delay: "1.8s",
  },
  { top: "140vh", left: "88%", size: 3, color: "bg-cyan-400/40", delay: "3s" },
  {
    top: "180vh",
    left: "8%",
    size: 2.5,
    color: "bg-purple-400/40",
    delay: "0.9s",
  },
  {
    top: "220vh",
    left: "92%",
    size: 2,
    color: "bg-emerald-400/40",
    delay: "2.1s",
  },
  {
    top: "260vh",
    left: "10%",
    size: 3,
    color: "bg-cyan-400/40",
    delay: "1.5s",
  },
  {
    top: "300vh",
    left: "85%",
    size: 2.5,
    color: "bg-purple-400/40",
    delay: "0.3s",
  },
  {
    top: "350vh",
    left: "14%",
    size: 2,
    color: "bg-emerald-400/40",
    delay: "2.7s",
  },
  { top: "400vh", left: "80%", size: 3, color: "bg-cyan-400/40", delay: "1s" },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Welcome />
      <ScrollProgress />

      {/* Lapisan paling belakang: grid halus yang perlahan bergeser */}
      <div className="fixed inset-0 -z-10 bg-grid-pattern pointer-events-none" />

      {/* Ambient background glow — tersebar di sepanjang halaman dengan animasi mengambang halus */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-blob" />
      <div className="absolute top-[20vh] right-[8%] w-72 h-72 bg-purple-500/10 rounded-full blur-[110px] pointer-events-none animate-blob [animation-delay:-6s]" />
      <div className="absolute top-[90vh] right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none animate-blob [animation-delay:-4s]" />
      <div className="absolute top-[130vh] left-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-[110px] pointer-events-none animate-blob [animation-delay:-10s]" />
      <div className="absolute top-[170vh] left-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-blob [animation-delay:-8s]" />
      <div className="absolute top-[220vh] right-[12%] w-72 h-72 bg-purple-500/10 rounded-full blur-[110px] pointer-events-none animate-blob [animation-delay:-2s]" />
      <div className="absolute top-[250vh] right-1/3 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none animate-blob [animation-delay:-2s]" />
      <div className="absolute top-[330vh] left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-blob [animation-delay:-6s]" />
      <div className="absolute top-[380vh] right-[15%] w-72 h-72 bg-purple-500/10 rounded-full blur-[110px] pointer-events-none animate-blob [animation-delay:-12s]" />
      <div className="absolute top-[410vh] right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none animate-blob [animation-delay:-10s]" />

      {/* Partikel kecil mengambang — memberi kesan "hidup" tanpa terlalu ramai */}
      {particles.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${p.color} animate-float pointer-events-none`}
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
          }}
        />
      ))}

      <Navbar />
      <Hero />
      <About />
      <Education />
      <ToolsTech />
      <SoftSkills />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}
