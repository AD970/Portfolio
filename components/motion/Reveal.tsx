"use client";

import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "motion/react";

type Props = {
  children: React.ReactNode;
  width?: "w-full" | "w-fit";
};

function Reveal({ children, width = "w-fit" }: Props) {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);

  // Check if the component is in view
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${width}`}>
      {/* Content Motion Div */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{ zIndex: 10 }} // Ensure content stays above
      >
        {children}
      </motion.div>

      {/* Sliding Animation */}
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        className="bg-accent"
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 5, // Lower z-index than text
        }}
      />
    </div>
  );
}

export default Reveal;
