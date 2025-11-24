import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Name Bank - Adopt Me Pet Names with Font Styles",
  description: "Find perfect pet names for Adopt Me. Browse frost dragon names, shadow dragon names, cow names, and more. Each name includes font style suggestions.",
  keywords: [
    "adopt me pet names",
    "frost dragon names",
    "shadow dragon names",
    "cow names adopt me",
    "roblox pet names",
    "adopt me name ideas",
  ],
  openGraph: {
    title: "Pet Name Bank - Adopt Me Pet Names",
    description: "Find perfect pet names with font style suggestions for your Roblox Adopt Me pets.",
    url: "https://adoptmefont.com/pet-names",
  },
  alternates: {
    canonical: "https://adoptmefont.com/pet-names",
  },
};

export default function PetNamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


