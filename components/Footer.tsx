import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="">
      <Marquee
        gradient={true}
        speed={80}
        pauseOnHover={true}
        gradientWidth={50}
        gradientColor={"#0F172A"} // Dark gradient color (RGB)
      >
        <h1 className="text-6xl">LET'S WORK TOGETHER</h1>
      </Marquee>
    </div>
  );
}
