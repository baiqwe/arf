import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Script from "next/script";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Blog", url: "https://adoptmefont.com/blog" },
];

export const metadata: Metadata = {
  title: "Blog | Adopt Me Fonts - Tips, Guides & Roblox Adopt Me Content",
  description: "Read our blog for tips, guides, and helpful content about Roblox Adopt Me, font generators, pet names, and more.",
  alternates: {
    canonical: "https://adoptmefont.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const blogPosts = [
  {
    slug: "best-adopt-me-pet-names-2024",
    title: "Best Adopt Me Pet Names for 2024: Creative Ideas for Your Pets",
    excerpt: "Discover the most creative and popular pet names for Roblox Adopt Me. From cute to cool, find the perfect name for your frost dragon, shadow dragon, or any pet.",
    date: "2024-01-15",
    readTime: "8 min read",
  },
  {
    slug: "how-to-prevent-name-filtering-roblox",
    title: "How to Prevent Your Name from Being Filtered in Roblox",
    excerpt: "Learn why Roblox filters certain names and how to create names that pass the filter. Tips for using special characters safely.",
    date: "2024-01-10",
    readTime: "6 min read",
  },
  {
    slug: "adopt-me-trading-tips-guide",
    title: "Adopt Me Trading Tips: A Complete Guide for Beginners",
    excerpt: "Master the art of trading in Roblox Adopt Me. Learn fair trade values, how to avoid scams, and strategies for successful trades.",
    date: "2024-01-05",
    readTime: "10 min read",
  },
  {
    slug: "roblox-font-compatibility-guide",
    title: "Roblox Font Compatibility Guide: Which Styles Work Best",
    excerpt: "Understanding which Unicode fonts work reliably in Roblox. Compare compatibility across different devices and learn which styles to avoid.",
    date: "2024-01-01",
    readTime: "7 min read",
  },
  {
    slug: "creating-aesthetic-preppy-names",
    title: "Creating Aesthetic Preppy Names for Roblox: Complete Guide",
    excerpt: "Learn how to create that perfect preppy aesthetic name with symbols, emojis, and styled fonts. Tips for combining elements effectively.",
    date: "2023-12-28",
    readTime: "5 min read",
  },
];

export default function Blog() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Adopt Me Fonts Blog",
    description: "Tips, guides, and helpful content about Roblox Adopt Me",
    url: "https://adoptmefont.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Adopt Me Fonts",
    },
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-2xl sm:text-3xl font-bold mt-4">Blog</h1>
        <p className="text-sm sm:text-base text-zinc-700 mt-4 mb-8">
          Tips, guides, and helpful content about Roblox Adopt Me, font generators, pet names, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border border-zinc-200 rounded-lg p-6 hover:border-pink-300 transition-colors"
            >
              <Link href={`/blog/${post.slug}`}>
                <time
                  dateTime={post.date}
                  className="text-xs text-zinc-500 block mb-2"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="text-xl font-semibold mb-2 hover:text-pink-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-700 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">{post.readTime}</span>
                  <span className="text-sm text-pink-600 font-medium">
                    Read more →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Want More Tips?</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            Check out our <Link href="/how-to-use-adopt-me-fonts" className="text-pink-600 underline font-semibold">complete guide</Link> on using Adopt Me fonts, or browse our <Link href="/faq" className="text-pink-600 underline font-semibold">FAQ</Link> for answers to common questions.
          </p>
        </section>
      </main>
    </>
  );
}

