"use client";
import { useEffect, useRef } from "react";

export default function AdNativeBanner() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoaded = useRef(false);

    useEffect(() => {
        if (scriptLoaded.current || !containerRef.current) return;
        scriptLoaded.current = true;

        // Create invoke script
        const invokeScript = document.createElement("script");
        invokeScript.src = "https://pl28523643.effectivegatecpm.com/f082fcbc22acb64b091caf7723b6089b/invoke.js";
        invokeScript.async = true;
        invokeScript.setAttribute("data-cfasync", "false");
        containerRef.current.appendChild(invokeScript);
    }, []);

    return (
        <div
            className="flex justify-center my-6"
            aria-label="Advertisement"
        >
            <div
                ref={containerRef}
                id="container-f082fcbc22acb64b091caf7723b6089b"
                className="flex items-center justify-center min-h-[100px]"
            />
        </div>
    );
}
