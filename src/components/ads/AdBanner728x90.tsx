"use client";
import { useEffect, useRef } from "react";

export default function AdBanner728x90() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoaded = useRef(false);

    useEffect(() => {
        if (scriptLoaded.current || !containerRef.current) return;
        scriptLoaded.current = true;

        // Create atOptions script
        const optionsScript = document.createElement("script");
        optionsScript.innerHTML = `
      atOptions = {
        'key' : 'ee7efa44055157b8455e716031975bcd',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
        containerRef.current.appendChild(optionsScript);

        // Create invoke script
        const invokeScript = document.createElement("script");
        invokeScript.src = "https://www.highperformanceformat.com/ee7efa44055157b8455e716031975bcd/invoke.js";
        invokeScript.async = true;
        containerRef.current.appendChild(invokeScript);
    }, []);

    return (
        <div
            className="hidden md:flex justify-center my-6"
            aria-label="Advertisement"
        >
            <div
                ref={containerRef}
                style={{ minWidth: 728, minHeight: 90 }}
                className="flex items-center justify-center bg-zinc-50 rounded-lg"
            />
        </div>
    );
}
