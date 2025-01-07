"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import SectionAnimation from "./motion/SectionAnimation";

const services = [
  {
    text: [
      "Frontend",
      "Recreate website",
      "Customer Research",
      "Fix Code",
      "Backend",
    ],
    type: "Development",
    index: 1,
  },
  {
    text: [
      "Product Ideation",
      "Best Practices",
      "Art Direction",
      "Webdesign",
      "User Interface Design",
    ],
    type: "Design",
    index: 2,
  },
  {
    text: [
      "SEO",
      "Content Strategy",
      "Social Media",
      "Email Marketing",
      "Analytics",
    ],
    type: "Marketing",
    index: 3,
  },
];

export default function ServicesContainer() {
  return (
    <div className="md:min-h-screen flex relative flex-col text-black md:flex-col bg-gray-200">
      <Services />
    </div>
  );
}

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeType, setActiveType] = useState(services[0].type);
  const [activeTypeIndex, setActiveTypeIndex] = useState(services[0].index);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const index = Math.min(
        Math.floor(progress * services.length),
        services.length - 1,
      );
      setActiveType(services[index].type);
      setActiveTypeIndex(services[index].index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    // <ReactLenis root options={{ lerp: 0.1 }}>
    <div
      ref={containerRef}
      className="md:min-h-screen flex flex-col text-black md:flex-row bg-gray-200"
    >
      {/* Left fixed section */}
      <div className="w-full md:w-1/2 md:sticky md:h-screen bg-gray-200 md:border-r md:border-zinc-950 top-0 p-8 md:p-16 flex flex-col justify-between">
        <div>
          <motion.span
            className="md:text-sm text-3xl uppercase tracking-wider md:text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Services
          </motion.span>
          <motion.h1
            key={activeType}
            className="text-4xl md:text-4xl font-light hidden md:block mt-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeType}
          </motion.h1>
          <motion.div
            className=" gap-4 mt-4 hidden md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.h1
              key={activeTypeIndex}
              className="text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              0{activeTypeIndex}
            </motion.h1>
            <span className="text-sm">—</span>
            <span className="text-sm">03</span>
          </motion.div>
          <motion.p
            className="mt-8 max-w-md text-gray-600"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm here to help you turn ideas into something real and meaningful—
            whether that's understanding your audience, shaping a standout
            product, or crafting digital experiences that truly connect.
          </motion.p>
        </div>
      </div>

      {/* Right scrolling section */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center">
        <div className="space-y-32 py-32 overflow-hidden">
          {services.map((service, index) => {
            const y = useTransform(
              scrollYProgress,
              [index / services.length, (index + 1) / services.length],
              ["50%", "-50%"],
            );
            const opacity = useTransform(
              scrollYProgress,
              [
                (index - 0.5) / services.length,
                index / services.length,
                (index + 0.5) / services.length,
              ],
              [1, 1, 1],
            );

            return (
              <motion.div
                key={service.type}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-col gap-6 font-light"
                style={{ y, opacity }}
              >
                <span className="md:hidden text-zinc-950 border-b text-3xl border-zinc-50 font-bold">
                  {service.type}
                </span>
                {service.text.map((item) => (
                  <motion.div
                    key={item}
                    initial={{ x: 140 }} // Start position off-screen
                    whileInView={{ x: 0 }} // Slide into position
                    transition={{ duration: 0.6, ease: "easeOut" }} // Smoother transition
                    viewport={{ once: true, margin: "-20%" }} // Triggers animation once in view
                    className=" text-gray-900"
                  >
                    {item}
                    <div className="divider"></div>
                  </motion.div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    // </ReactLenis>
  );
}
