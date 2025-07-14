"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines";
  from?: object;
  to?: object;
  threshold?: number;
  rootMargin?: string;
  textAlign?: string;
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  style = {},
  delay = 50,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "left" as React.CSSProperties["textAlign"],
  onLetterAnimationComplete,
}) => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const splitRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin,
  });

  // Check if parent has gradient styling
  const hasGradient =
    style.background &&
    typeof style.background === "string" &&
    style.background.includes("gradient");

  const splitText = () => {
    if (splitType === "chars") {
      return text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 transform"
          style={{
            display: char === " " ? "inline-block" : "inline-block",
            width: char === " " ? "0.3em" : "auto",
          }}
        >
          {char}
        </span>
      ));
    } else if (splitType === "words") {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          className="inline-block opacity-0 transform mr-[0.25em]"
          style={
            hasGradient
              ? {
                  // Apply gradient directly to each word for gradient text
                  background: style.background,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }
              : {}
          }
        >
          {word}
        </span>
      ));
    } else if (splitType === "lines") {
      // For simplicity, we'll simulate line splits with <br/> tags
      return text.split("\n").map((line, index) => (
        <div key={index} className="block opacity-0 transform">
          {line}
        </div>
      ));
    }
  };

  useEffect(() => {
    if (inView && !animationPlayed && splitRef.current) {
      setAnimationPlayed(true);

      const elements = splitRef.current.children;
      gsap.fromTo(elements, from, {
        ...to,
        stagger: delay / 1000,
        duration: duration,
        ease: ease,
        onComplete: onLetterAnimationComplete,
      });
    }
  }, [
    inView,
    animationPlayed,
    from,
    to,
    delay,
    duration,
    ease,
    onLetterAnimationComplete,
  ]);

  return (
    <div
      ref={(el) => {
        // Combining refs
        if (el) {
          splitRef.current = el;
          ref(el);
        }
      }}
      className={cn(className, "inline-block")}
      style={{
        textAlign: textAlign as "left" | "center" | "right" | "justify",
        // Remove background from parent when using gradient text
        ...(hasGradient ? {} : style),
      }}
    >
      {splitText()}
    </div>
  );
};

export default SplitText;
