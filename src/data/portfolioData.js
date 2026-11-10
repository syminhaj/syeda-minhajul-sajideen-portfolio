// ============================================================
// portfolioData.js
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Syeda Minhajul Sajideen",
  firstName: "Syeda Minhajul Sajideen",
  brandName: "Syeda Minhajul Sajideen", // shown in the preloader, navbar and footer
  title: "Data Analyst",
  location: "Bangalore, India",
  phone: "+919964139283",
  emails: {
    primary: "syedaminhaj03@gmail.com",
    secondary: "",
  },
  summary:
    "Computer Science Engineering graduate with R&D experience at Samsung Electronics, contributing to AI/ML data annotation, and hands-on experience in Full Stack Development. Proficient in Python, SQL, React.js, and Power BI, with interests in software development, data analytics, and emerging technologies.",
  resumeUrl: "/Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/syminhaj",
  linkedin: "https://www.linkedin.com/in/syedaminhajul3103",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Syeda Minhajul Sajideen",
  titleHighlight: "Data Analyst",
  subtitle:
    "Computer Science graduate proficient in Python, SQL, React.js, and Power BI, transforming complex data into scalable digital solutions.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:syedaminhaj03@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: null,
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Syeda Minhajul Sajideen</span>, a tech-driven Data Analyst and Computer Science graduate from Bangalore. From AI/ML dataset validation at Samsung Electronics to interactive web apps and Power BI dashboards, I bridge the gap between data insights and software development, sharpening my skills through the placement training program at TAP Academy.`,
  techStack: ["Python", "SQL", "React", "Power BI", "Java"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured approach blending analytical research, UI design, robust development, and precision deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyze problem requirements, clean data sources, and outline user-centric project goals.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architect intuitive data models, wireframes, and scalable component workflows.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Write clean, efficient code using Python, SQL, and React with rigorous testing.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Validate system accuracy, automate performance checks, and deliver production-ready solutions.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "Python" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "React.js" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "MongoDB" }],
    },
    {
      title: "Data Analytics",
      skills: [{ name: "Power BI" }, { name: "SQL" }, { name: "Excel" }],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Jupyter" },
        { name: "Eclipse" },
        { name: "Google Colab" },
      ],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "Samsung Electronics (Samsung SEED)",
    role: "R&D Apprentice",
    duration: "August 2025 - October 2026",
    skills: [
      "AI/ML Data Annotation",
      "Semantic Segmentation",
      "Dataset Validation",
      "Quality Assurance",
    ],
    tech: ["Python", "Computer Vision", "Annotation Tools"],
  },
  {
    organization: "Bask Creative Ventures",
    role: "Full Stack Development Intern",
    duration: "July 2025 - August 2025",
    skills: [
      "Full Stack Development",
      "Front-end Interface Design",
      "Back-end Functionality",
      "Component Architecture",
    ],
    tech: ["React.js", "Python", "HTML/CSS", "Git"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Collaborated with cross-functional R&D and engineering teams to ensure high data quality and project delivery.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Approached complex computer vision and translation challenges by breaking them into structured algorithmic steps.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Interpreted complex datasets and performance metrics to generate clear, actionable insights and visual dashboards.",
  },
  {
    name: "Creativity",
    icon: "🎨",
    desc: "Designed intuitive user interfaces and innovative deep learning image-to-sketch transformation workflows.",
  },
];

export const projects = [
  {
    id: "accident-detection",
    number: "01",
    badge: "🚀 Flagship Project", // use null for no badge
    title: "AI-Based Accident Detection System",
    description:
      "Detects road accidents in real time and supports emergency alerts with location tracking to accelerate response time.",
    techTags: ["Python", "YOLOv8", "Flask", "OpenCV"],
    links: { github: "", demo: "" }, // demo "" shows "Demo Coming Soon"
    isFlagship: true,
  },
  {
    id: "sketch-converter",
    number: "02",
    badge: null,
    title: "Realistic Image Sketch Converter",
    description:
      "Converts realistic images into pencil sketches using image processing techniques and deep learning algorithms.",
    techTags: ["Python", "CNN", "OpenCV"],
    links: {
      github:
        "https://github.com/syminhaj/Realistic-Image-Sketch-Converter-Web-Application",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "language-translator",
    number: "03",
    badge: null,
    title: "Real-Time Language Translator",
    description:
      "Translates text between multiple languages dynamically through an intuitive Python-based application.",
    techTags: ["Python", "Tkinter"],
    links: {
      github: "https://github.com/syminhaj/Language-Translator",
      demo: "",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    {
      name: "Technology & Transformation – PwC Launchpad",
      issuer: "PwC Acceleration Center India",
      icon: "🏅",
    },
  ],
  viewAllUrl: "https://www.linkedin.com/in/syedaminhajul3103",
};

export const education = {
  degree: "Bachelor of Engineering",
  institution: "BNM Institute of Technology",
  cgpa: "8.10",
  graduation: "2026",
  twelfth: "Hindustan Electronics Academy (Diploma - 8.96 CGPA, 2023)",
  tenth: "HAL Gnanajyoti School (ICSE - 82%, 2020)",
};

export const footerContent = {
  taglines: [
    "Data Analyst & Developer",
    "Python · SQL · React.js · Power BI",
    "Turning Data into High-Impact Solutions",
  ],
  credential: "Bachelor of Engineering",
  copyright: `© ${new Date().getFullYear()} Syeda Minhajul Sajideen | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
