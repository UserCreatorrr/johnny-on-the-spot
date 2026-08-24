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

    // The skip link lives in the shared root layout, so translate it here.
    const skip = document.querySelector<HTMLAnchorElement>(".skip-to-content");
    const prevSkip = skip?.textContent;
    if (skip && locale === "en") skip.textContent = "Skip to content";

    return () => {
      document.documentElement.lang = prev || "es";
      if (skip && prevSkip) skip.textContent = prevSkip;
    };
  }, [locale]);
  return null;
}
