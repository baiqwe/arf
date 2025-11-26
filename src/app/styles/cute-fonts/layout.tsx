import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cute Adopt Me Fonts - Hearts & Cute Decorations for Roblox",
  description: "Create cute adopt me fonts with hearts and adorable decorations. Perfect for pet names and player names in Roblox Adopt Me. Cute, aesthetic, and highly compatible.",
  keywords: [
    "cute adopt me fonts",
    "cute fonts roblox",
    "hearts adopt me",
    "cute font generator",
    "adorable adopt me fonts",
    "heart fonts roblox",
  ],
  openGraph: {
    title: "Cute Adopt Me Fonts - Hearts & Cute Decorations",
    description: "Create cute adopt me fonts with hearts and adorable decorations. Perfect for Roblox Adopt Me names.",
    url: "https://adoptmefont.com/styles/cute-fonts",
  },
  alternates: {
    canonical: "https://adoptmefont.com/styles/cute-fonts",
  },
};

export default function CuteFontsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

