"use client";

import React from "react";
import SplitText from "@/components/ui/SplitText";

const TextAnimationDemo = () => {
  const handleAnimationComplete = () => {
    console.log("Animation complete!");
  };

  return (
    <div className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Text Animation Examples</h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Heading Animations</h2>
          <div className="space-y-8">
            <div className="p-6 bg-[#101010] rounded-lg">
              <h3 className="text-lg text-[#a1a1a1] mb-4">
                Hero Heading (Character Animation)
              </h3>
              <div className="mb-4">
                <SplitText
                  text="Transform Your Vision into Digital Reality"
                  className="text-4xl sm:text-5xl font-bold"
                  delay={30}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </div>
            </div>

            <div className="p-6 bg-[#101010] rounded-lg">
              <h3 className="text-lg text-[#a1a1a1] mb-4">
                Section Heading (Word Animation)
              </h3>
              <div className="mb-4">
                <SplitText
                  text="Our Development Solutions"
                  className="text-3xl font-semibold"
                  delay={100}
                  duration={0.7}
                  ease="back.out(1.2)"
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>
            </div>

            <div className="p-6 bg-[#101010] rounded-lg">
              <h3 className="text-lg text-[#a1a1a1] mb-4">
                Gradient Text (Character Animation)
              </h3>
              <div className="mb-4">
                <SplitText
                  text="Cutting-Edge Technology"
                  className="text-3xl font-bold bg-gradient-to-r from-[#a969ff] via-[#e5559f] to-[#63a7ff] bg-clip-text text-transparent"
                  delay={40}
                  duration={0.5}
                  ease="power2.out"
                  splitType="chars"
                  from={{ opacity: 0, x: -10, rotateY: -90 }}
                  to={{ opacity: 1, x: 0, rotateY: 0 }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Paragraph Animations</h2>
          <div className="space-y-8">
            <div className="p-6 bg-[#101010] rounded-lg">
              <h3 className="text-lg text-[#a1a1a1] mb-4">
                Small Paragraph (Line Animation)
              </h3>
              <div className="mb-4">
                <SplitText
                  text="We deliver cutting-edge solutions.\nFull-stack development with modern tech.\nTurning ideas into digital experiences."
                  className="text-lg text-[#c2c2c2]"
                  delay={150}
                  duration={0.8}
                  ease="power3.out"
                  splitType="lines"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Recommended Usage</h2>
          <div className="p-6 bg-[#101010] rounded-lg">
            <ul className="list-disc pl-5 text-[#c2c2c2] space-y-2">
              <li>
                Use character animations for main hero headings to create a
                striking first impression
              </li>
              <li>
                Use word animations for section headings for a balanced effect
              </li>
              <li>
                Use line animations for paragraph text to keep it readable
              </li>
              <li>
                Apply to important UI elements only to avoid overwhelming the
                user
              </li>
              <li>
                Consider reducing animations on mobile devices for performance
              </li>
              <li>Pair with gradient text for key marketing messages</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TextAnimationDemo;
