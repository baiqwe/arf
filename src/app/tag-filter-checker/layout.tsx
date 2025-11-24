import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roblox Tag Filter Checker - Test Your Font Names",
  description: "Test if your adopt me font name will work in Roblox. Check for filtered characters and get safety scores. Free roblox font tester.",
  keywords: [
    "roblox tag filter checker",
    "adopt me font tester",
    "roblox font checker",
    "anti-tag filter",
    "roblox name tester",
  ],
  openGraph: {
    title: "Roblox Tag Filter Checker - Test Your Font Names",
    description: "Test if your font name will work in Roblox before using it.",
    url: "https://adoptmefont.com/tag-filter-checker",
  },
  alternates: {
    canonical: "https://adoptmefont.com/tag-filter-checker",
  },
};

export default function TagFilterCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


