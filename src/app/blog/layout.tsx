import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Adopt Me Fonts Blog",
    default: "Blog | Adopt Me Fonts",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

