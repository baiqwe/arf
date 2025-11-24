import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preppy Adopt Me Fonts Generator - Aesthetic Names with Symbols",
  description: "Create preppy adopt me fonts with cute symbols ✨ 🎀 🐾. Generate aesthetic roblox names with preppy style. Safe symbols that work in Roblox.",
  keywords: [
    "preppy adopt me fonts",
    "preppy roblox fonts",
    "aesthetic adopt me names",
    "preppy aesthetic fonts",
    "cute symbols for adopt me",
  ],
  openGraph: {
    title: "Preppy Adopt Me Fonts Generator - Aesthetic Names",
    description: "Create preppy adopt me fonts with cute symbols. Perfect for aesthetic roblox names.",
    url: "https://adoptmefont.com/preppy-font-generator",
  },
  alternates: {
    canonical: "https://adoptmefont.com/preppy-font-generator",
  },
};

export default function PreppyFontGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


