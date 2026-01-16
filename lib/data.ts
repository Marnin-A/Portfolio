import { BriefcaseBusiness, Castle, Database, Network, Shapes, Shield, Wine } from "lucide-react";
import { Article, Project } from "./types";

export const experiences = [
  {
    id: 1,
   company: "WHATBYTES",
  role: "SOFTWARE DEVELOPER",
  dates: "Jan 2025 - Present",
  description: [
    "Develop and deliver customer-facing web applications using React, Next.js, and Tailwind CSS, improving performance and user engagement",
    "Build and maintain scalable frontend architectures using React Query, Zustand, and Zod in collaboration with backend teams",
    "Implement RESTful APIs with Python and FastAPI and streamline CI/CD workflows through cloud automation to accelerate deployments"
  ],
    icon: "/images/whatbytes.jpg",
    website: "https://whatbytes.com",
  },
  {
    id: 2,
    company: "WHATBYTES",
  role: "ENGINEERING INTERN",
  dates: "Nov 2024 - Jan 2025",
  description: [
    "Refactored legacy React codebases using modern tools such as Vite and Tailwind CSS to improve maintainability and performance",
    "Developed responsive, SEO-optimized interfaces from Figma designs using Next.js with server-side rendering",
    "Integrated new product features into existing applications while maintaining consistent quality and design standards"
  ],
    icon: "/images/whatbytes.jpg",
    website: "https://whatbytes.com",
  },
  {
    id: 3,
    company: "KIBO INC.",
  role: "AUTOMATION ASSISTANT",
  dates: "May 2024 - Jul 2024",
  description: [
    "Designed automated workflows using Google Sheets, Airtable, Zapier, and Typeform to reduce manual processing effort",
    "Built end-to-end integrations to improve data accessibility and support faster, data-driven decision-making",
    "Optimized internal operational processes to enable more agile product iteration cycles"
  ],
    icon: "/images/kibo.jpg",
    website: "",
  },
  {
    id: 4,
    company: "IHIFIX TECHNOLOGIES",
  role: "SOFTWARE ENGINEER INTERN (FULL STACK)",
  dates: "Jul 2023 - Jan 2024",
  description: [
    "Developed responsive full-stack web applications using Next.js, TypeScript, and Tailwind CSS",
    "Refactored outdated React codebases with modern tooling to reduce bugs and accelerate feature delivery",
    "Translated Figma designs into scalable, reusable UI components to support iterative product development"
  ],
    icon: "/images/ihifix.jpg",
    website: "https://ihifix.com/home",
  },
  {
    id: 5,
    company: "ENOVERLAB NIGERIA",
  role: "FRONTEND DEVELOPER",
  dates: "Mar 2023 - May 2023",
  description: [
    "Collaborated with cross-functional teams to deliver an MVP within a compressed timeline",
    "Built reusable UI components to streamline frontend development and improve user experience",
    "Supported rapid prototyping and validation of product ideas through frontend implementation"
  ],
    icon: "/images/enoverlab.jpg",
    website: "https://enoverlab.com",
  },
];

export const projects: Array<Project> = [
   {
    id: 1,
    title: "NEXDISCOVERY",
    category: "Full Stack",
    
    role: "FullStack Developer",
    stack: ["ReactJS", "Linux VM", "MongoDB", "FastAPI", "Docker"],
    description: "End-to-end full-stack application deployed on Linux VMs. Handles UI-to-Database workflows with persistent monitoring and automated deployment pipelines.",
    features: ["Production-ready full-stack app", "UI to backend and database", "Linux VM deployment & monitoring"],
    image: "/nexdiscovery.jpg",
    icon: Database,
    website: "https://nexdiscovery.com"
  },
  {
    id: 2,
    title: "SKYSEC GLOBAL SERVICES",
    category: "E-Commerce",
    
    role: "Frontend Developer",
    stack: ["NEXT.js", "Zustand", "shadcn/ui"],
    description: "A scalable e-commerce solution with integrated inventory management. Optimizes server-state handling for high-performance browsing and checkout experiences.",
    features: ["Scalable e-commerce website", "Integrated inventory management", "Efficient server-state handling"],
    image: "/skysec.jpg",
    icon: Shield,
    website: "https://skysecglobal.com",
    maintenance: false
  },
  {
    id: 3,
    title: "INVESTORFYRE",
    category: "FinTech",
    
    role: "Frontend Software Developer",
    stack: ["NEXT.js", "Zustand", "REST API"],
    description: "Robust frontend architecture featuring a secure data layer. Integrates complex RESTful backends with global state management for real-time financial data updates",
    features: ["Frontend architecture with secure data layer", "RESTful backend integration", "Global/local state management"],
    image: "/investorfyre.jpg",
    icon: Network,
    website: "https://investorfyre.com"
  },
 
  {
    id: 4,
    title: "TECHLEAD E-LEARNING",
    category: "Web Development",
    role: "Frontend Developer",
    stack: ["NEXT.js", "shadcn/ui", "TypeScript"],
    description: "A comprehensive e-learning platform designed for scalability. Features a modern, intuitive UI with responsive architecture, ensuring accessibility across all devices.",
    features: ["Production-ready e-learning", "Modern, intuitive UI", "Responsive, accessible architecture"],
    image: "/techlead.jpg",
    icon: Shapes,
    website: "https://techlead.ng"
  },
  {
    id: 5,
    title: "Freshire",
    category: "Professional Networking Service",
    
    role: "Frontend Developer",
    stack: ["ReactJS", "TypeScript", "Tailwind CSS"],
    description: "A professional networking service for young Nigerians to connect with potential employers. Features a modern, intuitive UI with responsive architecture, ensuring accessibility across all devices.",
    features: ["Modern, intuitive UI", "Responsive, accessible architecture"],
    image: "/freshire.jpg",
    icon: BriefcaseBusiness,
    website: "https://freshire.vercel.app/"
  },
  {
    id: 6,
    title:"TableScribe",
    category:"Restaurant Reservation System",
    role:"Frontend Developer",
    stack:["ReactJS","TypeScript","Tailwind CSS"],
    description: "A streamlined reservation platform for fine dining. Features an elegant UI for managing bookings and optimizing restaurant seating.",
    features:[],
    image:"/tablescribe.jpg",
    icon:Wine,
    website:"https://tablescribe.vercel.app/"
  },
  {
    id:7,
    title:"Squazzle",
    category:"Real-Estate",
    role:"Frontend Developer",
    stack:["NextJS","TypeScript","Tailwind CSS", "Redux Toolkit", "REST API"],
    description: "An easy way to find the property of your choice. The platform provides various property models for you at affordable prices and the best quality.",
    features:["Modern, intuitive UI", "Responsive, accessible architecture"],
    image:"/squazzle.jpg",
    icon: Castle,
    website:"https://squazzle.vercel.app/"
  }
];

export const articles: Array<Article> = [
  // {
  //   id: 1,
  //   title: "OPTIMIZING REACT SERVER COMPONENTS",
  //   date: "JAN 15, 2025",
  //   readTime: "5 MIN READ",
  //   category: "PERFORMANCE",
  //   summary: "Deep dive into RSC architecture and reducing client bundle size for maximum efficiency.",
  //   icon: "FileCode",
  // },
  // {
  //   id: 2,
  //   title: "SYSTEM ARCHITECTURE PATTERNS",
  //   date: "DEC 20, 2024",
  //   readTime: "8 MIN READ",
  //   category: "ARCHITECTURE",
  //   summary: "Analyzing microservices vs monolithic structures in modern web applications.",
  //   icon: "Network",
  // },
  // {
  //   id: 3,
  //   title: "SECURING NEXT.JS APPLICATIONS",
  //   date: "NOV 05, 2024",
  //   readTime: "6 MIN READ",
  //   category: "SECURITY",
  //   summary: "Implementing robust authentication flows and protecting API routes.",
  //   icon: "Lock",
  // },
];
