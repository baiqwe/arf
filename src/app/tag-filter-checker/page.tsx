"use client";
import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { checkTagFilter } from "@/lib/tagFilter";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Tag Filter Checker", url: "https://adoptmefont.com/tag-filter-checker" },
];

export default function TagFilterCheckerPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<ReturnType<typeof checkTagFilter> | null>(null);

  const handleCheck = () => {
    if (text.trim()) {
      setResult(checkTagFilter(text));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe":
        return "text-green-600 bg-green-50 border-green-200";
      case "warning":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "risky":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-zinc-600 bg-zinc-50 border-zinc-200";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "safe":
        return "✅ Safe to Use";
      case "warning":
        return "⚠️ May Be Filtered";
      case "risky":
        return "❌ Likely Filtered";
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
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Roblox Tag Filter Checker - Test Your Font Names</h1>
        <p className="text-lg text-zinc-700 mb-8">
          Test if your adopt me font name will work in Roblox before using it. Our checker analyzes your text and tells you if it&apos;s safe, might be filtered, or likely to get blocked.
        </p>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-8 border border-pink-200">
          <h2 className="text-xl font-semibold mb-4">Check Your Text</h2>
          <div className="space-y-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your font text here to check..."
              className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-pink-400 min-h-[100px]"
            />
            <button
              onClick={handleCheck}
              className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-lg hover:bg-zinc-900 transition-colors font-semibold"
            >
              Check Safety
            </button>
          </div>
        </div>

        {result && (
          <div className={`rounded-xl p-6 border-2 mb-8 ${getStatusColor(result.status)}`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">{getStatusLabel(result.status)}</h2>
              <div className="text-3xl font-bold">{result.score}/100</div>
            </div>

            {result.issues.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Issues Found:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {result.issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </div>
            )}

            {result.suggestions.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Suggestions:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {result.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How the Tag Filter Checker Works</h2>
          <p className="text-zinc-700 mb-4">
            Roblox uses a tagging system that filters certain characters and patterns. Our checker analyzes your text for common issues that might trigger the filter:
          </p>
          <ul className="space-y-2 text-zinc-700 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Combining characters:</strong> Some Unicode combining marks (like underlines) are often filtered</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Too many symbols:</strong> Names with lots of decorative characters might get flagged</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Length:</strong> Very long names are more likely to be filtered</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Suspicious patterns:</strong> Unusual character sequences can trigger filters</span>
            </li>
          </ul>
          <p className="text-zinc-700">
            <strong>Note:</strong> This is a basic checker based on known patterns. Roblox&apos;s filter is complex and changes over time. Always test your name in-game before making it permanent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips for Safe Names</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-semibold mb-2">Use Simple Fonts</h3>
              <p className="text-zinc-700">
                Bold, bubble, and small caps fonts are usually the safest. They use standard Unicode characters that Roblox rarely filters.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold mb-2">Keep It Short</h3>
              <p className="text-zinc-700">
                Names under 20 characters work best. Shorter names are less likely to trigger the filter and look cleaner too.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold mb-2">Limit Symbols</h3>
              <p className="text-zinc-700">
                One or two symbols is usually enough. Too many decorative characters can make the filter suspicious.
              </p>
            </div>
            <div className="border-l-4 border-pink-400 pl-4">
              <h3 className="font-semibold mb-2">Test First</h3>
              <p className="text-zinc-700">
                Always test your name in Roblox before making it permanent. The filter can be unpredictable, so real-world testing is important.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Need More Help?</h2>
          <p className="text-zinc-700 mb-4">
            Check out our <Link href="/symbols" className="text-pink-600 underline font-semibold">safe symbols list</Link> to find symbols that work reliably in Roblox.
          </p>
          <p className="text-zinc-700">
            Want to create safe preppy names? Try our <Link href="/preppy-font-generator" className="text-pink-600 underline font-semibold">Preppy Font Generator</Link> with tested templates.
          </p>
        </section>
      </main>
    </>
  );
}


