import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Adopt Me Fonts Generator - Free Roblox Adopt Me Fonts Tool",
    template: "%s | Adopt Me Fonts",
  },
  description:
    "Free Adopt Me fonts generator for Roblox. Create stylish adopt me fonts like bubble fonts, bold, cute, small caps, and aesthetic fullwidth. Copy and paste adopt me fonts directly into Roblox Adopt Me names and chat.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  keywords: [
    "adopt me fonts",
    "adopt me font generator",
    "roblox adopt me fonts",
    "cute adopt me fonts",
    "bubble adopt me fonts",
    "adopt me font styles",
    "adopt me text generator",
    "roblox font generator",
    "adopt me name fonts",
    "adopt me chat fonts",
    "free adopt me fonts",
  ],
  metadataBase: new URL("https://adoptmefont.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Adopt Me Fonts Generator - Free Roblox Adopt Me Fonts Tool",
    description:
      "Create and copy adopt me fonts for Roblox: bubble fonts, bold, cute, small caps, aesthetic fullwidth. Free adopt me fonts generator with 50+ styles.",
    url: "https://adoptmefont.com/",
    siteName: "Adopt Me Fonts",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://adoptmefont.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Adopt Me Fonts Generator - Free Roblox Font Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adopt Me Fonts Generator - Free Roblox Fonts Tool",
    description: "Generate and copy adopt me fonts for Roblox. Free adopt me fonts generator with bubble, bold, cute styles. 50+ font styles available.",
    images: ["https://adoptmefont.com/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Adopt Me Fonts",
    url: "https://adoptmefont.com/",
    inLanguage: ["en"],
    description: "Free Adopt Me fonts generator for Roblox. Create stylish adopt me fonts like bubble, bold, cute, small caps, and aesthetic fullwidth.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://adoptmefont.com/?text={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Adopt Me Fonts Generator",
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Free online tool to generate adopt me fonts for Roblox Adopt Me. Create bubble fonts, bold, cute, small caps, and aesthetic fullwidth styles.",
    url: "https://adoptmefont.com/",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1000",
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use Adopt Me Fonts Generator",
    description: "Step-by-step guide on how to generate and use adopt me fonts in Roblox Adopt Me",
    step: [
      {
        "@type": "HowToStep",
        name: "Enter your text",
        text: "Type the text you want to convert into adopt me fonts in the input field",
      },
      {
        "@type": "HowToStep",
        name: "Choose a font style",
        text: "Select from various adopt me fonts styles like bubble fonts, bold, cute, small caps, or aesthetic fullwidth",
      },
      {
        "@type": "HowToStep",
        name: "Copy the result",
        text: "Click the Copy button to copy the generated adopt me fonts to your clipboard",
      },
      {
        "@type": "HowToStep",
        name: "Paste in Roblox",
        text: "Open Roblox Adopt Me and paste the adopt me fonts into your player name, pet name, or chat",
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <Script
          id="howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2N6FHJDCPJ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'G-2N6FHJDCPJ');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
