export interface PetName {
  name: string;
  styles: string[]; // Recommended font style IDs
  description?: string;
}

export const petNameCategories: Record<string, PetName[]> = {
  "frost-dragon": [
    { name: "Frostbite", styles: ["bold", "bubble", "script"] },
    { name: "Ice Queen", styles: ["script", "bold-italic"] },
    { name: "Blizzard", styles: ["bold", "sans-bold"] },
    { name: "Crystal", styles: ["bubble", "script"] },
    { name: "Aurora", styles: ["script", "italic"] },
    { name: "Glacier", styles: ["bold", "bubble"] },
    { name: "Snowflake", styles: ["bubble", "cute"] },
    { name: "Frost", styles: ["bold", "small-caps"] },
    { name: "Winter", styles: ["script", "bold"] },
    { name: "Arctic", styles: ["bold", "bubble"] },
    { name: "Icy", styles: ["bubble", "cute"] },
    { name: "Frozen", styles: ["bold", "script"] },
    { name: "Polar", styles: ["bubble", "bold"] },
    { name: "Frosty", styles: ["cute", "bubble"] },
    { name: "Ice", styles: ["bold", "small-caps"] },
  ],
  "shadow-dragon": [
    { name: "Shadow", styles: ["bold", "sans-bold"] },
    { name: "Midnight", styles: ["bold", "script"] },
    { name: "Darkness", styles: ["bold", "sans-bold"] },
    { name: "Night", styles: ["bold", "bubble"] },
    { name: "Eclipse", styles: ["script", "bold"] },
    { name: "Phantom", styles: ["bold", "script"] },
    { name: "Raven", styles: ["bold", "bubble"] },
    { name: "Onyx", styles: ["bold", "small-caps"] },
    { name: "Noir", styles: ["script", "italic"] },
    { name: "Void", styles: ["bold", "sans-bold"] },
    { name: "Obsidian", styles: ["bold", "script"] },
    { name: "Dusk", styles: ["script", "bold"] },
    { name: "Twilight", styles: ["script", "bold-italic"] },
    { name: "Shadow", styles: ["bold", "bubble"] },
    { name: "Nightmare", styles: ["bold", "sans-bold"] },
  ],
  "cow": [
    { name: "Moo", styles: ["bubble", "cute"] },
    { name: "Bessie", styles: ["cute", "bubble"] },
    { name: "Milky", styles: ["bubble", "cute"] },
    { name: "Buttercup", styles: ["cute", "script"] },
    { name: "Daisy", styles: ["cute", "bubble"] },
    { name: "Clover", styles: ["cute", "bubble"] },
    { name: "Patches", styles: ["bubble", "cute"] },
    { name: "Spot", styles: ["bubble", "cute"] },
    { name: "Bella", styles: ["cute", "script"] },
    { name: "Luna", styles: ["script", "cute"] },
    { name: "Coco", styles: ["bubble", "cute"] },
    { name: "Mocha", styles: ["cute", "bubble"] },
    { name: "Oreo", styles: ["bubble", "cute"] },
    { name: "Cookie", styles: ["cute", "bubble"] },
    { name: "Penny", styles: ["bubble", "cute"] },
  ],
};

export function getPetNames(category: string): PetName[] {
  return petNameCategories[category] || [];
}


