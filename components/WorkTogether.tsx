
import React, { useState } from "react";
import { Space_Grotesk } from "next/font/google";
import { workTogetherlinks } from "@/constants";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import WorkTogetherModal from "./ui/WorkTogetherModal";
import useHash from "@/hooks/use-hash";
type Props = {};

const space_Grotesk = Space_Grotesk({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["400", "700"], // Add specific weights if needed
});
export default function WorkTogether({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const xFirstText = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const xSecondText = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const getInTouch = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [isOpen, setIsOpen] = useState(false);
  const hash = useHash();
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div ref={containerRef} id="contact" className="bg-[#151515]  relative min-h-screen">
      <div className="flex justify-center items-center w-full ">
        <motion.div
          className=" cursor-pointer   pt-32 text-center space-y-8"
          onClick={() => setIsOpen(true)}
        >
          <motion.h1
            style={{ x: xFirstText }}
            className={`text-6xl text-white font-bold ${space_Grotesk.className}`}
          >
            Let&apos;s build
          </motion.h1>
          <motion.h1
            style={{ x: xSecondText }}
            className={`text-6xl text-white font-bold ${space_Grotesk.className}`}
          >
            Something cool
          </motion.h1>
        </motion.div>
      </div>
      <div className="relative ">
        <div className=" divider  divide-primary-content divider-end mt-24">
          <motion.div
            style={{ x: getInTouch }}
            className="md:w-[180px] md:h-[180px] h-[120px] w-[120px] rounded-full
             absolute md:-top-16 -top-8 right-40 text-accent-content bg-accent flex items-center justify-center text-center text-lg 
             font-medium transition-all "
          >
            <span className="">get in touch</span>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-between md:mt-0 mt-4 p-4">
        <div className="">
          <h1 className="text-gray-400">Socials</h1>
          <ul className="flex  gap-4 flex-col md:flex-row ">
            {workTogetherlinks.map((link) => 
              link && (
                <li key={link.name} className="group inline-block relative">
                  <Link
                    className="relative  inline-block text-lg font-semibold text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    href={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {isOpen  &&  (
          <WorkTogetherModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
