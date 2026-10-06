// Edit this file to update your portfolio content.

export const profile = {
  name: "Benjamin Ehirim",
  initials: "BE",
  headline: "Graphic designer, website builder & IT support",
  tagline: "Graphic design · Websites · IT support",
  heroTitle: "Need a design, a website or help with your tech?",
  intro:
    "I’m a graphic designer and web creator based in Lagos. I help people and businesses bring their ideas to life—from logos and print work to websites and simple apps. I also handle IT support, so I’m happy to help when the tech needs sorting.",
  about: [
    "My name is Benjamin, and I’m a graphic designer and website builder based in Lagos. I’ve worked on branding, print and digital projects, and I also have hands-on experience with IT support.",
    "I like taking an idea, figuring out what it needs, and making something clear and useful out of it. That could be a flyer, a website or a small app—whatever helps get the job done.",
    "I work with CorelDRAW, AI tools and no-code platforms, and I’m always learning better ways to do the work.",
  ],
  status: "Open to work and new projects",
  location: "Lagos, Nigeria",
  phone: "+234 810 727 1610",
  portrait: "/benjamin-ehirim-portrait.png",
  cvUrl: "/Resume%20for%20Ehirim%20Benjamin.pdf",
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
  coverFit?: "contain" | "cover";
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome?: string;
  gallery: string[];
};

const TBA = "I’m still writing up this part.";

export const projects: Project[] = [
  {
    slug: "bigwig-quotation-web-app",
    title: "Job Quotation Web App",
    category: "Digital Products",
    year: "Year not listed",
    cover: "/projects/babc-quotation-app.jpg",
    summary:
      "I built a web app for BIG WIG Architecture and Building Construction Company to make job estimates, quotations and related documents easier to manage.",
    role: "Design and AI-assisted development",
    tools: ["AI-assisted tools", "No-code/low-code"],
    overview:
      "I built a responsive quotation app for BIG WIG Architecture and Building Construction Company. It helps the team put together job estimates and quotations, and keep the related documents in one place.",
    challenge: TBA,
    approach: TBA,
    solution: TBA,
    gallery: [],
  },
  {
    slug: "bigwig-website",
    title: "BIG WIG Architect Official Website",
    category: "Web",
    year: "Year not listed",
    cover: "/projects/babc-official-site.jpg",
    summary:
      "I designed and built the official website for BIG WIG Architecture and Building Construction, with details about the company, its services and its projects.",
    role: "Website design and AI-assisted development",
    tools: ["AI-assisted tools", "No-code/low-code"],
    overview:
      "I designed and built the company’s website to make it easy for people to learn about its work, services and projects.",
    challenge: TBA,
    approach: TBA,
    solution: TBA,
    gallery: [],
  },
  {
    slug: "coach-zinny-website",
    title: "Coach Zinny Therapy Website",
    category: "Web",
    year: "Year not listed",
    cover: "/projects/coach-zinny.jpg",
    summary:
      "A therapy and wellness website for Coach Zinny, with session booking, book sales and service details in one place.",
    role: "Website design and AI-assisted development",
    tools: ["AI-assisted tools", "No-code/low-code"],
    overview:
      "I made a responsive website for Coach Zinny’s therapy and wellness services. Visitors can find out about the services, book a session and buy books from the site.",
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
    cover: "/projects/brand-identity-logos.png",
    coverFit: "contain",
    summary: "A mix of logos, brand identities and marketing designs I’ve worked on.",
    role: "Brand Identity Designer",
    tools: ["CorelDRAW", "Photo editing tools"],
    overview: "A collection of logo and branding work. I’m still adding the stories behind each project.",
    challenge: TBA,
    approach: TBA,
    solution: TBA,
    gallery: ["/projects/marinade-magic-packaging.png"],
  },
  {
    slug: "print-design",
    title: "Print Design",
    category: "Print",
    year: "Ongoing",
    cover: "/projects/print-design-samples.png",
    coverFit: "contain",
    summary: "Flyers, banners, business cards and other things people need printed.",
    role: "Print Designer",
    tools: ["CorelDRAW", "Digital printing"],
    overview: "A selection of my print work. I’m still writing up the details for each piece.",
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
    cover: "/projects/campaign-graphics-gallery.png",
    coverFit: "contain",
    summary: "Social media graphics and digital campaign designs I’ve worked on.",
    role: "Graphic & Digital Content Designer",
    tools: ["CorelDRAW", "Photo editing tools"],
    overview: "A few social media and campaign designs. I haven’t written these up properly yet.",
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
    group: "How I work",
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
    type: "Off Road, Ayete 201101, Oyo State",
    start: "Dates not listed",
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
    type: "Plot 7 & 8, Block 10, Ota Industrial Estate, off Idiroko Road, Ota, Ogun State",
    start: "Dates not listed",
    end: "Dates not listed",
    description: "Monitored equipment use and reported faults or maintenance needs.",
    achievements: [
      "Assisted with workflow coordination to improve efficiency and reduce delays.",
      "Worked with team members to maintain safe and organised operations.",
    ],
    tools: [],
  },
  {
    position: "Graphic Designer / Managing Director",
    organization: "Decent Prints Graphics and Tech Ltd",
    type: "257, Devine Plaza, by Benbella Hospital, Uli, Anambra State",
    start: "Dates not listed",
    end: "Dates not listed",
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
    type: "Commissioner’s Quarters, Iffite, Awka, Anambra State",
    start: "Dates not listed",
    end: "Dates not listed",
    description: "Created branding, social media, promotional and print designs for clients.",
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
    start: "Dates not listed",
    end: "Dates not listed",
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
      "Helped bring alumni together, organised election activities and supported clear, fair decision-making.",
  },
  {
    position: "School Administrator",
    organization: "New Covenant Foundation School",
    location: "Uli, Anambra State",
    description:
      "Look after day-to-day school operations, staff coordination, student welfare, parent communication and planning.",
  },
];

export const education = [
  {
    course: "B.Sc. in Computer Science",
    school: "Chukwuemeka Odumegwu Ojukwu University, Anambra State",
    dates: "Dates not listed",
    notes: "",
  },
];
