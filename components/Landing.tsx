import React from "react";
import { Edu_AU_VIC_WA_NT_Hand } from "next/font/google";
import { Search } from "lucide-react";

import Reveal from "./motion/Reveal";
type Props = {};

const edu_AU_VIC_WA_NT_Hand = Edu_AU_VIC_WA_NT_Hand({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["400", "700"], // Add specific weights if needed
});
export default function Landing({}: Props) {
  return (
    <div
      className="md:min-h-screen md:pt-36 md:pb-16 
    bg-base-200 items-center md:items-start flex flex-col md:flex-row justify-between md:p-12"
    >
      <div>
        <div
          className={` inline-block mt-8 text-center  md:text-start md:max-w-2xl max-w-md prose  `}
        >
          <Reveal width="w-full">
            {/* <h1 className={`${edu_AU_VIC_WA_NT_Hand.className} lg:text-6xl md:text-5xl`}>Hello,</h1> */}

            <h1
              className={`${edu_AU_VIC_WA_NT_Hand.className}  md:text-5xl lg:text-6xl `}
            >
              I'm <span className="text-primary">Ahmed</span>.
            </h1>

            <h1
              className={`${edu_AU_VIC_WA_NT_Hand.className}  md:text-5xl lg:text-6xl z `}
            >
              I Code <span className="text-primary">*</span> Create.
            </h1>

            <h1
              className={`${edu_AU_VIC_WA_NT_Hand.className}  md:text-5xl lg:text-6xl `}
            >
              <span className="text-primary">*</span> Innovate.
            </h1>
          </Reveal>

          <Reveal width="w-full">
            <h3 className=" max-w-2xl  z-40 text-base-content">
              Empowering Ideas Through End-to-End Development Expertise and
              Seamless User Interfaces.{" "}
            </h3>
          </Reveal>
          <Reveal width="w-full">
            <p className="btn btn-wide btn-secondary btn-outline">
              <Search /> straycat.tx@outlock.com
            </p>
          </Reveal>
        </div>
      </div>
      <div className=" space-y-6 p-8 flex items-center prose flex-col">
        <Reveal>
          <h1 className="font-bold md:text-5xl lg:text-6xl text-primary">
            About me
          </h1>
        </Reveal>

        <ul className="flex flex-col gap-4">
          <Reveal>
            <li className=" flex  justify-between gap-4 items-center">
              <span className="text-base-content font-bold">Name:</span>{" "}
              <span className="text-base-content"> Ahmed Farouk</span>
            </li>
          </Reveal>
          <Reveal>
            <li className=" flex  justify-between gap-4 items-center">
              <span className="text-base-content font-bold">Location:</span>{" "}
              <span className="text-base-content">Madinah, Sa</span>
            </li>
          </Reveal>
          <Reveal>
            <li className=" flex  justify-between gap-4 items-center">
              <span className="text-base-content font-bold">Email:</span>{" "}
              <span className="text-base-content"> straycat.tx@gmail.com</span>
            </li>
          </Reveal>
          <Reveal>
            <li className=" flex  justify-between gap-4 items-center">
              <span className="text-base-content font-bold">Phone:</span>{" "}
              <span className="text-base-content"> +966-573-192-547</span>
            </li>
          </Reveal>
        </ul>
      </div>
    </div>
  );
}

// import React from 'react'
// import { Edu_AU_VIC_WA_NT_Hand } from "next/font/google";
// import { Circle, Search } from 'lucide-react';
// import { TextFade } from './motion/Fade';
// import Image from 'next/image';
// import { CiCircleCheck } from "react-icons/ci";
// import Reveal from './motion/Reveal';
// type Props = {}

// const edu_AU_VIC_WA_NT_Hand = Edu_AU_VIC_WA_NT_Hand({
//   subsets: ['latin'], // Specify the subsets you need
//   weight: ['400', '700'], // Add specific weights if needed

// });
// export default function Landing({}: Props) {

//   return (
//     <div className='  md:min-h-screen   md:pt-36 md:pb-16  pointer-events-none    flex flex-col md:flex-row justify-between  md:p-12'>

//         <div className="">
//         <div className={ ` inline-block mt-8 text-center md:text-start md:max-w-2xl max-w-md prose  `}>
//            {/* <h1 className={`${edu_AU_VIC_WA_NT_Hand.className} lg:text-6xl md:text-5xl`}>Hello,</h1> */}
//            <Reveal>

//             <h1 className={`${edu_AU_VIC_WA_NT_Hand.className}  md:text-5xl lg:text-6xl `}>
//           I'm <span className='text-secondary'>Ahmed</span>.
//             </h1>
//            </Reveal>
//            <Reveal>

//             <h1 className={`${edu_AU_VIC_WA_NT_Hand.className}  md:text-5xl lg:text-6xl z `}>
//           I Code    <span className='text-primary'>*</span> Create.
//             </h1>
//            </Reveal>
//            <Reveal>

//             <h1 className={`${edu_AU_VIC_WA_NT_Hand.className}  md:text-5xl lg:text-6xl `}>
//            <span className='text-primary'>*</span> Innovate.
//             </h1>
//            </Reveal>

//            <Reveal>

//             <h3 className=' max-w-2xl  z-40 text-base-content'>Empowering Ideas Through End-to-End Development Expertise and Seamless User Interfaces. </h3>
//            </Reveal>
//            <Reveal>
//             <p className='btn btn-wide btn-secondary btn-outline'><Search /> straycat.tx@outlock.com</p>
//             </Reveal>
//         </div>
//         </div>
//       <div className="prose space-y-6 p-8 flex justify-center flex-col">
//         <h1>Contact</h1>

//         <ul>
//           <Reveal>

//           <li>📧 ahmedfarouk.sdn@gmail.com</li>
//           </Reveal>
//           <Reveal>

//           <li>📞 966+573192547</li>
//           </Reveal>

//         </ul>

//       </div>
//     </div>
//   )
// }
