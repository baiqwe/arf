
import Link from "next/link";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPetNames } from "@/lib/petNames";
import styles from "@/lib/styles";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Pet Names", url: "https://adoptmefont.com/pet-names" },
  { name: "Cow", url: "https://adoptmefont.com/pet-names/cow" },
];

const petNames = getPetNames("cow");

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cute Cow Names for Adopt Me | Adopt Me Fonts",
  description: "Best cute cow names for Adopt Me. Find the perfect name for your cow pet.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CowNamesPage() {
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

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Cute Cow Names for Adopt Me</h1>
        <p className="text-lg text-zinc-700 mb-8">
          Looking for a cute name for your cow? We&apos;ve got the best cow names that are perfect for Adopt Me. These names are fun, friendly, and work great with cute font styles.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Popular Cow Names</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Tips for Cow Names</h2>
          <ul className="space-y-3 text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Go for cute and friendly:</strong> Cow names work best when they&apos;re cute and approachable. Think &quot;Bessie,&quot; &quot;Buttercup,&quot; or &quot;Daisy.&quot;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Bubble fonts are perfect:</strong> Cute bubble fonts match the friendly vibe of cow names perfectly.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Add emojis:</strong> You can add cow or heart emojis to make the name even cuter.</span>
            </li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6 border border-green-200">
          <h2 className="text-xl font-semibold mb-3">Create Your Cow Name</h2>
          <p className="text-zinc-700 mb-4">
            Click &quot;Use this style&quot; on any name above, or use our <Link href="/" className="text-pink-600 underline font-semibold">font generator</Link> to create your own custom cow name.
          </p>
          <p className="text-zinc-700">
            Need more name ideas? Check out our <Link href="/adopt-me-names-generator" className="text-pink-600 underline font-semibold">name generator</Link> for more cute pet names, or browse all <Link href="/pet-names" className="text-pink-600 underline font-semibold">pet names</Link>.
          </p>
        </section>
      </main>
    </>
  );
}

