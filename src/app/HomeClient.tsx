"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "@/lib/styles";

export default function Home() {
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const [text, setText] = useState(params.get("text") ?? "Adopt Me Fonts");
  const [selected, setSelected] = useState<string>(params.get("style") ?? styles[0].id);
  const [toast, setToast] = useState<string>("");

  useEffect(() => {
    const next = new URLSearchParams(window.location.search);
    next.set("text", text);
    next.set("style", selected);
    const url = `${window.location.pathname}?${next.toString()}`;
    window.history.replaceState(null, "", url);
  }, [text, selected]);

  const data = useMemo(() => styles.map((s) => ({ ...s, out: s.apply(text) })), [text]);

  const onCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setToast("Copied");
      setTimeout(() => setToast(""), 1200);
    } catch {
      setToast("Copy failed");
      setTimeout(() => setToast(""), 1500);
    }
  };

  const selectedStyle = styles.find((s) => s.id === selected) ?? styles[0];
  const selectedOutput = selectedStyle.apply(text);

  const handleSelect = (styleId: string) => {
    setSelected(styleId);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
      <section className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight">Adopt Me Fonts Generator - Free Roblox Font Tool</h1>
        <p className="mt-2 text-sm sm:text-base text-zinc-600">Generate and copy adopt me fonts for Roblox Adopt Me. Create stylish adopt me fonts with bubble, bold, cute, preppy, aesthetic, small caps, and more font styles. Perfect for player names, pet names, and chat messages.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, 64))}
            placeholder="Type your text"
            className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-black outline-none ring-0 focus:border-zinc-400"
          />
          <button
            onClick={() => setText("")}
            className="rounded-lg border border-zinc-200 px-4 py-3"
          >
            Clear
          </button>
        </div>
        <p className="mt-2 text-xs text-zinc-500">Roblox may filter some characters. Keep names short.</p>
        <div className="mt-6 rounded-xl border border-zinc-200 bg-white/95 backdrop-blur-sm p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2 font-medium text-sm sm:text-base">
              <span aria-hidden>{selectedStyle.icon}</span>
              <span className="break-words">{selectedStyle.name}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onCopy(selectedOutput)}
                className="rounded-md bg-black px-4 py-2.5 text-sm text-white transition-colors hover:bg-zinc-900 min-h-[44px] touch-manipulation"
              >
                Copy Selected
              </button>
            </div>
          </div>
          <div className="mt-3 break-words text-lg">{selectedOutput}</div>
        </div>
        {!!toast && (
          <div role="status" aria-live="polite" className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-2 text-sm text-white shadow-sm z-50">
            {toast}
          </div>
        )}
      </section>

      <section className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((s) => {
          const isSelected = selected === s.id;
          return (
            <div
              key={s.id}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              onClick={() => handleSelect(s.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleSelect(s.id);
                }
              }}
              className={`rounded-xl border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${isSelected ? "border-black shadow-md scale-[1.01]" : "border-zinc-200 hover:border-zinc-300"} bg-white/95 backdrop-blur-sm p-4 shadow-sm`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <div className="font-medium flex items-center gap-2 text-sm sm:text-base min-w-0">
                  <span aria-hidden className="flex-shrink-0">{s.icon}</span>
                  <span className="break-words">{s.name}</span>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      onCopy(s.out);
                    }}
                    className="rounded-md border border-zinc-200 px-3 py-2 text-xs sm:text-sm min-h-[36px] touch-manipulation transition-colors hover:bg-zinc-100"
                  >
                    Copy
                  </button>
                </div>
              </div>
              <div className="mt-3 break-words text-base sm:text-lg">{s.out}</div>
              <div className="mt-1 text-xs text-zinc-500 line-clamp-2">{s.description}</div>
            </div>
          );
        })}
      </section>

      <section className="mt-8 sm:mt-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">More Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/preppy-font-generator" className="border border-zinc-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold mb-2">✨ Preppy Font Generator</h3>
            <p className="text-sm text-zinc-700">Create aesthetic preppy names with symbols like ✨ 🎀 🐾. Perfect for that clean, polished look.</p>
          </a>
          <a href="/symbols" className="border border-zinc-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold mb-2">🎀 Safe Symbols</h3>
            <p className="text-sm text-zinc-700">Browse safe symbols that work in Roblox. All symbols tested and labeled with safety status.</p>
          </a>
          <a href="/tag-filter-checker" className="border border-zinc-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold mb-2">🔍 Tag Filter Checker</h3>
            <p className="text-sm text-zinc-700">Test if your font name will work in Roblox before using it. Get safety scores and suggestions.</p>
          </a>
          <a href="/pet-names" className="border border-zinc-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold mb-2">🐉 Pet Name Bank</h3>
            <p className="text-sm text-zinc-700">Find perfect names for your pets. Frost dragons, shadow dragons, cows, and more.</p>
          </a>
        </div>
      </section>

      <section className="mt-8 sm:mt-10">
        <h2 className="text-lg sm:text-xl font-semibold">What is an Adopt Me Font Generator?</h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-700">
          An Adopt Me Font Generator is a specialized tool designed for Roblox players who want to customize their in-game appearance. Unlike standard text, this tool converts your letters into mathematical alphanumeric symbols (like <strong>𝐁𝐨𝐥𝐝</strong> or <strong>Ⓑⓤⓑⓑⓛⓔ</strong>). These symbols allow you to bypass the standard font limitations in Roblox chat, pet names, and profile bios, giving you a unique aesthetic that matches your style.
        </p>
      </section>

      <section className="mt-8 sm:mt-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-zinc-900">Are these real fonts or hacks?</h3>
            <p className="text-sm text-zinc-700 mt-1">
              These are not hacks or custom files. Our tool generates <strong>Unicode characters</strong> that look like styled fonts. Because they are standard text characters, you can copy and paste them directly into Roblox without installing any software.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-zinc-900">Why do some fonts show as boxes or question marks?</h3>
            <p className="text-sm text-zinc-700 mt-1">
              This happens when a device (like an older phone or tablet) doesn&apos;t support specific Unicode symbols. For the best compatibility in Adopt Me, we recommend using <strong>Bubble Fonts</strong> or <strong>Bold text</strong>, as these are supported on almost all devices.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-zinc-900">Can I use these fonts for my pet&apos;s name?</h3>
            <p className="text-sm text-zinc-700 mt-1">
              Absolutely! These fonts are perfect for naming pets like the Frost Dragon, Shadow Dragon, or Unicorn. Styled text helps your pet stand out in the trading center. Just keep the name short (under 20 characters) to avoid filtering.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 sm:mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">How to Use Styled Text in Roblox</h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-zinc-700">
          Our generator creates styled Unicode text that works in Roblox Adopt Me. Follow these steps to customize your player name, pet name, or chat messages.
          For detailed instructions with screenshots, see our <a href="/how-to-use-adopt-me-fonts" className="text-pink-600 underline font-semibold">complete tutorial</a>.
        </p>

        <div className="mt-4 sm:mt-6 space-y-4">
          <div className="bg-zinc-50 rounded-lg p-4 sm:p-5">
            <h4 className="font-semibold text-base sm:text-lg mb-2">Step 1: Generate Your Styled Text</h4>
            <p className="text-sm sm:text-base text-zinc-700">
              Type your desired text in the input field above. Choose from 50+ font styles including bubble, bold, cute, or aesthetic fullwidth.
              Click &quot;Copy&quot; to copy the styled text to your clipboard.
            </p>
          </div>

          <div className="bg-zinc-50 rounded-lg p-4 sm:p-5">
            <h4 className="font-semibold text-base sm:text-lg mb-2">Step 2: Change Your Player Name</h4>
            <p className="text-sm sm:text-base text-zinc-700">
              Open Roblox and navigate to your profile settings. Click &quot;Edit&quot; next to your display name, paste the copied text, and save.
              Your new styled name will appear in Adopt Me and other Roblox games.
            </p>
          </div>

          <div className="bg-zinc-50 rounded-lg p-4 sm:p-5">
            <h4 className="font-semibold text-base sm:text-lg mb-2">Step 3: Name Your Pets</h4>
            <p className="text-sm sm:text-base text-zinc-700">
              In Adopt Me, select a pet and click the name tag icon. Paste your styled name.
              Keep pet names short (under 20 characters) for best compatibility. Simpler styles like bubble or bold work most reliably for pet names.
            </p>
          </div>

          <div className="bg-zinc-50 rounded-lg p-4 sm:p-5">
            <h4 className="font-semibold text-base sm:text-lg mb-2">Step 4: Use in Chat</h4>
            <p className="text-sm sm:text-base text-zinc-700">
              You can also use styled text in chat messages. Type your message, copy the styled version from our generator,
              and paste it into the chat. Note that Roblox may filter some special characters in chat, so simpler styles work best.
            </p>
          </div>
        </div>

        <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">Most Popular Font Styles</h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-700 mb-4">
          Based on user feedback and compatibility testing, these styles are the most popular and reliable:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-zinc-200 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">ⓑ</span>
              <h4 className="font-semibold">Bubble Fonts</h4>
            </div>
            <p className="text-sm text-zinc-700">
              Bubble fonts are the most popular choice. They create a cute, playful look with circled letters that stand out.
              Perfect for pet names and player names. High compatibility with Roblox. <a href="/styles" className="text-pink-600 underline">Browse all font styles</a>.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🅱️</span>
              <h4 className="font-semibold">Bold Fonts</h4>
            </div>
            <p className="text-sm text-zinc-700">
              Bold fonts provide strong emphasis and excellent readability. Great for making your name stand out without being too decorative.
              Works reliably across all Roblox devices and platforms.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">♡</span>
              <h4 className="font-semibold">Cute Fonts</h4>
            </div>
            <p className="text-sm text-zinc-700">
              Cute fonts with hearts and decorations are very popular, especially among younger players.
              These styles add personality and charm to names. Best for pet names.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">Ｆ</span>
              <h4 className="font-semibold">Aesthetic Fullwidth</h4>
            </div>
            <p className="text-sm text-zinc-700">
              Aesthetic fullwidth (vaporwave style) creates a retro, wide-spaced look.
              Very popular for unique player names. Note: May appear differently on mobile devices.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">ᴬ</span>
              <h4 className="font-semibold">Small Caps</h4>
            </div>
            <p className="text-sm text-zinc-700">
              Small caps offer a clean, professional look. Excellent for readable names that still look unique.
              High compatibility and works well for both player and pet names.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">★</span>
              <h4 className="font-semibold">Star Decorations</h4>
            </div>
            <p className="text-sm text-zinc-700">
              Star-decorated fonts are trendy for creating eye-catching names. Styles like &quot;Star Brackets&quot; and &quot;Aesthetic Decor&quot;
              add visual appeal while maintaining good Roblox compatibility.
            </p>
          </div>
        </div>

        <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">Tips for Best Results</h3>
        <ul className="mt-3 space-y-2 text-sm sm:text-base text-zinc-700">
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">•</span>
            <span><strong>Keep names short:</strong> Roblox has character limits. Names under 20 characters work best and are less likely to be filtered.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">•</span>
            <span><strong>Test before finalizing:</strong> Try your styled name in-game first. Some fonts may not display correctly on all devices.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">•</span>
            <span><strong>Avoid excessive symbols:</strong> Too many decorative characters can trigger Roblox filters. Use moderation for best results.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">•</span>
            <span><strong>Mobile vs Desktop:</strong> Some styled text displays differently on mobile. Test on your primary device before sharing.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">•</span>
            <span><strong>Combine with emojis:</strong> Use our <a href="/adopt-me-names-generator" className="underline text-pink-600">name generator</a> to combine fonts with emojis for even more unique names.</span>
          </li>
        </ul>

        <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">Is it Safe to Use Styled Text in Roblox?</h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-700">
          Yes, styled Unicode text is safe to use. These are standard Unicode characters that Roblox supports. However, keep these points in mind:
        </p>
        <ul className="mt-3 space-y-2 text-sm sm:text-base text-zinc-700">
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">✓</span>
            <span>Our generator uses official Unicode characters - no hacks or exploits</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">✓</span>
            <span>Roblox officially supports Unicode text rendering</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">⚠</span>
            <span>Some characters may be filtered by Roblox&rsquo;s moderation system</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">⚠</span>
            <span>Rare or unusual Unicode characters might not display on all devices</span>
          </li>
        </ul>

        <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">Troubleshooting Common Issues</h3>
        <div className="mt-4 space-y-3">
          <div className="border-l-4 border-pink-300 pl-4">
            <h4 className="font-semibold text-base mb-1">Name appears as question marks (???)</h4>
            <p className="text-sm text-zinc-700">
              This usually means the device doesn&rsquo;t support those Unicode characters. Try using more common styles like Bold or Bubble fonts.
            </p>
          </div>
          <div className="border-l-4 border-pink-300 pl-4">
            <h4 className="font-semibold text-base mb-1">Name gets filtered or rejected</h4>
            <p className="text-sm text-zinc-700">
              Roblox may filter names with too many special characters. Try shorter names or simpler font styles. Avoid combining multiple decorative styles.
            </p>
          </div>
          <div className="border-l-4 border-pink-300 pl-4">
            <h4 className="font-semibold text-base mb-1">Font looks different on mobile</h4>
            <p className="text-sm text-zinc-700">
              Some devices render Unicode differently. Test your name on the device you&rsquo;ll primarily use. Bubble and Bold fonts have the best cross-device compatibility.
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
          <p className="text-sm sm:text-base text-zinc-700">
            <strong>Need more help?</strong> Check out our <a href="/faq" className="underline text-pink-600 font-semibold">FAQ page</a> for detailed answers to common questions, or read our <a href="/blog" className="underline text-pink-600 font-semibold">blog</a> for tips and guides.
            You can also use our <a href="/adopt-me-names-generator" className="underline text-pink-600 font-semibold">name generator</a> to create cute pet names with emojis and styled text combined.
          </p>
        </div>
      </section>

      <section className="mt-8 sm:mt-12 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-xl p-6 sm:p-8 border border-pink-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">About This Tool - Creator&apos;s Story</h2>
        <div className="space-y-3 text-sm sm:text-base text-zinc-700">
          <p>
            <strong>Hi, I&apos;m a longtime Adopt Me player</strong> with 5 years of experience and dozens of Mega Neon pets.
            When naming my first Frost Dragon in 2020, I was frustrated by Roblox&apos;s plain text limitation.
          </p>
          <p>
            I spent hours manually copying Unicode characters from different websites, only to find most were filtered or displayed as boxes.
            That&apos;s when I decided to build a <strong>comprehensive, tested tool</strong> specifically for Roblox Adopt Me.
          </p>
          <div className="my-4">
            <img src="/adopt-me-player-character.webp" alt="My Roblox Adopt Me character with styled font name displayed in-game" className="rounded-lg shadow-lg w-full max-w-md mx-auto" loading="lazy" />
            <p className="text-xs text-zinc-500 mt-2 text-center italic">My character in Adopt Me testing different font styles</p>
          </div>
          <p>
            Every font style here has been <strong>personally tested in-game across devices</strong> (PC, mobile, tablet).
            The compatibility ratings come from real player feedback in the Adopt Me trading community.
          </p>
        </div>
      </section>

      <section className="mt-8 sm:mt-10">
        <h2 className="text-xl font-semibold mb-4">What Players Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-zinc-200">
            <p className="text-sm text-zinc-700 italic mb-2">&quot;Used the Bubble Font for my Mega Neon Frost - got 3 trade requests in 5 minutes! The name really makes pets stand out.&quot;</p>
            <p className="text-xs text-zinc-500">— Trading server player, Dec 2024</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-zinc-200">
            <p className="text-sm text-zinc-700 italic mb-2">&quot;Finally found a font generator that actually works in Roblox. Other sites gave me boxes, but these fonts display perfectly on mobile.&quot;</p>
            <p className="text-xs text-zinc-500">— Mobile player, Community feedback</p>
          </div>
        </div>
      </section>

      <section className="mt-8 sm:mt-12 mb-8">

        <h2 className="text-xl font-semibold mb-4">Expert Tips for Adopt Me Players</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-zinc-200">
            <h3 className="font-semibold mb-2">Naming Your Pets</h3>
            <p className="text-sm text-zinc-600 mb-3">Struggling to name your new legendary pet? Check out our curated lists for specific pets.</p>
            <ul className="text-sm space-y-1">
              <li><a href="/pet-names" className="text-pink-600 hover:underline">🐾 Browse All Pet Names</a></li>
              <li><a href="/blog/best-adopt-me-pet-names-2024" className="text-pink-600 hover:underline">🏆 2024 Pet Name Trends</a></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border border-zinc-200">
            <h3 className="font-semibold mb-2">Safety & Filters</h3>
            <p className="text-sm text-zinc-600 mb-3">Learn how to create names that won&apos;t get tagged by Roblox&apos;s filter system.</p>
            <a href="/blog/how-to-prevent-name-filtering-roblox" className="text-pink-600 hover:underline text-sm font-medium">Read our Anti-Filter Guide →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
