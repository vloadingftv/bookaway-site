"use client";

import Image from "next/image";
import { useState } from "react";

const donationTiers = [
  {
    title: "Give One Book",
    amount: 10,
    description: "A colorful picture book to spark a child's imagination",
    impact:
      "Helps build the foundation of the school's first classroom library",
  },
  {
    title: "Build a Small Book Set",
    amount: 25,
    description: "Add several new books to the library collection",
    impact:
      "Provides a small collection of books for a classroom reading group",
  },
  {
    title: "Fuel a Young Reader",
    amount: 50,
    description:
      "Provides engaging chapter books that help children develop a love for reading",
    impact:
      "Supports a child's reading journey with books they can grow with",
  },
  {
    title: "Grow the Library",
    amount: 100,
    description:
      "Make a significant contribution to expanding the library's collection",
    impact:
      "Helps establish a diverse, well-stocked library that serves the entire community",
  },
];

export default function DonatePage() {
  const [customAmount, setCustomAmount] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("bookaway.info@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-[#E8E0D4] py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">
            Choose Your Impact
          </h1>
          <p className="text-lg text-[#6D4C41]">
            Every donation goes directly to purchasing books for children.
            Choose an amount that feels right for you.
          </p>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="bg-[#F5F0E8] py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier) => (
              <div
                key={tier.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <h3 className="text-lg font-semibold text-[#3E2723] mb-1">
                  {tier.title}
                </h3>
                <p className="text-3xl font-bold text-[#7C8C6C] mb-3">
                  ${tier.amount}
                </p>
                <p className="text-[#6D4C41] text-sm mb-3 leading-relaxed">
                  {tier.description}
                </p>
                <p className="text-[#6D4C41] text-xs italic mb-4 leading-relaxed flex-1">
                  {tier.impact}
                </p>
                <button className="w-full bg-[#7C8C6C] hover:bg-[#6B7B5B] text-white py-2.5 rounded-full font-medium transition-colors text-sm">
                  Select This Amount
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Amount */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-2">
            Make Your Own Impact
          </h2>
          <p className="text-[#6D4C41] mb-6">
            Choose a custom amount that works for you.
          </p>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6D4C41] font-medium">
                $
              </span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#7C8C6C] focus:border-transparent text-[#3E2723]"
              />
            </div>
            <button className="bg-[#7C8C6C] hover:bg-[#6B7B5B] text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap">
              Select Custom Amount
            </button>
          </div>
        </div>
      </section>

      {/* How to Donate */}
      <section className="bg-[#F5F0E8] py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] text-center mb-10">
            How to Donate
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Venmo */}
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <h3 className="text-xl font-semibold text-[#3E2723] mb-4">
                Venmo
              </h3>
              <Image
                src="/images/venmo-qr.jpg"
                alt="Venmo QR code for BookaWay"
                width={200}
                height={200}
                className="mx-auto rounded-lg mb-4"
              />
              <a
                href="https://venmo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#7C8C6C] hover:bg-[#6B7B5B] text-white px-6 py-2.5 rounded-full font-medium transition-colors"
              >
                Send via Venmo
              </a>
            </div>

            {/* Zelle */}
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <h3 className="text-xl font-semibold text-[#3E2723] mb-4">
                Zelle
              </h3>
              <p className="text-[#6D4C41] mb-2">Send to our email:</p>
              <p className="text-[#3E2723] font-semibold text-lg mb-4">
                bookaway.info@gmail.com
              </p>
              <button
                onClick={handleCopy}
                className="inline-block bg-[#7C8C6C] hover:bg-[#6B7B5B] text-white px-6 py-2.5 rounded-full font-medium transition-colors"
              >
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Every Dollar Message */}
      <section className="bg-[#E8E0D4] py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-[#6D4C41] italic font-[family-name:var(--font-lora)]">
            Every dollar goes toward purchasing books and creating real
            opportunities for children.
          </p>
        </div>
      </section>
    </div>
  );
}
