// Edit this file to update your portfolio content.
// Fields marked "TODO" are placeholders — replace them with your real details.

export const profile = {
  name: "Ehirim Benjamin",
  initials: "EB",
  headline: "Designer. Creative Technologist. AI-Assisted Builder.",
  tagline: "Designer • Creative Technologist • AI-Assisted Builder",
  intro:
    "I combine visual design, technology and AI-assisted development to create brands, digital experiences and practical products that solve real problems.",
  status: "Available for opportunities",
  portrait: "" as string, // TODO: add the URL of your photograph
  cvUrl: "/cv-placeholder.pdf", // TODO: replace with your final CV PDF
};

export const socials = {
  email: "hello@example.com", // TODO
  linkedin: "https://www.linkedin.com/", // TODO
  github: "https://github.com/", // TODO
  whatsapp: "", // TODO: e.g. https://wa.me/234XXXXXXXXXX (leave empty to hide)
};

export type Category = "Web" | "Branding" | "Graphic Design" | "Print" | "Digital Products";
export const categories: ("All" | Category)[] = [
  "All",
  "Web",
  "Branding",
  "Graphic Design",
  "Print",
  "Digital Products",
];

export type Project = {
  slug: string;
  title: string;
  category: Category;
  year: string;
  summary: string;
  role: string;
  tools: string[];
  cover?: string;
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome?: string;
  gallery: string[];
  liveUrl?: string;
};

const TBA = "Details to be added.";

export const projects: Project[] = [
  {
    slug: "quotation-web-app",
    title: "Quotation Web Application",
    category: "Digital Products",
    year: "Year TBA",
    summary:
      "A digital quotation and invoicing tool that helps a business prepare and manage professional quotations more efficiently.",
    role: "Design and AI-Assisted Development",
    tools: ["Lovable", "AI tools"],
    overview:
      "A web application created to help a business prepare and manage professional quotations more efficiently.",
    challenge: TBA,
    approach: TBA,
    solution: TBA,
    gallery: [],
  },
  {
    slug: "coach-zinny-website",
    title: "Coach Zinny Website",
    category: "Web",
    year: "Year TBA",
    summary:
      "A website for an emotional therapist — sharing her services, enabling session bookings and offering access to her books and resources.",
    role: "Website Design and AI-Assisted Development",
    tools: ["Lovable"],
    overview:
      "Website created for an emotional therapist to provide information about her services, allow clients to book sessions and access her books and resources.",
    challenge: TBA,
    approach: TBA,
    solution: TBA,
    gallery: [],
  },
  {
    slug: "corporate-client-website",
    title: "Corporate Client Website",
    category: "Web",
    year: "Year TBA",
    summary: "The official company website I designed and developed for a client.",
    role: "Website Design and AI-Assisted Development",
    tools: ["Tools TBA"],
    overview: "Official company website designed and developed for a client. Client details to be added.",
    challenge: TBA,
    approach: TBA,
    solution: TBA,
    gallery: [],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity Work",
    category: "Branding",
    year: "Ongoing",
    summary: "Logos, visual identities, brand guidelines and marketing materials.",
    role: "Brand Identity Designer",
    tools: ["Adobe creative tools"],
    overview: "A collection of logo and visual identity projects. Individual projects to be added.",
    challenge: TBA,
    approach: TBA,
    solution: TBA,
    gallery: [],
  },
  {
    slug: "print-design",
    title: "Print Design",
    category: "Print",
    year: "Ongoing",
    summary: "Flyers, banners, business cards, event materials and other professional print work.",
    role: "Print Designer",
    tools: ["Adobe creative tools", "Canva"],
    overview: "Selected print work. Individual pieces to be added.",
    challenge: TBA,
    approach: TBA,
    solution: TBA,
    gallery: [],
  },
  {
    slug: "social-media-campaigns",
    title: "Social Media & Digital Campaigns",
    category: "Graphic Design",
    year: "Ongoing",
    summary: "Selected social media creatives and digital campaign designs.",
    role: "Graphic & Digital Content Designer",
    tools: ["Adobe creative tools", "Canva", "CapCut"],
    overview: "A gallery of selected social media creative work. Pieces to be added.",
    challenge: TBA,
    approach: TBA,
    solution: TBA,
    gallery: [],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Design",
    items: ["Graphic Design", "Brand Identity", "Print Design", "Social Media Design", "Visual Communication", "Layout & Typography"],
  },
  {
    group: "Digital & Web",
    items: ["Responsive Web Design", "UI Design", "Landing Pages", "Website Prototyping", "AI-Assisted Web Development"],
  },
  {
    group: "Creative Technology",
    items: ["AI-Assisted Development", "AI Content Workflows", "Generative AI Tools", "Creative Automation", "Digital Content Production"],
  },
  {
    group: "Professional",
    items: ["Creative Problem Solving", "Client Communication", "Project Execution", "Attention to Detail"],
  },
];

export const tools = ["Adobe Creative Tools", "Canva", "Lovable", "CapCut", "AI Tools", "Vercel", "GitHub"];

export type Experience = {
  position: string;
  organization: string;
  type: string;
  start: string;
  end: string;
  description: string;
  achievements: string[];
  tools: string[];
};

export const experience: Experience[] = [
  {
    position: "Graphic Designer & Creative Technologist", // TODO: confirm title
    organization: "BENOVERTECH",
    type: "Self-employed",
    start: "Start date TBA",
    end: "Present",
    description:
      "Design, print and technology work — brand identities, print materials, social media creatives and AI-assisted websites and web tools.",
    achievements: [],
    tools: ["Adobe creative tools", "Canva", "Lovable"],
  },
  {
    position: "Position TBA",
    organization: "Organization TBA",
    type: "Employment type TBA",
    start: "Start TBA",
    end: "End TBA",
    description: "Add another role here.",
    achievements: [],
    tools: [],
  },
];

export const education = [
  {
    course: "Computer Science",
    school: "Chukwuemeka Odumegwu Ojukwu University",
    dates: "Dates TBA",
    notes: "",
  },
];
