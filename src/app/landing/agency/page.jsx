import ServicesMarquee from "@/components/ServicesMarquee";
import TopNavBar from "@/components/TopNavBar";

import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Home from "./components/Home"
// import OurPortfolio from "./components/OurPortfolio";
// import Services2 from "./components/Services2";


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
          "Products",
          "blog",
          "contact",
        ]}
        position="sticky"
        hasDownloadButton
      />

     
 <Home/>

    <section className="lg:pb-10">
      <ServicesMarquee />
    </section>


      <About />
<Blog/>
      {/* <Services /> */}

      {/* <OurPortfolio /> */}

      {/* <Services2 /> */}

      <FAQs />

   

      <Contact />
      
    </>
    </div>
  );
};

export default Agency;
