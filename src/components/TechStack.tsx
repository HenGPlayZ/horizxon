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
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          {/* Pill component following design system */}
          <div className="mb-8">
            <StarBorder as="div" color="#63A7FF" className="inline-block">
              TECHNOLOGIES WE USE
            </StarBorder>
          </div>

          {/* Heading with SplitText animation */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            <SplitText
              text="Built with modern"
              className="block"
              delay={40}
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
              delay={60}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30, scale: 0.9 }}
              to={{ opacity: 1, y: 0, scale: 1 }}
              textAlign="center"
              style={{
                background:
                  "linear-gradient(95deg, #A969FF 10%, #E5559F 50%, #63A7FF 90%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            />
          </h2>

          {/* Subtitle */}
          <div className="text-[#C2C2C2] text-lg max-w-2xl mx-auto">
            <SplitText
              text="We leverage cutting-edge tools and frameworks to deliver exceptional web experiences that perform at scale."
              splitType="words"
              delay={80}
              duration={0.6}
              ease="power2.out"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
            />
          </div>
        </div>

        {/* Logo Loop */}
        <div className="relative">
          <LogoLoop
            logos={technologies}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={48}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technologies we use"
            className="py-8"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
