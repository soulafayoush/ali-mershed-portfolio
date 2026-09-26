"use client";

import React, { createContext, useContext, useEffect, useCallback } from "react";
import { dictionaries, type Dict, type Locale } from "@/lib/i18n/dict";

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dict;
  toggle: () => void;
  setLocale: (l: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "ali-portfolio-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "ar" || saved === "en") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(saved);
        return;
      }
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("ar")) {
        setLocaleState("ar");
      }
    } catch { /* noop */ }
  }, []);

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    try { window.localStorage.setItem(STORAGE_KEY, locale); } catch { /* noop */ }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggle = useCallback(() => setLocaleState((p) => (p === "en" ? "ar" : "en")), []);

  const value: LanguageContextValue = {
    locale,
    dir: locale === "ar" ? "rtl" : "ltr",
    t: dictionaries[locale],
    toggle,
    setLocale,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside a LanguageProvider");
  return ctx;
}
