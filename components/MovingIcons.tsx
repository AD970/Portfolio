"use client";
import { FaReact, FaCss3, FaHtml5 } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
const svgIcons = [
  {
    icon: <FaCss3 size={48} className="duration-300" />,
    alt: "CSS3",
    text: "CSS",
  },
  {
    icon: <FaHtml5 size={48} className="duration-300" />,
    alt: "HTML5",
    text: "HTML",
  },
  {
    icon: <RiNextjsLine size={48} className="duration-300" />,
    alt: "Next.js",
    text: "NextJs",
  },
  {
    icon: <FaReact size={48} color="" className="duration-300" />,
    alt: "React",
    text: "React",
  },
  {
    icon: <RiTailwindCssFill size={48} className="duration-300" />,
    alt: "Tailwind",
    text: "Tailwind",
  },
];

export default function MovingIcons() {
  return (
    <div className="overflow-hidden md:-mt-4 bg-base-200 py-4 px-4 md:px-20">
      <Marquee
        gradient={true}
        speed={80}
        pauseOnHover={true}
        gradientWidth={50}
        gradientColor={"base-100"} // Dark gradient color (RGB)
      >
        {svgIcons.map((icon, index) => (
          <div
            key={index}
            className="flex items-center pointer-events-none duration-300 hover:text-white 
            text-base-content justify-center gap-4 mx-8"
          >
            {icon.icon}
            <h1 className="  font-bold text-xl">{icon.text}</h1>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
