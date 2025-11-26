// app/contact/page.tsx
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - CrypGo",
  description: "Get in touch with CrypGo team",
};

export default function ContactPage() {
  return (
     <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
    >
 
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg">
            Have a question? We'd love to hear from you.
          </p>
        </div>

    

        {/* Optional: Contact Info */}
        <div className="mt-16 text-center text-gray-400">
          <p>Or email us directly at: <span className="text-primary">hello@crypgo.com</span></p>
        </div>
      </div>
    </main>
     
    </section>
  );
}