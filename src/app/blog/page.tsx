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
    slug: "adopt-me-retired-items-collection",
    title: "Adopt Me Retired Items: Investment Guide to Rare Toys and Vehicles",
    excerpt: "Build wealth through retired item collecting. Understand which discontinued items appreciate in value and how to spot investment opportunities.",
    date: "2025-12-07",
    readTime: "10 min read",
  },
  {
    slug: "adopt-me-mega-neon-creation-guide",
    title: "Adopt Me Mega Neon Pets: The Ultimate 16-Pet Grinding Challenge",
    excerpt: "Achieve your Mega Neon dream with this comprehensive guide. Learn efficient multi-pet management and the secrets to rainbow-glowing pets.",
    date: "2025-12-06",
    readTime: "11 min read",
  },
  {
    slug: "how-to-prevent-name-filtering-roblox",
    title: "How to Prevent Your Name from Being Filtered in Roblox",
    excerpt: "Learn why Roblox filters certain names and how to create names that pass the filter. Tips for using special characters safely.",
    date: "2025-12-05",
    readTime: "6 min read",
  },
  {
    slug: "adopt-me-asset-management-guide",
    title: "Adopt Me Asset Management: Protect Your Wealth from Pet Devaluation",
    excerpt: "Preserve your virtual wealth with smart portfolio management. Learn diversification strategies and how to lock in retired asset value.",
    date: "2025-12-04",
    readTime: "10 min read",
  },
  {
    slug: "adopt-me-house-building-efficiency",
    title: "Adopt Me House Building: Optimize Your Virtual Real Estate for Success",
    excerpt: "Transform your house into an efficiency powerhouse. Learn how to design pet-raising stations and premium trading rooms.",
    date: "2025-12-03",
    readTime: "10 min read",
  },
  {
    slug: "adopt-me-lifestyle-fashion-guide",
    title: "Adopt Me Fashion and Lifestyle: Matching Your Style with Your Pets",
    excerpt: "Express yourself in Adopt Me with coordinated outfits and vehicles. Learn how to create themed looks that match your legendary pets.",
    date: "2025-12-02",
    readTime: "9 min read",
  },
  {
    slug: "adopt-me-trading-psychology",
    title: "Adopt Me Trading Psychology: Win Negotiations with Strategic Tactics",
    excerpt: "Master the mental game of trading. Learn rejection tactics, slow acceptance strategies, and psychological pricing techniques.",
    date: "2025-11-30",
    readTime: "9 min read",
  },
  {
    slug: "adopt-me-neon-pet-creation-guide",
    title: "Adopt Me Neon Pet Creation: Complete Guide to Making Your First Neon",
    excerpt: "Master the art of creating Neon Pets in Adopt Me. Learn the four-pet grinding process, efficient task completion, and Neon Cave secrets.",
    date: "2025-11-29",
    readTime: "11 min read",
  },
  {
    slug: "adopt-me-gold-farming-automation",
    title: "Adopt Me Gold Farming: Maximize Earnings with Pet Task Automation",
    excerpt: "Turn pet needs into an efficient gold production line. Master task loops, AFK techniques, and time management for maximum earnings.",
    date: "2025-11-28",
    readTime: "9 min read",
  },
  {
    slug: "adopt-me-name-aesthetics-trading",
    title: "Adopt Me Name Aesthetics: How Professional Names Boost Trading Success",
    excerpt: "Transform your Adopt Me trading experience with a professional name. Learn how name psychology impacts trust and trade success rates.",
    date: "2025-11-26",
    readTime: "9 min read",
  },
  {
    slug: "adopt-me-font-design-readability",
    title: "Adopt Me Font Design: Balancing Aesthetics with Readability",
    excerpt: "Create the perfect name font that's both beautiful and functional. Learn minimalist symbol usage and legibility-first design principles.",
    date: "2025-11-25",
    readTime: "9 min read",
  },
  {
    slug: "adopt-me-trading-scams-prevention",
    title: "Adopt Me Trading Scams: How to Spot Value Traps and Stay Safe",
    excerpt: "Protect your rare pets from scammers. Learn the unwritten trading rules, value assessment techniques, and how to avoid instant-swap scams.",
    date: "2025-11-24",
    readTime: "10 min read",
  },
  {
    slug: "adopt-me-egg-hatching-probability",
    title: "Adopt Me Egg Hatching: Mathematical Approach to Getting Rare Pets",
    excerpt: "Apply statistical methods to improve your hatching odds. Learn the science behind egg probabilities and efficient bulk hatching strategies.",
    date: "2025-11-23",
    readTime: "10 min read",
  },
  {
    slug: "adopt-me-pet-naming-marketing",
    title: "Adopt Me Pet Naming for Trading: Emotional Marketing Strategies",
    excerpt: "Increase your pets' trading value with strategic naming. Discover how creative, story-driven names can boost offers significantly.",
    date: "2025-11-22",
    readTime: "9 min read",
  },
  {
    slug: "adopt-me-neon-cave-secrets",
    title: "Adopt Me Neon Cave Tips: Fast Merging Techniques and Glitch Spots",
    excerpt: "Master the Neon Cave with veteran player techniques. Learn precise positioning, quick merge sequences, and efficiency hacks.",
    date: "2025-11-21",
    readTime: "9 min read",
  },
  {
    slug: "adopt-me-fonts-naming-revolution",
    title: "Adopt Me Fonts Naming Revolution: How I Stand Out Using Custom Fonts",
    excerpt: "Discover how using special Adopt Me fonts and Unicode characters transformed my in-game presence. Learn the tricks to make your name and pets' names truly stand out.",
    date: "2025-11-19",
    readTime: "10 min read",
  },
  {
    slug: "best-adopt-me-pet-names-2024",
    title: "Best Adopt Me Pet Names for 2024: Creative Ideas for Your Pets",
    excerpt: "Discover the most creative and popular pet names for Roblox Adopt Me. From cute to cool, find the perfect name for your frost dragon, shadow dragon, or any pet.",
    date: "2025-11-18",
    readTime: "8 min read",
  }
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

