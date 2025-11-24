import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frost Dragon Names for Adopt Me - Best Name Ideas",
  description: "Find the perfect frost dragon name for Adopt Me. 15+ popular frost dragon names with font style suggestions. Create unique names for your Roblox pet.",
  keywords: [
    "frost dragon names adopt me",
    "frost dragon name ideas",
    "roblox frost dragon names",
    "adopt me dragon names",
  ],
  openGraph: {
    title: "Frost Dragon Names for Adopt Me",
    description: "Find the perfect frost dragon name with font style suggestions.",
    url: "https://adoptmefont.com/pet-names/frost-dragon",
  },
  alternates: {
    canonical: "https://adoptmefont.com/pet-names/frost-dragon",
  },
};

export default function FrostDragonNamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


