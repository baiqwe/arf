"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "@/lib/styles";
import Logo from "@/components/Logo";

export default function Home() {
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const [text, setText] = useState(params.get("text") ?? "Adopt Me Fonts");
  const [toast, setToast] = useState<string>("");

  useEffect(() => {
    const next = new URLSearchParams(window.location.search);
    next.set("text", text);
    const url = `${window.location.pathname}?${next.toString()}`;
    window.history.replaceState(null, "", url);
  }, [text]);

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

  const featuredStyle = styles[0];
  const featuredOutput = featuredStyle.apply(text);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
      <section className="mb-8">
        <Logo />
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">Adopt Me Fonts Generator - Free Roblox Font Tool</h1>
          <a
            href="/names"
            className="text-sm px-4 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition-all text-center sm:text-left flex-shrink-0"
          >
            🐾 Generate Names
          </a>
        </div>
        <p className="mt-2 text-sm sm:text-base text-zinc-600">Generate and copy adopt me fonts for Roblox Adopt Me. Create stylish adopt me fonts with bubble, bold, cute, small caps, and more font styles.</p>
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
              <span aria-hidden>{featuredStyle.icon}</span>
              <span className="break-words">{featuredStyle.name}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onCopy(featuredOutput)}
                className="rounded-md bg-black px-4 py-2.5 text-sm text-white hover:opacity-90 min-h-[44px] touch-manipulation"
              >
                Copy Highlight
              </button>
            </div>
          </div>
          <div className="mt-3 break-words text-lg">{featuredOutput}</div>
        </div>
        {!!toast && (
          <div role="status" aria-live="polite" className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-2 text-sm text-white shadow-sm z-50">
            {toast}
          </div>
        )}
      </section>

      <section className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((s) => (
          <div key={s.id} className="rounded-xl border border-zinc-200 hover:border-zinc-300 transition-all bg-white/95 backdrop-blur-sm p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
              <div className="font-medium flex items-center gap-2 text-sm sm:text-base min-w-0">
                <span aria-hidden className="flex-shrink-0">{s.icon}</span>
                <span className="break-words">{s.name}</span>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={() => onCopy(s.out)} className="rounded-md border border-zinc-200 px-3 py-2 text-xs sm:text-sm min-h-[36px] touch-manipulation">
                  Copy
                </button>
              </div>
            </div>
            <div className="mt-3 break-words text-base sm:text-lg">{s.out}</div>
            <div className="mt-1 text-xs text-zinc-500 line-clamp-2">{s.description}</div>
          </div>
        ))}
      </section>

      <section className="mt-8 sm:mt-10">
        <h2 className="text-lg sm:text-xl font-semibold">FAQ</h2>
        <ul className="mt-2 list-disc pl-6 text-zinc-700">
          <li>These are Unicode characters, not real fonts.</li>
          <li>Some symbols may be filtered or not visible in Roblox.</li>
          <li>Copy the result and paste it into your Adopt Me name or chat.</li>
        </ul>
      </section>

      <section className="mt-8 sm:mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">How to Use Adopt Me Fonts in Roblox</h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-zinc-700">
          Using adopt me fonts in Roblox Adopt Me is straightforward. Follow these simple steps to customize your player name, pet name, or chat messages with stylish fonts.
        </p>
        
        <div className="mt-4 sm:mt-6 space-y-4">
          <div className="bg-zinc-50 rounded-lg p-4 sm:p-5">
            <h4 className="font-semibold text-base sm:text-lg mb-2">Step 1: Generate Your Font</h4>
            <p className="text-sm sm:text-base text-zinc-700">
              Type your desired text in the input field above. Choose from 50+ adopt me fonts styles like bubble, bold, cute, or aesthetic fullwidth. 
              Click "Copy" to copy the styled text to your clipboard.
            </p>
          </div>
          
          <div className="bg-zinc-50 rounded-lg p-4 sm:p-5">
            <h4 className="font-semibold text-base sm:text-lg mb-2">Step 2: Change Your Player Name</h4>
            <p className="text-sm sm:text-base text-zinc-700">
              Open Roblox and go to your profile settings. Click "Edit" next to your display name, paste the copied adopt me fonts, and save. 
              Your new styled name will appear in Adopt Me and other Roblox games.
            </p>
          </div>
          
          <div className="bg-zinc-50 rounded-lg p-4 sm:p-5">
            <h4 className="font-semibold text-base sm:text-lg mb-2">Step 3: Name Your Pets</h4>
            <p className="text-sm sm:text-base text-zinc-700">
              In Adopt Me, select a pet and click the name tag icon. Paste your styled adopt me fonts name. 
              Keep pet names short (under 20 characters) for best compatibility. Some decorative fonts work better than others for pet names.
            </p>
          </div>
          
          <div className="bg-zinc-50 rounded-lg p-4 sm:p-5">
            <h4 className="font-semibold text-base sm:text-lg mb-2">Step 4: Use in Chat</h4>
            <p className="text-sm sm:text-base text-zinc-700">
              You can also use adopt me fonts in chat messages. Simply type your message, copy the styled version from our generator, 
              and paste it into the chat. Note that Roblox may filter some special characters in chat.
            </p>
          </div>
        </div>

        <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">Most Popular Adopt Me Font Styles</h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-700 mb-4">
          Based on user preferences and compatibility, here are the most popular adopt me fonts styles:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-zinc-200 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">ⓑ</span>
              <h4 className="font-semibold">Bubble Fonts</h4>
            </div>
            <p className="text-sm text-zinc-700">
              Bubble adopt me fonts are the most popular choice. They create a cute, playful look with circled letters that stand out. 
              Perfect for pet names and player names. High compatibility with Roblox.
            </p>
          </div>
          
          <div className="border border-zinc-200 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🅱️</span>
              <h4 className="font-semibold">Bold Fonts</h4>
            </div>
            <p className="text-sm text-zinc-700">
              Bold adopt me fonts provide strong emphasis and excellent readability. Great for making your name stand out without being too decorative. 
              Works reliably across all Roblox devices.
            </p>
          </div>
          
          <div className="border border-zinc-200 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">♡</span>
              <h4 className="font-semibold">Cute Fonts</h4>
            </div>
            <p className="text-sm text-zinc-700">
              Cute adopt me fonts with hearts and decorations are very popular, especially among younger players. 
              These styles add personality and charm to names. Best for pet names.
            </p>
          </div>
          
          <div className="border border-zinc-200 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">Ｆ</span>
              <h4 className="font-semibold">Aesthetic Fullwidth</h4>
            </div>
            <p className="text-sm text-zinc-700">
              Aesthetic fullwidth (vaporwave style) adopt me fonts create a retro, wide-spaced look. 
              Very popular for unique player names. Note: May appear differently on mobile devices.
            </p>
          </div>
          
          <div className="border border-zinc-200 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">ᴬ</span>
              <h4 className="font-semibold">Small Caps</h4>
            </div>
            <p className="text-sm text-zinc-700">
              Small caps adopt me fonts offer a clean, professional look. Excellent for readable names that still look unique. 
              High compatibility and works well for both player and pet names.
            </p>
          </div>
          
          <div className="border border-zinc-200 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">★</span>
              <h4 className="font-semibold">Star Decorations</h4>
            </div>
            <p className="text-sm text-zinc-700">
              Star-decorated adopt me fonts are trendy for creating eye-catching names. Styles like "Star Brackets" and "Aesthetic Decor" 
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
            <span><strong>Mobile vs Desktop:</strong> Some adopt me fonts display differently on mobile. Test on your primary device before sharing.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">•</span>
            <span><strong>Combine with emojis:</strong> Use our <a href="/names" className="underline text-pink-600">name generator</a> to combine fonts with emojis for even more unique names.</span>
          </li>
        </ul>

        <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">Is it Safe to Use Adopt Me Fonts?</h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-700">
          Yes, adopt me fonts are safe to use. They are standard Unicode characters that Roblox supports. However, keep these points in mind:
        </p>
        <ul className="mt-3 space-y-2 text-sm sm:text-base text-zinc-700">
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">✓</span>
            <span>Adopt me fonts use official Unicode characters - no hacks or exploits</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">✓</span>
            <span>Roblox officially supports Unicode text rendering</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">⚠</span>
            <span>Some characters may be filtered by Roblox's moderation system</span>
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
              This usually means the device doesn't support those Unicode characters. Try using more common styles like Bold or Bubble fonts.
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
              Some devices render Unicode differently. Test your name on the device you'll primarily use. Bubble and Bold fonts have the best cross-device compatibility.
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
          <p className="text-sm sm:text-base text-zinc-700">
            <strong>Need more help?</strong> Check out our <a href="/faq" className="underline text-pink-600 font-semibold">Adopt Me Fonts FAQ</a> for detailed answers to common questions. 
            You can also use our <a href="/names" className="underline text-pink-600 font-semibold">name generator</a> to create cute pet names with emojis and fonts combined.
          </p>
        </div>
      </section>
    </main>
  );
}
