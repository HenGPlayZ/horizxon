"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import TechStack from "@/components/TechStack";
import PixelBlast from "@/components/ui/PixelBlast";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Discord webhook function
  const sendToDiscord = async (data: typeof formData) => {
    const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

    // If no webhook URL is configured, fallback to email
    if (!webhookUrl || webhookUrl.includes("YOUR_WEBHOOK_URL_HERE")) {
      // Open email client as fallback
      const subject = encodeURIComponent("Website Development Quote Request");
      const body = encodeURIComponent(
        `New quote request from ${data.name}\n\n` +
          `Email: ${data.email}\n` +
          `Company: ${data.company || "Not specified"}\n` +
          `Project Type: ${data.projectType}\n` +
          `Budget: ${data.budget}\n` +
          `Message: ${data.message || "No additional message"}`
      );

      window.open(
        `mailto:horizxon.limited@gmail.com?subject=${subject}&body=${body}`,
        "_blank"
      );
      return true; // Assume email client opened successfully
    }

    const embed = {
      title: "🚀 New Website Development Quote Request",
      color: 0x5865f2,
      fields: [
        { name: "👤 Name", value: data.name, inline: true },
        { name: "📧 Email", value: data.email, inline: true },
        {
          name: "🏢 Company",
          value: data.company || "Not specified",
          inline: true,
        },
        { name: "🎯 Project Type", value: data.projectType, inline: true },
        { name: "💰 Budget", value: data.budget, inline: true },
        {
          name: "📝 Message",
          value: data.message || "No additional message",
          inline: false,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Horizxon Quote Request",
      },
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ embeds: [embed] }),
      });
      return response.ok;
    } catch (error) {
      console.error("Error sending to Discord:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await sendToDiscord(formData);

    if (success) {
      const isUsingEmail =
        !process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL ||
        process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL.includes(
          "YOUR_WEBHOOK_URL_HERE"
        );

      if (isUsingEmail) {
        alert(
          "Thank you! Your email client should have opened with your request. Please send the email to complete your quote request."
        );
      } else {
        alert(
          "Thank you! Your request has been sent. We&apos;ll get back to you soon!"
        );
      }

      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } else {
      alert(
        "Sorry, there was an error sending your request. Please try emailing us directly at hengthegoat@gmail.com"
      );
    }

    setIsSubmitting(false);
  };

  const handleBookDemo = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen relative">
      {/* PixelBlast Background */}
      <div
        className="fixed inset-0 z-0"
        style={{ backgroundColor: "transparent" }}
      >
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={2}
          patternDensity={0.7}
          pixelSizeJitter={0.3}
          enableRipples={true}
          rippleSpeed={0.5}
          rippleThickness={0.08}
          rippleIntensityScale={2.5}
          liquid={true}
          liquidStrength={0.15}
          liquidRadius={1.5}
          liquidWobbleSpeed={4}
          speed={0.6}
          edgeFade={0}
          transparent={true}
          antialias={false}
        />
      </div>

      {/* Header with navigation */}
      <div className="relative z-20">
        <Header onBookDemo={handleBookDemo} />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero section */}
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />

        {/* Solutions section */}
        <SolutionsSection onBookDemo={handleBookDemo} />

        {/* Tech Stack section */}
        <TechStack />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Unified Get Started Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border border-[#3A354A] rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">
                Let&apos;s Get Started
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-black border border-[#3A354A] rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-black border border-[#3A354A] rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-black border border-[#3A354A] rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type *
                </label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-black border border-[#3A354A] rounded-lg text-white focus:border-purple-500 focus:outline-none"
                >
                  <option value="">Select project type</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Business Website">Business Website</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Web App">Web Application</option>
                  <option value="Portfolio">Portfolio</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range *
                </label>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-black border border-[#3A354A] rounded-lg text-white focus:border-purple-500 focus:outline-none"
                >
                  <option value="">Select budget range</option>
                  <option value="$50 - $100">$50 - $100</option>
                  <option value="$100 - $250">$100 - $250</option>
                  <option value="$250 - $500">$250 - $500</option>
                  <option value="$500 - $750">$500 - $750</option>
                  <option value="$750+">$750+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 bg-black border border-[#3A354A] rounded-lg text-white focus:border-purple-500 focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-[#3A354A] text-gray-300 rounded-lg hover:bg-[#3A354A] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Get Started"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
