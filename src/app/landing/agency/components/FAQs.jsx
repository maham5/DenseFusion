import { LuChevronUp } from "react-icons/lu";

import imag1 from "@/assets/images/landing/agency/plantx.png"
import { faqContents } from "../data";
import { cn } from "@/utils";
import Image from "next/image";

const FAQs = () => {
  return (

    <section id="products" className="py-20">
      <div className="container">
        <div className="my-20 bg-[radial-gradient(ellipse_at_center,_#0f2f1d_20%,_#000000_70%)]">
 <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-[#28A76D] bg-[#28A76D]/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/60">
              Products
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-white/60">
             <span className="text-[#28A76D]">Products</span>  We  worked on
            </h2>
            <p className="text-base text-white/60">
            A lightweight, browser-based GIS monitoring system that uses satellite 
imagery to track 20 years of environmental and urban changes. 
It features a customizable dashboard for multi-level users to monitor 
plantation progress and urban development.
            </p>
          </div>

<div class="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
    <div class="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full shadow-[0_8px_20px_rgba(40,167,109,0.5)] ">
        <Image class="h-full w-full object-cover object-left-bottom"
            src={imag1}
            alt="image"/>
        <div
            class="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 class="text-3xl">PlantX </h1>
            <p class="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

        </div>
    </div>
    <div class="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full shadow-[0_8px_20px_rgba(40,167,109,0.5)] ">
        <Image class="h-full w-full object-cover object-center"
            src={imag1}
            alt="image"/>
        <div
            class="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 class="text-3xl">Serena Greens</h1>
            <p class="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

        </div>
    </div>
   <div class="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full shadow-[0_8px_20px_rgba(40,167,109,0.5)] ">
        <Image class="h-full w-full object-cover object-center"
            src={imag1}
            alt="image"/>
        <div
            class="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 class="text-3xl">Carbon Eye</h1>
            <p class="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

        </div>
    </div>
</div>
</div>
      </div>
    </section>
  );
};

export default FAQs;
