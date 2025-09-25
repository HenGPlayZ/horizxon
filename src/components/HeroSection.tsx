"use client";

import React, { useEffect } from "react";
import SplitText from "@/components/ui/SplitText";
import StarBorder from "@/components/ui/StarBorder";

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
    <section
      className="relative min-h-screen flex items-center section-padding-hero overflow-hidden"
      style={{
        background: `
          var(--bg-primary),
          var(--gradient-bg-subtle)
        `,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Enhanced background gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(169, 105, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(99, 167, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 90%, rgba(229, 85, 159, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-10rem)]">
            {/* Enhanced Left side - Content */}
            <div
              className="flex-1 text-center lg:text-left animate-fade-in"
              style={{
                paddingTop: "var(--space-20)",
                paddingBottom: "var(--space-8)",
                maxWidth: "42rem",
              }}
            >
              {/* Enhanced Premium pill tag */}
              <div
                className="animate-slide-up"
                style={{
                  marginBottom: "var(--space-8)",
                  animationDelay: "200ms",
                }}
              >
                <StarBorder as="div" color="white" className="inline-block">
                  <div
                    className="inline-flex items-center"
                    style={{ gap: "var(--space-2)" }}
                  >
                    {/* Enhanced sparkle icon */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="animate-pulse"
                      style={{ color: "var(--text-accent)" }}
                    >
                      <path
                        d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span
                      className="font-medium tracking-wide"
                      style={{
                        color: "var(--text-primary)",
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      WEBSITE DEVELOPMENT EXPERTS
                    </span>
                  </div>
                </StarBorder>
              </div>

              {/* Enhanced main heading with design system typography */}
              <h1
                className="text-h1 font-bold text-center lg:text-left animate-slide-up"
                style={{
                  marginBottom: "var(--space-6)",
                  lineHeight: "var(--leading-tight)",
                  color: "var(--text-primary)",
                  textShadow: "var(--shadow-glow)",
                  animationDelay: "400ms",
                }}
              >
                <div
                  className="flex flex-col items-center lg:items-start"
                  style={{ gap: "var(--space-2)" }}
                >
                  <div className="text-center lg:text-left">
                    <SplitText
                      text="Build different."
                      className="block"
                      style={{ color: "var(--text-primary)" }}
                      delay={400}
                      duration={0.8}
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
                      className="block"
                      style={{
                        background: "var(--gradient-text)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                        // Prevent blur by ensuring proper rendering
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                        textRendering: "optimizeLegibility",
                        // Ensure crisp rendering
                        backfaceVisibility: "hidden",
                        transform: "translateZ(0)",
                      }}
                      delay={600}
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

              {/* Enhanced subtitle with design system */}
              <div
                className="text-body text-center lg:text-left animate-slide-up"
                style={{
                  color: "var(--text-secondary)",
                  marginBottom: "var(--space-8)",
                  maxWidth: "36rem",
                  textShadow: "var(--shadow-sm)",
                  animationDelay: "800ms",
                }}
              >
                <SplitText
                  text="We craft websites that actually convert. Modern design meets killer performance, delivering results that matter for your business."
                  splitType="lines"
                  delay={800}
                  duration={0.7}
                  ease="power2.out"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                />
              </div>

              {/* Enhanced CTA Buttons with better spacing */}
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start items-center animate-scale-in"
                style={{
                  gap: "var(--space-4)",
                  animationDelay: "1000ms",
                }}
              >
                <StarBorder
                  as="button"
                  color="cyan"
                  onClick={onOpenModal}
                  className="w-full sm:w-auto hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Get Started
                </StarBorder>

                {/* Enhanced ghost button with design system */}
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-base btn-ghost w-full sm:w-auto group"
                  style={{
                    gap: "var(--space-2)",
                  }}
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

              {/* Add scroll indicator */}
              <div
                className="hidden lg:block animate-fade-in"
                style={{
                  marginTop: "var(--space-16)",
                  animationDelay: "1200ms",
                }}
              >
                <div
                  className="flex flex-col items-center lg:items-start cursor-pointer group"
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span
                    className="text-xs font-medium tracking-wider uppercase transition-colors duration-300 group-hover:text-gradient"
                    style={{
                      color: "var(--text-muted)",
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    Scroll to explore
                  </span>
                  <div
                    className="w-6 h-10 border-2 rounded-full flex justify-center transition-all duration-300 group-hover:border-white/40"
                    style={{
                      borderColor: "var(--card-border)",
                    }}
                  >
                    <div
                      className="w-1 h-3 rounded-full mt-2 animate-bounce"
                      style={{
                        background: "var(--gradient-text)",
                        animationDelay: "2s",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Right side with subtle visual element */}
            <div
              className="hidden lg:block flex-1 relative"
              style={{
                paddingLeft: "var(--space-12)",
              }}
            >
              {/* Subtle decorative gradient orb */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 animate-pulse"
                style={{
                  width: "300px",
                  height: "300px",
                  background: "var(--gradient-decorative)",
                  borderRadius: "50%",
                  filter: "blur(60px)",
                  animationDuration: "4s",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
