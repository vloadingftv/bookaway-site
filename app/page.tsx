import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Shield,
  BookOpen,
  MessageCircle,
  Heart,
  BookOpenCheck,
} from "lucide-react";

const impactCards = [
  {
    icon: Sparkles,
    title: "Sparks Imagination",
    description:
      "Books open new worlds and spark creativity in young minds, helping children dream beyond their circumstances.",
  },
  {
    icon: Shield,
    title: "Builds Resilience",
    description:
      "Through stories, children learn to navigate challenges and develop emotional strength for life.",
  },
  {
    icon: BookOpen,
    title: "Opens Confidence",
    description:
      "Reading builds vocabulary and knowledge, giving children the confidence to express themselves.",
  },
  {
    icon: MessageCircle,
    title: "Commits Communication",
    description:
      "Books develop language skills and help children communicate their thoughts and feelings effectively.",
  },
  {
    icon: Heart,
    title: "Opens Doors",
    description:
      "Literacy is the foundation of education, opening doors to opportunities that change lives forever.",
  },
  {
    icon: BookOpenCheck,
    title: "Creates Independence",
    description:
      "Reading empowers children to learn on their own, fostering curiosity and lifelong independence.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#F5F0E8] py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#3E2723] leading-tight">
              Opening books.
              <br />
              <em className="italic font-normal">Opening worlds.</em>
            </h1>
            <p className="mt-6 text-lg text-[#6D4C41] max-w-lg leading-relaxed">
              BookaWay connects donated books with children who need them most.
              Every book we deliver opens a new world of imagination, learning,
              and possibility.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="bg-[#7C8C6C] hover:bg-[#6B7B5B] text-white px-8 py-3 rounded-full font-medium transition-colors text-lg"
              >
                Donate a Book
              </Link>
              <Link
                href="/about"
                className="border-2 border-[#7C8C6C] text-[#7C8C6C] hover:bg-[#7C8C6C] hover:text-white px-8 py-3 rounded-full font-medium transition-colors text-lg"
              >
                Learn How We Work
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/children-reading.jpg"
              alt="Children reading books together"
              width={600}
              height={450}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              priority
            />
            <div className="absolute top-4 right-4 bg-[#7C8C6C] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              100% Goes to Books
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[#E8E0D4] py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-6">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-[#6D4C41] italic leading-relaxed font-[family-name:var(--font-lora)]">
            &ldquo;Every book opens a door. Every door changes a life.&rdquo;
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-6">
              What We Do
            </h2>
            <p className="text-[#6D4C41] leading-relaxed mb-4">
              BookaWay partners with schools and community centers in
              underserved areas to build meaningful library collections. We
              believe every child deserves access to books that inspire, educate,
              and empower.
            </p>
            <p className="text-[#6D4C41] leading-relaxed mb-4">
              We work directly with local leaders to identify which communities
              need books most, ensuring that every donation reaches the children
              who will benefit the most.
            </p>
            <p className="text-[#6D4C41] leading-relaxed">
              Our approach is simple: collect high-quality, age-appropriate
              books, and deliver them where they are needed most — creating
              lasting impact one book at a time.
            </p>
          </div>
          <div>
            <Image
              src="/images/books-magic.jpg"
              alt="Books creating magical worlds"
              width={600}
              height={450}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Reading Changes Everything */}
      <section className="bg-[#F5F0E8] py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] text-center mb-12">
            Why Reading Changes Everything
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <card.icon className="w-10 h-10 text-[#7C8C6C] mb-4" />
                <h3 className="text-xl font-semibold text-[#3E2723] mb-2">
                  {card.title}
                </h3>
                <p className="text-[#6D4C41] text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Be a Changemaker CTA */}
      <section className="bg-[#7C8C6C] py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be a Changemaker
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Your donation puts books directly into the hands of children who
            need them most. Every dollar counts.
          </p>
          <Link
            href="/donate"
            className="bg-white text-[#7C8C6C] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-colors inline-block"
          >
            Donate Today
          </Link>
        </div>
      </section>
    </div>
  );
}
