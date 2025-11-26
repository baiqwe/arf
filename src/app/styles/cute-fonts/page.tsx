"use client";
import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "@/lib/styles";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Styles", url: "https://adoptmefont.com/styles" },
  { name: "Cute Fonts", url: "https://adoptmefont.com/styles/cute-fonts" },
];

export default function CuteFontsPage() {
  const [text, setText] = useState("Adopt Me");
  const cuteStyle = styles.find((s) => s.id === "cute");
  const output = cuteStyle ? cuteStyle.apply(text) : text;
  const [toast, setToast] = useState("");

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
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Cute Adopt Me Fonts - Hearts & Adorable Decorations for Roblox</h1>
        <p className="text-lg text-zinc-700 mb-6">
          Cute fonts with hearts are perfect for adding a sweet, adorable touch to your Adopt Me names. These decorative fonts feature heart symbols that make your pet names and player names stand out with a charming, cute aesthetic. Whether you&apos;re looking for something playful or elegant, cute fonts deliver that perfect balance.
        </p>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-8 border border-pink-200">
          <h2 className="text-xl font-semibold mb-4">Try Cute Fonts</h2>
          <div className="space-y-4">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 32))}
              placeholder="Type your text here"
              className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-pink-400"
            />
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
          </div>
          {toast && (
            <div className="mt-2 text-sm text-green-600">{toast}</div>
          )}
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Cute Fonts?</h2>
          <p className="text-zinc-700 mb-4">
            Cute fonts with hearts are incredibly popular in Adopt Me because they add personality without being overwhelming. The heart symbols (♡) are simple, elegant, and highly compatible with Roblox&apos;s text system. They work beautifully for both pet names and player names, giving your identity a sweet, endearing quality that other players will notice.
          </p>
          <p className="text-zinc-700 mb-4">
            These fonts are perfect if you want something that&apos;s cute and charming but still professional-looking. The heart decorations are subtle enough that they won&apos;t distract from your name, but noticeable enough to make you stand out. Plus, Roblox rarely filters heart symbols, so you can use them confidently in-game.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Uses for Cute Fonts</h2>
          <ul className="space-y-3 text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Pet Names:</strong> Cute fonts with hearts are ideal for pet names in Adopt Me. They&apos;re adorable, readable, and work perfectly with emojis like 🐾, ✨, and 🌸. Try combining them with paw prints or flowers for extra cuteness.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Player Names:</strong> Want a name that&apos;s sweet and memorable? Cute fonts with hearts give your player name that perfect touch of charm. They&apos;re noticeable without being distracting, making them great for standing out in the Adopt Me community.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Profile Descriptions:</strong> While Roblox chat filters can be strict, heart symbols usually pass through. They&apos;re simple enough that the moderation system doesn&apos;t flag them, making them safe for use in various contexts.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Preppy Aesthetic:</strong> Cute fonts with hearts are perfect for achieving that preppy, aesthetic look that&apos;s so popular in Adopt Me. Combine them with other cute symbols for a complete aesthetic name.</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cute Fonts vs Other Styles</h2>
          <div className="bg-zinc-50 rounded-lg p-6">
            <p className="text-zinc-700 mb-4">
              Compared to other font styles, cute fonts with hearts offer a unique balance of simplicity and charm. They&apos;re more decorative than <Link href="/styles/bubble-fonts" className="text-pink-600 underline">bubble fonts</Link> but less complex than <Link href="/preppy-font-generator" className="text-pink-600 underline">preppy fonts with multiple symbols</Link>. This makes them a perfect choice for players who want something cute but not too busy.
            </p>
            <p className="text-zinc-700 mb-4">
              If you&apos;re looking for similar cute styles, check out our <Link href="/styles/cute-brackets" className="text-pink-600 underline">cute brackets</Link> or <Link href="/styles/heart-sparkle" className="text-pink-600 underline">heart sparkle</Link> styles. They offer similar adorable vibes with different decorative elements. For even more options, explore our <Link href="/symbols" className="text-pink-600 underline">symbol picker</Link> to find the perfect combination.
            </p>
            <p className="text-zinc-700">
              Want to combine cute fonts with other styles? Try our <Link href="/" className="text-pink-600 underline">main font generator</Link> to see all available styles, or use our <Link href="/preppy-font-generator" className="text-pink-600 underline">Preppy Font Generator</Link> for aesthetic names with multiple decorative elements.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Compatibility & Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-semibold mb-2">High Compatibility</h3>
              <p className="text-zinc-700">
                Cute fonts with hearts work on all Roblox platforms - desktop, mobile, and tablet. The heart symbol (♡) is part of the Unicode standard, so it displays correctly in player names, pet names, and most chat messages. You won&apos;t see question marks or broken characters.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold mb-2">Keep It Short</h3>
              <p className="text-zinc-700">
                While cute fonts are reliable, Roblox has character limits. Keep your names under 20 characters for the best results. Longer names might get cut off or filtered. The heart symbols add 2 characters (one on each side), so plan accordingly.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold mb-2">Combine with Emojis</h3>
              <p className="text-zinc-700">
                Cute fonts with hearts work beautifully with emojis. Try adding 🐾, ✨, 🌸, or 💕 to create the perfect cute aesthetic name. Just remember to keep the total length reasonable to avoid filtering.
              </p>
            </div>
            <div className="border-l-4 border-pink-400 pl-4">
              <h3 className="font-semibold mb-2">Test Before Finalizing</h3>
              <p className="text-zinc-700">
                Always test your cute font name in-game before making it permanent. Copy the text, paste it into Roblox, and make sure it looks right. Some devices render Unicode slightly differently, so it&apos;s best to verify on the platform you&apos;ll use most.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Popular Cute Font Combinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <h3 className="font-semibold mb-2">♡ Simple Cute ♡</h3>
              <p className="text-sm text-zinc-600 mb-2">Basic hearts around your name</p>
              <p className="text-lg font-medium">♡ Adopt Me ♡</p>
            </div>
            <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <h3 className="font-semibold mb-2">♡ With Emojis ♡</h3>
              <p className="text-sm text-zinc-600 mb-2">Hearts + cute emojis</p>
              <p className="text-lg font-medium">♡ 🐾 Adopt Me 🐾 ♡</p>
            </div>
            <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <h3 className="font-semibold mb-2">♡ Preppy Style ♡</h3>
              <p className="text-sm text-zinc-600 mb-2">Hearts + sparkles</p>
              <p className="text-lg font-medium">♡ ✨ Adopt Me ✨ ♡</p>
            </div>
            <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <h3 className="font-semibold mb-2">♡ Aesthetic ♡</h3>
              <p className="text-sm text-zinc-600 mb-2">Hearts + flowers</p>
              <p className="text-lg font-medium">♡ 🌸 Adopt Me 🌸 ♡</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Ready to Create Your Cute Font Name?</h2>
          <p className="text-zinc-700 mb-4">
            Use our <Link href="/" className="text-pink-600 underline font-semibold">font generator</Link> to create your perfect cute font name with hearts. Just type your text, select the cute style, and copy. It&apos;s that simple!
          </p>
          <p className="text-zinc-700 mb-4">
            Looking for more cute options? Check out our <Link href="/preppy-font-generator" className="text-pink-600 underline font-semibold">Preppy Font Generator</Link> for aesthetic names with multiple decorative symbols, or browse our <Link href="/symbols" className="text-pink-600 underline font-semibold">symbol picker</Link> to find the perfect combination.
          </p>
          <p className="text-zinc-700">
            Need help getting started? Check out our <Link href="/how-to-use-adopt-me-fonts" className="text-pink-600 underline font-semibold">complete guide</Link> on using adopt me fonts in Roblox, or visit our <Link href="/faq" className="text-pink-600 underline font-semibold">FAQ page</Link> for answers to common questions.
          </p>
        </section>
      </main>
    </>
  );
}

