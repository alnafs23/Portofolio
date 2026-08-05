export const personalInfo = {
  name: "Alina Fadlila Syifa",
  role: "Information Systems Student | Aspiring Data Analyst & BI",
  aboutTagline:
    "Turning data into structured, actionable business insight.",
  aboutDescription:
    "Information Systems student at Universitas Negeri Semarang, focusing on systems analysis, software development, and business management. Experienced in academic projects spanning information systems development, database management (SQL), Python programming, and design using Figma and Canva. Active in several campus organizations, sharpening skills in management, teamwork, and visual communication. Open to networking and discussing topics around technology, information systems, and business.",
  email: "sifaalina80@gmail.com",
  whatsapp: "6285147016817", // format internasional, tanpa tanda + atau spasi
  github: "https://github.com/alnafs23",
  linkedin: "https://www.linkedin.com/in/alina-fadlila-syifa-3549a9321",
  // Belum ada file CV — isi jika sudah punya, taruh PDF-nya di /public
  resumeUrl: "",
  photoUrl: "/foto-profil.jpg",
};

// Hard skill & tools — disusun berdasarkan sertifikasi & pengalaman proyek nyata
export const hardSkillsData = {
  "data & analytics": [
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
      desc: "Dasar-dasar ML untuk pemula (Dicoding) — klasifikasi dan prediksi sederhana.",
    },
    {
      name: "Microsoft Excel",
      desc: "Pengolahan data dan pelaporan menggunakan fungsi dan tabel Excel.",
    },
    {
      name: "Microsoft Fabric",
      desc: "Penerapan data science pada platform Microsoft Fabric untuk analitik terintegrasi.",
    },
  ],
  programming: [
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
  ],
  "design & presentation": [
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
// Gambar diambil dari sertifikat asli yang diunggah.
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
    org: "Festival Legislatif FMIPA UNNES — LegisTalks",
    period: "Jun 2025",
    desc: "Panitia kegiatan bertema peningkatan partisipasi dan kesadaran demokrasi lewat pendidikan politik, diselenggarakan DPM FMIPA UNNES.",
    image: "/images/experience/panitia-festival-legislatif-1.jpg",
  },
  {
    id: 4,
    type: "Event",
    role: "Panitia",
    org: "Kongres Keluarga Mahasiswa (KKM) FMIPA UNNES",
    period: "Jan 2026",
    desc: "Panitia kongres bertema optimalisasi peran keluarga mahasiswa menuju organisasi yang progresif, kritis, dan berintegritas.",
    image: "/images/experience/panitia-kkm-fmipa-1.jpg",
  },
  {
    id: 5,
    type: "Event",
    role: "Peserta",
    org: "Training Pemira, DPM FMIPA UNNES",
    period: "Okt 2025",
    desc: "Pelatihan bertema menjaga netralitas Pemira sebagai wujud demokrasi mahasiswa di tengah dinamika politik.",
    image: "/images/experience/peserta-training-pemira-1.jpg",
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
    period: "Des 2025",
    desc: "Meraih penghargaan sebagai salah satu anggota terbaik Divisi Pengurus Harian I-SECRET Ilmu Komputer UNNES periode 2025.",
    image: "/images/experience/penghargaan-technovatelite-1.jpg",
  },
  {
    id: 8,
    type: "Event",
    role: "Peserta",
    org: "Grand Launching Workshop PKM, I-SECRET ILKOM UNNES",
    period: "Okt 2024",
    desc: "Mengikuti workshop penulisan Program Kreativitas Mahasiswa (PKM), melatih creativity dan critical thinking.",
    image: "",
  },
  {
    id: 9,
    type: "Event",
    role: "Peserta",
    org: "Seminar Nasional Ilmu Komputer (SNIK), UNNES",
    period: "Okt 2024",
    desc: "Mengikuti seminar nasional bertema Artificial Intelligence dan tren ilmu komputer terkini.",
    image: "/images/experience/peserta-snik-1.jpg",
  },
  {
    id: 10,
    type: "Event",
    role: "Peserta",
    org: "Wadhwani Foundation Ignite Indonesia",
    period: "Mar 2026",
    desc: "Menyelesaikan seluruh coursework program kewirausahaan nasional, meliputi ideation, business modeling, dan financial planning.",
    image: "/images/experience/wadhwani-ignite-1.jpg",
  },
  {
    id: 11,
    type: "Event",
    role: "Peserta",
    org: "DevCoach 172: Flutter — Dicoding Event, Bandung",
    period: "Okt 2024",
    desc: "Menghadiri sesi bertema peningkatan pengalaman pengguna lewat lokalisasi dan aksesibilitas aplikasi.",
    image: "/images/experience/devcoach-172-flutter-1.jpg",
  },
];

// Sertifikasi teknis & kursus — gambar diambil dari sertifikat asli yang diunggah.
export const certificationsData = [
  {
    id: 1,
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/images/certificates/ml-pemula-1.jpg",
  },
  {
    id: 2,
    title: "Belajar Fundamental Pemrosesan Data",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/images/certificates/fundamental-pemrosesan-data-1.jpg",
  },
  {
    id: 3,
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/images/certificates/genai-azure-1.jpg",
  },
  {
    id: 4,
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/images/certificates/data-science-fabric-1.jpg",
  },
  {
    id: 5,
    title: "IT — AI Agent for Programming",
    issuer: "IBM SkillsBuild & Hacktiv8 Indonesia",
    year: "2026",
    image: "",
  },
  {
    id: 6,
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "",
  },
  {
    id: 7,
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certificates/sql-dasar-1.jpg",
  },
  {
    id: 8,
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certificates/python-programming-1.jpg",
  },
  {
    id: 9,
    title: "Memulai Pemrograman dengan C",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certificates/c-programming-1.jpg",
  },
  {
    id: 10,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2025",
    image: "/images/certificates/belajar-dasar-ai-1.jpg",
  },
  {
    id: 11,
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding Indonesia",
    year: "2025",
    image: "/images/certificates/aws-cloud-practitioner-1.jpg",
  },
  {
    id: 12,
    title: "Python Fundamental for Data Science",
    issuer: "DQLab",
    year: "2025",
    image: "/images/certificates/dqlab-python-fundamental-1.jpg",
  },
  {
    id: 13,
    title: "Introduction to Data Science with Python",
    issuer: "DQLab",
    year: "2025",
    image: "/images/certificates/dqlab-intro-datascience-python-1.jpg",
  },
  {
    id: 14,
    title: "Guide to Learn Python with AI at DQLab",
    issuer: "DQLabs",
    year: "2025",
    image: "",
  },
  {
    id: 15,
    title: "Getting Started with Microsoft Excel",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certificates/coursera-excel-1.jpg",
  },
  {
    id: 16,
    title: "Creating Engaging Presentations with Mentimeter",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certificates/coursera-mentimeter-1.jpg",
  },
  {
    id: 17,
    title: "Develop a Company Website with Wix",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certificates/coursera-wix-website-1.jpg",
  },
  {
    id: 18,
    title: "Introduction to Basic Game Development using Scratch",
    issuer: "Coursera",
    year: "2025",
    image: "",
  },
];

// Proyek — diambil langsung dari repository publik GitHub (github.com/alnafs23).
// Gambar pakai preview otomatis GitHub (opengraph.githubassets.com), akan tampil
// begitu situs dibuka lewat internet normal. Semua proyek kuliah & dummy lainnya
// bisa diakses lengkap di profil GitHub.
export const projectsData = [
  {
    id: 1,
    title: "Analisis Risiko Kredit di Tengah Inflasi Rupiah",
    desc: "Analisis korelasi inflasi rupiah terhadap risiko gagal bayar (TWP90) fintech P2P lending Indonesia, menggunakan data OJK & BPS.",
    tech: ["Python", "Jupyter Notebook", "Data Analysis"],
    size: "md:col-span-2 row-span-1",
    link: "https://github.com/alnafs23/Analisis-risiko-kredit-di-tengah-inflasi-rupiah",
    image:
      "https://opengraph.githubassets.com/1/alnafs23/Analisis-risiko-kredit-di-tengah-inflasi-rupiah",
  },
  {
    id: 2,
    title: "Customer Behavior Dashboard",
    desc: "Dashboard interaktif untuk menganalisis perilaku dan churn pelanggan e-commerce.",
    tech: ["HTML", "Dashboard", "Data Viz"],
    size: "md:col-span-1 row-span-1",
    link: "https://github.com/alnafs23/Customer-Behavior-Dashboard",
    image: "https://opengraph.githubassets.com/1/alnafs23/Customer-Behavior-Dashboard",
  },
  {
    id: 3,
    title: "Optimasi Dynamic Pricing E-Commerce",
    desc: "Riset & eksperimen komputasi menerapkan prinsip kombinatorika (nCr & permutasi) untuk memaksimalkan pendapatan lewat sistem penetapan harga dinamis pada e-commerce berskala besar.",
    tech: ["Python", "Pandas", "Combinatorial Algorithms"],
    size: "md:col-span-1 row-span-1",
    link: "https://github.com/alnafs23/Implementasi-Algortima-Kombinatorial-untuk-Optimasi-Dynamic-Pricing-System-pada-E-Commerce-",
    image:
      "https://opengraph.githubassets.com/1/alnafs23/Implementasi-Algortima-Kombinatorial-untuk-Optimasi-Dynamic-Pricing-System-pada-E-Commerce-",
  },
  {
    id: 4,
    title: "Segmentasi Pelanggan",
    desc: "Aplikasi Machine Learning yang mengelompokkan pelanggan ke dalam segmen-segmen bermakna untuk membantu bisnis mengambil keputusan pemasaran yang lebih cerdas dan berbasis data.",
    tech: ["Python", "Streamlit", "Scikit-learn"],
    size: "md:col-span-1 row-span-1",
    link: "https://github.com/alnafs23/Segmentasi-Pelanggan",
    image: "https://opengraph.githubassets.com/1/alnafs23/Segmentasi-Pelanggan",
  },
  {
    id: 5,
    title: "Visualisasi Penjualan E-Commerce",
    desc: "Analisis dan visualisasi data penjualan e-commerce dengan Python — produk terlaris, tren omzet, dan kategori.",
    tech: ["Python", "Jupyter Notebook", "Visualization"],
    size: "md:col-span-2 row-span-1",
    link: "https://github.com/alnafs23/Visualisasi-Penjualan-E---Commerce",
    image:
      "https://opengraph.githubassets.com/1/alnafs23/Visualisasi-Penjualan-E---Commerce",
  },
];
