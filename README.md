# Portofolio Interaktif — Panduan Eksekusi 1 Hari

Proyek ini sudah **teruji build**-nya (TypeScript valid, tidak ada error) dan siap dijalankan. Semua bug dari blueprint awal sudah diperbaiki — lihat bagian "Perbaikan yang Dilakukan" di bawah.

## Jalankan di Komputer Anda

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Rencana 1 Hari (±6–7 jam kerja efektif)

**Jam 1 — Setup & jalankan**
- Install Node.js LTS jika belum ada.
- Extract project ini, jalankan `npm install` lalu `npm run dev`.
- Pastikan tampil normal di browser.

**Jam 2–3 — Personalisasi konten (WAJIB, ini yang paling penting)**
Buka `src/data/portfolioData.ts` dan ganti:
- `name`, `role`, `email`, `github`, `linkedin` dengan data asli Anda.
- `aboutDescription` dengan cerita singkat Anda sendiri (jangan biarkan teks generik).
- `skillsData` — sesuaikan dengan skill yang benar-benar Anda kuasai.
- `projectsData` — ganti 4 proyek contoh dengan proyek nyata Anda. Jika proyek kuliah/tugas, itu tetap valid — tulis dengan bahasa hasil/dampak (angka, metrik) seperti contohnya.

**Jam 4 — Cek tampilan di HP (mobile)**
- Buka DevTools (F12) → mode responsive → cek Navbar (sekarang sudah ada menu hamburger), Hero, dan Projects grid.
- Pastikan tidak ada teks terpotong.

**Jam 5 — Ganti favicon & metadata**
- Ganti `metadataBase` di `src/app/layout.tsx` dengan domain Anda nanti (boleh dilewati dulu jika belum punya domain).
- (Opsional) tambahkan file `src/app/icon.png` (512x512) — Next.js otomatis mendeteksinya sebagai favicon.

**Jam 6 — Push ke GitHub & Deploy ke Vercel**
```bash
git init
git add .
git commit -m "Portfolio ready"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```
- Buka [vercel.com](https://vercel.com) → login dengan GitHub → **Add New > Project** → pilih repo → **Deploy**.
- Tunggu ±1 menit, dapatkan URL live (misal `nama-anda.vercel.app`).

**Jam 7 — QA akhir**
- Cek semua link (email, GitHub, LinkedIn) benar-benar mengarah ke akun Anda.
- Cek di 2 browser berbeda (Chrome & Safari/Firefox) jika memungkinkan.
- Minta 1 teman membuka linknya dan kasih feedback singkat.

## Perbaikan yang Dilakukan dari Blueprint Awal

1. **File konfigurasi yang hilang** — blueprint awal hanya berisi kode komponen tanpa `package.json`, `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`. Tanpa ini proyek tidak akan pernah bisa di-`npm install` atau di-build. Semua sudah dibuat dan diuji.
2. **Navbar tidak responsif di mobile** — menu horizontal akan meluber/hilang di layar kecil. Sekarang ada tombol hamburger dengan dropdown menu animasi.
3. **Font tidak ter-mapping ke Tailwind** — `font-sans`/`font-mono` di kelas Tailwind tidak akan otomatis memakai font Google yang di-load `next/font`. Sudah dihubungkan lewat CSS variable di `tailwind.config.ts`.
4. **"Efek mengetik" yang dijanjikan tapi tidak diimplementasikan** — teks role di Hero sekarang benar-benar mengetik huruf demi huruf (typewriter effect), bukan teks statis biasa.
5. **Potensi hydration mismatch** — tahun copyright di footer (`new Date().getFullYear()`) sekarang dihitung setelah komponen mount, menghindari error React hydration.
6. **Dependensi keamanan** — versi Next.js awal (14.2.5) memiliki kerentanan keamanan yang diumumkan Des 2025. Sudah dinaikkan ke 14.2.35 (versi yang sudah dipatch).
7. **Aksesibilitas** — ditambahkan `aria-label` pada ikon-ikon tautan, dan focus ring yang terlihat saat navigasi keyboard (`globals.css`).
8. **`prefers-reduced-motion`** — animasi otomatis dimatikan untuk pengguna yang mengaktifkan pengaturan tersebut di OS mereka.
9. **Signature element baru** — ditambahkan progress bar tipis di bagian atas layar yang mengisi sesuai scroll (`ScrollProgress.tsx`), memberi sentuhan interaktif tanpa berlebihan.
10. **Metadata SEO dasar** — ditambahkan `<title>`, `description`, Open Graph tags, dan `viewport` yang sebelumnya tidak ada sama sekali.

## Update Terbaru: Section Baru untuk HRD

Ditambahkan 2 section baru + revisi Projects, semua datanya ada di `src/data/portfolioData.ts`:

- **`hardSkillsData`** — hard skill dikelompokkan per kategori (data & analytics, development, tools & workflow). Tampil di section About sebagai tab.
- **`softSkillsData`** — soft skill sekarang berupa kartu dengan judul + deskripsi singkat (bukan sekadar daftar kata), section baru "Soft Skills".
- **`experienceData`** — pengalaman organisasi/kepanitiaan, ditampilkan sebagai timeline di section baru "Pengalaman Organisasi". **Ini masih placeholder `[Nama Organisasi]` dll — WAJIB diganti dengan pengalaman asli Anda**, walau hanya jadi anggota UKM/panitia acara kecil, itu tetap bernilai bagi HRD.
- **`projectsData`** — setiap proyek sekarang punya field `category`: `"Proyek Kuliah"` atau `"Proyek Dummy"`. Badge kategori muncul di setiap kartu, dan ada filter tombol (Semua/Kuliah/Dummy) di atas grid proyek. Jangan ragu menandai proyek latihan mandiri sebagai "Dummy" — HRD justru menghargai inisiatif belajar mandiri, asal jujur.
- **`personalInfo.resumeUrl`** — jika Anda sudah punya CV PDF, taruh filenya di folder `public/` (misal `public/CV-NamaAnda.pdf`) lalu isi `resumeUrl: "/CV-NamaAnda.pdf"`. Tombol "Download CV" akan otomatis muncul di section About.

Urutan section sekarang: **Home → About (bio + hard skill) → Soft Skills → Pengalaman Organisasi → Projects (dengan filter) → Contact**. Menu navbar sudah otomatis mengikuti urutan ini.

## Update Terbaru: Data Asli Sudah Terisi

Konten portofolio sekarang sudah diisi dengan data asli Anda (Alina Fadlila Syifa) — bio, LinkedIn, GitHub, pengalaman organisasi (DPM FMIPA UNNES, I-SECRET), 10 riwayat organisasi/event, 16 sertifikasi, dan 5 proyek nyata yang diambil langsung dari repository GitHub Anda (`github.com/alnafs23`). Section Projects sekarang menautkan langsung ke tiap repository asli, plus tombol "Lihat Semua Proyek di GitHub" di bagian bawah.

**Yang masih perlu dicek/disesuaikan manual:**
- Field `desc` di 2 proyek (`Implementasi-Algortima-Kombinatorial...` dan `Segmentasi-Pelanggan`) memakai deskripsi generik karena repo GitHub-nya tidak punya deskripsi tertulis — silakan perbarui dengan penjelasan singkat aslinya di `src/data/portfolioData.ts`.
- Urutan/isi sertifikasi boleh dikurangi kalau dirasa terlalu panjang untuk satu halaman — prioritaskan yang paling relevan dengan Data Analyst/BI (Machine Learning, SQL, Data Science, Microsoft Fabric) di posisi atas.

## Update Terbaru: Tempat untuk Gambar/Foto

Sekarang ada **tempat khusus (image slot)** untuk semua jenis gambar. Selama field-nya masih kosong (`""`), akan otomatis tampil kotak placeholder bergaris putus-putus bertuliskan jenis gambar yang dibutuhkan — jadi Anda tahu persis di mana harus menaruh foto apa, dan situs tidak akan pernah menampilkan ikon gambar rusak.

Cara mengisi gambar:
1. Taruh file gambar (jpg/png) di folder yang sesuai:
   - `public/images/experience/` — foto kegiatan organisasi & event
   - `public/images/certificates/` — scan/screenshot sertifikat
   - `public/images/projects/` — screenshot proyek
   - `public/` — foto profil Anda (langsung di root public, misal `public/foto-profil.jpg`)
2. Buka `src/data/portfolioData.ts`, isi field `image`/`photoUrl` yang sesuai dengan path-nya, contoh:
   ```ts
   photoUrl: "/foto-profil.jpg",
   // ...
   image: "/images/experience/panitia-seminar-2024.jpg",
   ```
3. Simpan — gambar langsung muncul menggantikan placeholder, tanpa perlu ubah kode lain.

**Lokasi slot gambar yang tersedia:**
- Foto profil Anda → section About (bulat, di samping judul "Tentang Saya")
- Foto tiap pengalaman organisasi/event → section "Organisasi & Event" (klik filter Organisasi/Event untuk memisahkan)
- Gambar sertifikat → section "Sertifikasi", bisa diklik untuk memperbesar (lightbox)
- Screenshot tiap proyek → thumbnail kecil di pojok kartu proyek

## Yang Masih Perlu Anda Lakukan Sendiri

- **Konten asli** — ini yang paling menentukan kualitas portofolio, bukan kode. Kode sudah 100% siap.
- **Foto/CV** (opsional) — jika ingin menambahkan foto profil atau tombol download CV, taruh file di folder `public/` lalu referensikan dengan `<img src="/foto.jpg" />`.
- **Domain kustom** (opsional) — bisa dihubungkan lewat dashboard Vercel setelah deploy.
