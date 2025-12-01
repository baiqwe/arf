import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white mt-16 sm:mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Adopt Me Fonts</h3>
            <p className="text-sm text-zinc-700 mb-4">
              Free tools for Roblox Adopt Me players to create unique names and text styles.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  Font Generator
                </Link>
              </li>
              <li>
                <Link href="/preppy-font-generator" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  Preppy Font Generator
                </Link>
              </li>
              <li>
                <Link href="/adopt-me-names-generator" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  Name Generator
                </Link>
              </li>
              <li>
                <Link href="/tag-filter-checker" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  Tag Filter Checker
                </Link>
              </li>
              <li>
                <Link href="/symbols" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  Safe Symbols
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-to-use-adopt-me-fonts" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  How to Use Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/pet-names" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  Pet Names
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-zinc-700 hover:text-pink-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-600 text-center sm:text-left">
              © {currentYear} Adopt Me Fonts. All rights reserved.
            </p>
            <p className="text-xs text-zinc-500 text-center sm:text-right">
              Not affiliated with Roblox Corporation or Adopt Me.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

