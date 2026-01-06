import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "@/lib/styles";

export const metadata: Metadata = {
    title: "All Font Styles | Adopt Me Fonts",
    description: "Browse all 50+ aesthetic font styles for Roblox Adopt Me.",
    alternates: { canonical: "https://adoptmefont.com/styles" },
    robots: {
        index: false,
        follow: true,
    },
};

const breadcrumbs = [
    { name: "Home", url: "https://adoptmefont.com/" },
    { name: "Styles", url: "https://adoptmefont.com/styles" },
];

export default function StylesPage() {
    // All styles redirect to homepage with style parameter selected
    const getStyleLink = (id: string) => {
        return `/?style=${id}`;
    };

    return (
        <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="text-3xl font-bold mb-6">All Adopt Me Font Styles</h1>
            <p className="text-zinc-700 mb-8">
                Browse our complete collection of font styles. Click on any style to use the generator.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {styles.map((s) => (
                    <Link
                        key={s.id}
                        href={getStyleLink(s.id)}
                        className="p-6 border border-zinc-200 rounded-xl hover:border-pink-400 hover:shadow-md transition-all bg-white flex items-center gap-3"
                    >
                        <span className="text-2xl">{s.icon}</span>
                        <span className="font-semibold text-lg">{s.name}</span>
                    </Link>
                ))}
            </div>
        </main>
    );
}
