"use client";
import { useEffect, useRef } from "react";

export default function AdBanner300x250() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoaded = useRef(false);

    useEffect(() => {
        if (scriptLoaded.current || !containerRef.current) return;
        scriptLoaded.current = true;

        // Create atOptions script
        const optionsScript = document.createElement("script");
        optionsScript.innerHTML = `
      atOptions = {
        'key' : '39e544eb07b619495327d8113a7838b7',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;
        containerRef.current.appendChild(optionsScript);

        // Create invoke script
        const invokeScript = document.createElement("script");
        invokeScript.src = "https://www.highperformanceformat.com/39e544eb07b619495327d8113a7838b7/invoke.js";
        invokeScript.async = true;
        containerRef.current.appendChild(invokeScript);
    }, []);

    return (
        <div
            className="flex justify-center my-6"
            aria-label="Advertisement"
        >
            <div
                ref={containerRef}
                style={{ minWidth: 300, minHeight: 250 }}
                className="flex items-center justify-center bg-zinc-50 rounded-lg"
            />
        </div>
    );
}
