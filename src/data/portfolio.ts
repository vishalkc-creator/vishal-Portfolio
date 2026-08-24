import resumeAsset from "@/assets/vishal-chauhan-resume.pdf.asset.json";

export const profile = {
  name: "Vishal Krishna Chauhan",
  headline: "Aspiring Web Developer | Python Enthusiast",
  intro:
    "Detail-oriented and self-motivated developer with a strong foundation in HTML, CSS, C++, and Python. Passionate about building clean, responsive websites and practical software solutions that solve real-world problems.",
  about:
    "I am Vishal Krishna Chauhan, an aspiring web developer and Python enthusiast based in Thane, Maharashtra. I have built a solid foundation in HTML, CSS, C++, and Python, and I enjoy turning ideas into functional, user-friendly digital experiences. Through my ongoing Python internship at Yuva Intern, I am strengthening my problem-solving abilities and gaining hands-on exposure to real-world project workflows. I am a quick learner, a reliable team player, and eager to contribute to projects where I can grow my technical skills while delivering meaningful results.",
  location: "Vartak Nagar, Thane (West), Maharashtra",
  shortLocation: "Thane, Maharashtra",
  email: "vishalkrishnachauhan@email.com",
  phone: "+91 8369603220",
  languages: ["English", "Hindi", "Marathi"],
  resumeUrl: resumeAsset.url,
  // Add entries like { label: "GitHub", url: "https://..." } when you have real URLs.
  socials: [] as { label: string; url: string }[],
};

export const skillGroups = [
  {
    title: "Web Development",
    icon: "code",
    items: [
      { name: "HTML", description: "Semantic page structure and markup." },
      { name: "CSS", description: "Styling, layout and visual design." },
      { name: "Responsive Layouts", description: "Layouts that adapt across devices." },
      { name: "Basic Website Development", description: "Building simple multi-section websites." },
    ],
  },
  {
    title: "Programming",
    icon: "terminal",
    items: [
      { name: "Python", description: "Currently developing through internship learning." },
      { name: "C++", description: "Programming fundamentals and problem solving." },
    ],
  },
  {
    title: "Tools & Productivity",
    icon: "wrench",
    items: [
      { name: "Microsoft PowerPoint", description: "Clear, visually engaging presentations." },
      { name: "MS Office", description: "Documents and everyday office work." },
      { name: "File Management", description: "Organised and structured file handling." },
      { name: "Internet Tools", description: "Effective online research and tools." },
    ],
  },
];

export const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a responsive portfolio website using HTML and CSS to present projects, skills, and academic information.",
    tech: ["HTML", "CSS"],
    status: "Completed",
    demoUrl: null as string | null,
    sourceUrl: null as string | null,
    featured: true,
  },
  {
    title: "AI Resume & Job Matcher",
    description:
      "Developed an AI-focused project concept/application for matching resume information with relevant job opportunities and improving job-search relevance.",
    purpose:
      "Help job seekers find opportunities that align more closely with the information in their resume.",
    concept: "Resume-to-job matching concept using AI-assisted relevance matching.",
    tech: [] as string[],
    status: "In development",
    demoUrl: null as string | null,
    sourceUrl: null as string | null,
    featured: true,
  },
  {
    title: "Academic Presentations",
    description:
      "Created clear and visually engaging PowerPoint presentations for classroom projects and seminars.",
    tech: ["Microsoft PowerPoint", "Presentation Design"],
    status: "Ongoing",
    demoUrl: null as string | null,
    sourceUrl: null as string | null,
    featured: false,
  },
];

export const experience = [
  {
    role: "Python Internship",
    org: "Yuva Intern",
    status: "Currently Developing Skills",
    description:
      "Currently developing practical Python programming skills through internship-based learning and project work.",
  },
];

export const education = [
  {
    qualification: "Higher Secondary Certificate (12th)",
    institution: "GVM College",
    year: "2025",
    score: null as string | null,
  },
  {
    qualification: "Secondary School Certificate (10th)",
    institution: "Jyoti English School",
    year: "2023",
    score: "63%",
  },
];

export const strengths = [
  { title: "Quick Learner", description: "Strong willingness to learn and adopt new technologies.", icon: "zap" },
  { title: "Team Player", description: "Comfortable collaborating with others.", icon: "users" },
  { title: "Communication", description: "Clear communication skills.", icon: "message" },
  { title: "Problem Solving", description: "Solutions-oriented approach to challenges.", icon: "puzzle" },
  { title: "Analytical Thinking", description: "Good analytical and problem-solving ability.", icon: "brain" },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Strengths", href: "#strengths" },
  { label: "Contact", href: "#contact" },
];
