"use client";
import { Star } from "lucide-react";
import Image from "next/image";

import { useState } from "react";
import Reveal from "./motion/Reveal";
export function Portfolio() {
  const [step, setStep] = useState(0);
  return (
    <section className="min-h-[80vh] w-full pt-4  lg:min-h-screen bg-base-300 relative overflow-hidden bg-[url('/portfolio.jpg')] bg-cover bg-center md:bg-none">
      <div className="container max-w-full md:pt-16 pb-16 md:flex md:justify-between w-full md:px-8 lg:px-14 px-6">
        <div className="flex justify-between items-center lg:items-start">
          <div className="space-y-6">
            <Reveal>
              <h1 className="text-[60px] md:text-[100px] lg:text-[120px]  xl:text-[140px] leading-none font-display text-cream">
                PORT
                <br />
                FOLIO
              </h1>
            </Reveal>
            <Reveal>
              <div className="flex gap-4">
                <Star className="text-gold w-6 h-6" />
                <Star className="text-gold w-6 h-6" />
              </div>
            </Reveal>

            <Reveal>
              <p className="max-w-md">
                I love design and anything related to art. I approach problems
                in a rational and pragmatic way and seek the simplest and most
                functional solution possible.
              </p>
            </Reveal>

            <div className="space-y-2 text-base-content font-bold">
              <ul>
                <Reveal>
                  <li>TIK: @_straycat</li>
                </Reveal>
                <Reveal>
                  <li>IG: @yourname</li>
                </Reveal>
                <Reveal>
                  <li>LI: /in/yourname</li>
                </Reveal>
              </ul>
            </div>
          </div>
        </div>
        <Reveal>
          <div className="relative  hidden md:inline-block md:aspect-auto aspect-[3/4] lg:aspect-[3/4] ">
            <Image
              className=" object-cover  rounded-lg "
              src={"/portfolio.jpg"}
              alt="background"
              width={500}
              height={500}
            />
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button className="bg-gold rounded-full p-4 text-forest hover:bg-terra transition-colors">
          Scroll down
        </button>
      </div>
    </section>
  );
}
