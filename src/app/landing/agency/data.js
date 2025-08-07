import { LuComponent, LuLayers, LuLayoutGrid } from "react-icons/lu";

import img1 from "@/assets/images/landing/agency/Superconsulting.png";
import img2 from "@/assets/images/landing/agency/Hpc Design.png"
import img3 from "@/assets/images/landing/agency/Ai.png"
import img4 from "@/assets/images/landing/agency/soft.png"
import img5 from "@/assets/images/landing/agency/Domain.png";
import img6 from "@/assets/images/landing/agency/trainign.png"
import image1 from "@/assets/images/landing/agency/plantx.png"


const homeSwiperSlides = [
  {
    title: "Digital agency",
    name: "Beyond a Design Agency",
    description:
      "Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.",
  },
  {
    title: "Digital agency",
    name: "Beyond a Design Agency",
    description:
      "Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.",
  },
  {
    title: "Digital agency",
    name: "Beyond a Design Agency",
    description:
      "Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.",
  },
];

const services = [
  {
    title: "Developer",
    description:
      "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design",
    icon: LuComponent,
  },
  {
    title: "Digital Product Design",
    description:
      "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design",
    icon: LuLayers,
  },
  {
    title: "Branding & Design",
    description:
      "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design",
    icon: LuLayoutGrid,
  },
];

const portfolioSlides = [
  {
    title: "Web Design",
    subTitle: "Branding Process",
     image: img1,
  },
  {
    title: "Web Design",
    subTitle: "Digital Platform",
     image: img1,
  },
  {
    title: "Brand",
    subTitle: "Coder Studio",
     image: img1,
  },
  {
    title: "Web Design",
    subTitle: "New Gadgets",
     image: img1,
  },
];

const faqContents = [
  {
    title: "What is web design, and why is it important?",
    description:
      "Web design is the process of creating the visual and functional elements of a website.",
  },
  {
    title: "Are These Projects Real Or Concepts?",
    description:
      "The projects featured in my portfolio are a mix of real-world projects I've completed and conceptual designs that showcase my creative thinking and design skills.",
  },
  {
    title: "How Often Is The Portfolio Updated?",
    description:
      "I strive to keep my portfolio up-to-date with my latest work and projects. I regularly update it to reflect my evolving skills and design philosophy.",
  },
  {
    title: "Can I Leave Feedback Or Comments On The Portfolio Projects?",
    description:
      "At the moment, I don't have a comments section on the portfolio pages. However, I welcome feedback and inquiries.",
  },
];

const blogs = [
  {
    title: "Supercomputing Consulting",
    desc1:"HPC Needs Assessment & Feasibility Studies Industry-specific Workflow Analysis  (e.g.,CFD, genomics, geospatial AI) ROI & TCO Calculations for HPC Investments  Green HPC & Energy-Efficient Cluster Design",
   
      
     image:img1,
  },
  {
    title: "HPC Infrastructure Design & Deployment",
   desc1:"Custom On-Premise HPC Cluster Design Cloud-Native HPC Solutions (AWS, Azure, GCP) Hybrid HPC Architectures (On-Prem + Cloud) GPU-accelerated and ARM-based Cluster Integration High-Speed Networking (InfiniBand, RDMA)",
     image: img2,
  },
  {
    title: "AI + HPC Integration",
    desc1:"End-to-End AI/ML Workflow Acceleration on HPC Distributed Training & Model Parallelism Multimodal Data Processing (images, Text, Video, Satellite) Generative AI on Supercomputing-Infrastructure AI Model Optimization for HPC environments",
     image: img3,
  },
  {
    title: "Software Stack Installation & Optimization",
    desc1:"End-to-End AI/ML Workflow Acceleration on HPC Distributed Training & Model Parallelism Multimodal Data Processing (images, Text, Video, Satellite) Generative AI on Supercomputing-Infrastructure AI Model Optimization for HPC environments",
    image: img4,
  },
  {
    title: "Domain-Specific Solutions",

    desc1:"Geospatial Intelligence Platforms (e.g., Serena Greens) AI-Powered Surveillance (e.g., ExgleHive) Climate Modeling & Environmental Simulation Bioinformatics Pipelines",
    image: img5,

  },
  {
    title: "Training & Enablement",
  desc1:"HPC Bootcamps for Researchers & Engineers AI on Supercomputing Workshops Certification Programs for Cluster Admins sKnowledge Transfer & Documentation Services",
     image: img6,
  },
];

const products = [
  {
    image:image1
  }
]

export { homeSwiperSlides, services, portfolioSlides, faqContents, blogs,products };


