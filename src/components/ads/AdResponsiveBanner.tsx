"use client";
import dynamic from "next/dynamic";

// Dynamically import to avoid SSR issues
const AdBanner728x90 = dynamic(() => import("./AdBanner728x90"), { ssr: false });
const AdBanner300x250 = dynamic(() => import("./AdBanner300x250"), { ssr: false });

/**
 * Responsive ad banner that shows:
 * - 728x90 on desktop (md and up)
 * - 300x250 on mobile
 */
export default function AdResponsiveBanner() {
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
