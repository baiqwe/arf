import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Script from "next/script";
import Link from "next/link";

const breadcrumbs = [
    { name: "Home", url: "https://adoptmefont.com/" },
    { name: "Help", url: "https://adoptmefont.com/help" },
];

export const metadata: Metadata = {
    title: "Help Center | Adopt Me Fonts",
    description: "Get help with Adopt Me Fonts Generator. Learn how to use our font generator, troubleshoot common issues, and find answers to your questions.",
    alternates: {
        canonical: "https://adoptmefont.com/help",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Help() {
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

    return (
        <>
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
                <Breadcrumbs items={breadcrumbs} />
                <h1 className="text-2xl sm:text-3xl font-bold mt-4">Help Center</h1>
                <p className="text-sm sm:text-base text-zinc-700 mt-2">Get help with Adopt Me Fonts Generator</p>

                {/* Quick Start Guide */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Quick Start Guide</h2>
                    <p className="text-sm sm:text-base text-zinc-700 mb-4">
                        Learn how to use our font generator in 4 simple steps:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-zinc-200 rounded-lg p-5 hover:border-pink-300 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h3 className="font-semibold mb-2">Enter Your Text</h3>
                                    <p className="text-sm text-zinc-700">Type the text you want to convert into the input field on the homepage.</p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-zinc-200 rounded-lg p-5 hover:border-pink-300 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h3 className="font-semibold mb-2">Choose a Font Style</h3>
                                    <p className="text-sm text-zinc-700">Browse through 50+ font styles and click on your favorite to preview it.</p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-zinc-200 rounded-lg p-5 hover:border-pink-300 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h3 className="font-semibold mb-2">Copy the Result</h3>
                                    <p className="text-sm text-zinc-700">Click the copy button next to your styled text to copy it to your clipboard.</p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-zinc-200 rounded-lg p-5 hover:border-pink-300 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold">4</div>
                                <div>
                                    <h3 className="font-semibold mb-2">Paste in Roblox</h3>
                                    <p className="text-sm text-zinc-700">Open Roblox Adopt Me and paste your styled text into your player name, pet name, or chat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Issues */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Common Issues & Solutions</h2>

                    <div className="space-y-4">
                        <details className="border border-zinc-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
                            <summary className="font-semibold cursor-pointer">Why does my name show as question marks?</summary>
                            <p className="text-sm text-zinc-700 mt-3">
                                This usually means your device doesn't support those Unicode characters. Try using more common fonts like Bold, Bubble, or Small Caps which have wider device support.
                            </p>
                        </details>

                        <details className="border border-zinc-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
                            <summary className="font-semibold cursor-pointer">Why is Roblox filtering my name?</summary>
                            <p className="text-sm text-zinc-700 mt-3">
                                Roblox may filter names that are too long, contain too many decorative symbols, or combine multiple font styles. Keep names under 20 characters and use simpler styles.
                            </p>
                        </details>

                        <details className="border border-zinc-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
                            <summary className="font-semibold cursor-pointer">Can I use these fonts on mobile?</summary>
                            <p className="text-sm text-zinc-700 mt-3">
                                Yes! Our font generator works on all devices. However, some decorative fonts may not display correctly on older mobile devices. Test your name on the device you'll primarily use.
                            </p>
                        </details>

                        <details className="border border-zinc-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
                            <summary className="font-semibold cursor-pointer">Are these fonts safe to use?</summary>
                            <p className="text-sm text-zinc-700 mt-3">
                                Absolutely! We use standard Unicode characters that Roblox officially supports. There's no risk of getting banned for using our fonts.
                            </p>
                        </details>
                    </div>
                </section>

                {/* Video Tutorials */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Video Tutorials</h2>
                    <div className="border border-zinc-200 rounded-lg p-6 text-center bg-zinc-50">
                        <p className="text-sm text-zinc-700">
                            📹 Watch step-by-step video guides on how to use our tools
                        </p>
                        <p className="text-sm text-zinc-500 mt-2">Video tutorials coming soon!</p>
                    </div>
                </section>

                {/* Contact Support */}
                <section className="mt-10 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border border-pink-200">
                    <h2 className="text-xl font-semibold mb-3">Need More Help?</h2>
                    <p className="text-sm sm:text-base text-zinc-700 mb-4">
                        If you couldn't find the answer you're looking for, feel free to contact us.
                    </p>
                    <ul className="list-none text-sm sm:text-base text-zinc-700 space-y-2">
                        <li>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:developwebforadoptme@2925.com" className="text-pink-600 underline">
                                developwebforadoptme@2925.com
                            </a>
                        </li>
                        <li>
                            <strong>Contact Page:</strong>{" "}
                            <Link href="/contact" className="text-pink-600 underline font-semibold">
                                Visit our contact page
                            </Link>
                        </li>
                        <li>
                            <strong>FAQ:</strong>{" "}
                            <Link href="/faq" className="text-pink-600 underline font-semibold">
                                Check our FAQ page
                            </Link>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}
