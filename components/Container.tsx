"use client";
import { useEffect, useRef, useState } from "react";
import Landing from "@/components/Landing";
import MovingIcons from "@/components/MovingIcons";
import { Portfolio } from "@/components/Portfolio";
import { MySkills } from "@/components/Skills";
import MyProjects from "@/components/MyProjects";
import WorkTogether from "@/components/WorkTogether";
import ServicesContainer from "@/components/Services";
import SectionAnimation from "@/components/motion/SectionAnimation";
import { AnimatePresence, useInView } from "motion/react";
import { cancelFrame, frame, type frameData } from "motion/react";
import Lenis from "lenis";
import PreLoader from "./PreLoader";
import { ReactLenis, type LenisRef } from "lenis/react";
type Props = {};

export default function Container({}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<LenisRef | null>(null);
  useEffect(() => {
    function update(time: typeof frameData) {
      lenisRef.current?.lenis?.raf(time.timestamp);
    }

    frame.update(update, true);

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.05,
    });

    const observerCallback = (mutations: MutationRecord[]) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "style") {
          const overflowY = document.body.style.overflowY;
          if (overflowY === "hidden") {
            lenis.stop();
          } else {
            lenis.start();
          }
        }
      });
    };

    const observer = new MutationObserver(observerCallback);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 100);

    return () => {
      observer.disconnect();
      cancelFrame(update);
    };
  }, []);
  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        duration: 1.5,
        lerp: 0.1,
        orientation: "vertical",
        gestureOrientation: "vertical",
      }}
      ref={lenisRef}
    >
            <div ref={containerRef} id="scroll-container">
        <AnimatePresence mode="wait">
          {isLoading && <PreLoader />}
        </AnimatePresence>
        <Portfolio />
        <Landing />
        <div className="">
          <MovingIcons />
          <MySkills />
          <MyProjects />
          <ServicesContainer />
          <div className="overflow-hidden">
            <SectionAnimation backgroundColor="bg-[#151515]" />
            <WorkTogether />
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

