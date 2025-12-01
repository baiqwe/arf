import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Script from "next/script";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Contact", url: "https://adoptmefont.com/contact" },
];

export const metadata: Metadata = {
  title: "Contact Us | Adopt Me Fonts",
  description: "Contact Adopt Me Fonts Generator. Get help, report issues, or send feedback about our free Roblox font tool.",
  alternates: {
    canonical: "https://adoptmefont.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact() {
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
        <h1 className="text-2xl sm:text-3xl font-bold mt-4">Contact Us</h1>
        <p className="text-sm sm:text-base text-zinc-700 mt-4">
          We'd love to hear from you! Whether you have a question, found a bug, want to suggest a feature, or just want to say hello, we're here to help.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="bg-zinc-50 rounded-lg p-6 border border-zinc-200">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-sm sm:text-base text-zinc-700 mb-2">
                  For general inquiries, support questions, or feedback:
                </p>
                <a 
                  href="mailto:developwebforadoptme@2925.com" 
                  className="text-pink-600 underline font-medium text-lg"
                >
                  developwebforadoptme@2925.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">What Can We Help With?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-zinc-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🐛 Report a Bug</h3>
              <p className="text-sm text-zinc-700">
                Found something that's not working? Let us know and we'll fix it as soon as possible.
              </p>
            </div>
            <div className="border border-zinc-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">💡 Feature Requests</h3>
              <p className="text-sm text-zinc-700">
                Have an idea for a new font style or feature? We're always looking to improve!
              </p>
            </div>
            <div className="border border-zinc-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">❓ Questions</h3>
              <p className="text-sm text-zinc-700">
                Need help using the tool? Check our <a href="/faq" className="text-pink-600 underline">FAQ</a> first, or reach out if you need more help.
              </p>
            </div>
            <div className="border border-zinc-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🤝 Partnerships</h3>
              <p className="text-sm text-zinc-700">
                Interested in collaborating or have a business inquiry? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Response Time</h2>
          <p className="text-sm sm:text-base text-zinc-700">
            We aim to respond to all emails within 2-3 business days. For urgent matters, please mark your email as "Urgent" in the subject line.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Before You Contact Us</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-4">
            You might find the answer to your question in one of these resources:
          </p>
          <ul className="list-disc pl-6 text-sm sm:text-base text-zinc-700 space-y-2">
            <li><a href="/faq" className="text-pink-600 underline">Frequently Asked Questions (FAQ)</a> - Common questions and answers</li>
            <li><a href="/how-to-use-adopt-me-fonts" className="text-pink-600 underline">How to Use Adopt Me Fonts</a> - Complete guide and tutorial</li>
            <li><a href="/tag-filter-checker" className="text-pink-600 underline">Tag Filter Checker</a> - Test if your name will work in Roblox</li>
          </ul>
        </section>

        <section className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Privacy Note</h2>
          <p className="text-sm sm:text-base text-zinc-700">
            When you contact us, we may collect your email address and any information you provide in your message. This information is used solely to respond to your inquiry and is handled in accordance with our <a href="/privacy-policy" className="text-pink-600 underline font-semibold">Privacy Policy</a>.
          </p>
        </section>
      </main>
    </>
  );
}

