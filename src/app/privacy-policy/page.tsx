import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Script from "next/script";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Privacy Policy", url: "https://adoptmefont.com/privacy-policy" },
];

export const metadata: Metadata = {
  title: "Privacy Policy | Adopt Me Fonts",
  description: "Privacy Policy for Adopt Me Fonts Generator. Learn how we handle your data, cookies, and third-party advertising.",
  alternates: {
    canonical: "https://adoptmefont.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-2xl sm:text-3xl font-bold mt-4">Privacy Policy</h1>
        <p className="text-sm text-zinc-600 mt-2">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Introduction</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            Welcome to Adopt Me Fonts Generator ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we collect, use, and protect your information. This Privacy Policy explains our practices regarding data collection and usage when you visit our website at adoptmefont.com.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <h3 className="text-lg font-medium mb-2 mt-4">Information You Provide</h3>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            Our font generator tool operates entirely in your browser. The text you type into our generator is processed locally on your device and is never transmitted to our servers. We do not collect, store, or have access to the text you generate.
          </p>

          <h3 className="text-lg font-medium mb-2 mt-4">Automatically Collected Information</h3>
          <p className="text-sm sm:text-base text-zinc-700 mb-2">
            Like most websites, we automatically collect certain information when you visit our site:
          </p>
          <ul className="list-disc pl-6 text-sm sm:text-base text-zinc-700 space-y-2">
            <li><strong>Usage Data:</strong> We use Google Analytics to understand how visitors use our website. This includes information such as pages visited, time spent on pages, device type, browser type, and general geographic location (country/city level, not precise location).</li>
            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience and analyze site traffic. See our Cookie Policy section below for details.</li>
            <li><strong>IP Address:</strong> Your IP address may be logged by our hosting provider and analytics services for security and analytics purposes.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-2">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-sm sm:text-base text-zinc-700 space-y-2">
            <li>To provide and maintain our font generator service</li>
            <li>To analyze website usage and improve user experience</li>
            <li>To detect and prevent technical issues and security threats</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>

          <h3 className="text-lg font-medium mb-2 mt-4">Google Analytics</h3>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site. We use the information we get from Google Analytics to improve our site. Google Analytics collects only the IP address assigned to you on the date you visit our site, rather than your name or other identifying information. Google's ability to use and share information collected by Google Analytics about your visits to our site is restricted by the <a href="https://www.google.com/analytics/terms/" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">Google Analytics Terms of Service</a> and the <a href="https://policies.google.com/privacy" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
          </p>

          <h3 className="text-lg font-medium mb-2 mt-4">Google AdSense</h3>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            We use Google AdSense to display advertisements on our website. Google AdSense uses cookies and other tracking technologies to serve personalized ads based on your browsing history and interests. AdSense may collect information such as your IP address, browser type, and pages you visit to show you relevant advertisements.
          </p>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a> or by visiting <a href="https://www.aboutads.info/choices/" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices</a>.
          </p>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            For more information about how Google uses data when you use our site, visit <a href="https://policies.google.com/technologies/partner-sites" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">How Google uses data when you use our partners' sites or apps</a>.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.
          </p>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            Types of cookies we use:
          </p>
          <ul className="list-disc pl-6 text-sm sm:text-base text-zinc-700 space-y-2">
            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
            <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website (via Google Analytics).</li>
            <li><strong>Advertising Cookies:</strong> These are used to deliver relevant advertisements and track ad performance (via Google AdSense).</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Data Security</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            We implement appropriate technical and organizational security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us and we will delete such information.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-2">
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-sm sm:text-base text-zinc-700 space-y-2">
            <li>Right to access your personal information</li>
            <li>Right to request deletion of your personal information</li>
            <li>Right to opt out of the sale of personal information (we do not sell personal information)</li>
            <li>Right to opt out of targeted advertising</li>
          </ul>
          <p className="text-sm sm:text-base text-zinc-700 mt-4">
            To exercise these rights, please contact us using the information provided in the Contact Us section below.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Changes to This Privacy Policy</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none text-sm sm:text-base text-zinc-700 space-y-2">
            <li>Email: <a href="mailto:support@adoptmefont.com" className="text-pink-600 underline">support@adoptmefont.com</a></li>
            <li>Website: <a href="/contact" className="text-pink-600 underline">Contact Us Page</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}

