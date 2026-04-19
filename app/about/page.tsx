import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About - BookaWay",
  description:
    "Learn the story behind BookaWay and our mission to bring books to children in underserved communities.",
};

const approachItems = [
  "Work directly with community leaders to understand what they need",
  "Build a meaningful library collection with high-quality, age-appropriate books",
  "Make sure those books are cared for and available to every child — now and in the future",
  "Our first project starts in Sabino, São Paulo, the town where my family's story began.",
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#E8E0D4] py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723]">
            Our Story
          </h1>
        </div>
      </section>

      {/* Laura Portrait */}
      <section className="bg-[#F5F0E8] py-12 px-4">
        <div className="max-w-3xl mx-auto flex justify-center">
          <Image
            src="/images/laura-portrait.jpg"
            alt="Laura, founder of BookaWay"
            width={200}
            height={200}
            className="rounded-full w-48 h-48 object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Story Sections */}
      <section className="bg-[#F5F0E8] pb-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* The Beginning */}
          <div>
            <h3 className="text-2xl font-bold text-[#3E2723] mb-4">
              The Beginning
            </h3>
            <div className="space-y-4 text-[#6D4C41] leading-relaxed">
              <p>
                Every summer I travel to Brazil to visit my grandparents in the
                small rural town of Sabino, in the state of São Paulo.
              </p>
              <p>
                When I was younger, I often accompanied my grandmother while she
                volunteered at a children&apos;s center for working families. I
                would sit with the children and read stories out loud.
              </p>
              <p>
                I still remember watching their eyes light up as characters came
                to life.
              </p>
            </div>
          </div>

          {/* The Realization */}
          <div>
            <h3 className="text-2xl font-bold text-[#3E2723] mb-4">
              The Realization
            </h3>
            <div className="space-y-4 text-[#6D4C41] leading-relaxed">
              <p>
                Growing up, I came to understand that in Sabino, access to books
                has always been limited.
              </p>
              <p>
                A couple of years ago, I began to truly understand what that
                limitation really means for the children growing up there. There
                is no place for them to explore stories. There are no books they
                can take home and call their own.
              </p>
              <p>
                The town has no public library, and the gap between kids and
                reading is still as wide as ever.
              </p>
              <p>That realization stayed with me.</p>
            </div>
          </div>

          {/* The Commitment */}
          <div>
            <h3 className="text-2xl font-bold text-[#3E2723] mb-4">
              The Commitment
            </h3>
            <div className="space-y-4 text-[#6D4C41] leading-relaxed">
              <p>
                It was there that I first realized something simple but
                powerful:
              </p>
              <p className="text-xl font-semibold text-[#3E2723]">
                Reading is not a luxury.
              </p>
              <p className="text-xl font-semibold text-[#3E2723]">
                It is a foundation.
              </p>
              <p>
                Because when you give a child a book, you don&apos;t just give
                them pages.
              </p>
              <p>You give them possibilities.</p>
              <p>
                BookaWay exists because every child deserves access to books —
                and everything that comes with them.
              </p>
              <p>Thank you for being part of this.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] text-center mb-10">
            Our Approach
          </h2>
          <div className="space-y-5">
            {approachItems.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#7C8C6C] mt-0.5 flex-shrink-0" />
                <p className="text-[#6D4C41] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#7C8C6C] py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="text-xl md:text-2xl font-[family-name:var(--font-lora)] italic mb-8">
            One town is where we begin, not where we stop.
          </p>
          <Link
            href="/donate"
            className="bg-white text-[#7C8C6C] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-colors inline-block"
          >
            Support BookaWay
          </Link>
        </div>
      </section>
    </div>
  );
}
