import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roblox Safe Symbols - Cute Symbols for Adopt Me",
  description: "Find safe symbols that work in Roblox Adopt Me. Copy cute symbols like ✨ 🎀 🐾 💕 🌸. All symbols tested and labeled with safety status.",
  keywords: [
    "roblox safe symbols",
    "cute symbols for adopt me",
    "adopt me symbols that work",
    "roblox symbol picker",
    "anti-tag filter symbols",
  ],
  openGraph: {
    title: "Roblox Safe Symbols - Cute Symbols for Adopt Me",
    description: "Find safe symbols that work in Roblox. All symbols tested and labeled.",
    url: "https://adoptmefont.com/symbols",
  },
  alternates: {
    canonical: "https://adoptmefont.com/symbols",
  },
};

export default function SymbolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


