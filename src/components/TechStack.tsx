"use client";

import React from "react";
import LogoLoop from "@/components/ui/LogoLoop";
import SplitText from "@/components/ui/SplitText";
import StarBorder from "@/components/ui/StarBorder";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiGit,
  SiVercel,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";

const TechStack: React.FC = () => {
  const technologies = [
    {
      node: <SiReact className="text-[#61DAFB]" />,
      title: "React",
      href: "https://reactjs.org",
    },
    {
      node: <SiNextdotjs className="text-white" />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiTypescript className="text-[#3178C6]" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss className="text-[#38B2AC]" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiNodedotjs className="text-[#339933]" />,
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      node: <SiJavascript className="text-[#F7DF1E]" />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiGraphql className="text-[#E10098]" />,
      title: "GraphQL",
      href: "https://graphql.org",
    },
    {
      node: <SiMongodb className="text-[#47A248]" />,
      title: "MongoDB",
      href: "https://www.mongodb.com",
    },
    {
      node: <SiPostgresql className="text-[#336791]" />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    {
      node: <SiGit className="text-[#F05032]" />,
      title: "Git",
      href: "https://git-scm.com",
    },
    {
      node: <SiVercel className="text-white" />,
      title: "Vercel",
      href: "https://vercel.com",
    },
    {
      node: <SiFigma className="text-[#F24E1E]" />,
      title: "Figma",
      href: "https://www.figma.com",
    },
  ];

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: `
          var(--bg-primary),
          linear-gradient(135deg, rgba(99, 167, 255, 0.03) 0%, rgba(169, 105, 255, 0.03) 100%)
        `,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Enhanced background pattern - reduced on mobile */}
      <div
        className="absolute inset-0 opacity-10 md:opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, var(--color-blue) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, var(--color-purple) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, var(--color-cyan) 0%, transparent 50%)
          `,
          backgroundSize: "400px 400px, 300px 300px, 200px 200px",
        }}
      />

      {/* Mobile-optimized background on small screens */}
      <div
        className="absolute inset-0 opacity-5 md:hidden"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, var(--color-purple) 0%, transparent 60%)`,
          backgroundSize: "300px 300px",
        }}
      />

      <div className="container-responsive relative z-10">
        {/* Enhanced Section header */}
        <div
          className="text-center animate-fade-in"
          style={{ marginBottom: "var(--space-12)" }}
        >
          {/* Enhanced pill component */}
          <div
            className="animate-slide-up mb-4 md:mb-8"
            style={{
              animationDelay: "100ms",
            }}
          >
            <StarBorder
              as="div"
              color="var(--color-blue)"
              className="inline-block"
            >
              TECHNOLOGIES WE USE
            </StarBorder>
          </div>

          {/* Enhanced heading with design system */}
          <h2
            className="text-h2 font-bold text-center animate-slide-up mb-4 md:mb-6"
            style={{
              color: "var(--text-primary)",
              animationDelay: "200ms",
            }}
          >
            <SplitText
              text="Built with modern"
              className="block"
              delay={200}
              duration={0.8}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
            />
            <SplitText
              text="technologies"
              className="block"
              delay={300}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30, scale: 0.9 }}
              to={{ opacity: 1, y: 0, scale: 1 }}
              textAlign="center"
              style={{
                background: "var(--gradient-text)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                WebkitFontSmoothing: "antialiased",
                marginTop: "var(--space-2)",
              }}
            />
          </h2>

          {/* Enhanced subtitle */}
          <div
            className="text-body text-center animate-slide-up max-w-sm md:max-w-2xl mx-auto px-4 md:px-0"
            style={{
              color: "var(--text-tertiary)",
              animationDelay: "400ms",
            }}
          >
            <SplitText
              text="We leverage cutting-edge tools and frameworks to deliver exceptional web experiences that perform at scale."
              splitType="words"
              delay={400}
              duration={0.7}
              ease="power2.out"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
            />
          </div>
        </div>
      </div>

      {/* Full-bleed LogoLoop (edge-to-edge) */}
      <div
        className="relative animate-fade-in w-screen max-w-none left-1/2 -translate-x-1/2 mt-6 md:mt-10"
        style={{ animationDelay: "600ms" }}
      >
        {/* Subtle gradient overlay for better logo visibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(90deg, 
                var(--bg-primary) 0%, 
                transparent 10%, 
                transparent 90%, 
                var(--bg-primary) 100%
              )
            `,
            zIndex: 1,
          }}
        />

        {/* Enhanced logo container - no horizontal padding, full-bleed */}
        <div className="relative py-6 md:py-12 rounded-none md:rounded-xl border-t border-b border-[var(--card-border)] bg-[rgba(255,255,255,0.02)]">
          <LogoLoop
            logos={technologies}
            speed={50}
            direction="left"
            logoHeight={36}
            gap={32}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="var(--bg-primary)"
            ariaLabel="Technologies we use"
            className="transition-all duration-300 md:hidden"
          />
          <LogoLoop
            logos={technologies}
            speed={50}
            direction="left"
            logoHeight={56}
            gap={64}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="var(--bg-primary)"
            ariaLabel="Technologies we use"
            className="transition-all duration-300 hidden md:block"
          />
        </div>

        {/* Optional: Add category labels */}
        <div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6 md:mt-8 animate-slide-up px-4 md:px-0"
          style={{ animationDelay: "800ms" }}
        >
          {["Frontend", "Backend", "Database", "Tools"].map(
            (category, index) => (
              <div
                key={category}
                className="glass px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-xs font-medium tracking-wide transition-all duration-300 hover:glass-strong flex-shrink-0"
                style={{
                  color: "var(--text-secondary)",
                  animationDelay: `${900 + index * 100}ms`,
                }}
              >
                {category}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
