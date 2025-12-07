'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');

        // TEMPORARY DEBUG: Force show banner
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 text-white p-4 shadow-lg z-50 animate-slide-up">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-center sm:text-left">
                    🍪 We use cookies and Google AdSense to improve your experience and display relevant ads.
                    By continuing to use our site, you accept our use of cookies.{' '}
                    <Link href="/privacy-policy" className="underline hover:text-pink-300 transition-colors">
                        Learn more
                    </Link>
                </p>
                <button
                    onClick={acceptCookies}
                    className="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold whitespace-nowrap transition-colors shadow-sm flex-shrink-0"
                >
                    Accept Cookies
                </button>
            </div>
        </div>
    );
}
