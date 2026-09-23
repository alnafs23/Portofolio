import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolioData";
import CursorGlow from "@/components/CursorGlow";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: `${personalInfo.name} | ${personalInfo.role.id}`,
  description: personalInfo.aboutDescription.id,
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.role.id}`,
    description: personalInfo.aboutDescription.id,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

// Script kecil yang jalan sebelum React hydrate, supaya tema (dark/light)
// tersimpan dari localStorage langsung dipakai tanpa efek "flash" warna salah.
const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem("portfolio-theme");
    var theme = saved === "light" || saved === "dark"
      ? saved
      : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${jakartaSans.variable} ${jetbrainsMono.variable} font-sans bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <CursorGlow />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
