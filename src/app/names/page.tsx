"use client";
import { useState } from "react";
import { generateNames } from "@/lib/nameGenerator";
import styles from "@/lib/styles";
import Logo from "@/components/Logo";

export default function NamesPage() {
  const [names, setNames] = useState<string[]>([]);
  const [editedNames, setEditedNames] = useState<Record<number, string>>({});
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [selectedStyles, setSelectedStyles] = useState<Record<number, string>>({});
  const [toast, setToast] = useState<string>("");

  const generateNewNames = () => {
    const newNames = generateNames(5);
    setNames(newNames);
    setEditedNames({});
    setSelectedStyles({});
    setEditingIndex(null);
  };

  const handleNameEdit = (index: number, value: string) => {
    setEditedNames((prev) => ({ ...prev, [index]: value }));
  };

  const getDisplayName = (index: number): string => {
    return editedNames[index] !== undefined ? editedNames[index] : names[index];
  };

  const saveEdit = (index: number) => {
    setEditingIndex(null);
    // Edited name is already saved in editedNames state
  };

  const cancelEdit = (index: number) => {
    setEditingIndex(null);
    setEditedNames((prev) => {
      const newEdited = { ...prev };
      delete newEdited[index];
      return newEdited;
    });
  };

  const onCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setToast("Copied!");
      setTimeout(() => setToast(""), 1200);
    } catch {
      setToast("Copy failed");
      setTimeout(() => setToast(""), 1500);
    }
  };

  const getStyledName = (nameIndex: number, name: string): string => {
    const styleId = selectedStyles[nameIndex];
    if (!styleId || styleId === "normal") {
      return name;
    }
    const style = styles.find((s) => s.id === styleId);
    if (!style) return name;
    
    // Extract all text parts for styling (handle multiple words)
    const textParts = name.match(/[a-zA-Z]+/g);
    if (textParts && textParts.length > 0) {
      let styledName = name;
      // Apply style to all text parts
      textParts.forEach((text) => {
        const styledText = style.apply(text);
        styledName = styledName.replace(text, styledText);
      });
      return styledName;
    }
    return style.apply(name);
  };

  const toggleStyle = (nameIndex: number, styleId: string) => {
    setSelectedStyles((prev) => {
      const current = prev[nameIndex];
      if (current === styleId) {
        // If clicking the same style, reset to normal
        const newStyles = { ...prev };
        delete newStyles[nameIndex];
        return newStyles;
      }
      return { ...prev, [nameIndex]: styleId };
    });
  };

  // Popular styles for quick access
  const popularStyles = [
    "bubble",
    "bold",
    "cute",
    "star-brackets",
    "aesthetic-decor",
    "cute-brackets",
    "heart-sparkle",
    "flower-decor",
  ].map((id) => styles.find((s) => s.id === id)).filter(Boolean);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
      <section className="mb-8">
        <Logo />
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">Adopt Me Names Generator - Cute Pet Names</h1>
          <a
            href="/"
            className="text-sm px-4 py-2.5 rounded-lg border border-zinc-200 hover:border-zinc-300 transition-all text-center sm:text-left flex-shrink-0"
          >
            🔤 Font Generator
          </a>
        </div>
        <p className="mt-2 text-sm sm:text-base text-zinc-600">
          Generate cute and playful adopt me names and adopt me pet names with emojis. Get 5 unique name suggestions perfect for your Roblox Adopt Me pets and characters.
        </p>
        
        <div className="mt-6">
          <button
            onClick={generateNewNames}
            className="rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-3.5 text-white font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg min-h-[48px] touch-manipulation w-full sm:w-auto"
          >
            ✨ Generate Names
          </button>
        </div>

        {!!toast && (
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-2 text-sm text-white shadow-lg z-50"
          >
            {toast}
          </div>
        )}
      </section>

      {names.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Generated Names</h2>
          {names.map((name, index) => {
            const displayName = getDisplayName(index);
            const currentStyle = selectedStyles[index] || "normal";
            const styledName = getStyledName(index, displayName);
            const currentStyleObj = styles.find((s) => s.id === currentStyle) || styles[0];
            const isEditing = editingIndex === index;

            return (
              <div
                key={`${name}-${index}`}
                className="rounded-xl border border-zinc-200 bg-white/95 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    {isEditing ? (
                      <div className="mb-3">
                        <input
                          type="text"
                          value={editedNames[index] !== undefined ? editedNames[index] : name}
                          onChange={(e) => handleNameEdit(index, e.target.value)}
                          className="w-full text-xl sm:text-2xl font-bold text-zinc-800 border-2 border-pink-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-pink-500"
                          placeholder="Enter your custom name"
                          autoFocus
                          maxLength={32}
                        />
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => saveEdit(index)}
                            className="text-xs px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                          >
                            ✓ Save
                          </button>
                          <button
                            onClick={() => cancelEdit(index)}
                            className="text-xs px-3 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                          >
                            ✕ Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                        <span className="text-xl sm:text-2xl font-bold text-zinc-800 break-words">
                          {styledName}
                        </span>
                        <button
                          onClick={() => setEditingIndex(index)}
                          className="text-xs px-3 py-2 border border-zinc-300 rounded-md hover:bg-zinc-50 text-zinc-600 min-h-[36px] touch-manipulation self-start sm:self-auto"
                          title="Edit name"
                        >
                          ✏️ Edit
                        </button>
                      </div>
                    )}
                    
                    {/* Quick style buttons */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {popularStyles.map((style) => {
                        if (!style) return null;
                        const isActive = currentStyle === style.id;
                        return (
                          <button
                            key={style.id}
                            onClick={() => toggleStyle(index, style.id)}
                            className={`rounded-md px-2.5 sm:px-3 py-2 text-xs min-h-[36px] touch-manipulation transition-all ${
                              isActive
                                ? "bg-black text-white"
                                : "border border-zinc-200 hover:border-zinc-300"
                            }`}
                            title={style.description}
                          >
                            <span className="mr-1">{style.icon}</span>
                            <span className="hidden sm:inline">{style.name}</span>
                            <span className="sm:hidden">{style.name.split(' ')[0]}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Style selector dropdown */}
                    <details className="mb-3" open={index === 0}>
                      <summary className="text-sm text-zinc-500 cursor-pointer hover:text-zinc-700">
                        More styles...
                      </summary>
                      <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                        {styles.map((style) => {
                          const isActive = currentStyle === style.id;
                          return (
                            <button
                              key={style.id}
                              onClick={() => toggleStyle(index, style.id)}
                              className={`rounded-md px-2 py-2 text-xs text-left min-h-[36px] touch-manipulation transition-all ${
                                isActive
                                  ? "bg-black text-white"
                                  : "border border-zinc-200 hover:border-zinc-300"
                              }`}
                            >
                              <span className="mr-1">{style.icon}</span>
                              {style.name}
                            </button>
                          );
                        })}
                      </div>
                    </details>
                  </div>

                  {!isEditing && (
                    <button
                      onClick={() => onCopy(styledName)}
                      className="rounded-md bg-black px-4 py-2.5 text-sm text-white hover:opacity-90 transition-all flex-shrink-0 min-h-[44px] touch-manipulation w-full sm:w-auto"
                    >
                      📋 Copy
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      )}

      {names.length === 0 && (
        <section className="text-center py-12">
          <div className="text-6xl mb-4">✨</div>
          <h2 className="text-2xl font-semibold mb-2">Ready to Generate Names?</h2>
          <p className="text-zinc-600 mb-6">
            Click the button above to generate 5 cute and unique adopt me names with emojis!
          </p>
        </section>
      )}

      <section className="mt-8 sm:mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">About Adopt Me Names Generator</h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-zinc-700">
          Our adopt me names generator creates cute and playful names perfect for your Roblox Adopt Me pets and characters. 
          Each generated adopt me pet name combines adorable words with emojis and decorations to make your pet stand out. 
          You can apply different font styles to each name, making them even more unique and personalized.
        </p>
        <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">How to use Adopt Me Names Generator</h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-700">
          Simply click the "Generate Names" button to get 5 unique adopt me names. Each name comes with emojis and 
          can be styled using our font styles. Click on any style button to apply it to the name, then copy it 
          directly to use in Roblox Adopt Me. Perfect for pet names, player names, and more!
        </p>
        <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">Tips for Adopt Me Names</h3>
        <ul className="mt-2 list-disc pl-5 sm:pl-6 text-sm sm:text-base text-zinc-700 space-y-1">
          <li>Keep names short - Roblox may filter long names</li>
          <li>Test names in-game before finalizing</li>
          <li>Combine emojis with cute words for best results</li>
          <li>Use font styles to make names more unique</li>
          <li>Generate multiple times to find the perfect name</li>
        </ul>
      </section>
    </main>
  );
}

