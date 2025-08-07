import TopNavBar from "@/components/TopNavBar";
import Agency from "@/app/landing/agency/page"
 import {
//   AdminDemos,
//   Hero,
 //LandingDemos,
//   SecurityDemos,
//   Footer,
//   Features,
 } from "@/components/home";

export default function Home() {
  return (
    <>
      <TopNavBar menuItems={["home", "demos", "features"]} position="fixed" />

     {/* <Hero />*/} 

      {/* <LandingDemos /> */}
      <Agency/>

      {/* <AdminDemos />

      <SecurityDemos />

      <Features />

      <Footer /> */}
    </>
  ); 
}
