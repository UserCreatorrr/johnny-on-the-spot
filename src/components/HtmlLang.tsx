"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

/**
 * Updates <html lang> on the client for locale sub-trees, since the App Router
 * root layout owns the <html> element. Restores Spanish on unmount.
 */
export default function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = locale;
    return () => {
      document.documentElement.lang = prev || "es";
    };
  }, [locale]);
  return null;
}
