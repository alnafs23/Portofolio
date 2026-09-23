"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { translations } from "@/data/translations";

export type Lang = "id" | "en";

/** Field bilingual sederhana — dipakai di seluruh portfolioData.ts */
export type Bilingual = { id: string; en: string };

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** Ambil teks sesuai bahasa aktif dari field bilingual { id, en } */
  pick: (field: Bilingual) => string;
  /** Kamus string UI (navbar, tombol, judul section, dll) */
  t: typeof translations.id;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "id" || saved === "en") {
      setLangState(saved);
    } else {
      // Default: coba deteksi dari bahasa browser, fallback ke Indonesia
      const browserLang = navigator.language?.toLowerCase() ?? "";
      setLangState(browserLang.startsWith("en") ? "en" : "id");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const toggleLang = () => setLang(lang === "id" ? "en" : "id");

  const pick = (field: Bilingual) => field[lang];

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, pick, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage harus dipakai di dalam <LanguageProvider>");
  }
  return ctx;
}
