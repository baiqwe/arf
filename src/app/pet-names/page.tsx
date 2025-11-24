"use client";
import Link from "next/link";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Pet Names", url: "https://adoptmefont.com/pet-names" },
];

const petCategories = [
  {
    id: "frost-dragon",
    name: "Frost Dragon",
    description: "Cool and icy names perfect for frost dragons",
    icon: "❄️",
    url: "/pet-names/frost-dragon",
  },
  {
    id: "shadow-dragon",
    name: "Shadow Dragon",
    description: "Dark and mysterious names for shadow dragons",
    icon: "🌑",
    url: "/pet-names/shadow-dragon",
  },
  {
    id: "cow",
    name: "Cow",
    description: "Cute and friendly names for cows",
    icon: "🐄",
    url: "/pet-names/cow",
  },
];

export default function PetNamesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Pet Name Bank - Adopt Me Pet Names</h1>
        <p className="text-lg text-zinc-700 mb-8">
          Find the perfect name for your Adopt Me pets. Browse our collection of pet names organized by pet type. Each name comes with font style suggestions to make it look even better.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Browse Pet Names by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {petCategories.map((category) => (
              <Link
                key={category.id}
                href={category.url}
                className="border border-zinc-200 rounded-xl p-6 hover:border-pink-300 hover:shadow-md transition-all bg-white"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.name} Names</h3>
                <p className="text-zinc-700 text-sm mb-4">{category.description}</p>
                <span className="text-pink-600 text-sm font-semibold hover:underline">
                  Browse names →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Use Pet Names</h2>
          <p className="text-zinc-700 mb-4">
            Each pet name page includes multiple name suggestions with font style previews. Click &quot;Use this style&quot; to generate that name with the selected font, or click &quot;Generate more styles&quot; to see all available font options.
          </p>
          <p className="text-zinc-700 mb-4">
            Once you&apos;ve found a name you like, copy it and paste it into Roblox Adopt Me when naming your pet. Remember to keep names short (under 20 characters) for best results.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips for Choosing Pet Names</h2>
          <ul className="space-y-3 text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Match the pet&apos;s theme:</strong> Frost dragons work great with ice-themed names, while shadow dragons fit dark, mysterious names.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Use appropriate fonts:</strong> Bold fonts work well for powerful pets like dragons, while cute bubble fonts are perfect for friendly pets like cows.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Keep it short:</strong> Shorter names are less likely to be filtered and look cleaner in-game.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Test before finalizing:</strong> Always test your name in Roblox before making it permanent.</span>
            </li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Need More Name Ideas?</h2>
          <p className="text-zinc-700 mb-4">
            Try our <Link href="/adopt-me-names-generator" className="text-pink-600 underline font-semibold">name generator</Link> to create custom pet names with emojis and fonts. You can also use our <Link href="/" className="text-pink-600 underline font-semibold">font generator</Link> to style any name you want.
          </p>
          <p className="text-zinc-700">
            Want to test if your name will work? Use our <Link href="/tag-filter-checker" className="text-pink-600 underline font-semibold">Tag Filter Checker</Link> before using it in Roblox.
          </p>
        </section>
      </main>
    </>
  );
}


