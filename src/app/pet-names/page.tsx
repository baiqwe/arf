"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Script from "next/script";
import { useSearchParams, useRouter } from "next/navigation";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { petNameCategories, PetName } from "@/lib/petNames";
import styles from "@/lib/styles";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Pet Names", url: "https://adoptmefont.com/pet-names" },
];

const petTypes = [
  { id: "all", name: "All Pets", icon: "🐾" },
  { id: "frost-dragon", name: "Frost Dragon", icon: "❄️" },
  { id: "shadow-dragon", name: "Shadow Dragon", icon: "🌑" },
  { id: "cow", name: "Cow", icon: "🐄" },
];

function PetNamesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialPet = searchParams.get("pet") || "all";
  const [selectedPet, setSelectedPet] = useState(initialPet);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // Sync state with URL params on initial load
  useEffect(() => {
    const pet = searchParams.get("pet");
    if (pet && petTypes.some(p => p.id === pet)) {
      setSelectedPet(pet);
    }
  }, [searchParams]);

  const handlePetChange = (petId: string) => {
    setSelectedPet(petId);
    const params = new URLSearchParams(searchParams.toString());
    if (petId === "all") {
      params.delete("pet");
    } else {
      params.set("pet", petId);
    }
    const query = params.toString() ? `?${params.toString()}` : "";
    router.replace(`/pet-names${query}`, { scroll: false });
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I match my pet's name with its theme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Frost dragons work great with ice-themed names like Glacier, Aurora, or Frostbite. Shadow dragons fit dark, mysterious names like Eclipse, Phantom, or Midnight. Cows and farm pets suit cute, friendly names like Bessie, Buttercup, or Daisy."
        }
      },
      {
        "@type": "Question",
        "name": "What font style should I use for pet names?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bold fonts work well for powerful pets like dragons, conveying strength and status. Cute bubble fonts are perfect for friendly pets like cows, cats, and dogs. Small caps offer a clean, professional look for any pet type."
        }
      },
      {
        "@type": "Question",
        "name": "How long should my Adopt Me pet name be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keep pet names under 20 characters. Shorter names are less likely to be filtered by Roblox and look cleaner in-game. Names with fewer special characters also have better compatibility across devices."
        }
      },
      {
        "@type": "Question",
        "name": "How can I test if my pet name will work in Roblox?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use our Tag Filter Checker tool before finalizing any pet name. This helps identify if certain characters or words might be filtered by Roblox's moderation system."
        }
      }
    ]
  };

  const getFilteredNames = (): { category: string; names: PetName[] }[] => {
    if (selectedPet === "all") {
      return Object.entries(petNameCategories).map(([category, names]) => ({
        category,
        names,
      }));
    }
    return [{ category: selectedPet, names: petNameCategories[selectedPet] || [] }];
  };

  const filteredData = getFilteredNames();

  const getCategoryDisplay = (category: string) => {
    const pet = petTypes.find((p) => p.id === category);
    return pet ? `${pet.icon} ${pet.name}` : category;
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Pet Name Bank - Adopt Me Pet Names</h1>
        <p className="text-lg text-zinc-700 mb-8">
          Find the perfect name for your Adopt Me pets. Browse our complete collection of 45+ curated pet names with font style suggestions. Filter by pet type to find names that match your legendary pets.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Filter by Pet Type</h2>
          <div className="flex flex-wrap gap-2">
            {petTypes.map((pet) => (
              <button
                key={pet.id}
                onClick={() => handlePetChange(pet.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedPet === pet.id
                  ? "bg-pink-600 text-white"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
              >
                {pet.icon} {pet.name}
              </button>
            ))}
          </div>
        </section>

        {filteredData.map(({ category, names }) => (
          <section key={category} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">{getCategoryDisplay(category)} Names</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {names.map((petName, index) => {
                const recommendedStyles = petName.styles
                  .map((id) => styles.find((s) => s.id === id))
                  .filter(Boolean);

                return (
                  <div key={`${category}-${index}`} className="border border-zinc-200 rounded-lg p-4 bg-white hover:border-pink-300 transition-colors">
                    <h3 className="text-xl font-semibold mb-3">{petName.name}</h3>
                    <div className="space-y-2 mb-3">
                      {recommendedStyles.slice(0, 2).map((style) => {
                        if (!style) return null;
                        const styled = style.apply(petName.name);
                        return (
                          <div key={style.id} className="flex items-center justify-between text-sm">
                            <span>{styled}</span>
                            <Link
                              href={`/?text=${encodeURIComponent(petName.name)}&style=${style.id}`}
                              className="text-xs text-pink-600 hover:underline"
                            >
                              Use
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                    <Link
                      href={`/?text=${encodeURIComponent(petName.name)}`}
                      className="text-sm text-pink-600 hover:underline font-semibold"
                    >
                      All styles →
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Naming Tips by Pet Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold mb-2">❄️ Frost Dragon</h3>
              <p className="text-sm text-zinc-700">Use ice and winter themes. Bold fonts convey power. Popular: Frostbite, Glacier, Aurora.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-semibold mb-2">🌑 Shadow Dragon</h3>
              <p className="text-sm text-zinc-700">Dark and mysterious names work best. Bold sans-serif fonts add edge. Popular: Midnight, Eclipse, Phantom.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold mb-2">🐄 Cow</h3>
              <p className="text-sm text-zinc-700">Cute and friendly names match the vibe. Bubble fonts are perfect. Popular: Bessie, Buttercup, Daisy.</p>
            </div>
          </div>
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

export default function PetNamesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PetNamesContent />
    </Suspense>
  );
}
