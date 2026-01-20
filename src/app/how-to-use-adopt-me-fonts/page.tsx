"use client";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";

const AdBanner300x250 = dynamic(
  () => import("@/components/ads/AdBanner300x250"),
  { ssr: false }
);

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "How To", url: "https://adoptmefont.com/how-to-use-adopt-me-fonts" },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use Adopt Me Fonts in Roblox - Complete Guide",
  description: "Step-by-step guide on how to generate and use adopt me fonts in Roblox Adopt Me for player names, pet names, and chat messages.",
  step: [
    {
      "@type": "HowToStep",
      name: "Generate Your Font",
      text: "Go to our font generator and type the text you want to convert. Choose from over 50 font styles like bubble, bold, cute, or aesthetic fullwidth.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Copy the Styled Text",
      text: "Click the Copy button next to your chosen font style. The styled text will be saved to your clipboard.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Open Roblox Settings",
      text: "Log into Roblox and go to your account settings. Click on Profile, then find the Display Name section.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Paste and Save",
      text: "Click Edit next to your display name, paste the copied font text, and save your changes. Your new styled name will appear in Adopt Me and all Roblox games.",
      position: 4,
    },
  ],
};

export default function HowToPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">How to Use Adopt Me Fonts in Roblox - Complete Guide</h1>
        <p className="text-lg text-zinc-700 mb-8">
          Want to make your Roblox name stand out? Adopt me fonts are a fun way to customize your player name, pet names, and even chat messages. This guide will walk you through everything you need to know, from generating fonts to using them in-game.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Generate Your Font</h2>
          <p className="text-zinc-700 mb-4">
            First, head over to our <Link href="/" className="text-pink-600 underline font-semibold">font generator</Link>. Type whatever text you want to convert - it could be your name, a pet name, or anything else. You&apos;ll see it transform in real-time as you browse through different styles.
          </p>
          <p className="text-zinc-700 mb-4">
            We have over 50 font styles to choose from. Popular options include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700 mb-4">
            <li><Link href="/styles" className="text-pink-600 underline">Bubble fonts</Link> - Cute circled letters that work great for pet names</li>
            <li>Bold fonts - Strong, readable text perfect for player names</li>
            <li>Cute fonts - Decorative styles with hearts and sparkles</li>
            <li>Small caps - Clean, professional look</li>
            <li>Aesthetic fullwidth - Retro vaporwave style</li>
          </ul>
          <p className="text-zinc-700">
            Don&apos;t worry about picking the perfect style right away. You can always come back and try different options until you find one you love.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Step 2: Copy Your Styled Text</h2>
          <p className="text-zinc-700 mb-4">
            Once you&apos;ve found a style you like, click the &quot;Copy&quot; button. The styled text will be saved to your clipboard, ready to paste wherever you need it. You&apos;ll see a quick confirmation message when it&apos;s copied successfully.
          </p>
          <p className="text-zinc-700">
            Pro tip: Test a few different styles before deciding. Some fonts look better with shorter names, while others work great for longer text. Try them out and see what fits your style.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Change Your Roblox Player Name</h2>
          <p className="text-zinc-700 mb-4">
            Now it&apos;s time to put your new font to use. Log into Roblox and click on the gear icon in the top right corner to open Settings. From there, go to Account Info, then find the Display Name section.
          </p>
          <p className="text-zinc-700 mb-4">
            Click the Edit button next to your current display name. A text box will appear - paste your copied font text here. Make sure it looks right, then click Save. Your new styled name will appear immediately in Adopt Me and all other Roblox games.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
            <p className="text-sm text-zinc-700">
              <strong>Note:</strong> Roblox allows you to change your display name once every 7 days, so make sure you&apos;re happy with your choice before saving.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Step 4: Name Your Pets in Adopt Me</h2>
          <p className="text-zinc-700 mb-4">
            Using fonts for pet names is super popular in Adopt Me. Here&apos;s how to do it:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-zinc-700 mb-4">
            <li>Open Adopt Me and select the pet you want to name</li>
            <li>Click on the name tag icon (it looks like a small tag next to your pet)</li>
            <li>Paste your copied font text into the name field</li>
            <li>Confirm the name</li>
          </ol>
          <p className="text-zinc-700 mb-4">
            Pet names work best when they&apos;re short - under 20 characters is ideal. <Link href="/styles" className="text-pink-600 underline">Bubble fonts</Link> and cute styles are especially popular for pets because they look playful and fun.
          </p>
          <p className="text-zinc-700">
            If you need inspiration, try our <Link href="/adopt-me-names-generator" className="text-pink-600 underline font-semibold">name generator</Link>. It creates cute pet names with emojis that you can then style with fonts.
          </p>
        </section>

        {/* Ad slot in middle of content */}
        <AdBanner300x250 />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Using Fonts in Chat</h2>
          <p className="text-zinc-700 mb-4">
            You can also use adopt me fonts in chat messages, but there are a few things to keep in mind. Roblox&apos;s chat filter is stricter than the name filter, so some decorative characters might get replaced with asterisks or filtered out entirely.
          </p>
          <p className="text-zinc-700 mb-4">
            Simple styles like <strong>bold fonts</strong> work best in chat because they&apos;re less likely to be filtered. If you want to use more decorative fonts, test them first to make sure they display correctly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips for Best Results</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-pink-400 pl-4">
              <h3 className="font-semibold mb-2">Keep Names Short</h3>
              <p className="text-zinc-700">
                Roblox has character limits, and shorter names are less likely to be filtered. Aim for under 20 characters for pet names and under 30 for player names.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold mb-2">Test Before Finalizing</h3>
              <p className="text-zinc-700">
                Always test your font name in-game before making it permanent. Some devices render Unicode characters differently, so what looks good on desktop might look different on mobile.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold mb-2">Choose Compatible Styles</h3>
              <p className="text-zinc-700">
                Not all font styles work equally well. <Link href="/styles" className="text-pink-600 underline">Bubble</Link>, bold, and small caps have the best compatibility across all devices. Decorative styles with lots of symbols might not display correctly on older devices.
              </p>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-semibold mb-2">Don&apos;t Overdo It</h3>
              <p className="text-zinc-700">
                While it&apos;s fun to use decorative fonts, too many special characters can trigger Roblox&apos;s filters. Use moderation - sometimes a simple bold or bubble font looks better than something overly decorated.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting Common Issues</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">My name shows as question marks (???)</h3>
              <p className="text-zinc-700">
                This usually means your device doesn&apos;t support those Unicode characters. Try using more common styles like bubble or bold fonts, which have wider device support.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Roblox rejected my name</h3>
              <p className="text-zinc-700">
                If Roblox filters your name, try a shorter version or a different style. Some decorative fonts trigger the moderation system, so simpler styles are more reliable.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">The font looks different on mobile</h3>
              <p className="text-zinc-700">
                Different devices render Unicode differently. Test your name on the device you&apos;ll primarily use. Bubble and bold fonts have the best cross-device compatibility.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Ready to Get Started?</h2>
          <p className="text-zinc-700 mb-4">
            Now that you know how to use adopt me fonts, head over to our <Link href="/" className="text-pink-600 underline font-semibold">font generator</Link> and create your perfect styled name. It only takes a few minutes, and you&apos;ll have a unique name that stands out in Adopt Me.
          </p>
          <p className="text-zinc-700 mb-4">
            Need more help? Check out our <Link href="/faq" className="text-pink-600 underline font-semibold">FAQ page</Link> for answers to common questions, or explore our <Link href="/styles" className="text-pink-600 underline font-semibold">style guides</Link> to learn more about specific font types.
          </p>
          <p className="text-zinc-700">
            Want to create preppy or aesthetic names? Try our <Link href="/preppy-font-generator" className="text-pink-600 underline font-semibold">Preppy Font Generator</Link> or browse <Link href="/pet-names" className="text-pink-600 underline font-semibold">pet name ideas</Link> for inspiration.
          </p>
        </section>
      </main>
    </>
  );
}

