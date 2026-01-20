"use client";
import dynamic from "next/dynamic";

const AdBanner728x90 = dynamic(
    () => import("@/components/ads/AdBanner728x90"),
    { ssr: false }
);

const AdBanner300x250 = dynamic(
    () => import("@/components/ads/AdBanner300x250"),
    { ssr: false }
);

export default function ToolPageAdSlot() {
    return (
        <>
            {/* Desktop: 728x90 */}
            <div className="hidden md:block">
                <AdBanner728x90 />
            </div>
            {/* Mobile: 300x250 */}
            <div className="md:hidden">
                <AdBanner300x250 />
            </div>
        </>
    );
}
