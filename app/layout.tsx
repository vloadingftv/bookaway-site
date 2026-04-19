import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BookaWay - Opening Books. Opening Worlds.",
  description:
    "BookaWay connects donated books with children who need them most. 100% of donations go directly to books.",
};

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/bookaway-logo.png"
              alt="BookaWay Logo"
              width={36}
              height={36}
              className="rounded"
            />
            <span className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#3E2723]">
              BookaWay
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[#6D4C41] hover:text-[#3E2723] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#6D4C41] hover:text-[#3E2723] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/donate"
              className="text-[#6D4C41] hover:text-[#3E2723] transition-colors font-medium"
            >
              Donate
            </Link>
            <Link
              href="/contact"
              className="text-[#6D4C41] hover:text-[#3E2723] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Donate Button */}
          <Link
            href="/donate"
            className="bg-[#7C8C6C] hover:bg-[#6B7B5B] text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden border-t border-gray-100 px-4 py-3 flex gap-6">
        <Link href="/" className="text-[#6D4C41] text-sm font-medium">
          Home
        </Link>
        <Link href="/about" className="text-[#6D4C41] text-sm font-medium">
          About
        </Link>
        <Link href="/donate" className="text-[#6D4C41] text-sm font-medium">
          Donate
        </Link>
        <Link href="/contact" className="text-[#6D4C41] text-sm font-medium">
          Contact
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      {/* Green Banner */}
      <div className="bg-[#8FA67A] text-white text-center py-4 px-4">
        <p className="font-medium text-lg">
          100% of donations go directly to books — no platform fees
        </p>
      </div>

      {/* Main Footer */}
      <div className="bg-[#4E3B31] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/images/bookaway-logo.png"
                alt="BookaWay Logo"
                width={32}
                height={32}
                className="rounded brightness-110"
              />
              <span className="font-[family-name:var(--font-lora)] text-xl font-bold">
                BookaWay
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Opening books. Opening worlds. Connecting donated books with
              children who need them most.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-[family-name:var(--font-lora)] font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="hover:text-white transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-[family-name:var(--font-lora)] font-semibold mb-3">
              Get Involved
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  href="/donate"
                  className="hover:text-white transition-colors"
                >
                  Donate Books
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="hover:text-white transition-colors"
                >
                  Fundraise
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-lora)] font-semibold mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="mailto:bookaway.info@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  bookaway.info@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/20 text-center text-sm text-white/50">
          &copy; 2026 BookaWay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
