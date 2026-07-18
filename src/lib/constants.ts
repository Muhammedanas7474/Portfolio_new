export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://muhammedanas.dev",
  name: "Muhammed Anas K | Software Engineer",
};

export const personalInfo = {
  name: "Muhammed Anas K",
  firstName: "Muhammed",
  role: "Software Engineer | Python Django Developer | Full Stack Developer",
  shortRole: "Software Engineer",
  location: "Kerala, India",
  email: "muhammedanas247474@gmail.com",
  phone: "+91 9744247474",
  tagline:
    "Software Engineer crafting secure banking platforms, scalable backend systems and AI-powered web applications.",
  bio: [
    "I am a Software Engineer from Kerala specializing in Django, Python, React, REST APIs, PostgreSQL, Docker, and modern web technologies.",
    "I currently work on Banking and FinTech applications where I build secure customer onboarding systems, API integrations, business workflows, and production-grade backend services.",
    "I enjoy solving complex backend problems, designing scalable architectures, optimizing APIs, and creating intuitive user experiences.",
    "Outside work, I continuously learn System Design, Cloud Technologies, AI, and Software Architecture to become a world-class software engineer.",
  ],
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Muhammedanas7474" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammed-anas-k-b44920357/" },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Shipped", value: 3, suffix: "+" },
  { label: "Companies", value: 2, suffix: "" },
  { label: "Technologies", value: 20, suffix: "+" },
];

export const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 92 },
      { name: "Django", level: 90 },
      { name: "FastAPI", level: 78 },
      { name: "Django REST Framework", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "JWT", level: 85 },
      { name: "ORM", level: 85 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "Redux", level: 78 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "AWS", level: 72 },
      { name: "Vercel", level: 80 },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Agile", level: 82 },
      { name: "SDLC", level: 85 },
      { name: "Problem Solving", level: 92 },
      { name: "API Integration", level: 90 },
    ],
  },
];

export const experiences = [
  {
    company: "PixDynamics",
    position: "Software Developer",
    duration: "Jan 2024 - Present",
    responsibilities: [
      "Building and maintaining a Video KYC banking platform used for secure digital customer onboarding.",
      "Developed secure onboarding flows compliant with banking KYC requirements.",
      "Implemented REST API integrations across internal and third-party banking services.",
      "Developed and maintained Django backend services powering core platform features.",
      "Containerized services with Docker for consistent, repeatable deployments.",
      "Diagnosed and resolved production bugs in a live banking environment.",
      "Optimized API and database performance to reduce response times.",
      "Contributed to end-to-end banking workflow automation.",
    ],
    tech: ["Django", "Python", "REST APIs", "Docker", "PostgreSQL", "JWT"],
  },
  {
    company: "Bridgeon Solutions",
    position: "Python Full Stack Intern",
    duration: "Jun 2023 - Dec 2023",
    responsibilities: [
      "Built a full-featured eCommerce platform from the ground up during a full-stack training program.",
      "Developed 15+ reusable React components powering product listings, cart, and checkout flows.",
      "Implemented JWT authentication for secure user sessions.",
      "Built REST APIs with Django REST Framework for product, order, and user management.",
      "Modeled and queried relational data in PostgreSQL.",
      "Deployed the application to AWS.",
      "Collaborated with a team using Git and GitHub for version control and code review.",
    ],
    tech: ["React", "Django REST Framework", "JWT", "PostgreSQL", "AWS", "Git"],
  },
];

export const projects = [
  {
    title: "EduFlow",
    subtitle: "AI-Powered Learning Management System",
    description:
      "An AI-powered learning management system with role-based access, automated quiz generation, and an in-course chatbot for interactive learning.",
    category: "Full Stack",
    tech: ["React", "Django", "FastAPI", "PostgreSQL"],
    features: [
      "Role-based authentication",
      "AI Quiz Generator",
      "Course Chatbot",
      "REST APIs",
      "Responsive UI",
    ],
    links: {
      github: "https://github.com/Muhammedanas7474",
      live: "#",
    },
  },
  {
    title: "Forever",
    subtitle: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with authentication, payments, order tracking, and product management.",
    category: "E-Commerce",
    tech: ["React", "Redux", "Tailwind CSS", "REST APIs"],
    features: [
      "Authentication",
      "Payments",
      "Orders",
      "Product Management",
    ],
    links: {
      github: "https://github.com/Muhammedanas7474",
      live: "#",
    },
  },
  {
    title: "Care Connect",
    subtitle: "Healthcare Platform",
    description:
      "A healthcare platform connecting patients, doctors, and pharmacies with appointment scheduling and medical records management.",
    category: "Healthcare",
    tech: ["React", "Redux Toolkit", "Django", "PostgreSQL"],
    features: [
      "Patients",
      "Doctors",
      "Pharmacy",
      "Appointments",
      "Medical Records",
    ],
    links: {
      github: "https://github.com/Muhammedanas7474",
      live: "#",
    },
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "PeeKay CICS Arts and Science College",
    university: "Calicut University",
    location: "Kerala, India",
    duration: "2021 - 2024",
    description:
      "Specialized in computer science fundamentals and application development, covering programming, databases, and software engineering practices.",
  },
  {
    degree: "Diploma in Computer Applications",
    institution: "",
    university: "",
    location: "Kerala, India",
    duration: "2020 - 2021",
    description:
      "Foundational training in computer applications and programming ahead of the BCA program.",
  },
];

export const techStack = [
  "React",
  "Python",
  "Docker",
  "PostgreSQL",
  "Django",
  "Git",
  "FastAPI",
  "AWS",
  "Tailwind CSS",
  "Redux",
];
