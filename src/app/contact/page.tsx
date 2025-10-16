"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SplitText from "@/components/ui/SplitText";
import StarBorder from "@/components/ui/StarBorder";
import PixelBlast from "@/components/ui/PixelBlast";
import { SiInstagram, SiTiktok, SiLinkedin } from "react-icons/si";

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
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

      {/* Header */}
      <div className="relative z-20">
        <Header onBookDemo={() => {}} />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <section
          className="section-padding-hero overflow-hidden"
          style={{
            background: "var(--bg-primary)",
          }}
        >
          {/* Gradient background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `
                radial-gradient(circle at 30% 50%, rgba(169, 105, 255, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 70% 20%, rgba(99, 167, 255, 0.1) 0%, transparent 50%)
              `,
            }}
          />

          <div className="container-responsive relative">
            {/* Header Section */}
            <div className="text-center mb-12 md:mb-16">
              <div className="animate-slide-up mb-6">
                <StarBorder
                  as="div"
                  color="var(--color-purple)"
                  className="inline-block"
                >
                  GET IN TOUCH
                </StarBorder>
              </div>

              <h1
                className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                <SplitText
                  text="Let's build something"
                  className="block"
                  delay={100}
                  duration={0.5}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="center"
                />
                <SplitText
                  text="amazing together"
                  className="block mt-2"
                  delay={300}
                  duration={0.5}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="center"
                  style={{
                    background: "var(--gradient-text)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
              </h1>

              <p
                className="text-body max-w-2xl mx-auto"
                style={{ color: "var(--text-tertiary)" }}
              >
                Ready to transform your digital presence? Get in touch with us
                today.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              {/* Email Card */}
              <div
                className="glass p-6 md:p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                style={{ borderColor: "var(--card-border)" }}
              >
                <div
                  className="w-14 h-14 mx-auto mb-4 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(169, 105, 255, 0.1)",
                    color: "var(--color-purple)",
                  }}
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Email Us
                </h3>
                <a
                  href="mailto:horizxon.limited@gmail.com"
                  className="text-sm transition-colors block"
                  style={{ color: "var(--text-tertiary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-purple)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-tertiary)";
                  }}
                >
                  horizxon.limited@gmail.com
                </a>
              </div>

              {/* Response Time Card */}
              <div
                className="glass p-6 md:p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                style={{ borderColor: "var(--card-border)" }}
              >
                <div
                  className="w-14 h-14 mx-auto mb-4 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(99, 167, 255, 0.1)",
                    color: "var(--color-blue)",
                  }}
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Response Time
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Within 24 hours
                </p>
              </div>

              {/* Social Card */}
              <div
                className="glass p-6 md:p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                style={{ borderColor: "var(--card-border)" }}
              >
                <div
                  className="w-14 h-14 mx-auto mb-4 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(229, 85, 159, 0.1)",
                    color: "var(--color-pink)",
                  }}
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Follow Us
                </h3>
                <div className="flex justify-center gap-4 mt-3">
                  <a
                    href="https://www.instagram.com/horizxon.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:scale-110"
                    style={{ color: "var(--text-tertiary)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-pink)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-tertiary)";
                    }}
                  >
                    <SiInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@horizxon.limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:scale-110"
                    style={{ color: "var(--text-tertiary)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-pink)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-tertiary)";
                    }}
                  >
                    <SiTiktok className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:scale-110"
                    style={{ color: "var(--text-tertiary)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-pink)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-tertiary)";
                    }}
                  >
                    <SiLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
