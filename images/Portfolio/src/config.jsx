// ==========================================
// TEMPLATE CONFIGURATION FILE
// ==========================================
// This file contains all the data used in the portfolio.
// Replace the placeholder texts, images, and links with your own!

import { Layout, Server, BrainCircuit, TerminalSquare, Code, Briefcase, MessageCircle, PenTool } from 'lucide-react';

export const portfolioConfig = {
  // -----------------------------------------------------
  // GLOBAL & HERO SECTION
  // -----------------------------------------------------
  name: "[Your Name]",
  title: "Computer Science Student",
  heroDescription: "I'm a passionate student developer who loves building web applications and exploring new technologies. Constantly learning and looking for exciting internship opportunities.",
  resumeLink: "#",

  // -----------------------------------------------------
  // ABOUT SECTION
  // -----------------------------------------------------
  aboutParagraph1: "I am an enthusiastic Computer Science student with a strong drive to create dynamic and intuitive software. My journey in tech started with a simple curiosity about how things work under the hood, which quickly evolved into a passion for coding and problem-solving.",
  aboutParagraph2: "Alongside my academic studies, I actively build personal projects to expand my skillset. I specialize in modern web technologies like React, and I'm currently diving deeper into backend development and data structures. I believe in continuous learning and embracing new challenges.",
  
  // Stats displayed in the About section
  stats: [
    { number: "3+", label: "Hackathons Attended" },
    { number: "15+", label: "Academic & Personal Projects" }
  ],

  // -----------------------------------------------------
  // AREAS OF INTEREST SECTION
  // -----------------------------------------------------
  interestsDescription: "As a student, I'm actively exploring various domains of computer science to build a strong foundational skillset.",
  interests: [
    {
      icon: <Layout size={32} />,
      title: "Frontend Development",
      description: "Learning to build responsive and interactive user interfaces using modern frameworks like React and Tailwind CSS."
    },
    {
      icon: <Server size={32} />,
      title: "Backend Engineering",
      description: "Exploring server-side concepts, building RESTful APIs, and understanding database architectures."
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "Data Structures & Algorithms",
      description: "Continuously improving my problem-solving skills and optimizing code efficiency through algorithmic challenges."
    },
    {
      icon: <TerminalSquare size={32} />,
      title: "Open Source Contribution",
      description: "Passionate about contributing to community-driven projects and learning collaborative software development."
    }
  ],

  // -----------------------------------------------------
  // SKILLS SECTION
  // -----------------------------------------------------
  skillCategories: [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript", "Framer Motion"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "RESTful APIs"]
    },
    {
      title: "Database & Cloud",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "AWS", "Docker", "Vercel"]
    },
    {
      title: "Tools & Methods",
      skills: ["Git", "Jest", "Cypress", "Agile", "Figma", "Webpack"]
    }
  ],

  // -----------------------------------------------------
  // PROJECTS SECTION
  // -----------------------------------------------------
  projects: [
    {
      title: "E-Commerce Platform",
      category: "Academic Project",
      description: "A comprehensive e-commerce solution built as my capstone project with real-time inventory management and secure payment gateways.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      tech: ["Next.js", "Tailwind", "Stripe", "Prisma"],
      live: "#",
      github: "#"
    },
    {
      title: "AI Productivity Tool",
      category: "Hackathon Entry",
      description: "An AI-powered workspace created during [Hackathon Name] that helps students organize study tasks and generate lecture summaries.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "OpenAI API", "Node.js", "MongoDB"],
      live: "#",
      github: "#"
    },
    {
      title: "Financial Dashboard",
      category: "Personal Project",
      description: "A data visualization dashboard I built to practice tracking cryptocurrency and stock market trends in real-time.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
      tech: ["Vue.js", "D3.js", "Firebase", "Tailwind"],
      live: "#",
      github: "#"
    }
  ],

  // -----------------------------------------------------
  // CERTIFICATIONS SECTION
  // -----------------------------------------------------
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "#"
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera",
      date: "2022",
      link: "#"
    },
    {
      title: "Full Stack Open",
      issuer: "University of Helsinki",
      date: "2021",
      link: "#"
    }
  ],

  // -----------------------------------------------------
  // CONTACT SECTION
  // -----------------------------------------------------
  contactHeading: "Let's connect!",
  contactSubheading: "I'm actively looking for internship and new grad opportunities. Whether you have an open role or just want to say hi, my inbox is always open!",
  email: "hello@example.com",
  phone: "+1 (234) 567-890",
  location: "[Your City, Country]",

  // -----------------------------------------------------
  // FOOTER & SOCIAL LINKS
  // -----------------------------------------------------
  socialLinks: [
    { icon: <Code size={20} />, href: "#", label: "GitHub" },
    { icon: <Briefcase size={20} />, href: "#", label: "LinkedIn" },
    { icon: <MessageCircle size={20} />, href: "#", label: "Twitter" },
    { icon: <PenTool size={20} />, href: "#", label: "Dribbble" },
  ],
};
