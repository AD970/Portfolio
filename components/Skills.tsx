
"use client";
import Reveal from "./motion/Reveal";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface Skill {
  name: string;
  percentage: number;
}

export function MySkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once

  const skills: Skill[] = [
    { name: "HTML5", percentage: 95 },
    { name: "CSS3", percentage: 90 },
    { name: "React", percentage: 95 },
    { name: "Next js", percentage: 80 },
    { name: "SEO", percentage: 80 },
    { name: "Framer motion", percentage: 75 },
  ];

  return (
    <section ref={ref} className="bg-base-200 min-h-[80vh]  py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Reveal width="w-full">
            <h2 className=" text-4xl lg:text-6xl md:text-5xl text-primary font-bold mb-4">
              My Skills
            </h2>
          </Reveal>
          <Reveal width="w-full">
            <p className="text-base-content">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </Reveal>
        </div>

        {/* Skill Bars */}
        <Reveal width="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                {/* Skill Header */}
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-base-content">{skill.name}</span>
                  <span className="text-sm font-medium">
                    {skill.percentage}%
                  </span>
                </div>
                {/* Animated Progress Bar */}
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{
                      width: isInView ? `${skill.percentage}%` : "0%",
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: index * 0.1, // Stagger animation delay
                    }}
                    className="h-full bg-secondary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
