export interface Symbol {
  char: string;
  name: string;
  category: string;
  safety: "safe" | "sometimes" | "filtered";
  description?: string;
}

export const symbols: Symbol[] = [
  // Stars & Sparkles
  { char: "✨", name: "Sparkles", category: "stars", safety: "safe" },
  { char: "⭐", name: "Star", category: "stars", safety: "safe" },
  { char: "🌟", name: "Glowing Star", category: "stars", safety: "safe" },
  { char: "💫", name: "Dizzy Star", category: "stars", safety: "safe" },
  { char: "🌠", name: "Shooting Star", category: "stars", safety: "safe" },
  { char: "⋆", name: "Star Symbol", category: "stars", safety: "safe" },
  { char: "★", name: "Black Star", category: "stars", safety: "safe" },
  { char: "✦", name: "Four Point Star", category: "stars", safety: "safe" },
  { char: "✧", name: "White Four Point Star", category: "stars", safety: "safe" },
  
  // Hearts
  { char: "♡", name: "White Heart", category: "hearts", safety: "safe" },
  { char: "♥", name: "Heart Suit", category: "hearts", safety: "safe" },
  { char: "💕", name: "Two Hearts", category: "hearts", safety: "safe" },
  { char: "💖", name: "Sparkling Heart", category: "hearts", safety: "safe" },
  { char: "💗", name: "Growing Heart", category: "hearts", safety: "safe" },
  { char: "💓", name: "Beating Heart", category: "hearts", safety: "safe" },
  { char: "💞", name: "Revolving Hearts", category: "hearts", safety: "sometimes" },
  { char: "💝", name: "Heart with Ribbon", category: "hearts", safety: "safe" },
  { char: "💘", name: "Cupid", category: "hearts", safety: "sometimes" },
  { char: "❤️", name: "Red Heart", category: "hearts", safety: "safe" },
  
  // Flowers
  { char: "🌸", name: "Cherry Blossom", category: "flowers", safety: "safe" },
  { char: "🌺", name: "Hibiscus", category: "flowers", safety: "safe" },
  { char: "🌻", name: "Sunflower", category: "flowers", safety: "safe" },
  { char: "🌷", name: "Tulip", category: "flowers", safety: "safe" },
  { char: "🌹", name: "Rose", category: "flowers", safety: "safe" },
  { char: "🌼", name: "Daisy", category: "flowers", safety: "safe" },
  { char: "💐", name: "Bouquet", category: "flowers", safety: "safe" },
  { char: "✿", name: "Flower", category: "flowers", safety: "safe" },
  
  // Animals
  { char: "🐾", name: "Paw Prints", category: "animals", safety: "safe" },
  { char: "🐱", name: "Cat Face", category: "animals", safety: "safe" },
  { char: "🐶", name: "Dog Face", category: "animals", safety: "safe" },
  { char: "🐰", name: "Rabbit", category: "animals", safety: "safe" },
  { char: "🐻", name: "Bear", category: "animals", safety: "safe" },
  { char: "🐼", name: "Panda", category: "animals", safety: "safe" },
  { char: "🦊", name: "Fox", category: "animals", safety: "safe" },
  { char: "🦄", name: "Unicorn", category: "animals", safety: "safe" },
  
  // Aesthetic
  { char: "🎀", name: "Ribbon", category: "aesthetic", safety: "safe" },
  { char: "💎", name: "Gem", category: "aesthetic", safety: "safe" },
  { char: "👑", name: "Crown", category: "aesthetic", safety: "safe" },
  { char: "˚", name: "Ring Above", category: "aesthetic", safety: "safe" },
  { char: "｡", name: "Ideographic Comma", category: "aesthetic", safety: "safe" },
  { char: "‧", name: "Hyphenation Point", category: "aesthetic", safety: "safe" },
  
  // Nature
  { char: "🌙", name: "Crescent Moon", category: "nature", safety: "safe" },
  { char: "☀️", name: "Sun", category: "nature", safety: "safe" },
  { char: "☁️", name: "Cloud", category: "nature", safety: "safe" },
  { char: "🌈", name: "Rainbow", category: "nature", safety: "safe" },
  { char: "🌊", name: "Wave", category: "nature", safety: "safe" },
];

export const symbolCategories = [
  { id: "stars", name: "Stars & Sparkles", icon: "✨" },
  { id: "hearts", name: "Hearts", icon: "💕" },
  { id: "flowers", name: "Flowers", icon: "🌸" },
  { id: "animals", name: "Animals", icon: "🐾" },
  { id: "aesthetic", name: "Aesthetic", icon: "🎀" },
  { id: "nature", name: "Nature", icon: "🌙" },
];

export function getSymbolsByCategory(category: string): Symbol[] {
  return symbols.filter((s) => s.category === category);
}


