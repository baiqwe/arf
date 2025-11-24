import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cute Cow Names for Adopt Me - Best Name Ideas",
  description: "Find cute cow names for Adopt Me. Friendly and fun name ideas with font style suggestions for your Roblox cow pet.",
  keywords: [
    "cute cow names adopt me",
    "cow names roblox",
    "adopt me cow name ideas",
  ],
  openGraph: {
    title: "Cute Cow Names for Adopt Me",
    description: "Find cute and friendly cow names with font suggestions.",
    url: "https://adoptmefont.com/pet-names/cow",
  },
  alternates: {
    canonical: "https://adoptmefont.com/pet-names/cow",
  },
};

export default function CowNamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


