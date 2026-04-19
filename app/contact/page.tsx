"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-[#E8E0D4] py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-lg text-[#6D4C41]">
            Whether you have questions, want to partner, or just want to say
            hello — we&apos;re here.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#F5F0E8] py-16 md:py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <h2 className="text-2xl font-bold text-[#3E2723] mb-4">
                  Thank you!
                </h2>
                <p className="text-[#6D4C41]">
                  Your message has been sent. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#3E2723] mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C8C6C] focus:border-transparent text-[#3E2723]"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#3E2723] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C8C6C] focus:border-transparent text-[#3E2723]"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#3E2723] mb-1.5"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C8C6C] focus:border-transparent text-[#3E2723] bg-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="donate">Donate Books</option>
                    <option value="partnership">Partnership</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#3E2723] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C8C6C] focus:border-transparent text-[#3E2723] resize-vertical"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#7C8C6C] hover:bg-[#6B7B5B] text-white py-3 rounded-full font-medium text-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <p className="text-center text-[#6D4C41] mt-6 text-sm">
            Whether you have questions, want to partner, or just want to say
            hello — we&apos;re here.
          </p>
        </div>
      </section>
    </div>
  );
}
