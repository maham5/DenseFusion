import Link from "next/link";
import Image from "next/image";
import { LuArrowUpRight, LuComponent, LuLayers } from "react-icons/lu";
import image1 from "@/assets/images/landing/agency/image/image1.jpg"
import image2 from "@/assets/images/landing/agency/image/image2.png"
import image3 from "@/assets/images/landing/agency/image/image3.jpg"

const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20 bg-[radial-gradient(ellipse_at_right_center,_#0f2f1d_20%,_#000000_70%)]">
  <div className="container">
    <div className="mb-10 flex items-end justify-between">
      <div className="mx-auto max-w-2xl text-center">
        <span className="rounded-md border border-[#28A76D] bg-[#28A76D]/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/70">
          About
        </span>
        <h2 className="my-4 text-4xl font-medium capitalize text-white/70">
          About <span className="text-[#28A76D]"> Us</span>
        </h2>
      </div>
    </div>

    {/* Flex layout for spacing */}
    <div className="flex flex-wrap justify-around items-center gap-10">
      {/* Image Column */}
      <div className="w-full md:w-[45%]">
        <Image
          alt="agencyImg"
          src={image2}
          className="w-full h-auto  shadow-[0_8px_20px_rgba(40,167,109,0.5)] transform transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:scale-105"
        />
      </div>

      {/* Text Column */}
      <div className="w-full md:w-[45%]">
        <h2 className="text-3xl font-medium text-white/70">
          We deliver innovative solutions to create value and opportunity
        </h2>

        <div className="mt-10 flex items-start gap-4">
          <LuComponent className="h-10 w-10 text-[#28A76D]" />
          <div>
            <h3 className="text-xl font-medium text-white/70">Innovating for Impact</h3>
            <p className="mt-4 text-base text-white/60">
              DenseFusion harnesses cutting-edge AI to solve real-world problems,
              transforming industries and improving lives through smart,
              client-focused solutions.
            </p>
          </div>
        </div>

        <div className="my-10 flex items-start gap-4">
          <LuLayers className="h-10 w-10 text-[#28A76D]" />
          <div>
            <h3 className="text-xl font-medium text-white/70">Our Mission</h3>
            <p className="mt-4 text-base text-white/60">
              To deliver tailor-made solutions with integrity and collaboration,
              creating value, opportunity, and exceeding expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default About;