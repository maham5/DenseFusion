"use client"
import { LuBell } from "react-icons/lu";
import Link from "next/link";
import { features } from "../../company/data";
import Image from "next/image";
const Home = () => {
  
  return (
    <section
         id="home"
         className="relative overflow-hidden bg-black bg-[radial-gradient(ellipse_at_left_top,_#0f2f1d_30%,_#000000_70%)]  py-24 lg:py-40"
       >
         <div className="container">
           <div className="mb-10 grid grid-cols-1 items-center gap-x-6 gap-y-12 lg:grid-cols-2">
             <div className="max-w-xl">
               <div className="inline-block rounded-full border border-[#28A76D]/40 pe-5">
                 <div className="flex gap-2 items-center  text-center">
                   <div className="flex h-6 w-6 items-center justify-center text-center rounded-full bg-[#28A76D]/40">
                     <LuBell className="h-4 w-4 text-default-950 text-white/70" />
                   </div>
                   <span className="text-xs font-medium text-white/70 md:text-sm">
                     Applied Supercomputing for Industry Transformation
                   </span>
                 </div>
               </div>
               <h1 className="my-4 max-w-lg text-4xl font-medium  text-white/70 md:text-4xl/tight">
         Supercomputing, Tailored for Your Industries
               </h1>
               <p className="md:text-lg text-white/50">
                At DenseFusion, we specialize in applied supercomputing. From healthcare and finance to climate science and manufacturing, we gather domain-specific requirements and
                 deliver high-performance computing infrastructure—on-premise or in the cloud—optimized for your business needs.
             
                 sodales.
               </p>
               <div className="inline-block">
                 <Link
                   href=""
                   className="mt-6 flex items-center justify-center gap-2 rounded-md bg-[#28A76D] px-6 py-2 text-base font-medium text-white transition-all duration-500 hover:bg-[#1c4432]"
                 >
                   Get started now
                 </Link>
               </div>
             </div>
             {/* <div>
               <Image alt="companyHero" src={companyHero} />
             </div> */}
           </div>
           <div className="grid gap-6 lg:grid-cols-3 items-center">
             {features.map((feature, idx) => {
               const Icon = feature.icon;
               return (
                 <div
                   key={idx}
                   className="rounded-xl border mt-20 border-[#28A76D]/40 bg-black p-6  sm:text-start text-center flex flex-col items-center justify-center"
                 >
                   <div className="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:justify-start sm:gap-0">
                     <div className="sm:pe-5">
                       <Icon className="mx-auto h-10 w-10 text-white/60" />
                     </div>
                     <div className="border-[#28A76D]/20 sm:border-s sm:ps-5">
                       <h2 className="text-xl font-medium text-white/60">
                         {feature.title}
                       </h2>
                       <p className="mt-3 text-base text-white/60">{feature.description}</p>
                     </div>
                   </div>
                 </div>
               );
             })}
           </div>
         </div>
       </section>
  );
};

export default Home;
