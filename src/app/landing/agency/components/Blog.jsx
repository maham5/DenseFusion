import { blogs } from "../data";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section id="services" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between ">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-[#28A76D] bg-[#28A76D]/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/60">
              Services
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-white/60">
              Our  <span className="text-[#28A76D]">Services</span>
            </h2>
            <p className="text-base text-white/60">
             We help you harness the power of AI and high-performance computing
 to accelerate innovation, optimize performance, and drive real business results
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 ">
          {blogs.map((blog, idx) => (
            <BlogCard blog={blog} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
