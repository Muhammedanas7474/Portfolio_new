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

// Minimal top-right navigation used by the redesigned Hero/Navbar.
export const heroNavItems = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

// Left-side social rail on the redesigned Hero. YouTube is a
// placeholder ("#") until a real handle is provided.
export const heroSocialLinks = [
  { name: "GitHub", url: "https://github.com/Muhammedanas7474", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammed-anas-k-b44920357/", icon: "linkedin" },
  { name: "Instagram", url: "https://www.instagram.com/", icon: "instagram" },
  { name: "YouTube", url: "#", icon: "youtube" },
  { name: "Email", url: `mailto:${personalInfo.email}`, icon: "email" },
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
    blurb: "Django, Python, and enough REST APIs to power a small bank.",
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
    blurb: "React components that mostly do what the designer intended.",
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
    blurb: "Queries I'm quietly proud of and mildly afraid to touch again.",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "DevOps",
    blurb: "Docker, Git, and just enough AWS to be dangerous.",
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
    blurb: "The non-technical skills that keep the technical stuff from catching fire.",
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
    duration: "Jun 2025 - Dec 2025",
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
      live: "https://forever-e-com.vercel.app/",
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
    duration: "2022 - 2025",
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

/* ============================================================
   Dual-layer copy
   The site renders every section twice: a dark layer and an
   inverted red layer revealed by the clip-path flip button.
   Factual rows (roles, years, stack) are identical in both —
   only the "voice" copy is mirrored.
   ============================================================ */

export type Layer = "dark" | "red";

export interface HeroLine {
  text: string;
  accent?: boolean;
}

export const layerCopy = {
  hero: {
    eyebrow: "Muhammed Anas K",
    lines: {
      dark: [
        { text: "Making" },
        { text: "solid", accent: true },
        { text: "code", accent: true },
        { text: "since" },
        { text: "2022" },
      ] as HeroLine[],
      red: [
        { text: "Fixing" },
        { text: "broken", accent: true },
        { text: "code", accent: true },
        { text: "since" },
        { text: "2022" },
      ] as HeroLine[],
    },
  },

  about: {
    label: "About me",
    text: {
      dark:
        "I'm a full-stack software engineer with a strong focus on building secure, scalable backend systems and shipping production-ready digital products.",
      red:
        "Most of my day is convincing a Django server to do what the ticket said. The rest is reading stack traces I wrote myself, and slowly getting better at both.",
    },
  },

  whatIDo: {
    label: "What i do",
    items: [
      {
        title: "Backend",
        description:
          "Django services, business logic and production APIs that stay up under real traffic.",
      },
      {
        title: "Frontend",
        description:
          "React and Next.js interfaces — clean, fast and built to ship with the backend.",
      },
      {
        title: "APIs",
        description:
          "REST integrations across internal systems and third-party banking providers.",
      },
      {
        title: "Data",
        description:
          "PostgreSQL schemas, migrations and queries tuned for correctness first.",
      },
      {
        title: "DevOps",
        description:
          "Docker, CI deploys and the boring reliability work that keeps releases calm.",
      },
    ],
  },

  experience: {
    label: "Experience",
    text: {
      dark:
        "I currently work on banking and FinTech products — secure customer onboarding, REST integrations across internal and third-party services, and Django services running in production.",
      red:
        "I ship a Video KYC banking platform. It is audited, it is in production, and I still hold my breath a little on every deploy.",
    },
  },

  history: {
    label: "History",
  },

  work: {
    label: "Selected work",
  },

  stack: {
    label: "Tech stack",
    cta: "Let's talk",
  },

  skills: {
    label: "What I work with",
  },

  motto: {
    eyebrow: "My motto",
    heading: {
      dark: "Ship less, ship it right",
      red: "Ship first, polish later",
    },
    attribution: {
      dark: "Muhammed Anas K",
      red: "Muhammed Anas K",
    },
  },

  contact: {
    label: "Connect",
  },
};

/* Roles + education merged into one reverse-chronological History list */
export const history = [
  {
    period: "Now",
    role: "Software Developer",
    detail: "Banking & FinTech",
    company: "PixDynamics",
  },
  {
    period: "2025",
    role: "Python Full Stack Intern",
    detail: "React + Django",
    company: "Bridgeon Solutions",
  },
  {
    period: "2025",
    role: "BCA Graduate",
    detail: "Computer Applications",
    company: "Calicut University",
  },
  {
    period: "2021",
    role: "Diploma",
    detail: "Computer Applications",
    company: "Kerala, India",
  },
];

/* Dual-label contact links: resting label + the witty hover swap */
export const contactColumns = [
  [
    { label: "Github", active: "My commits", url: "https://github.com/Muhammedanas7474" },
    { label: "Linkedin", active: "Serious me", url: "https://www.linkedin.com/in/muhammed-anas-k-b44920357/" },
    { label: "Instagram", active: "Behind the scenes", url: "https://www.instagram.com/" },
  ],
  [
    { label: "Youtube", active: "Random tutorials", url: "#" },
    { label: "Facebook", active: "Mostly photos", url: "#" },
    { label: "Resume", active: "The one page version", url: "/resume.pdf" },
  ],
];

