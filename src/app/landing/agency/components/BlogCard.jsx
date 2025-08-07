import { LuMoveRight } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  return (

<div className="group my-10 w-[400px] h-[400px]  mx-auto [perspective:1000px] cursor-pointer rounded-lg">
  <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_8px_20px_rgba(40,167,109,0.5)] rounded-lg">

    {/* Front Face */}
    <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden border border-[#28A76D]">
      <div className="relative w-full h-full">
        <Image src={blog.image} alt="blog" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black/30 flex items-end p-4">
          <h2 className="text-2xl font-light text-white/80">{blog.title}</h2>
        </div>
      </div>
    </div>

    {/* Back Face */}
    <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg bg-black text-white/70 p-6 flex flex-col justify-center text-center">
      <p className="text-base mb-2">{blog.desc1}</p>
      <p className="text-base mb-2">{blog.desc2}</p>
      <p className="text-base mb-2">{blog.desc3}</p>
      <p className="text-base">{blog.desc4}</p>
    </div>

  </div>
</div>
    // <div className="overflow-hidden rounded-lg border border-default-200">
    //   <div className="group p-6">
    //     <div className="relative overflow-hidden rounded-md">
    //       <Image src={blog.image} alt="blog" className="rounded-md" />
    //       <div className="absolute inset-0 bg-black/40" />
    //     </div>
    //     <div className="mt-6 flex gap-5">
    //       <div>
    //         {/* <h2 className="text-3xl font-medium text-default-950">{blog.no}</h2> */}
    //         {/* <p className="text-lg  uppercase text-default-800">Sep</p> */}
    //       </div>
    //       <div>
    //         <h2 className="text-2xl font-medium text-default-950">
    //           {blog.title}
    //         </h2>
    //         <p className="mb-5  mt-3 text-base">{blog.desc1}
              
    //         </p>

    //          <p className="mb-5  mt-3 text-base">{blog.desc2}
              
    //         </p> 
    //         <p className="mb-5  mt-3 text-base">{blog.desc3}
              
    //         </p>
    //         <p className="mb-5  mt-3 text-base">{blog.desc4}
              
    //         </p>
    //         {/* <Link href="" className="text-lg font-medium text-default-950">
    //           Read More
    //           <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
    //         </Link> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  
  );
};

export default BlogCard;
