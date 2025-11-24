// Simple tag filter checker based on known patterns
export interface FilterCheckResult {
  score: number; // 0-100, higher is safer
  status: "safe" | "warning" | "risky";
  issues: string[];
  suggestions: string[];
}

// Characters that are often filtered
const riskyChars = [
  "\u0332", // Combining underline
  "\u0336", // Combining strikethrough
  "\u0338", // Combining long solidus overlay
];

// Patterns that might trigger filters
const riskyPatterns = [
  /[^\x00-\x7F]{10,}/, // Too many non-ASCII characters in a row
  /[^\x20-\x7E\u00A0-\uFFFF]{3,}/, // Suspicious character sequences
];

export function checkTagFilter(text: string): FilterCheckResult {
  const issues: string[] = [];
  const suggestions: string[] = [];
  let score = 100;

  // Check for risky characters
  for (const char of riskyChars) {
    if (text.includes(char)) {
      issues.push("Contains combining characters that may be filtered");
      suggestions.push("Try using simpler font styles like Bold or Bubble");
      score -= 20;
    }
  }

  // Check for suspicious patterns
  for (const pattern of riskyPatterns) {
    if (pattern.test(text)) {
      issues.push("Contains unusual character sequences");
      suggestions.push("Simplify the text or use more common characters");
      score -= 15;
    }
  }

  // Check length
  if (text.length > 30) {
    issues.push("Text is quite long");
    suggestions.push("Keep names under 20 characters for best results");
    score -= 10;
  }

  // Check for too many symbols
  const symbolCount = (text.match(/[^\w\s]/g) || []).length;
  if (symbolCount > text.length * 0.5) {
    issues.push("Too many special symbols");
    suggestions.push("Reduce the number of symbols or decorative characters");
    score -= 25;
  }

  // Determine status
  let status: "safe" | "warning" | "risky";
  if (score >= 80) {
    status = "safe";
  } else if (score >= 50) {
    status = "warning";
  } else {
    status = "risky";
  }

  // If no issues, add positive feedback
  if (issues.length === 0) {
    suggestions.push("This text looks safe to use in Roblox!");
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    status,
    issues,
    suggestions,
  };
}


