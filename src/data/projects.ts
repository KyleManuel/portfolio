export type ProjectCard = {
  image: string;
  heading?: string;
  text?: string;
};

export type ProjectPopup = {
  images: string[];
};

export type Project = {
  id: string;
  slug: string;
  role: string;
  title: string;
  description: string;
  tech: string[];
  bg: string;
  mobileBg?: string;
  accent: string;
  liveUrl?: string;
  cardsLayout?: "mobileShots";
  cards: ProjectCard[];
  popup?: ProjectPopup;
};

export const projects: Project[] = [
  {
    id: "wellness",
    slug: "the-wellness-company",
    role: "Senior E-Commerce Developer",
    title: "The Wellness Company",
    liveUrl: "https://twc.health",
    description:
      "Delivered conversion-focused Shopify features and full-stack enhancements for a live health e-commerce platform, improving performance, scalability, and purchase flow while supporting revenue-critical operations.",
    tech: ["Shopify", "Liquid", "JavaScript", "GitHub", "Shopify API", "DynamoDB", "Amazon SES"],
    bg: "/assets/img/gallery-6.png",
    mobileBg: "/assets/img/mob-twc-bg.png",
    accent: "#7ec8ff",
    cards: [
      {
        image: "/assets/img/twc-3.webp",
        text: "Developed multiple Shopify storefronts end-to-end—building custom theme sections/snippets, implementing API integrations, and shipping code updates and fixes to keep storefronts stable and conversion-focused.",
      },
      {
        image: "/assets/img/twc-1.webp",
        text: "Full setup and management of GitHub repository from scratch, migrating the codebase into version control, acting as code reviewer, and defining standards for branching, pull requests, and production-ready code.",
      },
      {
        image: "/assets/img/twc-2.webp",
        text: "Automated reporting infrastructure by integrating Shopify APIs with SQL databases using DynamoDB, with scheduled execution and email delivery using Amazon Simple Email Service (SES).",
      },
    ],
  },
  {
    id: "crear",
    slug: "crear",
    role: "AI Application Developer",
    title: "Crear Media",
    liveUrl: "https://crearmedia.com/",
    description:
      "Developed an AI-powered learning platform experience for CrearMedia using SceneSnap concepts, transforming passive educational content into interactive learning flows with AI-assisted guidance, structured content delivery, and learner-focused engagement.",
    tech: ["Next.js", "TypeScript", "Node.js", "OpenAI API"],
    bg: "/assets/img/gallery-1.jpg",
    mobileBg: "/assets/img/mob-crear-bg.png",
    accent: "#5cbb54",
    cards: [
      {
        image: "/assets/img/crear-1.png",
        text: "Built AI-focused backend logic using Python to support content processing, structured learning flows, and AI-assisted educational experiences inspired by SceneSnap’s learning platform model.",
      },
      {
        image: "/assets/img/crear-2.png",
        text: "Implemented SceneSnap-style learning features that transform passive educational content into interactive learning paths, guided prompts, and learner-focused digital experiences.",
      },
      {
        image: "/assets/img/crear-3.png",
        text: "Prepared the platform for scalable cloud deployment using Microsoft Azure, supporting reliable hosting, backend integration, and future expansion of AI-powered learning features.",
      },
    ],
    popup: {
      images: [
        "/assets/img/crear-1.png",
        "/assets/img/crear-2.png",
        "/assets/img/crear-3.png",
      ],
    },
  },
  {
    id: "chatbot",
    slug: "chatbot",
    role: "AI Developer",
    title: "Chatbot",
    description:
      "Leading our group's thesis project, we successfully created and implemented our own chatbot on our client's website, providing assistance to customers accessing the website.",
    tech: ["Angular", "Node.js", "Dialogflow API", "MongoDB"],
    bg: "/assets/img/gallery-1.jpg",
    mobileBg: "/assets/img/mob-co-bg.png",
    accent: "#5eead4",
    cards: [
      {
        image: "/assets/img/co-1.png",
        heading: "Training",
      },
      {
        image: "/assets/img/co-2.png",
        heading: "Implementation",
      },
      {
        image: "/assets/img/co-3.png",
        heading: "Simulation",
      },
    ],
    popup: {
      images: [
        "/assets/img/co-1.png",
        "/assets/img/co-2.png",
        "/assets/img/co-3.png",
      ],
    },
  },
  {
    id: "mondelezuniv",
    slug: "mondelez-international",
    role: "Full Stack Developer",
    title: "Mondelez International",
    liveUrl: "https://www.mondelezinternational.com/",
    description:
      "Being the sole developer, I set up the repositories, pipelines, database, and storefront from scratch, which was then successfully deployed and maintained.",
    tech: ["React.js", "Node.js", "Azure DevOps", "SQL"],
    bg: "/assets/img/gallery-4.png",
    mobileBg: "/assets/img/mob-mi-bg.png",
    accent: "#8f4ac8",
    cards: [
      {
        image: "/assets/img/mu-1.png",
        heading: "Front-End Development",
      },
      {
        image: "/assets/img/mu-2.png",
        heading: "Back-End Development",
      },
      {
        image: "/assets/img/mu-3.png",
        heading: "E-Commerce",
      },
    ],
    popup: {
      images: [
        "/assets/img/mu-1.png",
        "/assets/img/mu-2.png",
        "/assets/img/mu-3.png",
      ],
    },
  },
  {
    id: "servicedesk",
    slug: "agile-service-desk",
    role: "Cloud Application Developer",
    title: "Agile Service Desk",
    description:
      "Helped develop the ASD capability, which is intended to provide a voice platform for Service Desk Agents.",
    tech: ["React.js", "AWS Connect", "CloudWatch", "DynamoDB", "Lambda", "AWS Chatbot"],
    bg: "/assets/img/gallery-2.png",
    mobileBg: "/assets/img/mob-asd-bg.png",
    accent: "#ff9900",
    cards: [
      {
        image: "/assets/img/asd-1.png",
        heading: "Automation",
      },
      {
        image: "/assets/img/asd-2.png",
        heading: "Functionalities",
      },
    ],
    popup: {
      images: [
        "/assets/img/asd-1.png",
        "/assets/img/asd-2.png",
        "/assets/img/asd-3.png",
      ],
    },
  },
  {
    id: "safespace",
    slug: "priority-workforce-suite",
    role: "Mobile Web Application Developer",
    title: "Priority Workforce Suite",
    description:
      "Implemented key features for a content management system app designed to support the mental health wellness of frontline healthcare workers.",
    tech: ["Angular.js", "Azure DevOps", "Boards", "Repos", "Pipelines"],
    bg: "/assets/img/gallery-3.jpg",
    mobileBg: "/assets/img/mob-dxc-bg.png",
    accent: "#79c7ff",
    cardsLayout: "mobileShots",
    cards: [
      {
        image: "/assets/img/ss-1.png",
        heading: "Landing",
      },
      {
        image: "/assets/img/ss-2.png",
        heading: "Scheduling",
      },
      {
        image: "/assets/img/ss-3.png",
        heading: "Account",
      },
    ],
    popup: {
      images: [
        "/assets/img/ss-1.png",
        "/assets/img/ss-2.png",
        "/assets/img/ss-3.png",
      ],
    },
  },
];