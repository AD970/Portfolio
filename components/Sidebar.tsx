"use client";
import React from "react";
import { motion } from "motion/react";
import { menuSlide } from "./motion/SidebarAnime";
import Curve from "./motion/Curve";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-screen md:w-[500px] p-20 bg-[#292929] fixed top-0 right-0 z-[999]"
    >
      Sidebar
      <Curve />
    </motion.div>
  );
}
// change it later
