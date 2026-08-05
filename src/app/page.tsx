import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SoftSkills from "@/components/SoftSkills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />

      {/* Ambient background glow — tersebar di sepanjang halaman dengan animasi mengambang halus */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-blob" />
      <div className="absolute top-[90vh] right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-blob [animation-delay:-4s]" />
      <div className="absolute top-[170vh] left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-blob [animation-delay:-8s]" />
      <div className="absolute top-[250vh] right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-blob [animation-delay:-2s]" />
      <div className="absolute top-[330vh] left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-blob [animation-delay:-6s]" />
      <div className="absolute top-[410vh] right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-blob [animation-delay:-10s]" />

      <Navbar />
      <Hero />
      <About />
      <SoftSkills />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}
