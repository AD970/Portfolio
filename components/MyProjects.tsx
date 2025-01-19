"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Parallax } from "react-parallax";

type Props = {};

export default function MyProjects({}: Props) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveringImage, setHoveringImage] = useState(false);
  const [viewWorkButton, setViewWorkButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setViewWorkButton(true);
    }, 1000);
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: "some" }); // Trigger animation once

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`relative transition-colors bg-black duration-500 `}
    >
      {" "}
      {/* Cursor Tracker */}
      <motion.div
        animate={{
          x: cursorPosition.x - 25,
          y: cursorPosition.y - 25,
          opacity: hoveringImage ? 1 : 0,
        }}
        style={viewWorkButton ? { display: "flex" } : { display: "none" }}
        className={`fixed top-0 left-0 z-50 h-12 w-12 rounded-full  border border-white bg-transparent flex items-center justify-center pointer-events-none`}
      >
        <p className="text-white text-xs">View</p>
      </motion.div>
      <section
        id="projects"
        className="mx-auto max-w-5xl px-4 py-48 text-white"
      >
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-20 md:text-5xl lg:text-6xl text-center text-4xl font-black uppercase text-zinc-50"
        >
          Projects
        </motion.h1>
      </section>
      <section className="flex flex-col gap-8 md:gap-32">
        <ProjectItem
          text="NFT App"
          image="/nft-seller.png"
          tags={["Frontend development", "UI design"]}
          direction="items-start"
          styles="md:items-start"
          imageHeight="md:h-[500px] sm-[400px] h-[200px]"
          imageWidth="md:w-[900px] sm:w-[600px] w-full"
          onHoverStart={() => setHoveringImage(true)}
          onHoverEnd={() => setHoveringImage(false)}
        />
        <ProjectItem
          text="Brew Cafe"
          image="/BrewCafe.png"
          tags={["Frontend development", "UI design"]}
          direction="items-end"
          styles="lg:items-end  lg:mr-20  md:mt-20"
          imageHeight="md:h-[500px] h-[200px]"
          imageWidth="md:w-[800px] sm:w-[600px] w-full"
          onHoverStart={() => setHoveringImage(true)}
          onHoverEnd={() => setHoveringImage(false)}
        />
      </section>
    </motion.div>
  );
}

const ProjectItem = ({
  text,
  image,
  tags,
  direction,
  styles,
  imageHeight,
  imageWidth,
  onHoverStart,
  onHoverEnd,
}: {
  text: string;
  image: string;
  tags: string[];
  direction: string;
  styles: string;
  imageHeight: string;
  imageWidth: string;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={`mb-9 flex flex-col pb-9  items-center sm:${direction}  md:p-0 md:px-8 md:${styles} md:${direction}`}
    >
      <div className="">
        <Link href={"#projects"}>
          <motion.div
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            className={` relative rounded-md overflow-hidden  group ${imageHeight || "md:h-[400px] sm:h-[400px] h-[300px]"}
               ${"lg:w-[900px] md:w-[700px] sm:w-[600px]  "}`}
          >
            {/* Darkened hover effect */}
            <Parallax bgImage={image} strength={70}>
              <div
                className={`relative rounded-md  overflow-hidden group ${imageHeight || "md:h-[400px] sm:h-[400px] h-[300px]"}
                 ${imageWidth || "lg:w-[900px] md:w-[700px] sm:w-[600px]"}`}
              ></div>
            </Parallax>
            <motion.div className="absolute top-0 left-0 h-full w-full bg-black opacity-0 group-hover:opacity-50 transition-opacity" />
          </motion.div>
        </Link>
        <p className="mt-4 text-zinc-50 md:px-0">{text}</p>
        <p className="text-sm uppercase  md:px-0 text-zinc-500">
          {tags.join(", ")}
        </p>
      </div>
    </motion.div>
  );
};
