import React from "react";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import Magnetic from "@/components/motion/Magnetic";

interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
  [key: string]: any;
}

export default function Rounded({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}: Props) {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    if (circle.current) {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current
        .to(
          circle.current,
          { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
          "enter",
        )
        .to(
          circle.current,
          { top: "-150%", width: "125%", duration: 0.25 },
          "exit",
        );
    }
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (timeline.current) {
      timeline.current.tweenFromTo("enter", "exit");
    }
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={`w-[180px] h-[180px] rounded-full
             absolute -top-16 right-40 text-accent-content bg-accent flex items-center justify-center text-center text-lg 
             font-medium transition-all`}
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        ref={circle}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
      </div>
    </Magnetic>
  );
}
