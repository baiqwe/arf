import Link from "next/link";
import Image from "next/image";

export default function HomeStaticContent() {
    return (
        <>
            <section className="mt-8 sm:mt-10">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">More Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link href="/preppy-font-generator" className="border border-zinc-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
                        <h3 className="font-semibold mb-2">✨ Preppy Font Generator</h3>
                        <p className="text-sm text-zinc-700">Create aesthetic preppy names with symbols like ✨ 🎀 🐾. Perfect for that clean, polished look.</p>
                    </Link>
                    <Link href="/symbols" className="border border-zinc-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
                        <h3 className="font-semibold mb-2">🎀 Safe Symbols</h3>
                        <p className="text-sm text-zinc-700">Browse safe symbols that work in Roblox. All symbols tested and labeled with safety status.</p>
                    </Link>
                    <Link href="/tag-filter-checker" className="border border-zinc-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
                        <h3 className="font-semibold mb-2">🔍 Tag Filter Checker</h3>
                        <p className="text-sm text-zinc-700">Test if your font name will work in Roblox before using it. Get safety scores and suggestions.</p>
                    </Link>
                    <Link href="/pet-names" className="border border-zinc-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
                        <h3 className="font-semibold mb-2">🐉 Pet Name Bank</h3>
                        <p className="text-sm text-zinc-700">Find perfect names for your pets. Frost dragons, shadow dragons, cows, and more.</p>
                    </Link>
                </div>
            </section>

            <section className="mt-8 sm:mt-10">
                <h2 className="text-lg sm:text-xl font-semibold">What is an Adopt Me Font Generator?</h2>
                <p className="mt-2 text-sm sm:text-base text-zinc-700">
                    An Adopt Me Font Generator is a specialized tool designed for Roblox players who want to customize their in-game appearance. Unlike standard text, this tool converts your letters into mathematical alphanumeric symbols (like <strong>𝐁𝐨𝐥𝐝</strong> or <strong>Ⓑⓤⓑⓑⓛⓔ</strong>). These symbols allow you to bypass the standard font limitations in Roblox chat, pet names, and profile bios, giving you a unique aesthetic that matches your style.
                </p>
            </section>

            <section className="mt-8 sm:mt-10">
                <h2 className="text-lg sm:text-xl font-semibold">Why Default Fonts get filtered in Roblox?</h2>
                <div className="mt-4 space-y-4 text-zinc-700">
                    <p>
                        Roblox uses a sophisticated filter known as "Community Sift" to keep the platform safe. This system aggressively blocks numbers, personal info, and "inappropriate" phrases.
                        However, it often false-flags innocent pet names like "Cookie" or "Princess" simply because they might be used in other contexts.
                    </p>
                    <p>
                        <strong>The "Font" Solution:</strong> By using our font generator, you are technically using <em>Mathematical Alphanumeric Symbols</em> (like 𝙼𝚊𝚝𝚑).
                        To the Roblox filter filter, <strong>"C"</strong> (Latin letter) and <strong>"𝙲"</strong> (Mathematical Monospace) are completely different characters.
                        This often allows your text to "bypass" the strict word list while remaining readable to humans.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                        <p className="text-sm">
                            <strong>Note:</strong> While this helps with innocent names, never use fonts to bypass filters for bullying or inappropriate language. That will get your account banned.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-8 sm:mt-10">
                <h2 className="text-lg sm:text-xl font-semibold">3 Ways Fonts Increase Pet Trading Value</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
                        <div className="text-3xl mb-3">💎</div>
                        <h3 className="font-bold text-lg mb-2">The "Pro" Signal</h3>
                        <p className="text-sm text-zinc-600">
                            A default font signals a "casual player." A styled font like <strong>𝐁𝐨𝐥𝐝</strong> signals a "trader" who knows market values. People offer fair trades to pros.
                        </p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
                        <div className="text-3xl mb-3">🥺</div>
                        <h3 className="font-bold text-lg mb-2">Emotional Appeal</h3>
                        <p className="text-sm text-zinc-600">
                            Naming a pet "plz adopt" is spammy. Naming it "🥺𝓹𝓵𝔃 𝓪𝓭𝓸𝓹𝓽🥺" is cute. Cute pets get accepted for free more often.
                        </p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
                        <div className="text-3xl mb-3">📈</div>
                        <h3 className="font-bold text-lg mb-2">Differentiation</h3>
                        <p className="text-sm text-zinc-600">
                            In a server with 10 Unicorns, the one named <strong>✨🦄Starfire🦄✨</strong> captures attention first. Attention leads to trade requests.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-8 sm:mt-10">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium text-zinc-900">Are these real fonts or hacks?</h3>
                        <p className="text-sm text-zinc-700 mt-1">
                            These are not hacks or custom files. Our tool generates <strong>Unicode characters</strong> that look like styled fonts. Because they are standard text characters, you can copy and paste them directly into Roblox without installing any software.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium text-zinc-900">Why do some fonts show as boxes or question marks?</h3>
                        <p className="text-sm text-zinc-700 mt-1">
                            This happens when a device (like an older phone or tablet) doesn&apos;t support specific Unicode symbols. For the best compatibility in Adopt Me, we recommend using <strong>Bubble Fonts</strong> or <strong>Bold text</strong>, as these are supported on almost all devices.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium text-zinc-900">Can I use these fonts for my pet&apos;s name?</h3>
                        <p className="text-sm text-zinc-700 mt-1">
                            Absolutely! These fonts are perfect for naming pets like the Frost Dragon, Shadow Dragon, or Unicorn. Styled text helps your pet stand out in the trading center. Just keep the name short (under 20 characters) to avoid filtering.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-8 sm:mt-12">
                <h2 className="text-xl sm:text-2xl font-semibold">How to Use Styled Text in Roblox</h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-zinc-700">
                    Our generator creates styled Unicode text that works in Roblox Adopt Me. Follow these steps to customize your player name, pet name, or chat messages.
                    For detailed instructions with screenshots, see our <Link href="/how-to-use-adopt-me-fonts" className="text-pink-600 underline font-semibold">complete tutorial</Link>.
                </p>

                <div className="mt-4 sm:mt-6 space-y-4">
                    <div className="bg-zinc-50 rounded-lg p-4 sm:p-5">
                        <h4 className="font-semibold text-base sm:text-lg mb-2">Step 1: Generate Your Styled Text</h4>
                        <p className="text-sm sm:text-base text-zinc-700">
                            Type your desired text in the input field above. Choose from 50+ font styles including bubble, bold, cute, or aesthetic fullwidth.
                            Click &quot;Copy&quot; to copy the styled text to your clipboard.
                        </p>
                    </div>

                    <div className="bg-zinc-50 rounded-lg p-4 sm:p-5">
                        <h4 className="font-semibold text-base sm:text-lg mb-2">Step 2: Change Your Player Name</h4>
                        <p className="text-sm sm:text-base text-zinc-700">
                            Open Roblox and navigate to your profile settings. Click &quot;Edit&quot; next to your display name, paste the copied text, and save.
                            Your new styled name will appear in Adopt Me and other Roblox games.
                        </p>
                    </div>

                    <div className="bg-zinc-50 rounded-lg p-4 sm:p-5">
                        <h4 className="font-semibold text-base sm:text-lg mb-2">Step 3: Name Your Pets</h4>
                        <p className="text-sm sm:text-base text-zinc-700">
                            In Adopt Me, select a pet and click the name tag icon. Paste your styled name.
                            Keep pet names short (under 20 characters) for best compatibility. Simpler styles like bubble or bold work most reliably for pet names.
                        </p>
                    </div>

                    <div className="bg-zinc-50 rounded-lg p-4 sm:p-5">
                        <h4 className="font-semibold text-base sm:text-lg mb-2">Step 4: Use in Chat</h4>
                        <p className="text-sm sm:text-base text-zinc-700">
                            You can also use styled text in chat messages. Type your message, copy the styled version from our generator,
                            and paste it into the chat. Note that Roblox may filter some special characters in chat, so simpler styles work best.
                        </p>
                    </div>
                </div>

                <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">Most Popular Font Styles</h3>
                <p className="mt-2 text-sm sm:text-base text-zinc-700 mb-4">
                    Based on user feedback and compatibility testing, these styles are the most popular and reliable:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-zinc-200 rounded-lg p-4 bg-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">ⓑ</span>
                            <h4 className="font-semibold">Bubble Fonts</h4>
                        </div>
                        <p className="text-sm text-zinc-700">
                            Bubble fonts are the most popular choice. They create a cute, playful look with circled letters that stand out.
                            Perfect for pet names and player names. High compatibility with Roblox. <Link href="/styles" className="text-pink-600 underline">Browse all font styles</Link>.
                        </p>
                    </div>

                    <div className="border border-zinc-200 rounded-lg p-4 bg-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">🅱️</span>
                            <h4 className="font-semibold">Bold Fonts</h4>
                        </div>
                        <p className="text-sm text-zinc-700">
                            Bold fonts provide strong emphasis and excellent readability. Great for making your name stand out without being too decorative.
                            Works reliably across all Roblox devices and platforms.
                        </p>
                    </div>

                    <div className="border border-zinc-200 rounded-lg p-4 bg-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">♡</span>
                            <h4 className="font-semibold">Cute Fonts</h4>
                        </div>
                        <p className="text-sm text-zinc-700">
                            Cute fonts with hearts and decorations are very popular, especially among younger players.
                            These styles add personality and charm to names. Best for pet names.
                        </p>
                    </div>

                    <div className="border border-zinc-200 rounded-lg p-4 bg-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">Ｆ</span>
                            <h4 className="font-semibold">Aesthetic Fullwidth</h4>
                        </div>
                        <p className="text-sm text-zinc-700">
                            Aesthetic fullwidth (vaporwave style) creates a retro, wide-spaced look.
                            Very popular for unique player names. Note: May appear differently on mobile devices.
                        </p>
                    </div>

                    <div className="border border-zinc-200 rounded-lg p-4 bg-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">ᴬ</span>
                            <h4 className="font-semibold">Small Caps</h4>
                        </div>
                        <p className="text-sm text-zinc-700">
                            Small caps offer a clean, professional look. Excellent for readable names that still look unique.
                            High compatibility and works well for both player and pet names.
                        </p>
                    </div>

                    <div className="border border-zinc-200 rounded-lg p-4 bg-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">★</span>
                            <h4 className="font-semibold">Star Decorations</h4>
                        </div>
                        <p className="text-sm text-zinc-700">
                            Star-decorated fonts are trendy for creating eye-catching names. Styles like &quot;Star Brackets&quot; and &quot;Aesthetic Decor&quot;
                            add visual appeal while maintaining good Roblox compatibility.
                        </p>
                    </div>
                </div>

                <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">Tips for Best Results</h3>
                <ul className="mt-3 space-y-2 text-sm sm:text-base text-zinc-700">
                    <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span><strong>Keep names short:</strong> Roblox has character limits. Names under 20 characters work best and are less likely to be filtered.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span><strong>Test before finalizing:</strong> Try your styled name in-game first. Some fonts may not display correctly on all devices.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span><strong>Avoid excessive symbols:</strong> Too many decorative characters can trigger Roblox filters. Use moderation for best results.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span><strong>Mobile vs Desktop:</strong> Some styled text displays differently on mobile. Test on your primary device before sharing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span><strong>Combine with emojis:</strong> Use our <Link href="/adopt-me-names-generator" className="underline text-pink-600">name generator</Link> to combine fonts with emojis for even more unique names.</span>
                    </li>
                </ul>

                <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">Is it Safe to Use Styled Text in Roblox?</h3>
                <p className="mt-2 text-sm sm:text-base text-zinc-700">
                    Yes, styled Unicode text is safe to use. These are standard Unicode characters that Roblox supports. However, keep these points in mind:
                </p>
                <ul className="mt-3 space-y-2 text-sm sm:text-base text-zinc-700">
                    <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">✓</span>
                        <span>Our generator uses official Unicode characters - no hacks or exploits</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">✓</span>
                        <span>Roblox officially supports Unicode text rendering</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">⚠</span>
                        <span>Some characters may be filtered by Roblox&rsquo;s moderation system</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">⚠</span>
                        <span>Rare or unusual Unicode characters might not display on all devices</span>
                    </li>
                </ul>

                <h3 className="mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">Troubleshooting Common Issues</h3>
                <div className="mt-4 space-y-3">
                    <div className="border-l-4 border-pink-300 pl-4">
                        <h4 className="font-semibold text-base mb-1">Name appears as question marks (???)</h4>
                        <p className="text-sm text-zinc-700">
                            This usually means the device doesn&rsquo;t support those Unicode characters. Try using more common styles like Bold or Bubble fonts.
                        </p>
                    </div>
                    <div className="border-l-4 border-pink-300 pl-4">
                        <h4 className="font-semibold text-base mb-1">Name gets filtered or rejected</h4>
                        <p className="text-sm text-zinc-700">
                            Roblox may filter names with too many special characters. Try shorter names or simpler font styles. Avoid combining multiple decorative styles.
                        </p>
                    </div>
                    <div className="border-l-4 border-pink-300 pl-4">
                        <h4 className="font-semibold text-base mb-1">Font looks different on mobile</h4>
                        <p className="text-sm text-zinc-700">
                            Some devices render Unicode differently. Test your name on the device you&rsquo;ll primarily use. Bubble and Bold fonts have the best cross-device compatibility.
                        </p>
                    </div>
                </div>

                <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
                    <p className="text-sm sm:text-base text-zinc-700">
                        <strong>Need more help?</strong> Check out our <Link href="/faq" className="underline text-pink-600 font-semibold">FAQ page</Link> for detailed answers to common questions, or read our <Link href="/blog" className="underline text-pink-600 font-semibold">blog</Link> for tips and guides.
                        You can also use our <Link href="/adopt-me-names-generator" className="underline text-pink-600 font-semibold">name generator</Link> to create cute pet names with emojis and styled text combined.
                    </p>
                </div>
            </section>

            <section className="mt-8 sm:mt-12 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-xl p-6 sm:p-8 border border-pink-200">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">About This Tool - Creator&apos;s Story</h2>
                <div className="space-y-3 text-sm sm:text-base text-zinc-700">
                    <p>
                        <strong>Hi, I&apos;m a longtime Adopt Me player</strong> with 5 years of experience and dozens of Mega Neon pets.
                        When naming my first Frost Dragon in 2020, I was frustrated by Roblox&apos;s plain text limitation.
                    </p>
                    <p>
                        I spent hours manually copying Unicode characters from different websites, only to find most were filtered or displayed as boxes.
                        That&apos;s when I decided to build a <strong>comprehensive, tested tool</strong> specifically for Roblox Adopt Me.
                    </p>
                    <div className="my-4">
                        <Image
                            src="/adopt-me-player-character.webp"
                            alt="My Roblox Adopt Me character with styled font name displayed in-game"
                            className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                            width={2024}
                            height={1668}
                            sizes="(max-width: 768px) 100vw, 448px"
                        />
                        <p className="text-xs text-zinc-500 mt-2 text-center italic">My character in Adopt Me testing different font styles</p>
                    </div>
                    <p>
                        Every font style here has been <strong>personally tested in-game across devices</strong> (PC, mobile, tablet).
                        The compatibility ratings come from real player feedback in the Adopt Me trading community.
                    </p>
                </div>
            </section>



            <section className="mt-8 sm:mt-12 mb-8">

                <h2 className="text-xl font-semibold mb-4">Expert Tips for Adopt Me Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-zinc-200">
                        <h3 className="font-semibold mb-2">Naming Your Pets</h3>
                        <p className="text-sm text-zinc-600 mb-3">Struggling to name your new legendary pet? Check out our curated lists for specific pets.</p>
                        <ul className="text-sm space-y-1">
                            <li><Link href="/pet-names" className="text-pink-600 hover:underline">🐾 Browse All Pet Names</Link></li>
                            <li><Link href="/blog/best-adopt-me-pet-names-2024" className="text-pink-600 hover:underline">🏆 2025 Pet Name Trends</Link></li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-zinc-200">
                        <h3 className="font-semibold mb-2">Safety & Filters</h3>
                        <p className="text-sm text-zinc-600 mb-3">Learn how to create names that won&apos;t get tagged by Roblox&apos;s filter system.</p>
                        <Link href="/blog/how-to-prevent-name-filtering-roblox" className="text-pink-600 hover:underline text-sm font-medium">Read our Anti-Filter Guide →</Link>
                    </div>
                </div>
            </section>
            <section className="mt-12 pt-8 border-t border-zinc-200">
                <h2 className="text-2xl font-bold mb-6">Latest from the Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/blog/adopt-me-pet-naming-marketing" className="group block bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-6">
                            <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">Strategy Guide</span>
                            <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-pink-600 transition-colors">Adopt Me Pet Naming for Trading: Emotional Marketing Strategies</h3>
                            <p className="text-zinc-600 text-sm line-clamp-3">
                                You&apos;re not just trading a digital pet; you&apos;re trading a friend. Learn how to use "Name Value" to increase your trade offers by up to 25%.
                            </p>
                            <div className="mt-4 flex items-center text-sm text-zinc-500">
                                <span>Read Article →</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/blog/how-to-prevent-name-filtering-roblox" className="group block bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-6">
                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Safety Guide</span>
                            <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-blue-600 transition-colors">How to Prevent Name Filtering in Roblox 2025</h3>
                            <p className="text-zinc-600 text-sm line-clamp-3">
                                Why does "Cookie" turn into "######"? Understand the Roblox "Community Sift" filter and how to format your name to stay safe.
                            </p>
                            <div className="mt-4 flex items-center text-sm text-zinc-500">
                                <span>Read Article →</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="mt-6 text-center">
                    <Link href="/blog" className="inline-block px-6 py-3 bg-zinc-100 text-zinc-900 font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
                        View All Guides
                    </Link>
                </div>
            </section>
        </>
    );
}
