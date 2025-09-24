"use client";

import React from "react";
import SplitText from "@/components/ui/SplitText";
import GlareHover from "@/components/ui/GlareHover";
import StarBorder from "@/components/ui/StarBorder";
import LaserFlow from "@/components/LaserFlow";

interface SolutionsProps {
  onBookDemo: () => void;
}

const SolutionsSection: React.FC<SolutionsProps> = ({ onBookDemo }) => {
  const solutions = [
    {
      title: "Frontend Development",
      description:
        "Modern, responsive user interfaces built with the latest technologies like React, Next.js, and Vue.js for exceptional user experiences.",
      features: [
        "React & Next.js",
        "Responsive Design",
        "Progressive Web Apps",
        "Performance Optimization",
      ],
    },
    {
      title: "Backend Development",
      description:
        "Robust server-side solutions with scalable APIs, databases, and cloud infrastructure to power your applications.",
      features: [
        "Node.js & Express",
        "Database Design",
        "API Development",
        "Cloud Integration",
      ],
    },
    {
      title: "Full-Stack Solutions",
      description:
        "End-to-end web development services from concept to deployment, including maintenance and ongoing support.",
      features: [
        "Complete Web Apps",
        "E-commerce Platforms",
        "Custom CMS",
        "DevOps & Deployment",
      ],
    },
  ];

  return (
    <section id="services" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <StarBorder as="div" color="#A969FF" className="inline-block">
              WEB DEVELOPMENT SERVICES
            </StarBorder>
          </div>

          {/* H2 heading with animated text */}
          <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl mb-6 flex flex-col items-center">
            <SplitText
              text="Professional Websites for"
              className="text-white"
              splitType="words"
              delay={80}
              duration={0.7}
              ease="power3.out"
              from={{ opacity: 0, y: 25 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
            />
            <SplitText
              text="Every Business"
              className="bg-clip-text text-transparent mt-2"
              style={{
                background:
                  "linear-gradient(95deg, #A969FF 10%, #E5559F 50%, #63A7FF 90%)",
                WebkitBackgroundClip: "text",
              }}
              splitType="words"
              delay={120}
              duration={0.7}
              ease="power3.out"
              from={{ opacity: 0, y: 25 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
            />
          </h2>

          {/* Body text with animated lines */}
          <div className="text-[#C2C2C2] text-lg max-w-3xl mx-auto">
            <SplitText
              text="From stunning landing pages to complex web applications, Horizxon provides the expertise and tools needed to build, deploy, and scale your digital presence across all platforms and devices."
              splitType="lines"
              delay={150}
              duration={0.6}
              ease="power2.out"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
            />
          </div>
        </div>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            // Define glare colors for each card
            const glareColors = ["#A969FF", "#E5559F", "#63A7FF"];
            const glareColor = glareColors[index % glareColors.length];

            return (
              <GlareHover
                key={solution.title}
                width="100%"
                height="100%"
                background="rgba(10, 10, 10, 1)"
                borderRadius="8px"
                borderColor="rgba(75, 85, 99, 1)"
                glareColor={glareColor}
                glareOpacity={0.4}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className="border-gray-800 hover:border-gray-700"
              >
                <div className="p-6 h-full">
                  {/* Solution title */}
                  <h3 className="text-white font-semibold text-xl mb-4">
                    {solution.title}
                  </h3>

                  {/* Solution description */}
                  <p className="text-[#C2C2C2] mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-[#C2C2C2] text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#A969FF] to-[#63A7FF] rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlareHover>
            );
          })}
        </div>

        {/* CTA Section with LaserFlow Effect */}
        <div className="text-center mt-16">
          <div
            className="relative overflow-visible"
            style={{
              height: "400px",
              backgroundColor: "#000000",
              borderRadius: "12px",
            }}
          >
            {/* LaserFlow Background */}
            <LaserFlow
              horizontalBeamOffset={0.2}
              verticalBeamOffset={0.1}
              color="#9A7EFF"
              verticalSizing={3.0}
              horizontalSizing={0.7}
              fogIntensity={0.6}
              wispIntensity={6.0}
            />

            {/* CTA Box Overlay */}
            <div
              className="absolute bg-black rounded-xl border-2 border-[#9A7EFF] flex items-center justify-center z-[6]"
              style={{
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "86%",
                height: "60%",
              }}
            >
              <div className="text-center w-full px-4 sm:px-6">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                  Ready to Build Your Dream Website?
                </h3>
                <p className="text-[#C2C2C2] text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto">
                  Get a free consultation and discover how Horizxon can
                  transform your online presence with cutting-edge web
                  development solutions.
                </p>

                <div className="flex justify-center items-center">
                  <StarBorder
                    as="button"
                    color="#9A7EFF"
                    onClick={onBookDemo}
                    className="hover:opacity-90 transition-opacity"
                  >
                    Get Quote
                  </StarBorder>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
