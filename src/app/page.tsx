"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "@/lib/styles";
import Logo from "@/components/Logo";

export default function Home() {
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const [text, setText] = useState(params.get("text") ?? "Adopt Me Fonts");
  const [selected, setSelected] = useState<string>(params.get("style") ?? "normal");
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
              <span aria-hidden>{selectedStyle.icon}</span>
              <span className="break-words">{selectedStyle.name}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onCopy(selectedOutput)}
                className="rounded-md bg-black px-4 py-2.5 text-sm text-white hover:opacity-90 min-h-[44px] touch-manipulation"
              >
                Copy Selected
              </button>
            </div>
          </div>
          <div className="mt-3 break-words text-lg">{selectedOutput}</div>
        </div>
        {!!toast && (
          <div role="status" aria-live="polite" className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-2 text-sm text-white shadow-sm">
            {toast}
          </div>
        )}
      </section>

      <section className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((s) => (
          <div key={s.id} className={`rounded-xl border transition-all ${selected === s.id ? "border-black shadow-md scale-[1.02]" : "border-zinc-200 hover:border-zinc-300"} bg-white/95 backdrop-blur-sm p-4 shadow-sm`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
              <div className="font-medium flex items-center gap-2 text-sm sm:text-base min-w-0">
                <span aria-hidden className="flex-shrink-0">{s.icon}</span>
                <span className="break-words">{s.name}</span>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => { setSelected(s.id); setToast("Selected"); setTimeout(() => setToast(""), 800); }}
                  className={`rounded-md px-3 py-2 text-xs sm:text-sm min-h-[36px] touch-manipulation ${selected === s.id ? "bg-black text-white" : "border border-zinc-200"}`}
                >
                  Select
                </button>
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
        <h2 className="text-xl sm:text-2xl font-semibold">Adopt Me Fonts: Complete Guide and Tips</h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-zinc-700">
          Adopt Me fonts help you style names and chat using Unicode characters in Roblox Adopt Me. This free adopt me fonts generator lets you
          type text, choose from various adopt me fonts styles like bubble fonts, bold, cute, small caps, and aesthetic fullwidth, then copy the
          result to use in Roblox Adopt Me. Whether you're looking for cute adopt me fonts, bubble adopt me fonts, or stylish adopt me font styles,
          our generator has you covered.
        </p>
        <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">How to use the Adopt Me fonts generator</h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-700">
          Using our adopt me fonts generator is simple: Enter your text above, pick your favorite adopt me fonts style, and press Copy. 
          Then open Roblox Adopt Me, paste the adopt me fonts into your player name, pet name, or chat. Keep names short and avoid 
          excessive symbols to reduce filtering. Our adopt me fonts tool works instantly - no download required.
        </p>
        <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">Popular adopt me fonts styles for Roblox Adopt Me</h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-700">
          Players often use adopt me fonts like bubble fonts for cute vibes, bold adopt me fonts for strong emphasis, small caps for clean labels, and
          aesthetic fullwidth (vaporwave) adopt me fonts for a retro feel. Cute adopt me fonts with hearts and sparkles are also very popular. 
          Utility adopt me fonts such as underline and strikethrough use combining marks and may be filtered in some cases. Try different 
          adopt me font styles to find what works best for your Roblox Adopt Me name.
        </p>
        <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">Is it safe to use Adopt Me fonts?</h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-700">
          These adopt me fonts styles are Unicode characters rendered by Roblox. While safe to use, some adopt me fonts characters might not be visible on
          all devices or could be replaced by filters. Test short names first and avoid rare symbols. Our adopt me fonts generator uses 
          standard Unicode characters that are widely supported in Roblox Adopt Me.
        </p>
        <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">More help with Adopt Me fonts</h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-700">
          For detailed explanations and compatibility notes about adopt me fonts, see the <a href="/faq" className="underline">Adopt Me Fonts FAQ</a>.
          This adopt me fonts tool is completely free and works on mobile and desktop. Need help with specific adopt me fonts styles? 
          Check out our FAQ page for more information about using adopt me fonts in Roblox Adopt Me.
        </p>
      </section>
    </main>
  );
}
