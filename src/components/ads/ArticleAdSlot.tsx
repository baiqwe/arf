"use client";
import dynamic from "next/dynamic";

const AdBanner300x250 = dynamic(
    () => import("@/components/ads/AdBanner300x250"),
    { ssr: false }
);

export default function ArticleAdSlot() {
    return <AdBanner300x250 />;
}
