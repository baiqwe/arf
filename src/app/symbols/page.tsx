"use client";
import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { symbols, symbolCategories, getSymbolsByCategory, type Symbol } from "@/lib/symbols";

const AdNativeBanner = dynamic(
  () => import("@/components/ads/AdNativeBanner"),
  { ssr: false }
);

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Symbols", url: "https://adoptmefont.com/symbols" },
];

export default function SymbolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("stars");
  const [toast, setToast] = useState("");
  const [copiedSymbol, setCopiedSymbol] = useState<string>("");

  const categorySymbols = getSymbolsByCategory(selectedCategory);

  const onCopy = async (symbol: Symbol) => {
    try {
      await navigator.clipboard.writeText(symbol.char);
      setCopiedSymbol(symbol.char);
      setToast(`Copied ${symbol.name}!`);
      setTimeout(() => {
        setToast("");
        setCopiedSymbol("");
      }, 1200);
    } catch {
      setToast("Copy failed");
      setTimeout(() => setToast(""), 1500);
    }
  };

  const getSafetyColor = (safety: string) => {
    switch (safety) {
      case "safe":
        return "text-green-600 bg-green-50 border-green-200";
      case "sometimes":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "filtered":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-zinc-600 bg-zinc-50 border-zinc-200";
    }
  };

  const getSafetyLabel = (safety: string) => {
    switch (safety) {
      case "safe":
        return "✅ Safe";
      case "sometimes":
        return "⚠️ Sometimes Filtered";
      case "filtered":
        return "❌ Often Filtered";
      default:
        return "";
    }
  };

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

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Roblox Safe Symbols - Cute Symbols for Adopt Me</h1>
        <p className="text-lg text-zinc-700 mb-8">
          Find safe symbols that work in Roblox Adopt Me. All symbols are tested and labeled with their safety status. Click any symbol to copy it instantly.
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {symbolCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg border-2 transition-all ${selectedCategory === category.id
                ? "border-pink-500 bg-pink-50"
                : "border-zinc-200 hover:border-zinc-300"
                }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Expert Tip Section */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
          <h3 className="font-semibold mb-2">💡 Pro Tip: Making "Aesthetic" Bio Layouts</h3>
          <p className="text-zinc-700 mb-2">
            The most popular way to use symbols is for "dividers" in your profile.
            Try this combination: <code className="bg-white px-2 py-1 rounded border border-blue-200">★·.·´¯`·.·★ YOUR NAME ★·.·´¯`·.·★</code>
          </p>
          <p className="text-sm text-zinc-500">
            This specific pattern is usually safe because it uses standard separators. Avoid mixing too many "weird" alphabets in one line, as that triggers the spam filter.
          </p>
        </div>

        {toast && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
            {toast}
          </div>
        )}

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 mb-8">
          {categorySymbols.map((symbol) => (
            <button
              key={symbol.char}
              onClick={() => onCopy(symbol)}
              className={`p-4 rounded-lg border-2 transition-all hover:scale-110 ${copiedSymbol === symbol.char
                ? "border-green-500 bg-green-50"
                : "border-zinc-200 hover:border-zinc-300"
                }`}
              title={`${symbol.name} - ${getSafetyLabel(symbol.safety)}`}
            >
              <div className="text-3xl mb-2">{symbol.char}</div>
              <div className={`text-xs px-2 py-1 rounded border ${getSafetyColor(symbol.safety)}`}>
                {symbol.safety === "safe" ? "✓" : symbol.safety === "sometimes" ? "⚠" : "✗"}
              </div>
            </button>
          ))}
        </div>

        {/* Ad slot after symbol grid */}
        <AdNativeBanner />

        <section className="mb-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Understanding Safety Labels</h2>
          <div className="space-y-2 text-zinc-700">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">✅ Safe:</span>
              <span>These symbols work reliably in Roblox. They rarely get filtered and display correctly on all devices.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-600 font-semibold">⚠️ Sometimes Filtered:</span>
              <span>These symbols usually work but might get filtered in chat or with certain combinations. Safe for names.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600 font-semibold">❌ Often Filtered:</span>
              <span>These symbols are frequently filtered by Roblox. Avoid using them if possible.</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How Roblox Filtering Works</h2>
          <p className="text-zinc-700 mb-4">
            Roblox uses a tagging system that filters certain characters and words. The system is stricter in chat than in names, so some symbols that work for player names might get filtered in chat messages.
          </p>
          <p className="text-zinc-700 mb-4">
            If you are seeing hashtags (####) instead of your name, it means you&apos;ve triggered the safety filter.
            <Link href="/blog/how-to-prevent-name-filtering-roblox" className="text-pink-600 font-semibold hover:underline ml-1">
              Read our guide on How to Prevent Name Filtering in Roblox 2025
            </Link> to learn the specific rules.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Using Symbols in Adopt Me</h2>
          <p className="text-zinc-700 mb-4">
            Symbols work great for decorating your player name, pet names, and profile descriptions. You can combine multiple symbols with text to create unique looks.
          </p>
          <p className="text-zinc-700 mb-4">
            For example, you could use <code className="bg-zinc-100 px-2 py-1 rounded">✨ Dragon 🎀</code> or <code className="bg-zinc-100 px-2 py-1 rounded">♡ Cute Pet ♡</code>. The key is not to overdo it - too many symbols can trigger the filter.
          </p>
          <p className="text-zinc-700">
            Want to create preppy names with symbols? Try our <Link href="/preppy-font-generator" className="text-pink-600 underline font-semibold">Preppy Font Generator</Link> for ready-made templates.
          </p>
        </section>

        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Test Your Names</h2>
          <p className="text-zinc-700 mb-4">
            Not sure if your name will work? Use our <Link href="/tag-filter-checker" className="text-pink-600 underline font-semibold">Tag Filter Checker</Link> to test your text before using it in Roblox.
          </p>
          <p className="text-zinc-700">
            Need more help? Check out our <Link href="/how-to-use-adopt-me-fonts" className="text-pink-600 underline font-semibold">complete guide</Link> on using fonts and symbols in Roblox.
          </p>
        </section>
      </main >
    </>
  );
}



