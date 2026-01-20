"use client";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import styles from "@/lib/styles";

const AdResponsiveBanner = dynamic(
  () => import("@/components/ads/AdResponsiveBanner"),
  { ssr: false }
);

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
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
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

      <div className="mt-6 mb-8 rounded-xl border border-zinc-200 bg-white/95 backdrop-blur-sm p-4 shadow-sm">
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

      <section className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((s, index) => {
          const isSelected = selected === s.id;
          return (
            <>
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
              {/* Insert ad after 8th style */}
              {index === 7 && (
                <div key="ad-slot" className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4">
                  <AdResponsiveBanner />
                </div>
              )}
            </>
          );
        })}
      </section>
    </div>
  );
}
