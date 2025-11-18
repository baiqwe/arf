export type TextStyle = {
  id: string;
  name: string;
  description: string;
  apply: (input: string) => string;
  keywords?: string[];
  icon?: string;
};

const az = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const azLower = az.toLowerCase();
const digits = "0123456789";

const mapLatin = (input: string, upperStart: number, lowerStart: number): string => {
  let out = "";
  for (const ch of input) {
    const ui = az.indexOf(ch);
    const li = azLower.indexOf(ch);
    const di = digits.indexOf(ch);
    if (ui >= 0) out += String.fromCodePoint(upperStart + ui);
    else if (li >= 0) out += String.fromCodePoint(lowerStart + li);
    else if (di >= 0) out += ch;
    else out += ch;
  }
  return out;
};

const smallCapsMap: Record<string, string> = {
  a: "ᴀ",
  b: "ʙ",
  c: "ᴄ",
  d: "ᴅ",
  e: "ᴇ",
  f: "ғ",
  g: "ɢ",
  h: "ʜ",
  i: "ɪ",
  j: "ᴊ",
  k: "ᴋ",
  l: "ʟ",
  m: "ᴍ",
  n: "ɴ",
  o: "ᴏ",
  p: "ᴘ",
  q: "ǫ",
  r: "ʀ",
  s: "s",
  t: "ᴛ",
  u: "ᴜ",
  v: "ᴠ",
  w: "ᴡ",
  x: "x",
  y: "ʏ",
  z: "ᴢ",
};

const circledUpperStart = 0x24b6;
const circledLowerStart = 0x24d0;

const styles: TextStyle[] = [
  {
    id: "normal",
    name: "Normal",
    description: "Plain text",
    apply: (s) => s,
    keywords: ["roblox", "adopt me", "default"],
    icon: "🔤",
  },
  {
    id: "bold",
    name: "Bold",
    description: "Mathematical Bold",
    apply: (s) => mapLatin(s, 0x1d400, 0x1d41a),
    keywords: ["strong"],
    icon: "🅱️",
  },
  {
    id: "italic",
    name: "Italic",
    description: "Mathematical Italic",
    apply: (s) => mapLatin(s, 0x1d434, 0x1d44e),
    keywords: ["slanted"],
    icon: "𝑰",
  },
  {
    id: "bold-italic",
    name: "Bold Italic",
    description: "Mathematical Bold Italic",
    apply: (s) => mapLatin(s, 0x1d468, 0x1d482),
    icon: "𝑩𝑰",
  },
  {
    id: "script",
    name: "Script",
    description: "Mathematical Script",
    apply: (s) => mapLatin(s, 0x1d49c, 0x1d4b6),
    icon: "✒️",
  },
  {
    id: "bold-script",
    name: "Bold Script",
    description: "Mathematical Bold Script",
    apply: (s) => mapLatin(s, 0x1d4d0, 0x1d4ea),
    icon: "🖋️",
  },
  {
    id: "fraktur",
    name: "Fraktur",
    description: "Mathematical Fraktur",
    apply: (s) => mapLatin(s, 0x1d504, 0x1d51e),
    icon: "𝔉",
  },
  {
    id: "bold-fraktur",
    name: "Bold Fraktur",
    description: "Mathematical Bold Fraktur",
    apply: (s) => mapLatin(s, 0x1d56c, 0x1d586),
    icon: "𝕭",
  },
  {
    id: "sans",
    name: "Sans",
    description: "Mathematical Sans-Serif",
    apply: (s) => mapLatin(s, 0x1d5a0, 0x1d5ba),
    icon: "🅂",
  },
  {
    id: "sans-bold",
    name: "Sans Bold",
    description: "Mathematical Sans-Serif Bold",
    apply: (s) => mapLatin(s, 0x1d5d4, 0x1d5ee),
    icon: "🆂",
  },
  {
    id: "sans-italic",
    name: "Sans Italic",
    description: "Mathematical Sans-Serif Italic",
    apply: (s) => mapLatin(s, 0x1d608, 0x1d622),
    icon: "𝘴",
  },
  {
    id: "monospace",
    name: "Monospace",
    description: "Mathematical Monospace",
    apply: (s) => mapLatin(s, 0x1d670, 0x1d68a),
    icon: "Ⓜ️",
  },
  {
    id: "small-caps",
    name: "Small Caps",
    description: "Unicode small capital letters",
    apply: (s) => {
      let out = "";
      for (const ch of s) {
        const lower = ch.toLowerCase();
        out += smallCapsMap[lower] ?? ch.toUpperCase();
      }
      return out;
    },
    icon: "ᴬ",
  },
  {
    id: "bubble",
    name: "Bubble",
    description: "Circled letters",
    apply: (s) => {
      let out = "";
      for (const ch of s) {
        const ui = az.indexOf(ch);
        const li = azLower.indexOf(ch);
        if (ui >= 0) out += String.fromCodePoint(circledUpperStart + ui);
        else if (li >= 0) out += String.fromCodePoint(circledLowerStart + li);
        else out += ch;
      }
      return out;
    },
    icon: "ⓑ",
  },
  {
    id: "double-struck",
    name: "Double Struck",
    description: "Mathematical Double-Struck",
    apply: (s) => mapLatin(s, 0x1d538, 0x1d552),
    icon: "𝕯",
  },
  {
    id: "fullwidth",
    name: "Aesthetic Fullwidth",
    description: "Vaporwave fullwidth characters",
    apply: (s) => {
      const mapChar = (ch: string) => {
        const ui = az.indexOf(ch);
        const li = azLower.indexOf(ch);
        const di = digits.indexOf(ch);
        if (ui >= 0) return String.fromCodePoint(0xff21 + ui);
        if (li >= 0) return String.fromCodePoint(0xff41 + li);
        if (di >= 0) return String.fromCodePoint(0xff10 + di);
        if (ch === " ") return " ";
        return ch;
      };
      let out = "";
      for (const c of s) out += mapChar(c);
      return out;
    },
    keywords: ["aesthetic", "vaporwave"],
    icon: "Ｆ",
  },
  {
    id: "underline",
    name: "Underline",
    description: "Combining underline",
    apply: (s) => {
      const mark = "\u0332";
      let out = "";
      for (const ch of s) out += ch === " " ? ch : ch + mark;
      return out;
    },
    icon: "⎁",
  },
  {
    id: "strikethrough",
    name: "Strikethrough",
    description: "Combining strikethrough",
    apply: (s) => {
      const mark = "\u0336";
      let out = "";
      for (const ch of s) out += ch === " " ? ch : ch + mark;
      return out;
    },
    icon: "⎂",
  },
  {
    id: "wide",
    name: "Wide Spaced",
    description: "Adds spaces between letters",
    apply: (s) => s.split("").join(" "),
    icon: "↔️",
  },
  {
    id: "stars",
    name: "Stars",
    description: "Stars around text",
    apply: (s) => `★ ${s} ★`,
    icon: "⭐",
  },
  {
    id: "sparkles",
    name: "Sparkles",
    description: "Sparkles around text",
    apply: (s) => `✨ ${s} ✨`,
    icon: "✨",
  },
  {
    id: "arrows",
    name: "Arrows",
    description: "Arrows around text",
    apply: (s) => `➤ ${s} ◀`,
    icon: "➤",
  },
  {
    id: "cute",
    name: "Cute",
    description: "Hearts around text",
    apply: (s) => `♡ ${s} ♡`,
    icon: "🐾",
  },
  {
    id: "star-brackets",
    name: "Star Brackets",
    description: "Stars around text (no spaces)",
    apply: (s) => `★${s}★`,
    keywords: ["star", "brackets", "adopt me"],
    icon: "★",
  },
  {
    id: "aesthetic-decor",
    name: "Aesthetic Decor",
    description: "Special symbols around text",
    apply: (s) => `⋆｡‧˚${s}˚‧｡⋆`,
    keywords: ["aesthetic", "cute", "decorative"],
    icon: "⋆",
  },
  {
    id: "cute-brackets",
    name: "Cute Brackets",
    description: "Cute brackets around text",
    apply: (s) => `୨${s}୧`,
    keywords: ["cute", "brackets", "adopt me"],
    icon: "୨",
  },
  {
    id: "wave-decor",
    name: "Wave Decor",
    description: "Wave symbols around text",
    apply: (s) => `~.* ${s} *.~`,
    keywords: ["wave", "decorative"],
    icon: "~",
  },
  {
    id: "kawaii-face",
    name: "Kawaii Face",
    description: "Cute kawaii face around text",
    apply: (s) => `≽^•⩊•^≼ ${s}`,
    keywords: ["kawaii", "cute", "face"],
    icon: "≽",
  },
  {
    id: "cute-face",
    name: "Cute Face",
    description: "Cute face expression around text",
    apply: (s) => `૮꒰˶ᵔ ᗜ ᵔ˶꒱ა ${s}`,
    keywords: ["cute", "face", "expression"],
    icon: "૮",
  },
  {
    id: "divider-decor",
    name: "Divider Decor",
    description: "Divider lines around text",
    apply: (s) => `──── ${s} ────`,
    keywords: ["divider", "line", "decorative"],
    icon: "─",
  },
  {
    id: "star-dot",
    name: "Star Dot",
    description: "Star and dot decoration",
    apply: (s) => `⋆｡${s}｡⋆`,
    keywords: ["star", "dot", "cute"],
    icon: "⋆",
  },
  {
    id: "heart-sparkle",
    name: "Heart Sparkle",
    description: "Hearts and sparkles around text",
    apply: (s) => `˚ʚ♡ɞ˚ ${s} ˚ʚ♡ɞ˚`,
    keywords: ["heart", "sparkle", "cute"],
    icon: "♡",
  },
  {
    id: "flower-decor",
    name: "Flower Decor",
    description: "Flower symbols around text",
    apply: (s) => `°❀⋆ ${s} ⋆❀°`,
    keywords: ["flower", "cute", "decorative"],
    icon: "❀",
  },
  {
    id: "moon-star",
    name: "Moon Star",
    description: "Moon and star decoration",
    apply: (s) => `⋆˖⁺‧₊☽ ${s} ☾₊‧⁺˖⋆`,
    keywords: ["moon", "star", "aesthetic"],
    icon: "☾",
  },
  {
    id: "double-heart",
    name: "Double Heart",
    description: "Double hearts around text",
    apply: (s) => `♡₊˚ ${s} ✧₊˚♡`,
    keywords: ["heart", "double", "cute"],
    icon: "♡",
  },
  {
    id: "bracket-cute",
    name: "Bracket Cute",
    description: "Cute brackets with dots",
    apply: (s) => `⋆ ˚｡⋆୨${s}୧⋆ ˚｡⋆`,
    keywords: ["bracket", "cute", "dots"],
    icon: "⋆",
  },
  {
    id: "wave-simple",
    name: "Wave Simple",
    description: "Simple wave around text",
    apply: (s) => `~ ${s} ~`,
    keywords: ["wave", "simple"],
    icon: "~",
  },
  {
    id: "sparkle-heart",
    name: "Sparkle Heart",
    description: "Sparkles and hearts",
    apply: (s) => `⋆ ˚｡⋆୨♡୧⋆ ˚｡⋆ ${s}`,
    keywords: ["sparkle", "heart", "cute"],
    icon: "⋆",
  },
  {
    id: "star-name",
    name: "Star Name",
    description: "Star decoration for names",
    apply: (s) => `⋆˚࿔ ${s} 𝜗𝜚˚⋆`,
    keywords: ["star", "name", "aesthetic"],
    icon: "⋆",
  },
  {
    id: "cute-dots",
    name: "Cute Dots",
    description: "Cute dots around text",
    apply: (s) => `˗ˏˋ ${s} ˎˊ˗`,
    keywords: ["dots", "cute", "decorative"],
    icon: "˗",
  },
  {
    id: "bracket-star",
    name: "Bracket Star",
    description: "Brackets with stars",
    apply: (s) => `「 ✦ ${s} ✦ 」`,
    keywords: ["bracket", "star", "cute"],
    icon: "「",
  },
  {
    id: "squiggly",
    name: "Squiggly",
    description: "Squiggly underline effect",
    apply: (s) => {
      const mark = "\u0330"; // Combining tilde below
      let out = "";
      for (const ch of s) out += ch === " " ? ch : ch + mark;
      return out;
    },
    keywords: ["squiggly", "underline", "decorative"],
    icon: "~",
  },
  {
    id: "double-underline",
    name: "Double Underline",
    description: "Double underline effect",
    apply: (s) => {
      const mark = "\u0333"; // Combining double low line
      let out = "";
      for (const ch of s) out += ch === " " ? ch : ch + mark;
      return out;
    },
    keywords: ["underline", "double", "emphasis"],
    icon: "═",
  },
  {
    id: "box-draw",
    name: "Box Draw",
    description: "Box drawing characters around text",
    apply: (s) => `┌─ ${s} ─┐`,
    keywords: ["box", "draw", "frame"],
    icon: "┌",
  },
  {
    id: "diamond-decor",
    name: "Diamond Decor",
    description: "Diamond symbols around text",
    apply: (s) => `◈ ${s} ◈`,
    keywords: ["diamond", "decorative"],
    icon: "◈",
  },
  {
    id: "circle-decor",
    name: "Circle Decor",
    description: "Circle symbols around text",
    apply: (s) => `◉ ${s} ◉`,
    keywords: ["circle", "decorative"],
    icon: "◉",
  },
  {
    id: "arrow-both",
    name: "Arrow Both",
    description: "Arrows on both sides",
    apply: (s) => `➤ ${s} ➤`,
    keywords: ["arrow", "both", "direction"],
    icon: "➤",
  },
  {
    id: "star-double",
    name: "Star Double",
    description: "Double stars around text",
    apply: (s) => `✦ ${s} ✦`,
    keywords: ["star", "double", "cute"],
    icon: "✦",
  },
  {
    id: "heart-double",
    name: "Heart Double",
    description: "Double hearts around text",
    apply: (s) => `♥ ${s} ♥`,
    keywords: ["heart", "double", "love"],
    icon: "♥",
  },
  {
    id: "dot-decor",
    name: "Dot Decor",
    description: "Dots around text",
    apply: (s) => `• ${s} •`,
    keywords: ["dot", "bullet", "decorative"],
    icon: "•",
  },
  {
    id: "line-decor",
    name: "Line Decor",
    description: "Lines around text",
    apply: (s) => `━━ ${s} ━━`,
    keywords: ["line", "decorative", "bold"],
    icon: "━",
  },
  {
    id: "bracket-square",
    name: "Bracket Square",
    description: "Square brackets around text",
    apply: (s) => `【 ${s} 】`,
    keywords: ["bracket", "square", "cute"],
    icon: "【",
  },
  {
    id: "bracket-round",
    name: "Bracket Round",
    description: "Round brackets with decoration",
    apply: (s) => `（ ${s} ）`,
    keywords: ["bracket", "round", "cute"],
    icon: "（",
  },
  {
    id: "star-triple",
    name: "Star Triple",
    description: "Triple stars around text",
    apply: (s) => `✧ ${s} ✧`,
    keywords: ["star", "triple", "sparkle"],
    icon: "✧",
  },
  {
    id: "cute-paw",
    name: "Cute Paw",
    description: "Paw prints around text",
    apply: (s) => `🐾 ${s} 🐾`,
    keywords: ["paw", "cute", "animal"],
    icon: "🐾",
  },
  {
    id: "flower-cute",
    name: "Flower Cute",
    description: "Cute flower decoration",
    apply: (s) => `✿ ${s} ✿`,
    keywords: ["flower", "cute", "decorative"],
    icon: "✿",
  },
  {
    id: "music-note",
    name: "Music Note",
    description: "Music notes around text",
    apply: (s) => `♪ ${s} ♪`,
    keywords: ["music", "note", "decorative"],
    icon: "♪",
  },
  {
    id: "sun-decor",
    name: "Sun Decor",
    description: "Sun symbols around text",
    apply: (s) => `☀ ${s} ☀`,
    keywords: ["sun", "bright", "decorative"],
    icon: "☀",
  },
  {
    id: "cloud-decor",
    name: "Cloud Decor",
    description: "Cloud symbols around text",
    apply: (s) => `☁ ${s} ☁`,
    keywords: ["cloud", "soft", "decorative"],
    icon: "☁",
  },
];

export default styles;