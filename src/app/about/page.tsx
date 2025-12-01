import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Script from "next/script";
import Link from "next/link";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "About", url: "https://adoptmefont.com/about" },
];

export const metadata: Metadata = {
  title: "About Us | Adopt Me Fonts",
  description: "Learn about Adopt Me Fonts Generator. Our mission is to provide free, easy-to-use tools for Roblox Adopt Me players to create unique names and text styles.",
  alternates: {
    canonical: "https://adoptmefont.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Adopt Me Fonts",
    url: "https://adoptmefont.com",
    description: "Free Adopt Me fonts generator for Roblox. Create stylish adopt me fonts like bubble, bold, cute, small caps, and aesthetic fullwidth.",
    sameAs: [],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-2xl sm:text-3xl font-bold mt-4">About Adopt Me Fonts</h1>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            Adopt Me Fonts Generator was created to help Roblox Adopt Me players express their creativity through unique text styles. We believe that personalization is a key part of the gaming experience, and our free tools make it easy for players to create distinctive names for their characters, pets, and chat messages.
          </p>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            Our mission is to provide high-quality, easy-to-use tools that are completely free and accessible to everyone. We're committed to maintaining user privacy, ensuring our tools work reliably, and continuously improving based on user feedback.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">What We Do</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            Adopt Me Fonts Generator is a collection of free online tools designed specifically for Roblox Adopt Me players:
          </p>
          <ul className="list-disc pl-6 text-sm sm:text-base text-zinc-700 space-y-2 mb-4">
            <li><strong>Font Generator:</strong> Convert regular text into 50+ styled Unicode fonts including bubble, bold, cute, preppy, and aesthetic styles</li>
            <li><strong>Name Generator:</strong> Create unique pet names with emojis and styled fonts</li>
            <li><strong>Tag Filter Checker:</strong> Test if your generated name will work in Roblox before using it</li>
            <li><strong>Symbol Library:</strong> Browse safe symbols that work in Roblox, all tested and labeled</li>
            <li><strong>Pet Name Bank:</strong> Find inspiration for naming your pets with curated name suggestions</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">How It Works</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            Our font generator uses Unicode characters to transform regular text into styled versions. All processing happens entirely in your browser - we don't collect, store, or transmit the text you generate. This ensures your privacy and makes the tool fast and reliable.
          </p>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            The Unicode characters we use are part of the official Unicode standard and are supported by Roblox's text rendering system. However, we always recommend testing your generated names in-game, as Roblox may filter certain characters based on their content moderation policies.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-zinc-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🔒 Privacy First</h3>
              <p className="text-sm text-zinc-700">
                Your text is processed locally in your browser. We don't collect or store what you generate.
              </p>
            </div>
            <div className="border border-zinc-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🆓 Completely Free</h3>
              <p className="text-sm text-zinc-700">
                All our tools are free to use with no hidden costs, registration, or premium features.
              </p>
            </div>
            <div className="border border-zinc-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">✨ User-Focused</h3>
              <p className="text-sm text-zinc-700">
                We listen to user feedback and continuously improve our tools based on what you need.
              </p>
            </div>
            <div className="border border-zinc-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🎯 Reliable & Safe</h3>
              <p className="text-sm text-zinc-700">
                We test our tools regularly and provide accurate information about Roblox compatibility.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Transparency & Trust</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            We believe in transparency and building trust with our users. That's why we:
          </p>
          <ul className="list-disc pl-6 text-sm sm:text-base text-zinc-700 space-y-2">
            <li>Clearly explain how our tools work and what data we collect (see our <Link href="/privacy-policy" className="text-pink-600 underline">Privacy Policy</Link>)</li>
            <li>Provide detailed terms of service so you know exactly what to expect (see our <Link href="/terms-of-service" className="text-pink-600 underline">Terms of Service</Link>)</li>
            <li>Offer multiple ways to contact us for questions or support (see our <Link href="/contact" className="text-pink-600 underline">Contact page</Link>)</li>
            <li>Maintain accurate, helpful content that follows Google's E-E-A-T guidelines (Expertise, Experience, Authoritativeness, Trustworthiness)</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Content Creation</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            Our website content is created by our team with the goal of providing helpful, accurate information to Roblox Adopt Me players. We research Roblox's policies, test our tools regularly, and update our content based on user feedback and changes in the Roblox platform.
          </p>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            We use automation tools (like our font generator) to help users create styled text, but all our guides, tutorials, and informational content are written by humans to ensure accuracy and helpfulness.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Get Involved</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            We're always looking to improve! If you have suggestions, found a bug, or want to share feedback, please <Link href="/contact" className="text-pink-600 underline font-semibold">contact us</Link>. Your input helps us make Adopt Me Fonts better for everyone.
          </p>
        </section>

        <section className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Questions?</h2>
          <p className="text-sm sm:text-base text-zinc-700">
            Check out our <Link href="/faq" className="text-pink-600 underline font-semibold">FAQ page</Link> for common questions, or <Link href="/contact" className="text-pink-600 underline font-semibold">contact us</Link> if you need more help.
          </p>
        </section>
      </main>
    </>
  );
}

