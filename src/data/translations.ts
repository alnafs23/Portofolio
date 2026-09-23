export const translations = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      education: "Pendidikan",
      skills: "Keahlian",
      experience: "Pengalaman",
      certificates: "Sertifikat",
      projects: "Proyek",
      contact: "Kontak",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
    },
    welcome: {
      eyebrow: "Selamat datang di",
      title: "Portofolio Saya",
      subtitle:
        "Jelajahi perjalanan, keahlian, dan proyek-proyek saya di bidang sistem informasi & analisis data.",
      enter: "Masuk ke Portofolio",
      langToggle: "English",
      themeToggle: "Ganti tema",
    },
    theme: {
      switchToLight: "Beralih ke mode terang",
      switchToDark: "Beralih ke mode gelap",
    },
    hero: {
      openForOpportunities: "Terbuka untuk Peluang",
      downloadCV: "Unduh CV",
      exploreProjects: "Lihat Proyek Saya",
      online: "Online",
      contactMe: "Hubungi Saya",
      scroll: "GULIR",
      greeting: "Hai, saya",
    },
    about: {
      title: "Tentang Saya",
    },
    education: {
      title: "Riwayat Pendidikan",
      subtitle: "Perjalanan akademik saya",
    },
    tools: {
      title: "Tools & Teknologi",
      subtitle: "Keahlian Profesional Saya",
    },
    softskills: {
      title: "Soft Skills",
      subtitle:
        "Kemampuan interpersonal yang mendukung kerja analitis sehari-hari.",
    },
    experience: {
      title: "Organisasi & Event",
      subtitle:
        "Pengalaman organisasi, kepanitiaan, dan event/pelatihan yang pernah saya ikuti.",
      filters: { all: "Semua", org: "Organisasi", event: "Event" },
    },
    certifications: {
      title: "Sertifikasi",
      subtitle: (count: number) =>
        `${count} kursus & pelatihan yang telah diselesaikan — klik untuk melihat sertifikat.`,
      close: "Tutup",
      certificateLabel: "Sertifikat",
    },
    projects: {
      title: "Proyek Unggulan",
      subtitle:
        "Kumpulan proyek — analisis data, desain UI/UX, hingga web & database.",
      viewAllGithub: "Lihat Semua Proyek di GitHub",
    },
    contact: {
      title: "Mari Berkolaborasi",
      subtitle:
        "Terbuka untuk peluang magang, kolaborasi proyek, maupun diskusi seputar analisis data, sistem informasi, dan business intelligence.",
      chatRoom: "Chat Room",
      chatGreeting:
        "Halo! Terima kasih sudah mampir ke portofolio saya. Yuk terhubung lewat salah satu channel di bawah ini:",
      sendMessage: "Kirim Pesan Langsung",
      fullName: "Nama Lengkap",
      namePlaceholder: "Nama Anda...",
      email: "Email",
      emailPlaceholder: "email@anda.com",
      message: "Pesan",
      messagePlaceholder: "Tulis pesan Anda...",
      send: "Kirim",
      mailNote: "Akan membuka aplikasi email default Anda.",
      builtWith: "Dibuat dengan Next.js & Tailwind CSS.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      skills: "Skills",
      experience: "Experience",
      certificates: "Certificates",
      projects: "Projects",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    welcome: {
      eyebrow: "Welcome to",
      title: "My Portfolio",
      subtitle:
        "Explore my journey, skills, and projects in information systems & data analysis.",
      enter: "Enter Portfolio",
      langToggle: "Indonesia",
      themeToggle: "Toggle theme",
    },
    theme: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
    hero: {
      openForOpportunities: "Open for Opportunities",
      downloadCV: "Download CV",
      exploreProjects: "Explore My Projects",
      online: "Online",
      contactMe: "Contact Me",
      scroll: "SCROLL",
      greeting: "Hi, I'm",
    },
    about: {
      title: "About Me",
    },
    education: {
      title: "Education History",
      subtitle: "My academic journey",
    },
    tools: {
      title: "Tools & Technology",
      subtitle: "My Professional Skillset",
    },
    softskills: {
      title: "Soft Skills",
      subtitle: "Interpersonal skills that support everyday analytical work.",
    },
    experience: {
      title: "Organizations & Events",
      subtitle:
        "Organizational experience, committee work, and events/training I've taken part in.",
      filters: { all: "All", org: "Organization", event: "Event" },
    },
    certifications: {
      title: "Certifications",
      subtitle: (count: number) =>
        `${count} completed courses & trainings (click to view certificate).`,
      close: "Close",
      certificateLabel: "Certificate",
    },
    projects: {
      title: "Featured Projects",
      subtitle:
        "A collection of projects data analysis, UI/UX design, to web & database.",
      viewAllGithub: "View All Projects on GitHub",
    },
    contact: {
      title: "Let's Collaborate",
      subtitle:
        "Open to internship opportunities, project collaboration, and discussions on data analysis, information systems, and business intelligence.",
      chatRoom: "Chat Room",
      chatGreeting:
        "Hi! Thanks for stopping by my portfolio. Feel free to connect through one of the channels below:",
      sendMessage: "Send a Direct Message",
      fullName: "Full Name",
      namePlaceholder: "Your name...",
      email: "Email",
      emailPlaceholder: "email@you.com",
      message: "Message",
      messagePlaceholder: "Write your message...",
      send: "Send",
      mailNote: "This will open your default email app.",
      builtWith: "Built with Next.js & Tailwind CSS.",
    },
  },
};

export type Translations = typeof translations;
