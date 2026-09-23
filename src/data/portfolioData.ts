/** Field teks yang punya versi Indonesia & Inggris. Gunakan pick() dari
 * useLanguage() (src/context/LanguageContext.tsx) untuk mengambil teksnya. */
export type Bilingual = { id: string; en: string };

export const personalInfo = {
  name: "Alina Fadlila Syifa",
  role: {
    id: "Mahasiswa Sistem Informasi, Universitas Negeri Semarang",
    en: "Information Systems Student, Universitas Negeri Semarang",
  } as Bilingual,
  heroQuote: {
    id: "Mengubah data mentah menjadi keputusan yang tepat sasaran.",
    en: "Turning raw data into decisions that hit the mark.",
  } as Bilingual,
  aboutTagline: {
    id: "Mengubah data menjadi wawasan bisnis yang terstruktur dan dapat ditindaklanjuti.",
    en: "Turning data into structured, actionable business insight.",
  } as Bilingual,
  aboutDescription: {
    id: "Mahasiswa Sistem Informasi di Universitas Negeri Semarang, dengan fokus pada analisis sistem, pengembangan perangkat lunak, dan manajemen bisnis. Berpengalaman dalam proyek akademik seputar pengembangan sistem informasi, manajemen basis data (SQL), pemrograman Python, serta desain menggunakan Figma dan Canva. Aktif di beberapa organisasi kampus untuk mengasah kemampuan manajemen, kerja sama tim, dan komunikasi visual.",
    en: "Information Systems student at Universitas Negeri Semarang, focused on systems analysis, software development, and business management. Experienced in academic projects around information systems development, database management (SQL), Python programming, and design with Figma and Canva. Active in several campus organizations to sharpen management, teamwork, and visual communication skills.",
  } as Bilingual,
  email: "sifaalina80@gmail.com",
  whatsapp: "6285147016817",
  whatsappDisplay: "+62 851-4701-6817",
  github: "https://github.com/alnafs23",
  githubHandle: "alnafs23",
  linkedin: "https://www.linkedin.com/in/alina-fadlila-syifa-3549a9321",
  photoUrl: "/foto-profil.jpg",
  // Isi dengan link CV/resume kamu (misal file PDF di /public atau link Drive)
  // kalau belum punya, biarkan string kosong — tombol "Download CV" otomatis disembunyikan.
  resumeUrl: "",
};

// Angka ringkas untuk kredibilitas cepat di mata HRD (ditampilkan di Hero/About)
export const statsData: { value: string; label: Bilingual }[] = [
  { value: "19+", label: { id: "Sertifikasi", en: "Certifications" } },
  { value: "10", label: { id: "Organisasi & Event", en: "Orgs & Events" } },
  { value: "5", label: { id: "Proyek Data", en: "Data Projects" } },
];

// Riwayat pendidikan — tahun MTs & MA diperkirakan mundur dari 2024 (awal kuliah),
// silakan sesuaikan kalau tidak pas.
export const educationData: {
  level: string;
  institution: string;
  major: Bilingual;
  period: string;
  note?: Bilingual;
}[] = [
  {
    level: "S1",
    institution: "Universitas Negeri Semarang",
    major: { id: "Sistem Informasi", en: "Information Systems" },
    period: "2024 — Sekarang",
    note: { id: "Semester 5", en: "5th Semester" },
  },
  {
    level: "SMA/MA",
    institution: "Madrasah Aliyah Negeri 1 Wonosobo",
    major: { id: "IPA", en: "Science" },
    period: "2021 — 2024",
  },
  {
    level: "SMP/MTs",
    institution: "Madrasah Tsanawiyah Negeri 2 Wonosobo",
    major: { id: "", en: "" },
    period: "2018 — 2021",
  },
];

// Ikon untuk grid "Tools & Teknologi" — palet monokrom/perak menyesuaikan tema hologram
export const toolsData: { name: string; category: Bilingual; color: string }[] =
  [
    // Bahasa Pemrograman
    {
      name: "Python",
      category: { id: "Bahasa Pemrograman", en: "Programming Language" },
      color: "#3776AB",
    },
    {
      name: "SQL",
      category: { id: "Bahasa Pemrograman", en: "Programming Language" },
      color: "#94a3b8",
    },
    {
      name: "C Programming",
      category: { id: "Bahasa Pemrograman", en: "Programming Language" },
      color: "#A8B9CC",
    },

    // Ilmu Data
    {
      name: "Machine Learning",
      category: { id: "Ilmu Data", en: "Data Science" },
      color: "#A855F7",
    },
    {
      name: "Microsoft Excel",
      category: { id: "Ilmu Data", en: "Data Science" },
      color: "#217346",
    },
    {
      name: "Microsoft Fabric",
      category: { id: "Ilmu Data", en: "Data Science" },
      color: "#0078D4",
    },
    {
      name: "Power BI",
      category: { id: "Ilmu Data", en: "Data Science" },
      color: "#F2C811",
    },

    // Desain
    {
      name: "Figma",
      category: { id: "Aplikasi Desain", en: "Design Apps" },
      color: "#F24E1E",
    },
    {
      name: "Canva",
      category: { id: "Aplikasi Desain", en: "Design Apps" },
      color: "#00C4CC",
    },
    {
      name: "Mentimeter",
      category: { id: "Aplikasi Desain", en: "Design Apps" },
      color: "#4F42B5",
    },
    {
      name: "CapCut",
      category: { id: "Aplikasi Desain", en: "Design Apps" },
      color: "#22D3EE",
    },

    // Microsoft Office
    {
      name: "Microsoft Word",
      category: { id: "Microsoft Office", en: "Microsoft Office" },
      color: "#2B579A",
    },
    {
      name: "Microsoft PowerPoint",
      category: { id: "Microsoft Office", en: "Microsoft Office" },
      color: "#D24726",
    },

    // Basis Data & Backend
    {
      name: "Supabase",
      category: { id: "Basis Data & Backend", en: "Database & Backend" },
      color: "#3FCF8E",
    },
    {
      name: "PostgreSQL",
      category: { id: "Basis Data & Backend", en: "Database & Backend" },
      color: "#4169E1",
    },
    {
      name: "MySQL Workbench",
      category: { id: "Basis Data & Backend", en: "Database & Backend" },
      color: "#4479A1",
    },
    {
      name: "phpMyAdmin",
      category: { id: "Basis Data & Backend", en: "Database & Backend" },
      color: "#6C78AF",
    },
    {
      name: "XAMPP / Laragon",
      category: { id: "Basis Data & Backend", en: "Database & Backend" },
      color: "#FB7A24",
    },

    // Diagram & Pemodelan
    {
      name: "draw.io",
      category: { id: "Diagram & Pemodelan", en: "Diagramming & Modeling" },
      color: "#F08705",
    },
    {
      name: "dbdiagram.io",
      category: { id: "Diagram & Pemodelan", en: "Diagramming & Modeling" },
      color: "#7C3AED",
    },

    // Tools Pengembangan
    {
      name: "Git",
      category: { id: "Tools Pengembangan", en: "Development Tools" },
      color: "#F03C2E",
    },
    {
      name: "GitHub",
      category: { id: "Tools Pengembangan", en: "Development Tools" },
      color: "#ffffff",
    },
    {
      name: "Postman",
      category: { id: "Tools Pengembangan", en: "Development Tools" },
      color: "#FF6C37",
    },
    {
      name: "Wireshark",
      category: { id: "Tools Pengembangan", en: "Development Tools" },
      color: "#1679A7",
    },

    // Platform & Produktivitas
    {
      name: "WordPress",
      category: {
        id: "Platform & Produktivitas",
        en: "Platform & Productivity",
      },
      color: "#21759B",
    },
    {
      name: "Notion",
      category: {
        id: "Platform & Produktivitas",
        en: "Platform & Productivity",
      },
      color: "#ffffff",
    },
  ];

// Hard skill & tools — disusun berdasarkan sertifikasi & pengalaman proyek nyata
export const hardSkillsData: Record<
  string,
  { name: string; desc: Bilingual }[]
> = {
  "data & analitik": [
    {
      name: "Python (Data Science)",
      desc: {
        id: "Data cleaning, EDA, dan visualisasi — dipakai di proyek analisis penjualan & segmentasi pelanggan.",
        en: "Data cleaning, EDA, and visualization — used in sales analysis & customer segmentation projects.",
      },
    },
    {
      name: "SQL",
      desc: {
        id: "Query dasar-menengah untuk mengambil dan mengolah data dari database relasional.",
        en: "Basic-to-intermediate queries to retrieve and process data from relational databases.",
      },
    },
    {
      name: "Machine Learning",
      desc: {
        id: "Dasar-dasar ML untuk pemula (Dicoding) — klasifikasi, regresi, dan clustering.",
        en: "ML fundamentals for beginners (Dicoding) — classification, regression, and clustering.",
      },
    },
    {
      name: "Microsoft Excel",
      desc: {
        id: "Pengolahan data dan pelaporan menggunakan fungsi dan tabel Excel.",
        en: "Data processing and reporting using Excel functions and tables.",
      },
    },
    {
      name: "Microsoft Fabric",
      desc: {
        id: "Penerapan data science end-to-end pada platform Microsoft Fabric.",
        en: "End-to-end data science implementation on the Microsoft Fabric platform.",
      },
    },
    {
      name: "Cloud (AWS)",
      desc: {
        id: "Cloud Practitioner Essentials — dasar layanan, infrastruktur, dan keamanan AWS.",
        en: "Cloud Practitioner Essentials — fundamentals of AWS services, infrastructure, and security.",
      },
    },
  ],
  pemrograman: [
    {
      name: "Python",
      desc: {
        id: "Bahasa utama untuk analisis data, dari fundamental hingga penerapan AI sederhana.",
        en: "Main language for data analysis, from fundamentals to simple AI implementation.",
      },
    },
    {
      name: "C Programming",
      desc: {
        id: "Dasar pemrograman prosedural sebagai fondasi logika komputasi.",
        en: "Procedural programming basics as a foundation for computational logic.",
      },
    },
    {
      name: "Web Development",
      desc: {
        id: "Membangun website sederhana (termasuk pengalaman dengan Wix) dan dashboard berbasis HTML.",
        en: "Building simple websites (including experience with Wix) and HTML-based dashboards.",
      },
    },
    {
      name: "Generative AI",
      desc: {
        id: "Membangun aplikasi Gen AI dasar dengan Microsoft Azure AI Foundry.",
        en: "Building basic Gen AI applications with Microsoft Azure AI Foundry.",
      },
    },
  ],
  "desain & presentasi": [
    {
      name: "Figma",
      desc: {
        id: "Merancang wireframe dan tampilan antarmuka untuk kebutuhan proyek sistem informasi.",
        en: "Designing wireframes and interface layouts for information systems projects.",
      },
    },
    {
      name: "Canva",
      desc: {
        id: "Desain visual untuk materi organisasi, presentasi, dan dokumentasi kegiatan.",
        en: "Visual design for organizational materials, presentations, and event documentation.",
      },
    },
    {
      name: "Mentimeter",
      desc: {
        id: "Membuat presentasi interaktif yang melibatkan audiens secara langsung.",
        en: "Creating interactive presentations that engage the audience directly.",
      },
    },
  ],
};

// Soft skill — dari pengalaman organisasi dan program yang diikuti
export const softSkillsData: { title: string; desc: Bilingual }[] = [
  {
    title: "Leadership & Organizational Management",
    desc: {
      id: "Diasah lewat peran aktif di DPM FMIPA UNNES dan I-SECRET ILKOM UNNES.",
      en: "Honed through active roles at DPM FMIPA UNNES and I-SECRET ILKOM UNNES.",
    },
  },
  {
    title: "Teamwork & Collaboration",
    desc: {
      id: "Terbiasa bekerja dalam tim lintas divisi untuk mengerjakan proyek dan program kerja organisasi.",
      en: "Accustomed to working in cross-divisional teams on projects and organizational programs.",
    },
  },
  {
    title: "Systems & Critical Thinking",
    desc: {
      id: "Terlatih menganalisis kebutuhan sistem dan mengevaluasi permasalahan secara terstruktur.",
      en: "Trained in analyzing system requirements and evaluating problems in a structured way.",
    },
  },
  {
    title: "Visual Communication",
    desc: {
      id: "Menerjemahkan ide dan data menjadi desain visual yang mudah dipahami lewat Figma & Canva.",
      en: "Translating ideas and data into easy-to-understand visual design with Figma & Canva.",
    },
  },
  {
    title: "Business Acumen",
    desc: {
      id: "Dibentuk melalui program kewirausahaan Wadhwani Foundation Ignite Indonesia.",
      en: "Shaped through the Wadhwani Foundation Ignite Indonesia entrepreneurship program.",
    },
  },
  {
    title: "Event & Project Management",
    desc: {
      id: "Pengalaman langsung sebagai panitia inti di beberapa event tingkat fakultas dan universitas.",
      en: "Hands-on experience as a core committee member for several faculty- and university-level events.",
    },
  },
];

// Pengalaman organisasi & event — type membedakan tampilan (Organisasi vs Event)
export const experienceData: {
  id: number;
  type: "Organisasi" | "Event";
  role: string;
  org: string;
  period: string;
  desc: Bilingual;
  image: string;
}[] = [
  {
    id: 1,
    type: "Organisasi",
    role: "Staff Ahli Komisi 2",
    org: "Dewan Perwakilan Mahasiswa (DPM) FMIPA UNNES",
    period: "Mar 2025 — Jan 2026",
    desc: {
      id: "Aktif dalam fungsi pengawasan dan aspirasi mahasiswa di Komisi 2, memperkuat kemampuan leadership dan organizational management.",
      en: "Active in the oversight and student-aspiration function of Commission 2, strengthening leadership and organizational management skills.",
    },
    image: "/images/experience/dpm-fungsionaris-fmipa-1.jpg",
  },
  {
    id: 2,
    type: "Organisasi",
    role: "Bendahara",
    org: "I-SECRET, ILKOM UNNES",
    period: "Mar 2025 — Jan 2026",
    desc: {
      id: "Mengelola keuangan organisasi dan mendukung koordinasi program kerja antar divisi.",
      en: "Managed the organization's finances and supported cross-division program coordination.",
    },
    image: "/images/experience/bendahara-i-secret-1.jpg",
  },
  {
    id: 3,
    type: "Event",
    role: "Panitia",
    org: "Festival Legislatif FMIPA UNNES",
    period: "Jun 2025",
    desc: {
      id: "Terlibat dalam penyelenggaraan event legislatif tingkat fakultas, mengasah leadership dan event management.",
      en: "Involved in organizing the faculty-level legislative event, sharpening leadership and event management skills.",
    },
    image: "/images/experience/panitia-festival-legislatif-1.jpg",
  },
  {
    id: 4,
    type: "Event",
    role: "Panitia",
    org: "Kongres Keluarga Mahasiswa (KKM) FMIPA UNNES",
    period: "Jan 2026",
    desc: {
      id: "Membantu penyelenggaraan kongres mahasiswa FMIPA, melatih organizational management dan critical thinking.",
      en: "Helped organize the FMIPA student congress, training organizational management and critical thinking.",
    },
    image: "/images/experience/panitia-kkm-fmipa.jpg",
  },
  {
    id: 5,
    type: "Event",
    role: "Peserta",
    org: "Training Pemira FMIPA UNNES",
    period: "Oct 2025",
    desc: {
      id: "Mengikuti pelatihan kepemiluan mahasiswa untuk memahami proses demokrasi kampus.",
      en: "Attended student-election training to understand the campus democratic process.",
    },
    image: "/images/experience/peserta-training-pemira-1.jpg",
  },
  {
    id: 6,
    type: "Event",
    role: "Peserta",
    org: "Training Legislatif Dasar, DPM FIK UNNES",
    period: "Sep 2025",
    desc: {
      id: "Pelatihan dasar keorganisasian legislatif mahasiswa tingkat universitas.",
      en: "Basic training on student legislative organization at the university level.",
    },
    image: "/images/experience/training-legislatif-dasar-fik-1.jpg",
  },
  {
    id: 7,
    type: "Event",
    role: "Penerima Penghargaan Technovatelite",
    org: "I-SECRET ILKOM UNNES",
    period: "Dec 2025",
    desc: {
      id: "Meraih penghargaan atas kontribusi dan inovasi dalam organisasi.",
      en: "Received an award for contribution and innovation within the organization.",
    },
    image: "/images/experience/penghargaan-technovatelite-1.jpg",
  },
  {
    id: 8,
    type: "Event",
    role: "Peserta",
    org: "Grand Launching Workshop PKM, I-SECRET ILKOM UNNES",
    period: "Oct 2024",
    desc: {
      id: "Mengikuti workshop penulisan Program Kreativitas Mahasiswa (PKM), melatih creativity dan critical thinking.",
      en: "Attended a Student Creativity Program (PKM) writing workshop, training creativity and critical thinking.",
    },
    image: "/images/experience/glw-pkm-2024.jpg",
  },
  {
    id: 9,
    type: "Event",
    role: "Peserta",
    org: "Seminar Nasional Ilmu Komputer (SNIK), UNNES",
    period: "Oct 2024",
    desc: {
      id: "Mengikuti seminar nasional bertema Artificial Intelligence dan tren ilmu komputer terkini.",
      en: "Attended a national seminar on Artificial Intelligence and current computer science trends.",
    },
    image: "/images/experience/snik-2024.jpg",
  },
  {
    id: 10,
    type: "Event",
    role: "Peserta",
    org: "Wadhwani Foundation Ignite Indonesia",
    period: "Mar 2026",
    desc: {
      id: "Program kewirausahaan nasional, mempelajari entrepreneurship dan business modeling.",
      en: "A national entrepreneurship program, learning entrepreneurship and business modeling.",
    },
    image: "/images/experience/wadhwani-ignite.jpg",
  },
  {
    id: 12,
    type: "Event",
    role: "Panitia",
    org: "Grand Launching Workshop PKM 2025, I-SECRET ILKOM UNNES",
    period: "Oct 2025",
    desc: {
      id: 'Terlibat sebagai panitia pada workshop bertema "INNOVACTION: Bridging Innovation and Critical Thinking for Meaningful Change Through PKM", melatih event management dan organizational management.',
      en: 'Served as a committee member for the workshop themed "INNOVACTION: Bridging Innovation and Critical Thinking for Meaningful Change Through PKM", training event management and organizational management.',
    },
    image: "/images/experience/glw-pkm-2025-panitia.jpg",
  },
  {
    id: 11,
    type: "Event",
    role: "Peserta",
    org: "DevCoach 172: Flutter — Dicoding Event",
    period: "Oct 2024",
    desc: {
      id: "Menghadiri sesi tentang meningkatkan pengalaman pengguna lewat lokalisasi dan aksesibilitas aplikasi.",
      en: "Attended a session on improving user experience through app localization and accessibility.",
    },
    image: "/images/experience/devcoach-flutter.jpg",
  },
];

// Sertifikasi — kategori dipakai untuk pengelompokan tampilan
export const certificationsData: {
  id: number;
  category: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
}[] = [
  {
    id: 1,
    category: "Data Science & AI",
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/images/certificates/dicoding-ml-pemula.jpg",
  },
  {
    id: 2,
    category: "Data Science & AI",
    title: "Belajar Fundamental Pemrosesan Data",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/images/certificates/dicoding-pemrosesan-data.jpg",
  },
  {
    id: 3,
    category: "Data Science & AI",
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/images/certificates/dicoding-genai-azure.jpg",
  },
  {
    id: 4,
    category: "Data Science & AI",
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/images/certificates/dicoding-ms-fabric.jpg",
  },
  {
    id: 5,
    category: "Data Science & AI",
    title: "IT — AI Agent for Programming",
    issuer: "IBM SkillsBuild & Hacktiv8 Indonesia",
    year: "2026",
    image: "/images/certificates/ibm-ai-agent-programming.jpg",
  },
  {
    id: 6,
    category: "Lainnya",
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding — Coding Camp powered by DBS Foundation",
    year: "2026",
    image: "/images/certificates/dicoding-financial-literacy.jpg",
  },
  {
    id: 7,
    category: "Data Science & AI",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2025",
    image: "/images/certificates/dicoding-ai-dasar.jpg",
  },
  {
    id: 8,
    category: "Lainnya",
    title: "Cloud Practitioner Essentials (AWS Cloud)",
    issuer: "Dicoding Indonesia",
    year: "2025",
    image: "/images/certificates/dicoding-aws-cloud.jpg",
  },
  {
    id: 9,
    category: "Pemrograman & Basis Data",
    title: "Python Fundamental for Data Science",
    issuer: "DQLab",
    year: "2025",
    image: "/images/certificates/dqlab-python-fundamental.jpg",
  },
  {
    id: 10,
    category: "Pemrograman & Basis Data",
    title: "Introduction to Data Science with Python",
    issuer: "DQLab",
    year: "2025",
    image: "/images/certificates/dqlab-intro-ds-python.jpg",
  },
  {
    id: 11,
    category: "Pemrograman & Basis Data",
    title: "Guide to Learn Python with AI at DQLab",
    issuer: "DQLab",
    year: "2025",
    image: "/images/certificates/dqlab-python-ai.jpg",
  },
  {
    id: 12,
    category: "Produktivitas & Desain",
    title: "Getting Started with Microsoft Excel",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certificates/coursera-excel.jpg",
  },
  {
    id: 13,
    category: "Produktivitas & Desain",
    title: "Creating Engaging Presentations with Mentimeter",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certificates/coursera-mentimeter.jpg",
  },
  {
    id: 14,
    category: "Produktivitas & Desain",
    title: "Develop a Company Website with Wix",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certificates/coursera-wix.jpg",
  },
  {
    id: 15,
    category: "Pemrograman & Basis Data",
    title: "Introduction to Basic Game Development using Scratch",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certificates/coursera-scratch.jpg",
  },
  {
    id: 16,
    category: "Data Science & AI",
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certificates/dicoding-data-science.jpg",
  },
  {
    id: 17,
    category: "Pemrograman & Basis Data",
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certificates/dicoding-sql.jpg",
  },
  {
    id: 18,
    category: "Pemrograman & Basis Data",
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certificates/dicoding-python.jpg",
  },
  {
    id: 19,
    category: "Pemrograman & Basis Data",
    title: "Memulai Pemrograman dengan C",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certificates/dicoding-c.jpg",
  },
];

/** Label kategori sertifikasi (dipakai sebagai kunci grouping) — bilingual untuk tampilan */
export const certificationCategoryLabels: Record<string, Bilingual> = {
  "Data Science & AI": { id: "Data Science & AI", en: "Data Science & AI" },
  "Pemrograman & Basis Data": {
    id: "Pemrograman & Basis Data",
    en: "Programming & Databases",
  },
  "Produktivitas & Desain": {
    id: "Produktivitas & Desain",
    en: "Productivity & Design",
  },
  Lainnya: { id: "Lainnya", en: "Others" },
};

// Proyek — diambil langsung dari repository publik GitHub (github.com/alnafs23).
// Semua proyek kuliah & dummy lainnya bisa diakses lengkap di profil GitHub.
export const projectCategories = [
  "Semua",
  "Analisis Data",
  "UI/UX Design",
  "Web Dev & Database",
] as const;

/** Label kategori proyek — bilingual untuk tampilan tab filter */
export const projectCategoryLabels: Record<string, Bilingual> = {
  Semua: { id: "Semua", en: "All" },
  "Analisis Data": { id: "Analisis Data", en: "Data Analysis" },
  "UI/UX Design": { id: "UI/UX Design", en: "UI/UX Design" },
  "Web Dev & Database": { id: "Web Dev & Database", en: "Web Dev & Database" },
};

export const projectsData: {
  id: number;
  category: (typeof projectCategories)[number];
  title: string;
  desc: Bilingual;
  tech: string[];
  link: string;
  image: string;
}[] = [
  {
    id: 1,
    category: "Analisis Data",
    title: "Analisis Risiko Kredit di Tengah Inflasi Rupiah",
    desc: {
      id: "Analisis korelasi inflasi rupiah terhadap risiko gagal bayar (TWP90) fintech P2P lending Indonesia, menggunakan data OJK & BPS.",
      en: "Analysis of the correlation between rupiah inflation and default risk (TWP90) of Indonesian P2P lending fintech, using OJK & BPS data.",
    },
    tech: ["Python", "Jupyter Notebook", "Data Analysis"],
    link: "https://github.com/alnafs23/Analisis-risiko-kredit-di-tengah-inflasi-rupiah",
    image: "",
  },
  {
    id: 2,
    category: "Analisis Data",
    title: "Customer Behavior Dashboard",
    desc: {
      id: "Dashboard interaktif untuk menganalisis perilaku dan churn pelanggan e-commerce.",
      en: "Interactive dashboard for analyzing e-commerce customer behavior and churn.",
    },
    tech: ["HTML", "Dashboard", "Data Viz"],
    link: "https://github.com/alnafs23/Customer-Behavior-Dashboard",
    image: "",
  },
  {
    id: 3,
    category: "Analisis Data",
    title: "Optimasi Dynamic Pricing E-Commerce",
    desc: {
      id: "Riset & eksperimen komputasi menerapkan prinsip kombinatorika (nCr & permutasi) untuk memaksimalkan pendapatan lewat sistem penetapan harga dinamis pada e-commerce berskala besar.",
      en: "Research & computational experiment applying combinatorial principles (nCr & permutations) to maximize revenue through a dynamic pricing system for large-scale e-commerce.",
    },
    tech: ["Python", "Pandas", "Combinatorial Algorithms"],
    link: "https://github.com/alnafs23/Implementasi-Algortima-Kombinatorial-untuk-Optimasi-Dynamic-Pricing-System-pada-E-Commerce-",
    image: "",
  },
  {
    id: 4,
    category: "Analisis Data",
    title: "Segmentasi Pelanggan",
    desc: {
      id: "Aplikasi Machine Learning yang mengelompokkan pelanggan ke dalam segmen-segmen bermakna untuk membantu bisnis mengambil keputusan pemasaran yang lebih cerdas dan berbasis data.",
      en: "A Machine Learning application that groups customers into meaningful segments to help businesses make smarter, data-driven marketing decisions.",
    },
    tech: ["Python", "Streamlit", "Scikit-learn"],
    link: "https://github.com/alnafs23/Segmentasi-Pelanggan",
    image: "",
  },
  {
    id: 5,
    category: "Analisis Data",
    title: "Visualisasi Penjualan E-Commerce",
    desc: {
      id: "Analisis dan visualisasi data penjualan e-commerce dengan Python — produk terlaris, tren omzet, dan kategori.",
      en: "Analysis and visualization of e-commerce sales data with Python — best-selling products, revenue trends, and categories.",
    },
    tech: ["Python", "Jupyter Notebook", "Visualization"],
    link: "https://github.com/alnafs23/Visualisasi-Penjualan-E---Commerce",
    image: "",
  },
  // --- UI/UX Design (Figma) ---
  {
    id: 6,
    category: "UI/UX Design",
    title: "Shopping App — E-Commerce Mobile UI",
    desc: {
      id: "Desain UI/UX aplikasi belanja kebutuhan sehari-hari & sembako lewat HP: mulai dari onboarding, autentikasi, katalog produk, keranjang, hingga checkout & pembayaran — dirancang agar proses beli barang jadi ringkas dan mudah dipakai.",
      en: "UI/UX design for a mobile grocery & daily-needs shopping app: from onboarding, authentication, product catalog, and cart, to checkout & payment — designed to make buying items quick and easy.",
    },
    tech: ["Figma", "UI/UX Design", "Mobile App"],
    link: "https://www.figma.com/proto/jWlVpF2UXJXxuqxDLuEEKF/Untitled?node-id=0-1&t=ocU3UBFTZrCmdb6S-1",
    image: "/images/projects/shopping-app-cover.png",
  },
  {
    id: 7,
    category: "UI/UX Design",
    title: "Wongja — Aplikasi Pencarian Kerja",
    desc: {
      id: "Desain UI/UX aplikasi pencarian kerja yang mempertemukan pencari kerja dengan lowongan/pemberi kerja: alur lengkap dari splash screen, onboarding, autentikasi, pencarian & pengajuan lowongan, hingga riwayat dan pembayaran.",
      en: "UI/UX design for a job-search app connecting job seekers with employers/openings: a complete flow from splash screen, onboarding, and authentication to job search & applications, history, and payment.",
    },
    tech: ["Figma", "UI/UX Design", "Mobile App"],
    link: "https://www.figma.com/proto/ji5ScIip1m983wxXJ1pX48/WongjaNes?node-id=3-1723&t=ocU3UBFTZrCmdb6S-1",
    image: "/images/projects/wongja-cover.png",
  },
  {
    id: 8,
    category: "UI/UX Design",
    title: "Sistem Penerimaan Mahasiswa Baru — UNNES",
    desc: {
      id: "Desain website pendaftaran mahasiswa baru (PMB): landing page informasi kampus, alur pendaftaran online, pemilihan jalur seleksi, pembayaran biaya pendaftaran, hingga kartu ujian & hasil seleksi.",
      en: "Website design for new-student admissions (PMB): campus info landing page, online registration flow, selection-track choice, registration fee payment, through to exam cards & admission results.",
    },
    tech: ["Figma", "UI/UX Design", "Web Design"],
    link: "https://www.figma.com/proto/3KorIWI9FC3wlQ3swL0hIl/Penerimaan-MHS-baru?node-id=0-1&t=monvJ662Ay8CouwK-1",
    image: "/images/projects/unnes-pmb-cover.png",
  },
  // --- Web Dev & Database ---
  {
    id: 9,
    category: "Web Dev & Database",
    title: "Hasil Bumi — E-Commerce Sayur & Monitoring Stok Multi-Cabang",
    desc: {
      id: "Platform e-commerce sayur & hasil bumi organik dengan fitur pemilihan cabang distribusi terdekat, katalog produk dengan kode SKU per cabang, serta pemantauan ketersediaan stok secara real-time di setiap cabang.",
      en: "An e-commerce platform for organic vegetables and produce, featuring nearest-branch selection, a product catalog with per-branch SKU codes, and real-time stock availability monitoring across branches.",
    },
    tech: ["Supabase", "Web App"],
    link: "https://hasilbumi-d749e.web.app/",
    image: "/images/projects/hasilbumi-cover.png",
  },
];
