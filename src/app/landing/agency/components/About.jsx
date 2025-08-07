import Link from "next/link";
import Image from "next/image";
import { LuArrowUpRight, LuComponent, LuLayers } from "react-icons/lu";
import image1 from "@/assets/images/landing/agency/image/image1.jpg"
import image2 from "@/assets/images/landing/agency/image/image2.jpg"
import image3 from "@/assets/images/landing/agency/image/image3.jpg"

const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20 bg-[radial-gradient(ellipse_at_right_center,_#0f2f1d_20%,_#000000_70%)]">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-[#28A76D]  bg-[#28A76D]/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/70">
              About
            </span>
            <h2 className="my-4 text-4xl font-medium capitalize text-white/70">
              About <span className="text-[#28A76D]"> Us</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div className="space-y-6">
              <div>
                <Image
                  alt="agencyImg"
                  src={image2}
                  className="h-full max-w-full rounded-lg"
                />
              </div>
              <div>
                <Image
                  alt="agencyImg"
                  src={image1}
                  className="h-full max-w-full rounded-lg"
                />
              </div>
            </div>
            <div>
              <Image
                alt="agencyImg"
                src={image3}
                className="h-full max-w-full rounded-lg"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-medium text-white/70">
              We deliver innovative solutions to create value and opportunity
            </h2>
            <div className="mt-10  flex justify-center gap-6">
              <div>
                <LuComponent className="h-10 w-10 text-[#28A76D]" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-white/70">
                 Innovating for Impact
                </h2>
                <p className="mt-4 text-base text-white/60">
                 DenseFusion harnesses cutting-edge AI to solve real-world problems,
 transforming industries and improving lives through smart, client-focused solutions.
                </p>
              </div>
            </div>
            <div className="my-10 flex justify-center gap-6">
              <div>
                <LuLayers className="h-10 w-10  text-[#28A76D]" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-white/70">
                  Our Mission
                </h2>
                <p className="mt-4 text-base text-white/60">
                 To deliver tailor-made solutions with integrity and collaboration, 
creating value, opportunity, and exceeding expectations.
                </p>
              </div>
            </div>
            {/* <Link
              href=""
              className="inline-flex justify-center gap-2 rounded-md border border-default-200 px-6 py-2 text-default-950 transition-all duration-500 hover:bg-primary hover:text-white"
            >
              View All Our News
              <LuArrowUpRight className="h-6 w-6" />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;