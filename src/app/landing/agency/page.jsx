import ServicesMarquee from "@/components/ServicesMarquee";
import TopNavBar from "@/components/TopNavBar";
import Hero1 from "./components/Hero"
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";

import OurPortfolio from "./components/OurPortfolio";
import Services2 from "./components/Services2";


export const metadata = {
  title: "Agency",
};

const Agency = () => {
  return (
     <div className="bg-black">
    <>
   
      <TopNavBar  
        menuItems={[
          "home",
          "about",
          "services",
          "industries",
          "faq",
          "blog",
          "contact",
        ]}
        position="sticky"
        hasDownloadButton
      />

     
 <Hero1>

    <section className="lg:pb-10">
      <ServicesMarquee />
    </section>


      <About />
<Blog/>
      {/* <Services /> */}

      <OurPortfolio />

      <Services2 />

      <FAQs />

   

      <Contact />
      
    </>
    </div>
  );
};

export default Agency;
