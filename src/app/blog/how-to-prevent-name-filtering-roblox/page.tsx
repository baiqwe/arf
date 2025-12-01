import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Script from "next/script";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Blog", url: "https://adoptmefont.com/blog" },
  { name: "How to Prevent Name Filtering", url: "https://adoptmefont.com/blog/how-to-prevent-name-filtering-roblox" },
];

export const metadata: Metadata = {
  title: "How to Prevent Your Name from Being Filtered in Roblox",
  description: "Learn why Roblox filters certain names and how to create names that pass the filter. Tips for using special characters safely in Roblox Adopt Me.",
  alternates: {
    canonical: "https://adoptmefont.com/blog/how-to-prevent-name-filtering-roblox",
  },
  openGraph: {
    title: "How to Prevent Your Name from Being Filtered in Roblox",
    description: "Learn why Roblox filters certain names and how to create names that pass the filter.",
    type: "article",
    publishedTime: "2024-01-10",
    url: "https://adoptmefont.com/blog/how-to-prevent-name-filtering-roblox",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PreventNameFiltering() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Prevent Your Name from Being Filtered in Roblox",
    description: "Learn why Roblox filters certain names and how to create names that pass the filter.",
    author: {
      "@type": "Organization",
      name: "Adopt Me Fonts",
    },
    datePublished: "2024-01-10",
    dateModified: "2024-01-10",
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />
        <article>
          <header className="mt-4">
            <time dateTime="2024-01-10" className="text-sm text-zinc-500">
              January 10, 2024
            </time>
            <h1 className="text-2xl sm:text-3xl font-bold mt-2">
              How to Prevent Your Name from Being Filtered in Roblox
            </h1>
            <p className="text-sm text-zinc-500 mt-2">6 min read</p>
          </header>

          <div className="prose prose-sm sm:prose-base max-w-none mt-8 text-zinc-700">
            <p className="text-base sm:text-lg mb-6">
              One of the most frustrating experiences in Roblox Adopt Me is creating the perfect name, only to have it rejected by Roblox's filter system. Understanding why names get filtered and how to avoid it can save you time and help you create names that work reliably.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Why Roblox Filters Names</h2>
            <p className="mb-4">
              Roblox uses automated filtering systems to maintain a safe and appropriate environment for players of all ages. The filter checks names for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Inappropriate words or phrases</li>
              <li>Profanity or offensive language</li>
              <li>Personal information (phone numbers, addresses, etc.)</li>
              <li>Excessive special characters that might be used to bypass filters</li>
              <li>Names that are too long</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Best Practices for Name Creation</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Keep Names Short</h3>
            <p className="mb-4">
              Roblox has character limits for names. Keeping your name under 20 characters significantly reduces the chance of it being filtered. Shorter names are also easier to read and remember.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">Use Simple Font Styles</h3>
            <p className="mb-4">
              While decorative fonts can look great, simpler styles like <Link href="/styles/bubble-fonts" className="text-pink-600 underline">Bubble</Link> or <strong>Bold</strong> fonts have higher compatibility and are less likely to trigger filters. Avoid combining multiple decorative styles in one name.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">Test Before Using</h3>
            <p className="mb-4">
              Always test your name before finalizing it. Our <Link href="/tag-filter-checker" className="text-pink-600 underline font-semibold">Tag Filter Checker</Link> can help you identify potential issues before you try to use the name in Roblox.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Common Filter Triggers</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Too many special characters:</strong> While Unicode fonts are supported, using too many decorative characters can trigger filters</li>
              <li><strong>Inappropriate content:</strong> Even with special characters, Roblox's filter can detect inappropriate words</li>
              <li><strong>Personal information:</strong> Never include real names, addresses, or phone numbers</li>
              <li><strong>Excessive length:</strong> Very long names are more likely to be filtered</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">What to Do If Your Name Gets Filtered</h2>
            <p className="mb-4">
              If your name gets rejected:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Try a shorter version of the name</li>
              <li>Use a simpler font style (Bold or Bubble instead of decorative styles)</li>
              <li>Remove any special characters or emojis and try again</li>
              <li>Check if the base word might be triggering the filter and try a synonym</li>
            </ol>

            <h2 className="text-xl font-semibold mt-8 mb-4">Safe Font Styles for Roblox</h2>
            <p className="mb-4">
              Based on our testing and user feedback, these font styles have the highest compatibility:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Bold:</strong> Excellent readability and compatibility</li>
              <li><strong>Bubble:</strong> Very popular and reliable</li>
              <li><strong>Small Caps:</strong> Clean and professional</li>
              <li><strong>Double Struck:</strong> Works well across devices</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Final Tips</h2>
            <p className="mb-6">
              Remember that Roblox's filter system is constantly updated, so what works today might not work tomorrow. Always test your names, keep them short and simple, and use our <Link href="/tag-filter-checker" className="text-pink-600 underline font-semibold">Tag Filter Checker</Link> to verify compatibility before using names in-game.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-200">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/roblox-font-compatibility-guide" className="text-pink-600 underline">
                  Roblox Font Compatibility Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-pink-600 underline">
                  FAQ: Common Questions About Adopt Me Fonts
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}

