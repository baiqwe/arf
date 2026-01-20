"use client";
import dynamic from "next/dynamic";

const AdNativeBanner = dynamic(
    () => import("@/components/ads/AdNativeBanner"),
    { ssr: false }
);

export default function BlogAdSlot() {
    return <AdNativeBanner />;
}
