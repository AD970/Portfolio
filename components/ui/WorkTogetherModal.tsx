'use client';
import React, { useEffect,useRef, useState } from 'react'
import {motion} from 'motion/react'
import { menuSlide } from '../motion/SidebarAnime';
import { X } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog"

type Props = {
    isOpen: boolean;
    onClose: () => void;
  }
  

export default function WorkTogetherModal({
    isOpen,
    onClose,
    
}: Props) {
  const services = ['FrontEnd', 'Backend', 'UI/UX design', 'Other'];
  const Budgets = ['Under $20', '$20-$50', '$50-$100', '$100+'];
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>();
  const modalRef = useRef<HTMLDivElement>(null)
  
  function toggleService(newService: string) {
    setSelectedServices((prevServices) => {
      if (prevServices.includes(newService)) {
        // Remove the service if it already exists
        return prevServices.filter((service) => service !== newService);
      } else {
        // Add the service if it doesn't exist
        return [...prevServices, newService];
      }
    });
  }
  function toggleBudget(newBudget: string) {
   setSelectedBudget(newBudget)
  }
useEffect(() => {
  
      if (isOpen) {
        document.body.style.overflowY = "hidden"
        
     
        
      }
      return () => {
        document.body.style.overflow = "";
      };
      
    }, [isOpen, onClose])

 
    const ServiceSection = () => {
      
      return(
        <div className="flex flex-col gap-2">

        <h4 className='font-bold'> What challenge can I help you tackle? </h4>
        <div className="grid-cols-3 grid gap-2 sm:flex sm:gap-4">
    
            {services.map((service,index) => (
                <div className=' text-xs  ' key={index}>
                    {/* <div className="px-4 py-3  border-gray-200 border rounded-md text-gray-200" >{service}</div> */}
                    <div className=
                    {` btn    whitespace-nowrap text-xs  duration-300   ${selectedServices.includes(service) ? 'btn-primary' : 'btn-outline'} `}
                     onClick={() => toggleService(service)} 
                     >
                      {service}
                      </div>
                </div>
            ))}
            </div>
  
            </div>
      )
    }

    const BudgetSection = () => {

      return(
        <div className="flex flex-col gap-2">
              <h4 className='font-bold'>Do you have a budget in mind?</h4>

            <div className="grid-cols-3 grid gap-2 sm:flex sm:gap-4">

{Budgets.map((budget,index) => (
    <div className=' text-xs ' key={index}>
        {/* <div className="px-4 py-3  border-gray-200 border rounded-md text-gray-200" >{service}</div> */}
        <div className=
        {` btn    whitespace-nowrap col-span-1  text-xs ${selectedBudget === budget ? 'btn-primary' : 'btn-outline'} `}
         onClick={() => toggleBudget(budget)} 
          >
          {budget}
          </div>
    </div>
))}
</div>

        </div>
      )
    }



    const InformationSection = () => {
      
      return(
        <div className="flex flex-col gap-2" ref={modalRef}>
          <h4 className='font-bold'> Your Information</h4>
          <div className="flex  gap-4 w-full">
          <input type="text" placeholder="Your name " className="input  placeholder:text-xs input-bordered text-xs  w-full max-w-xs  " />
          <input type="text" placeholder="Your email" className="input input-bordered  text-xs w-full max-w-xs placeholder:text-xs " />
                    </div>
                    <textarea className='textarea textarea-bordered w-full min-h-36 text-xs placeholder:text-xs' placeholder='Tell me more about your project' />
        </div>
      )
    }


  return (
     <div data-lenis-prevent className='relative'>

    <div className='h-screen w-screen bg-black md:p-12   bg-opacity-50 fixed top-0 left-0 z-50' onClick={onClose}>
    <motion.div 
       initial="initial"
       animate="enter"
       exit="exit"
       variants={menuSlide}
    ref={modalRef} className='h-screen w-screen md:w-[500px] md:bottom-3 md:mr-2 overflow-x-hidden overflow-y-scroll 
   md:rounded-xl md:p-12 bg-base-100 fixed p-4 right-0 z-[999]' onClick={(e) => e.stopPropagation()}>
        <div className="relative">
        <div className="absolute md:-top-16 right-0 top-0 md:-right-4 btn-xs bg-black btn btn-outline btn-circle  " onClick={onClose}>
            <X />
        </div>
        <div className="mt-20 ">
            <h1 className=' text-3xl'>Start a project</h1>
        </div>
        <div className="flex flex-col gap-8 mt-8 ">
        <ServiceSection />
        <BudgetSection />
        <InformationSection />
        <button className='btn w-32  md:btn-md btn-primary'>Submit</button>
        <div className="text-xs">

        <div className="divider"></div>
          <p className='-mt-4'>Or send me an <Link href={''} className=' link'>email</Link> </p>
        
        </div>
                </div>
        </div>
    </motion.div>
    </div>
       </div>
  )
}