"use client";
import { motion } from "motion/react";
import React from "react";

type Props = {
  backgroundColor: string;
  isOpen: boolean;
};

export default function ModalAnimation({ backgroundColor, isOpen }: Props) {
  return (
    <div className={`${backgroundColor} relative`}>
      <motion.div
        initial={{ scaleX: 0, originX: 1 }} // Start collapsed from the right
        animate={{ scaleX: isOpen ? 1 : 0 }} // Expand on open, collapse on close
        exit={{ scaleX: 0, originX: 1 }} // Collapse when exiting
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute w-[1550%] h-[120%] -right-[10%] rounded-l-[50%] bg-gray-200 shadow-[0px_60px_50px_rgba(0,0,0,0.748)] z-10"
      />
    </div>
  );
}
