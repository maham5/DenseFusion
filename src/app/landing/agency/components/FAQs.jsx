import { LuChevronUp } from "react-icons/lu";

import imag1 from "@/assets/images/landing/agency/plantx.png"
import imag2 from "@/assets/images/landing/agency/serena.png"
import imag3 from "@/assets/images/landing/agency/carbon.jpeg"
import { faqContents } from "../data";
import { cn } from "@/utils";
import Image from "next/image";

const FAQs = () => {
  return (

   <section id="products" className="py-20 bg-black bg-[radial-gradient(ellipse_at_center,_#0f2f1d_20%,_#000000_70%)]">
      {/* full-bleed wrapper */}
      <div className="w-screen">
        <div className="">
          {/* heading */}
          <div className="mx-auto max-w-2xl text-center px-4 sm:px-6">
            <span className="rounded-md border border-[#28A76D] bg-[#28A76D]/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/60">
              Products
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-white/60">
              <span className="text-[#28A76D]">Products</span> We worked on
            </h2>
            <p className="text-base text-white/60">
            Our products harness advanced GIS technologies to provide accurate, real-time insights.
By integrating satellite imagery with robust analytics, they enable long-term monitoring of environmental and urban transformations.
            </p>
          </div>

          {/* cards */}
          <div className="mt-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="flex flex-wrap md:flex-nowrap justify-center items-stretch gap-4 sm:gap-6">
              {/* card 1 */}
              <div className="relative group flex-1 min-w-[260px] sm:min-w-[300px] md:w-56 h-[320px] sm:h-[360px] md:h-[400px] transition-all duration-500 hover:flex-[2] shadow-[0_8px_20px_rgba(40,167,109,0.5)] overflow-hidden rounded-lg">
                <Image
                  src={imag1}
                  alt="PlantX"
                  fill
                  className="object-cover object-left-bottom"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white/70 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl sm:text-3xl text-white/90">PlantX</h3>
                  <p className="text-lg sm:text-sm">
                    PlantX is an advanced geospatial platform that analyzes high-resolution satellite imagery to 
                    track and visualize urban land cover changes. Using Islamabad as a case study, it uncovers a 20-year 
                    increase in built-up areas and loss of green spaces, providing critical insights for sustainable urban planning.</p>



                </div>
              </div>

              {/* card 2 */}
              <div className="relative group flex-1 min-w-[260px] sm:min-w-[300px] md:w-56 h-[320px] sm:h-[360px] md:h-[400px] transition-all duration-500 hover:flex-[2] shadow-[0_8px_20px_rgba(40,167,109,0.5)] overflow-hidden rounded-2xl">
                <Image
                  src={imag2}
                  alt="Serena Greens"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white/70 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl sm:text-3xl text-white/90">Serena Green</h3>
                  <p className="text-xs sm:text-sm">
                   Serena Green is a digital platform developed by Serena Hotels in partnership with WWF and AKRSP to monitor, visualize, and verify large-scale afforestation for carbon offsetting and environmental restoration. Its pilot initiative plants over 600,000 trees across Gilgit-Baltistan, Balochistan, Chitral, Punjab, and Khyber Pakhtunkhwa, advancing the hospitality industry toward net-zero emissions.</p>
                  
                </div>
              </div>

              {/* card 3 */}
              <div className="relative group flex-1 min-w-[260px] sm:min-w-[300px] md:w-56 h-[320px] sm:h-[360px] md:h-[400px] transition-all duration-500 hover:flex-[2] shadow-[0_8px_20px_rgba(40,167,109,0.5)] overflow-hidden rounded-2xl">
                <Image
                  src={imag3}
                  alt="Carbon Eye"
                  fill
                  className="object-cover object-left"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white/70 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl sm:text-3xl text-white/90 ">Carbon Eye</h3>
                  <p className="text-xs sm:text-sm text-white/70">
               Carbon Eye is a web-based platform that leverages remote sensing, GIS, GeoServer, and advanced deep learning to analyze a decade of NDVI and carbon emission trends in six of the world’s most climate-vulnerable cities, delivering critical insights for 
               sustainable urban planning and environmental management.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* bottom spacing to keep gradient clean edge-to-edge */}
          <div className="h-1 w-full" />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
