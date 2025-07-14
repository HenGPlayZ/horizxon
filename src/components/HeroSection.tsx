"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import SplitText from "@/components/ui/SplitText";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  // Remove Spline watermark
  useEffect(() => {
    const removeSplineWatermark = () => {
      // Try multiple methods to remove the watermark
      const interval = setInterval(() => {
        // Method 1: Look for spline-viewer elements
        const viewers = document.querySelectorAll("spline-viewer");
        viewers.forEach((viewer) => {
          const shadowViewer = viewer as Element & { shadowRoot?: ShadowRoot };
          if (shadowViewer.shadowRoot) {
            const logo = shadowViewer.shadowRoot.querySelector("#logo");
            if (logo) {
              logo.remove();
              console.log("Spline logo removed from shadow DOM!");
            }
          }
        });

        // Method 2: Look for watermark class directly
        const watermarks = document.querySelectorAll(".spline-watermark");
        watermarks.forEach((watermark) => {
          watermark.remove();
          console.log("Spline watermark removed!");
        });

        // Method 3: Look in iframes
        const iframes = document.querySelectorAll(
          'iframe[src*="spline.design"]'
        );
        iframes.forEach((iframe) => {
          try {
            const iframeElement = iframe as HTMLIFrameElement;
            if (iframeElement.contentDocument) {
              const watermark =
                iframeElement.contentDocument.querySelector(
                  ".spline-watermark"
                );
              if (watermark) {
                watermark.remove();
                console.log("Watermark removed from iframe!");
              }
            }
          } catch {
            // Cross-origin restrictions - expected
          }
        });

        // Method 4: Hide any element with spline branding
        const splineLinks = document.querySelectorAll(
          'a[href*="spline.design"]'
        );
        splineLinks.forEach((link) => {
          (link as HTMLElement).style.display = "none";
          console.log("Spline link hidden!");
        });
      }, 500);

      // Clean up after 15 seconds
      setTimeout(() => {
        clearInterval(interval);
      }, 15000);

      return () => clearInterval(interval);
    };

    removeSplineWatermark();
  }, []);
  return (
    <section className="relative min-h-screen bg-black flex items-center">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-5"></div>

      {/* Content overlay - Full width */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-10rem)]">
            {/* Left side - Content */}
            <div className="flex-1 lg:pr-8 text-center lg:text-left mb-8 lg:mb-0">
              {/* Premium pill tag with sparkle icon */}
              <div className="mb-8">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3A354A] backdrop-blur-sm"
                  style={{ background: "rgba(43, 38, 61, 0.8)" }}
                >
                  {/* Sparkle icon */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-[#EAEAEA] text-sm font-medium tracking-wide">
                    WEBSITE DEVELOPMENT EXPERTS
                  </span>
                </div>
              </div>

              {/* Main heading with premium styling */}
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 leading-tight text-white"
                style={{
                  textShadow:
                    "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div className="flex flex-col items-center lg:items-start space-y-1">
                  <div className="text-center lg:text-left">
                    <SplitText
                      text="Build different."
                      className="text-white block"
                      delay={30}
                      duration={0.7}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      textAlign="left"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <SplitText
                      text="Ship faster."
                      className="text-white block"
                      delay={50}
                      duration={0.8}
                      ease="power3.out"
                      splitType="words"
                      from={{ opacity: 0, y: 40, scale: 0.9 }}
                      to={{ opacity: 1, y: 0, scale: 1 }}
                      textAlign="left"
                    />
                  </div>
                </div>
              </h1>

              {/* Subtitle with refined styling */}
              <div
                className="text-[#E5E5E5] text-base sm:text-lg lg:text-xl mb-7 max-w-lg mx-auto lg:mx-0 leading-relaxed text-center lg:text-left"
                style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)" }}
              >
                <SplitText
                  text="We craft websites that actually convert. Modern design meets killer performance."
                  splitType="lines"
                  delay={100}
                  duration={0.6}
                  ease="power2.out"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                />
              </div>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onOpenModal}
                  className="w-full sm:w-auto bg-white text-black hover:bg-[#F5F5F5] rounded-md font-medium px-8 py-3"
                >
                  Get Started
                </Button>

                {/* Ghost button styling */}
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full sm:w-auto bg-transparent text-white border border-[#5A5869] hover:bg-white/10 hover:border-white transition-all duration-200 font-medium px-8 py-3 rounded-md flex items-center justify-center gap-2 group"
                >
                  <span>View Services</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right side - Reactive Orb Animation */}
            <div className="hidden lg:flex flex-1 lg:pl-8 items-center justify-center relative overflow-visible">
              <div className="w-[170%] h-[750px] relative overflow-hidden -mt-24">
                <iframe
                  src="https://my.spline.design/reactiveorb-vaZ1we6tRHZviqauHruFO9U0/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                ></iframe>
                {/* Watermark overlay - positioned to cover the Spline watermark */}
                <div
                  className="absolute bottom-0 right-0 w-40 h-16 z-50 pointer-events-none"
                  style={{
                    background: "#000000",
                  }}
                ></div>
                {/* Additional overlay for bottom left if needed */}
                <div
                  className="absolute bottom-0 left-0 w-40 h-16 z-50 pointer-events-none"
                  style={{
                    background: "#000000",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
