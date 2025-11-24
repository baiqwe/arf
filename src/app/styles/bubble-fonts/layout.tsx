import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bubble Adopt Me Fonts - Cute Circled Letters for Roblox",
  description: "Create bubble adopt me fonts with circled letters. Perfect for pet names and player names in Roblox Adopt Me. High compatibility and easy to use.",
  keywords: [
    "bubble adopt me fonts",
    "bubble fonts roblox",
    "circled letters adopt me",
    "bubble font generator",
    "cute adopt me fonts",
  ],
  openGraph: {
    title: "Bubble Adopt Me Fonts - Cute Circled Letters",
    description: "Create bubble adopt me fonts with circled letters. Perfect for Roblox Adopt Me names.",
    url: "https://adoptmefont.com/styles/bubble-fonts",
  },
  alternates: {
    canonical: "https://adoptmefont.com/styles/bubble-fonts",
  },
};

export default function BubbleFontsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


