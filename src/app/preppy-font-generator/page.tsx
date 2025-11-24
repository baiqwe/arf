"use client";
import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { preppyTemplates, applyPreppyTemplate, type PreppyTemplate } from "@/lib/preppyTemplates";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Preppy Fonts", url: "https://adoptmefont.com/preppy-font-generator" },
];

export default function PreppyFontGeneratorPage() {
  const [text, setText] = useState("Dragon");
  const [selectedTemplate, setSelectedTemplate] = useState<PreppyTemplate>(preppyTemplates[0]);
  const [toast, setToast] = useState("");

  const output = applyPreppyTemplate(text, selectedTemplate);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setToast("Copied!");
      setTimeout(() => setToast(""), 1200);
    } catch {
      setToast("Copy failed");
      setTimeout(() => setToast(""), 1500);
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
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Preppy Adopt Me Fonts Generator - Aesthetic Names with Symbols</h1>
        <p className="text-lg text-zinc-700 mb-8">
          Create preppy adopt me fonts with cute symbols like ✨ 🎀 🐾. Perfect for aesthetic roblox names that stand out. Our preppy font generator combines stylish fonts with decorative symbols to create the perfect look.
        </p>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-8 border border-pink-200">
          <h2 className="text-xl font-semibold mb-4">Generate Your Preppy Font</h2>
          <div className="space-y-4">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 32))}
              placeholder="Type your text here"
              className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-pink-400"
            />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {preppyTemplates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template)}
                  className={`rounded-lg p-3 border-2 transition-all ${
                    selectedTemplate.id === template.id
                      ? "border-pink-500 bg-pink-50"
                      : "border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  <div className="text-2xl mb-1">{template.icon}</div>
                  <div className="text-sm font-medium">{template.name}</div>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-lg p-4 border border-zinc-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zinc-600">Preview:</span>
                <button
                  onClick={onCopy}
                  className="text-sm px-4 py-2 bg-black text-white rounded-md hover:bg-zinc-900 transition-colors"
                >
                  Copy
                </button>
              </div>
              <div className="text-2xl font-medium break-words">{output}</div>
            </div>
            {toast && (
              <div className="text-sm text-green-600">{toast}</div>
            )}
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Are Preppy Adopt Me Fonts?</h2>
          <p className="text-zinc-700 mb-4">
            Preppy fonts are all about that clean, polished look with a touch of elegance. Think script fonts, cute symbols, and aesthetic decorations. They&apos;re super popular in Adopt Me because they make your name look sophisticated without being too flashy.
          </p>
          <p className="text-zinc-700 mb-4">
            The key to preppy fonts is combining beautiful letter styles (like script or bold) with decorative symbols. Stars, hearts, sparkles, and bows are all part of the preppy aesthetic. It&apos;s that perfect balance between cute and classy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Use Preppy Fonts?</h2>
          <ul className="space-y-3 text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Stand Out:</strong> Preppy fonts catch attention without being overwhelming. They&apos;re elegant and eye-catching at the same time.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>High Compatibility:</strong> Most preppy font styles work great in Roblox. The symbols we use are tested and safe.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Perfect for Profiles:</strong> Preppy fonts look amazing in player names, pet names, and profile descriptions. They give that aesthetic vibe everyone loves.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Easy to Use:</strong> Just pick a template, type your text, and copy. No complicated steps needed.</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Use Preppy Fonts in Roblox</h2>
          <p className="text-zinc-700 mb-4">
            Using preppy fonts is simple. Generate your styled text above, copy it, and paste it into Roblox. For player names, go to Settings → Profile → Display Name. For pet names, select your pet and click the name tag icon.
          </p>
          <p className="text-zinc-700">
            Want more detailed instructions? Check out our <Link href="/how-to-use-adopt-me-fonts" className="text-pink-600 underline font-semibold">complete guide</Link> on using adopt me fonts.
          </p>
        </section>

        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Need More Options?</h2>
          <p className="text-zinc-700 mb-4">
            Explore our <Link href="/symbols" className="text-pink-600 underline font-semibold">symbol picker</Link> to find more decorative symbols, or check out our <Link href="/" className="text-pink-600 underline font-semibold">main font generator</Link> for even more style options.
          </p>
          <p className="text-zinc-700">
            Looking for name ideas? Browse our <Link href="/pet-names" className="text-pink-600 underline font-semibold">pet name bank</Link> for inspiration.
          </p>
        </section>
      </main>
    </>
  );
}


