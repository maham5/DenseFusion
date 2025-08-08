import { LuLineChart, LuMail, LuPhone, LuSave } from "react-icons/lu";

const Contact = () => {
  return (

<section id="contact" className="py-10 lg:py-20 bg-black bg-[radial-gradient(ellipse_at_center,_#0f2f1d_20%,_#000000_70%)]">
  <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-20">
    
    {/* Left side - Heading & paragraph */}
    <div className="lg:w-1/2 text-center lg:text-left mt-20">
     <span className="rounded-md border border-[#28A76D] bg-[#28A76D]/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/60">
              Contact US
            </span>
      <h1 className="text-4xl font-bold py-4 text-white/80 my-2">
         Get In Touch.
      </h1>
      <p className="max-md:text-sm text-gray-400">
       We’re here to assist you with all your AI and HPC needs. From answering questions to building custom solutions or exploring partnerships, our experts are ready to help you take the next step.
      </p>
    </div>

    {/* Right side - Form */}
    <form className="lg:w-1/2 flex flex-col text-sm text-white/70  p-6 rounded-lg bg-black/30">
    <h1 className="text-xl font-bold text-white/70 ">
       Feel Free to get In touch with us
      </h1>
      <p className="max-md:text-xl text-white/60 my-3">
       Got a question or a project idea? Let’s talk! Whether it’s AI, HPC, or a unique solution you have in mind, our team is ready to collaborate and help you succeed</p>
      <label className="font-medium text-white/70">Full Name</label>
      <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-700   rounded-full overflow-hidden">
        <input
          type="text"
          className="h-full px-2 w-full outline-none border-none bg-transparent text-white/70"
          placeholder="Enter your full name"
          required
        />
      </div>

      <label className="font-medium mt-4 text-white/70">Email Address</label>
      <div className="flex items-center mt-2 mb-4 h-10 pl-5 border border-slate-700  rounded-full overflow-hidden">
        <input
          type="email"
          className="h-full px-2 w-full outline-none border-none bg-transparent border border-slate-800 text-white/70"
          placeholder="Enter your email address"
          required
        />
      </div>

      <label className="font-medium mt-4 text-white/70">Message</label>
      <textarea
    
        className="w-full mt-2 p-2 bg-transparent text-white/70 border border-slate-700 rounded-lg resize-none outline-none "
        placeholder="Enter your message"
        required
      ></textarea>

      <button
        type="submit"
        className="flex items-center justify-center gap-1 mt-5 bg-[#28A76D] hover:bg-[#1fbb49fc] text-white  py-2.5 w-full rounded-full transition"
      >
        Contact Us
        
     
      </button>
    </form>
    
  </div>
</section>

   
  );
};

export default Contact;
