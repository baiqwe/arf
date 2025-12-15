
import Link from "next/link";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPetNames } from "@/lib/petNames";
import styles from "@/lib/styles";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Pet Names", url: "https://adoptmefont.com/pet-names" },
  { name: "Shadow Dragon", url: "https://adoptmefont.com/pet-names/shadow-dragon" },
];

const petNames = getPetNames("shadow-dragon");

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shadow Dragon Names for Adopt Me | Adopt Me Fonts",
  description: "Best dark and mysterious names for Shadow Dragons in Adopt Me.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ShadowDragonNamesPage() {
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

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Shadow Dragon Names for Adopt Me</h1>
        <p className="text-lg text-zinc-700 mb-8">
          Find the perfect dark and mysterious name for your Shadow Dragon. These names work great in Roblox Adopt Me and come with font style suggestions to make them look even cooler.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Popular Shadow Dragon Names</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Tips for Shadow Dragon Names</h2>
          <ul className="space-y-3 text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Dark themes work best:</strong> Names related to night, shadows, and darkness fit perfectly. Think &quot;Midnight,&quot; &quot;Shadow,&quot; or &quot;Eclipse.&quot;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Bold fonts are perfect:</strong> Bold and sans-bold fonts give shadow dragons that powerful, mysterious look.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Keep it mysterious:</strong> Short, impactful names work better than long descriptive ones.</span>
            </li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
          <h2 className="text-xl font-semibold mb-3">Create Your Shadow Dragon Name</h2>
          <p className="text-zinc-700 mb-4">
            Click &quot;Use this style&quot; on any name above, or use our <Link href="/" className="text-pink-600 underline font-semibold">font generator</Link> to create your own custom name.
          </p>
          <p className="text-zinc-700">
            Looking for other dragon names? Check out <Link href="/pet-names/frost-dragon" className="text-pink-600 underline font-semibold">Frost Dragon names</Link> or browse all <Link href="/pet-names" className="text-pink-600 underline font-semibold">pet names</Link>.
          </p>
        </section>
      </main>
    </>
  );
}

