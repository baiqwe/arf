import styles from "./styles";

export interface PreppyTemplate {
  id: string;
  name: string;
  prefix: string;
  suffix: string;
  fontStyleId: string;
  description: string;
  icon: string;
}

export const preppyTemplates: PreppyTemplate[] = [
  {
    id: "classic-preppy",
    name: "Classic Preppy",
    prefix: "✨ ",
    suffix: " 🎀",
    fontStyleId: "script",
    description: "Elegant script font with sparkles and bow",
    icon: "✨",
  },
  {
    id: "aesthetic-preppy",
    name: "Aesthetic Preppy",
    prefix: "⋆｡‧˚",
    suffix: "˚‧｡⋆",
    fontStyleId: "bold",
    description: "Bold text with aesthetic decorations",
    icon: "⋆",
  },
  {
    id: "cute-preppy",
    name: "Cute Preppy",
    prefix: "♡ ",
    suffix: " ♡",
    fontStyleId: "bubble",
    description: "Bubble letters with hearts",
    icon: "♡",
  },
  {
    id: "sparkle-preppy",
    name: "Sparkle Preppy",
    prefix: "✨ ",
    suffix: " ✨",
    fontStyleId: "bold",
    description: "Bold text with sparkles",
    icon: "✨",
  },
  {
    id: "flower-preppy",
    name: "Flower Preppy",
    prefix: "🌸 ",
    suffix: " 🌸",
    fontStyleId: "script",
    description: "Script font with flower decorations",
    icon: "🌸",
  },
  {
    id: "star-preppy",
    name: "Star Preppy",
    prefix: "★ ",
    suffix: " ★",
    fontStyleId: "bold-italic",
    description: "Bold italic with stars",
    icon: "★",
  },
];

export function applyPreppyTemplate(
  text: string,
  template: PreppyTemplate
): string {
  const fontStyle = styles.find((s) => s.id === template.fontStyleId);
  const styledText = fontStyle ? fontStyle.apply(text) : text;
  return `${template.prefix}${styledText}${template.suffix}`;
}


