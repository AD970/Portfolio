"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef } from "react";

type Props = {
  backgroundColor: string;
};

export default function SectionAnimation({ backgroundColor }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={containerRef} className={`${backgroundColor}  `}>
      <motion.div style={{ height }} className="relative  ">
        <motion.div className="absolute h-[1550%] w-[120%] -left-[10%] rounded-b-[50%] bg-gray-200 shadow-[0px_60px_50px_rgba(0,0,0,0.748)] z-10" />
      </motion.div>
    </div>
  );
}
