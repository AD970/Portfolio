// import React from 'react'
// import Marquee from 'react-fast-marquee'
// import { Space_Grotesk } from "next/font/google";
// import RetroGrid from './ui/retro-grid';
// import { workTogetherlinks } from '@/constants';
// import Link from 'next/link';

// type Props = {}

// const space_Grotesk = Space_Grotesk({
//   subsets: ["latin"], // Specify the subsets you need
//   weight: ["400", "700"], // Add specific weights if needed
// });
// export default function WorkTogether({}: Props) {
//   return (
//     <div className='  bg-[#151515] bg-grid-slate-50/[0.2]  relative h-screen  '>
//             <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//       {/* <RetroGrid /> */}
//          <Marquee
//         gradient={true}
//         speed={80}
//         gradientWidth={50}
//         gradientColor={"#151515"} // Dark gradient color (RGB)
//         className='min-h-64 '
//       >
//       <h1 className={` text-[220px] text- font-bold hidden md:flex gap-8 ${space_Grotesk.className}`}>
//         <span className='mx-8'>Let's</span>
//       <span className='mx-8'>work</span>
//       <span className='mx-8 '>together</span>
//         </h1>
//       <h1 className="text-9xl font-bold md:hidden flex gap-8 ">
//         <span className='mx-8'>Let's</span>
//       <span className='mx-8'>Talk</span>
//         </h1>
//       </Marquee>
//       <div className="flex mt-14 justify-between px-8 p-4">
//         <ul className='flex flex-col gap-4 '>{workTogetherlinks.map((link) => (
//           <li key={link.name} className="group inline-block relative">
//             <Link     className="relative  inline-block text-lg font-semibold text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href={link.link} >{link.name}

//             </Link>
//           </li>
//         ))}</ul>
//       </div>
//       </div>
//   )
// }
import React from "react";
import { Space_Grotesk } from "next/font/google";
import { workTogetherlinks } from "@/constants";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

import { useRef } from "react";
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

  return (
    <div ref={containerRef} className="bg-[#151515]  relative min-h-screen">
      <div className="flex justify-center items-center w-full ">
        <motion.div className="   pt-32 text-center space-y-8">
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
        <div className=" divider divider-end mt-24">
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
            {workTogetherlinks.map((link) => (
              <li key={link.name} className="group inline-block relative">
                <Link
                  className="relative  inline-block text-lg font-semibold text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  href={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
