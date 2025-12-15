
import Link from "next/link";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPetNames } from "@/lib/petNames";
import styles from "@/lib/styles";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Pet Names", url: "https://adoptmefont.com/pet-names" },
  { name: "Frost Dragon", url: "https://adoptmefont.com/pet-names/frost-dragon" },
];

const petNames = getPetNames("frost-dragon");

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frost Dragon Names for Adopt Me | Adopt Me Fonts",
  description: "Best cool names for Frost Dragons in Adopt Me. Find the perfect name for your dream pet.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function FrostDragonNamesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Frost Dragon Names for Adopt Me</h1>
        <p className="text-lg text-zinc-700 mb-8">
          Looking for the perfect name for your Frost Dragon? We&apos;ve collected the best frost dragon names that work great in Roblox Adopt Me. Each name comes with font style suggestions to make it look even better.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Popular Frost Dragon Names</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {petNames.map((petName, index) => {
              const recommendedStyles = petName.styles
                .map((id) => styles.find((s) => s.id === id))
                .filter(Boolean);

              return (
                <div key={index} className="border border-zinc-200 rounded-lg p-4 bg-white">
                  <h3 className="text-xl font-semibold mb-3">{petName.name}</h3>
                  <div className="space-y-2 mb-3">
                    {recommendedStyles.slice(0, 3).map((style) => {
                      if (!style) return null;
                      const styled = style.apply(petName.name);
                      return (
                        <div key={style.id} className="flex items-center justify-between">
                          <span className="text-lg">{styled}</span>
                          <Link
                            href={`/?text=${encodeURIComponent(petName.name)}&style=${style.id}`}
                            className="text-xs text-pink-600 hover:underline"
                          >
                            Use this style
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                  <Link
                    href={`/?text=${encodeURIComponent(petName.name)}`}
                    className="text-sm text-pink-600 hover:underline font-semibold"
                  >
                    Generate more styles →
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips for Naming Your Frost Dragon</h2>
          <ul className="space-y-3 text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Keep it short:</strong> Frost dragon names work best when they&apos;re under 15 characters. Longer names might get cut off or filtered.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Use cold-themed names:</strong> Names related to ice, snow, and winter fit perfectly with frost dragons. Think &quot;Frostbite,&quot; &quot;Blizzard,&quot; or &quot;Crystal.&quot;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Try different font styles:</strong> Bold and script fonts look great for frost dragon names. They give that powerful, elegant vibe.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Add symbols carefully:</strong> You can add snowflake or star symbols, but don&apos;t overdo it. One or two symbols is usually enough.</span>
            </li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 mb-8">
          <h2 className="text-xl font-semibold mb-3">Ready to Create Your Frost Dragon Name?</h2>
          <p className="text-zinc-700 mb-4">
            Click &quot;Use this style&quot; on any name above to generate it with that font, or use our <Link href="/" className="text-pink-600 underline font-semibold">font generator</Link> to create your own custom frost dragon name.
          </p>
          <p className="text-zinc-700">
            Want more name ideas? Check out our <Link href="/pet-names/shadow-dragon" className="text-pink-600 underline font-semibold">Shadow Dragon names</Link> or browse all <Link href="/pet-names" className="text-pink-600 underline font-semibold">pet names</Link>.
          </p>
        </section>
      </main>
    </>
  );
}



