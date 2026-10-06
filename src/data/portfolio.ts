// Edit this file to update your portfolio content.
import portraitAsset from "@/assets/benjamin-ehirim.png.asset.json";
import cvAsset from "@/assets/benjamin-ehirim-cv.pdf.asset.json";

export const profile = {
  name: "Ehirim Benjamin",
  initials: "EB",
  headline: "Graphic Designer. AI Web Creator. IT Support.",
  tagline: "Graphic Designer • AI Web Creator • IT Support",
  intro:
    "Creative professional with experience in graphic design, branding, digital printing, IT support, and AI-assisted website and app building. I use modern AI and no-code tools to create practical digital solutions for businesses and clients.",
  status: "Available for opportunities",
  location: "Lagos, Nigeria",
  phone: "+234 810 727 1610",
  portrait: portraitAsset.url,
  cvUrl: cvAsset.url,
};

export const socials = {
  email: "decencybenjamin@gmail.com",
  linkedin: "https://www.linkedin.com/in/ehirim-benjamin-a14127236",
  x: "https://x.com/DecencyBenjamin",
  website: "https://benovertech.vercel.app",
  whatsapp: "https://wa.me/2348107271610",
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
    slug: "bigwig-quotation-web-app",
    title: "Job Quotation Web App",
    category: "Digital Products",
    year: "Year TBA",
    summary:
      "A responsive job quotation web app for BIG WIG Architecture and Building Construction Company, simplifying cost estimation, quotation generation, and document management.",
    role: "Design and AI-Assisted Development",
    tools: ["AI-assisted tools", "No-code/low-code"],
    overview:
      "Designed and developed a responsive job quotation web app for BIG WIG Architecture and Building Construction Company, simplifying cost estimation, quotation generation, and document management.",
    challenge: TBA,
    approach: TBA,
    solution: TBA,
    gallery: [],
  },
  {
    slug: "bigwig-website",
    title: "BIG WIG Architect Official Website",
    category: "Web",
    year: "Year TBA",
    summary:
      "The official responsive website for BIG WIG Architecture and Building Construction, showcasing its services, projects, and company information.",
    role: "Website Design and AI-Assisted Development",
    tools: ["AI-assisted tools", "No-code/low-code"],
    overview:
      "Designed and developed the company's official responsive website to showcase its architectural and construction services, projects, and company information with a clean and user-friendly interface.",
    challenge: TBA,
    approach: TBA,
    solution: TBA,
    gallery: [],
  },
  {
    slug: "coach-zinny-website",
    title: "Coach Zinny Therapy Website",
    category: "Web",
    year: "Year TBA",
    summary:
      "A responsive therapy and wellness website with session booking, book sales, and service information.",
    role: "Website Design and AI-Assisted Development",
    tools: ["AI-assisted tools", "No-code/low-code"],
    overview:
      "Designed and developed a responsive therapy and wellness website with session booking, book sales, and service information, creating a smooth and user-friendly experience for clients.",
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
    tools: ["CorelDRAW", "Photo editing tools"],
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
    tools: ["CorelDRAW", "Digital printing"],
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
    tools: ["CorelDRAW", "Photo editing tools"],
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
    items: ["Graphic Design", "Branding & Visual Identity", "CorelDRAW", "Photo Editing & Retouching", "Digital Printing", "Layout & Typography"],
  },
  {
    group: "Digital & Web",
    items: ["AI-Assisted Website Building", "AI-Assisted App Building", "No-Code/Low-Code Tools", "Basic HTML/CSS", "Website Deployment"],
  },
  {
    group: "Technical",
    items: ["IT Support", "Computer Operations", "Digital Printer Operation & Maintenance"],
  },
  {
    group: "Professional",
    items: ["Client Communication", "Project Management", "Problem Solving", "Time Management", "Team Coordination"],
  },
];

export const tools = ["CorelDRAW", "AI-Assisted Tools", "No-Code/Low-Code Tools", "HTML/CSS", "Digital Printers", "Vercel"];

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
    position: "Chief Operating and Maintenance Officer",
    organization: "Exceeding Stone Industry Limited",
    type: "Oyo State",
    start: "Start date TBA",
    end: "Present",
    description: "Oversaw routine equipment checks, maintenance scheduling, and basic troubleshooting.",
    achievements: [
      "Monitored workplace procedures and supported timely completion of assigned tasks.",
      "Worked with staff to reduce downtime and maintain efficient operations.",
    ],
    tools: [],
  },
  {
    position: "Operating Officer",
    organization: "Aristocrat Industries Limited",
    type: "Ota, Ogun State",
    start: "Start date TBA",
    end: "End date TBA",
    description: "Monitored equipment use and reported faults or maintenance needs.",
    achievements: [
      "Assisted with workflow coordination to improve efficiency and reduce delays.",
      "Worked with team members to maintain safe and organized operations.",
    ],
    tools: [],
  },
  {
    position: "Graphic Designer / Managing Director",
    organization: "Decent Prints Graphics and Tech Ltd",
    type: "Uli, Anambra State",
    start: "Start date TBA",
    end: "End date TBA",
    description: "Managed customer communication, pricing, project scheduling, and business operations.",
    achievements: [
      "Managed client design and print projects from initial brief to final delivery.",
      "Created branding, promotional, social media, and print materials for clients.",
      "Coordinated printing, production, and finishing to maintain quality standards.",
    ],
    tools: ["CorelDRAW", "Digital printing"],
  },
  {
    position: "Graphic Designer",
    organization: "Benovertech Group Ltd",
    type: "Awka, Anambra State",
    start: "Start date TBA",
    end: "End date TBA",
    description: "Created branding, social media, promotional, and print designs for clients.",
    achievements: [
      "Managed design projects from client brief to final delivery.",
      "Prepared artwork for digital and large-format printing.",
    ],
    tools: ["CorelDRAW"],
  },
  {
    position: "Graphic Designer / CorelDRAW Tutor",
    organization: "ICT Zone One",
    type: "Sango Ota, Ogun State",
    start: "Start date TBA",
    end: "End date TBA",
    description: "Trained students in CorelDRAW and practical graphic design techniques.",
    achievements: [
      "Created print and digital designs for client projects.",
      "Guided learners in branding, layout design, typography, and print preparation.",
    ],
    tools: ["CorelDRAW"],
  },
];

export const volunteering = [
  {
    position: "Chairman, Board of Trustees & Electoral Team Leader",
    organization: "PCSS Association",
    location: "Ihiala, Anambra State",
    description:
      "Led alumni coordination and electoral activities, supported decision-making, organized members, and helped ensure transparent and effective association processes.",
  },
  {
    position: "School Administrator",
    organization: "New Covenant Foundation School",
    location: "Uli, Anambra State",
    description:
      "Oversee school operations, staff coordination, student welfare, parent communication, and administrative planning.",
  },
];

export const education = [
  {
    course: "B.Sc. Computer Science",
    school: "Chukwuemeka Odumegwu Ojukwu University, Anambra State",
    dates: "Dates TBA",
    notes: "",
  },
];
