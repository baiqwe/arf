import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <nav className="border-b border-zinc-200 bg-white/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/blog"
              className="px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium text-zinc-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium text-zinc-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
            >
              About
            </Link>
            <Link
              href="/preppy-font-generator"
              className="px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium text-zinc-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
            >
              ✨ Preppy Fonts
            </Link>
            <Link
              href="/adopt-me-names-generator"
              className="px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium text-zinc-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
            >
              🐾 Generate Names
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

