import ServicesMarquee from "@/components/ServicesMarquee";
import TopNavBar from "@/components/TopNavBar";

import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Home from "./components/Home"
import Services from "./components/Services";

// import OurPortfolio from "./components/OurPortfolio";
// import Services2 from "./components/Services2";


export const metadata = {
  title: "Dense Fusion",
};

const Agency = () => {
  return (
     <div className="bg-black  bg-[radial-gradient(ellipse_at_left_top,_#0f2f1d_30%,_#000000_70%)]">
    <>
   
      <TopNavBar  className="bg-black/30" 
        menuItems={[
          "home",
          "about",
          "services",
          "industries",
          "products",
        
          "contact",
        ]}
        position="sticky"
        hasDownloadButton
      />

     
 <Home/>

    {/* <section className="lg:pb-10">
      <ServicesMarquee />
    </section> */}


      <About />
<Blog/>
      

 <Services /> 


<FAQs/>



      {/* <OurPortfolio />  */}

      {/* <Services2 /> */}

   


   

      <Contact />

      
    </>
    </div>
  );
};

export default Agency;
