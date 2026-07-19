export const personalInfo = {
  name: "Alina Fadlila Syifa",
  role: "Mahasiswa Sistem Informasi, Universitas Negeri Semarang",
  heroQuote: "Mengubah data mentah menjadi keputusan yang tepat sasaran.",
  aboutTagline:
    "Mengubah data menjadi wawasan bisnis yang terstruktur dan dapat ditindaklanjuti.",
  aboutDescription:
    "Mahasiswa Sistem Informasi di Universitas Negeri Semarang, dengan fokus pada analisis sistem, pengembangan perangkat lunak, dan manajemen bisnis. Berpengalaman dalam proyek akademik seputar pengembangan sistem informasi, manajemen basis data (SQL), pemrograman Python, serta desain menggunakan Figma dan Canva. Aktif di beberapa organisasi kampus untuk mengasah kemampuan manajemen, kerja sama tim, dan komunikasi visual.",
  email: "sifaalina80@gmail.com",
  whatsapp: "6285147016817",
  whatsappDisplay: "+62 851-4701-6817",
  github: "https://github.com/alnafs23",
  githubHandle: "alnafs23",
  linkedin: "https://www.linkedin.com/in/alina-fadlila-syifa-3549a9321",
  // Opsional: isi jika sudah punya CV, lalu taruh file PDF-nya di folder /public
  resumeUrl: "",
  // Taruh foto profil di /public (misal /public/foto-profil.jpg) lalu isi path-nya di sini
  photoUrl: "/foto-profil.jpg",
};

// Angka ringkas untuk kredibilitas cepat di mata HRD (ditampilkan di Hero/About)
export const statsData = [
  { value: "19+", label: "Sertifikasi" },
  { value: "10", label: "Organisasi & Event" },
  { value: "5", label: "Proyek Data" },
];

// Ikon untuk grid "Tools & Teknologi" — palet monokrom/perak menyesuaikan tema hologram
export const toolsData = [
  { name: "Python", category: "Bahasa Pemrograman", color: "#e5e7eb" },
  { name: "SQL", category: "Basis Data", color: "#e5e7eb" },
  { name: "Machine Learning", category: "Ilmu Data", color: "#ffffff" },
  { name: "Microsoft Excel", category: "Alat Data", color: "#e5e7eb" },
  { name: "Microsoft Fabric", category: "Platform Analitik", color: "#ffffff" },
  { name: "C Programming", category: "Bahasa Pemrograman", color: "#e5e7eb" },
  { name: "Figma", category: "Aplikasi Desain", color: "#ffffff" },
  { name: "Canva", category: "Aplikasi Desain", color: "#e5e7eb" },
  { name: "Mentimeter", category: "Presentasi", color: "#ffffff" },
  { name: "GitHub", category: "Repositori", color: "#ffffff" },
];

// Hard skill & tools — disusun berdasarkan sertifikasi & pengalaman proyek nyata
export const hardSkillsData = {
  "data & analitik": [
    {
      name: "Python (Data Science)",
      desc: "Data cleaning, EDA, dan visualisasi — dipakai di proyek analisis penjualan & segmentasi pelanggan.",
    },
    {
      name: "SQL",
      desc: "Query dasar-menengah untuk mengambil dan mengolah data dari database relasional.",
    },
    {
      name: "Machine Learning",
      desc: "Dasar-dasar ML untuk pemula (Dicoding) — klasifikasi, regresi, dan clustering.",
    },
    {
      name: "Microsoft Excel",
      desc: "Pengolahan data dan pelaporan menggunakan fungsi dan tabel Excel.",
    },
    {
      name: "Microsoft Fabric",
      desc: "Penerapan data science end-to-end pada platform Microsoft Fabric.",
    },
    {
      name: "Cloud (AWS)",
      desc: "Cloud Practitioner Essentials — dasar layanan, infrastruktur, dan keamanan AWS.",
    },
  ],
  pemrograman: [
    {
      name: "Python",
      desc: "Bahasa utama untuk analisis data, dari fundamental hingga penerapan AI sederhana.",
    },
    {
      name: "C Programming",
      desc: "Dasar pemrograman prosedural sebagai fondasi logika komputasi.",
    },
    {
      name: "Web Development",
      desc: "Membangun website sederhana (termasuk pengalaman dengan Wix) dan dashboard berbasis HTML.",
    },
    {
      name: "Generative AI",
      desc: "Membangun aplikasi Gen AI dasar dengan Microsoft Azure AI Foundry.",
    },
  ],
  "desain & presentasi": [
    {
      name: "Figma",
      desc: "Merancang wireframe dan tampilan antarmuka untuk kebutuhan proyek sistem informasi.",
    },
    {
      name: "Canva",
      desc: "Desain visual untuk materi organisasi, presentasi, dan dokumentasi kegiatan.",
    },
    {
      name: "Mentimeter",
      desc: "Membuat presentasi interaktif yang melibatkan audiens secara langsung.",
    },
  ],
};

// Soft skill — dari pengalaman organisasi dan program yang diikuti
export const softSkillsData = [
  {
    title: "Leadership & Organizational Management",
    desc: "Diasah lewat peran aktif di DPM FMIPA UNNES dan I-SECRET ILKOM UNNES.",
  },
  {
    title: "Teamwork & Collaboration",
    desc: "Terbiasa bekerja dalam tim lintas divisi untuk mengerjakan proyek dan program kerja organisasi.",
  },
  {
    title: "Systems & Critical Thinking",
    desc: "Terlatih menganalisis kebutuhan sistem dan mengevaluasi permasalahan secara terstruktur.",
  },
  {
    title: "Visual Communication",
    desc: "Menerjemahkan ide dan data menjadi desain visual yang mudah dipahami lewat Figma & Canva.",
  },
  {
    title: "Business Acumen",
    desc: "Dibentuk melalui program kewirausahaan Wadhwani Foundation Ignite Indonesia.",
  },
  {
    title: "Event & Project Management",
    desc: "Pengalaman langsung sebagai panitia inti di beberapa event tingkat fakultas dan universitas.",
  },
];

// Pengalaman organisasi & event — type membedakan tampilan (Organisasi vs Event)
export const experienceData = [
  {
    id: 1,
    type: "Organisasi",
    role: "Staff Ahli Komisi 2",
    org: "Dewan Perwakilan Mahasiswa (DPM) FMIPA UNNES",
    period: "Mar 2025 — Jan 2026",
    desc: "Aktif dalam fungsi pengawasan dan aspirasi mahasiswa di Komisi 2, memperkuat kemampuan leadership dan organizational management.",
    image: "",
  },
  {
    id: 2,
    type: "Organisasi",
    role: "Bendahara",
    org: "I-SECRET, ILKOM UNNES",
    period: "Mar 2025 — Jan 2026",
    desc: "Mengelola keuangan organisasi dan mendukung koordinasi program kerja antar divisi.",
    image: "",
  },
  {
    id: 3,
    type: "Event",
    role: "Panitia",
    org: "Festival Legislatif FMIPA UNNES",
    period: "Jun 2025",
    desc: "Terlibat dalam penyelenggaraan event legislatif tingkat fakultas, mengasah leadership dan event management.",
    image: "",
  },
  {
    id: 4,
    type: "Event",
    role: "Panitia",
    org: "Kongres Keluarga Mahasiswa (KKM) FMIPA UNNES",
    period: "Jan 2026",
    desc: "Membantu penyelenggaraan kongres mahasiswa FMIPA, melatih organizational management dan critical thinking.",
    image: "/images/experience/panitia-kkm-fmipa.jpg",
  },
  {
    id: 5,
    type: "Event",
    role: "Peserta",
    org: "Training Pemira FMIPA UNNES",
    period: "Oct 2025",
    desc: "Mengikuti pelatihan kepemiluan mahasiswa untuk memahami proses demokrasi kampus.",
    image: "",
  },
  {
    id: 6,
    type: "Event",
    role: "Peserta",
    org: "Training Legislatif Dasar, DPM FIK UNNES",
    period: "Sep 2025",
    desc: "Pelatihan dasar keorganisasian legislatif mahasiswa tingkat universitas.",
    image: "",
  },
  {
    id: 7,
    type: "Event",
    role: "Penerima Penghargaan Technovatelite",
    org: "I-SECRET ILKOM UNNES",
    period: "Dec 2025",
    desc: "Meraih penghargaan atas kontribusi dan inovasi dalam organisasi.",
    image: "",
  },
  {
    id: 8,
    type: "Event",
    role: "Peserta",
    org: "Grand Launching Workshop PKM, I-SECRET ILKOM UNNES",
    period: "Oct 2024",
    desc: "Mengikuti workshop penulisan Program Kreativitas Mahasiswa (PKM), melatih creativity dan critical thinking.",
    image: "/images/experience/glw-pkm-2024.jpg",
  },
  {
    id: 9,
    type: "Event",
    role: "Peserta",
    org: "Seminar Nasional Ilmu Komputer (SNIK), UNNES",
    period: "Oct 2024",
    desc: "Mengikuti seminar nasional bertema Artificial Intelligence dan tren ilmu komputer terkini.",
    image: "/images/experience/snik-2024.jpg",
  },
  {
    id: 10,
    type: "Event",
    role: "Peserta",
    org: "Wadhwani Foundation Ignite Indonesia",
    period: "Mar 2026",
    desc: "Program kewirausahaan nasional, mempelajari entrepreneurship dan business modeling.",
    image: "/images/experience/wadhwani-ignite.jpg",
  },
  {
    id: 11,
    type: "Event",
    role: "Peserta",
    org: "DevCoach 172: Flutter — Dicoding Event",
    period: "Oct 2024",
    desc: "Menghadiri sesi tentang meningkatkan pengalaman pengguna lewat lokalisasi dan aksesibilitas aplikasi.",
    image: "/images/experience/devcoach-flutter.jpg",
  },
];

// Sertifikasi teknis & kursus — gambar diambil langsung dari sertifikat asli
export const certificationsData = [
  {
    id: 1,
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/images/certificates/dicoding-ml-pemula.jpg",
  },
  {
    id: 2,
    title: "Belajar Fundamental Pemrosesan Data",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/images/certificates/dicoding-pemrosesan-data.jpg",
  },
  {
    id: 3,
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/images/certificates/dicoding-genai-azure.jpg",
  },
  {
    id: 4,
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/images/certificates/dicoding-ms-fabric.jpg",
  },
  {
    id: 5,
    title: "IT — AI Agent for Programming",
    issuer: "IBM SkillsBuild & Hacktiv8 Indonesia",
    year: "2026",
    image: "/images/certificates/ibm-ai-agent-programming.jpg",
  },
  {
    id: 6,
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding — Coding Camp powered by DBS Foundation",
    year: "2026",
    image: "/images/certificates/dicoding-financial-literacy.jpg",
  },
  {
    id: 7,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2025",
    image: "/images/certificates/dicoding-ai-dasar.jpg",
  },
  {
    id: 8,
    title: "Cloud Practitioner Essentials (AWS Cloud)",
    issuer: "Dicoding Indonesia",
    year: "2025",
    image: "/images/certificates/dicoding-aws-cloud.jpg",
  },
  {
    id: 9,
    title: "Python Fundamental for Data Science",
    issuer: "DQLab",
    year: "2025",
    image: "/images/certificates/dqlab-python-fundamental.jpg",
  },
  {
    id: 10,
    title: "Introduction to Data Science with Python",
    issuer: "DQLab",
    year: "2025",
    image: "/images/certificates/dqlab-intro-ds-python.jpg",
  },
  {
    id: 11,
    title: "Guide to Learn Python with AI at DQLab",
    issuer: "DQLab",
    year: "2025",
    image: "/images/certificates/dqlab-python-ai.jpg",
  },
  {
    id: 12,
    title: "Getting Started with Microsoft Excel",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certificates/coursera-excel.jpg",
  },
  {
    id: 13,
    title: "Creating Engaging Presentations with Mentimeter",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certificates/coursera-mentimeter.jpg",
  },
  {
    id: 14,
    title: "Develop a Company Website with Wix",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certificates/coursera-wix.jpg",
  },
  {
    id: 15,
    title: "Introduction to Basic Game Development using Scratch",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certificates/coursera-scratch.jpg",
  },
  {
    id: 16,
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certificates/dicoding-data-science.jpg",
  },
  {
    id: 17,
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certificates/dicoding-sql.jpg",
  },
  {
    id: 18,
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certificates/dicoding-python.jpg",
  },
  {
    id: 19,
    title: "Memulai Pemrograman dengan C",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certificates/dicoding-c.jpg",
  },
];

// Proyek — diambil langsung dari repository publik GitHub (github.com/alnafs23).
// Semua proyek kuliah & dummy lainnya bisa diakses lengkap di profil GitHub.
export const projectsData = [
  {
    id: 1,
    title: "Analisis Risiko Kredit di Tengah Inflasi Rupiah",
    desc: "Analisis korelasi inflasi rupiah terhadap risiko gagal bayar (TWP90) fintech P2P lending Indonesia, menggunakan data OJK & BPS.",
    tech: ["Python", "Jupyter Notebook", "Data Analysis"],
    link: "https://github.com/alnafs23/Analisis-risiko-kredit-di-tengah-inflasi-rupiah",
    image: "",
  },
  {
    id: 2,
    title: "Customer Behavior Dashboard",
    desc: "Dashboard interaktif untuk menganalisis perilaku dan churn pelanggan e-commerce.",
    tech: ["HTML", "Dashboard", "Data Viz"],
    link: "https://github.com/alnafs23/Customer-Behavior-Dashboard",
    image: "",
  },
  {
    id: 3,
    title: "Optimasi Dynamic Pricing E-Commerce",
    desc: "Riset & eksperimen komputasi menerapkan prinsip kombinatorika (nCr & permutasi) untuk memaksimalkan pendapatan lewat sistem penetapan harga dinamis pada e-commerce berskala besar.",
    tech: ["Python", "Pandas", "Combinatorial Algorithms"],
    link: "https://github.com/alnafs23/Implementasi-Algortima-Kombinatorial-untuk-Optimasi-Dynamic-Pricing-System-pada-E-Commerce-",
    image: "",
  },
  {
    id: 4,
    title: "Segmentasi Pelanggan",
    desc: "Aplikasi Machine Learning yang mengelompokkan pelanggan ke dalam segmen-segmen bermakna untuk membantu bisnis mengambil keputusan pemasaran yang lebih cerdas dan berbasis data.",
    tech: ["Python", "Streamlit", "Scikit-learn"],
    link: "https://github.com/alnafs23/Segmentasi-Pelanggan",
    image: "",
  },
  {
    id: 5,
    title: "Visualisasi Penjualan E-Commerce",
    desc: "Analisis dan visualisasi data penjualan e-commerce dengan Python — produk terlaris, tren omzet, dan kategori.",
    tech: ["Python", "Jupyter Notebook", "Visualization"],
    link: "https://github.com/alnafs23/Visualisasi-Penjualan-E---Commerce",
    image: "",
  },
];
