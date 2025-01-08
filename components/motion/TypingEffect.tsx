"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";

export function TypingEffect({
  text,
  onComplete,
}: {
  text: string;
  onComplete?: () => void; // Optional callback to notify when finished
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [completed, setCompleted] = React.useState(false);

  return (
    <p ref={ref} className="max-w-md">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.05,
            delay: index * 0.02,
          }}
          onAnimationComplete={() => {
            if (index === text.length - 1 && !completed) {
              setCompleted(true);
              onComplete?.(); // Notify parent when last letter animation completes
            }
          }}
        >
          {letter}
        </motion.span>
      ))}
    </p>
  );
}
