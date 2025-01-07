"use client";
import { motion } from "motion/react";
import { navHeight, navbackground, mountAnim } from "./motion/NavAnime";

export default function Stairs() {
  return (
    <div className="top-0 left-0 h-screen flex duration-1000 pointer-events-none z-[1000000]">
      {[...Array(5)].map((_, index) => (
        <Stair key={index} index={index} />
      ))}
    </div>
  );
}
const Stair = ({ index }: { index: number }) => {
  return (
    <motion.div
      variants={navHeight}
      {...mountAnim}
      custom={4 - index}
      className="w-[20vw] h-full bg-black"
    />
  );
};

const Background = () => {
  return (
    <motion.div
      variants={navbackground}
      {...mountAnim}
      className={"w-full h-full absolute bg-black"}
    ></motion.div>
  );
};
