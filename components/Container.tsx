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
import { cancelFrame,frame } from "motion/react";
import Lenis from 'lenis'
import PreLoader from "./PreLoader";

type Props = {};

export default function Container({}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
  
   
    const lenis = new Lenis({
     autoRaf: true,
     lerp: 0.05
    });
    
    const observerCallback = (mutations:MutationRecord[]) =>{
        mutations.forEach((mutation) => {
            if(mutation.attributeName === 'style'){
                const overflowY = document.body.style.overflowY;
                if(overflowY === "hidden"){
                    lenis.stop();
                }else{
                    lenis.start();
                }
            }
        })
    }

    const observer = new MutationObserver(observerCallback)

    observer.observe(document.body,{
        attributes: true,
        attributeFilter: ['style']
    })

    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 100);

    return () => {
        observer.disconnect();
        lenis.destroy()
      };
  }, []);
  return (
    
    <div ref={containerRef}    id="scroll-container">
        <AnimatePresence mode="wait">
          {isLoading && <PreLoader />}
        </AnimatePresence>
        <Portfolio />

        <Landing />
        <div className="">
          {/* <motion.div onClick={() => setIsSide(!isSide)} className={` duration-300  transition-all hover:text-primary-content bg-white fixed text-black hover:bg-primary  cursor-pointer  flex items-center justify-center lg:top-16 mt-6 md:top-9 top-6 right-4 p-4 h-[80px] w-[80px] z-[1000] rounded-full  ${isInView ? 'scale-100 ' : 'scale-0'}`}>
        
        <MenuIcon />
        
      </motion.div>
      <AnimatePresence mode="wait">
        {isSide && <Sidebar  />}
      </AnimatePresence> */}
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
  );
}

    // const buttonRef = useRef<HTMLDivElement>(null);
    // const isInView = useInView(buttonRef,{amount: 'some'});
    // const [prevScrollY, setPrevScrollY] = useState(0);
    // const [isVisible, setIsVisible] = useState(true);
    // const [isSide, setIsSide] = useState(false);
    //   useEffect(() => {
    //     const handleScroll = () => {
    //       const currentScrollY = window.scrollY;
  
    //       if (currentScrollY > prevScrollY && currentScrollY > 50) {
    //         // Hide navbar when scrolling down
    //         setIsVisible(false);
    //       } else {
    //         // Show navbar when scrolling up
    //         setIsVisible(true);
    //       }
  
    //       setPrevScrollY(currentScrollY);
    //     };
  
    //     window.addEventListener("scroll", handleScroll);
  
    //     return () => {
    //       window.removeEventListener("scroll", handleScroll);
    //     };
    //   }, [prevScrollY]);