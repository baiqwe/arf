import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shadow Dragon Names for Adopt Me - Dark Name Ideas",
  description: "Find perfect shadow dragon names for Adopt Me. Dark and mysterious name ideas with font style suggestions for your Roblox pet.",
  keywords: [
    "shadow dragon names adopt me",
    "shadow dragon name ideas",
    "dark dragon names roblox",
  ],
  openGraph: {
    title: "Shadow Dragon Names for Adopt Me",
    description: "Find dark and mysterious shadow dragon names with font suggestions.",
    url: "https://adoptmefont.com/pet-names/shadow-dragon",
  },
  alternates: {
    canonical: "https://adoptmefont.com/pet-names/shadow-dragon",
  },
};

export default function ShadowDragonNamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


