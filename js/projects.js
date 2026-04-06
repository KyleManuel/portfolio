const projects = [
  {
    id: "wellness",
    role: "Shopify Developer",
    title: "The Wellness Company",
    link: "https://twc.health",
    description: "Delivered conversion-focused Shopify features and full-stack enhancements for a live health e-commerce platform, improving performance, scalability, and purchase flow while supporting revenue-critical operations.",
    bg: "assets/img/gallery-6.png",
    mbBg: "assets/img/mob-twc-bg.png",
    cards: [
      { img: "assets/img/twc-3.webp", text: "Developed multiple Shopify storefronts end-to-end—building custom theme sections/snippets, implementing API integrations, and shipping code updates and fixes to keep storefronts stable and conversion-focused." },
      { img: "assets/img/twc-1.webp", text: "Full setup and management of GitHub repository from scratch, migrating the codebase into version control, acting as code reviewer, and defining standards for branching, pull requests, and production-ready code." },
      { img: "assets/img/twc-2.webp", text: "Automated reporting infrastructure by integrating Shopify APIs with SQL databases using DynamoDB, with scheduled execution and email delivery using Amazon Simple Email Service (SES)." }
    ]
  },
  {
    id: "mondelezuniv",
    role: "React.js, Node.js, Azure DevOps",
    title: "Mondelez International",
    description: "Being the sole developer, I set up the repositories, pipelines, database, and storefront from scratch which has then been successfully deployed and maintained.",
    bg: "assets/img/gallery-4.png",
    mbBg: "assets/img/mob-mi-bg.png",
    cards: [
      { img: "assets/img/mu-1.png", heading: "Front-End Development" },
      { img: "assets/img/mu-2.png", heading: "Back-End Development" },
      { img: "assets/img/mu-3.png", heading: "E-Commerce" }
    ],
    popup: {
      images: ["assets/img/mu-1.png","assets/img/mu-2.png","assets/img/mu-3.png"]
    }
  },
  {
    id: "chatbot",
    role: "Angular7, Node.js, Dialogflow API, MongoDB",
    title: "Chatbot",
    description: "Leading our group's thesis project, we successfully created and implemented our own chatbot on our client's website, providing assistance to customers accessing the website.",
    bg: "assets/img/gallery-1.jpg",
    cards: [
      { img: "assets/img/co-1.png", heading: "Training" },
      { img: "assets/img/co-2.png", heading: "Implementation" },
      { img: "assets/img/co-3.png", heading: "Simulation" }
    ],
    popup: {
      images: ["assets/img/co-1.png","assets/img/co-2.png","assets/img/co-3.png"]
    }
  },
  {
    id: "servicedesk",
    role: "React.js, Amazon Web Services (Connect, CloudWatch, DynamoDB, Lambda, Chatbot)",
    title: "Agile Service Desk",
    description: "Helped developed the ASD capability which is intended to provide a voice platform for Service Desk Agents.",
    bg: "assets/img/gallery-2.png",
    cards: [
      { img: "assets/img/asd-1.png", heading: "Automation" },
      { img: "assets/img/asd-2.png", heading: "Functionalities" },
    ],
    popup: {
      images: ["assets/img/asd-1.png","assets/img/asd-2.png","assets/img/asd-3.png"]
    }
  },
  {
    id: "safespace",
    role: "Angular.js, Azure DevOps (Boards, Repos, Pipelines)",
    title: "Priority Workforce Suit",
    description: "Implemented key features for a content management system app designed to support the mental health wellness of frontline healthcare workers.",
    bg: "assets/img/gallery-3.jpg",
    cardsLayout: "mobileShots", 
    cards: [
      { img: "assets/img/ss-1.png", heading: "Landing" },
      { img: "assets/img/ss-2.png", heading: "Scheduling" },
      { img: "assets/img/ss-3.png", heading: "Account" }
    ],
    popup: {
      images: ["assets/img/ss-1.png","assets/img/ss-2.png","assets/img/ss-3.png"]
    }
  },
//   {
//     id: "concierge",
//     role: "Unity, Google Cloud Anchor, AR Foundation",
//     title: "Augmented Reality – Concierge",
//     description: "Mapping of key locations, Floor pathing, Implentation of assistant selection and user interface.",
//     bg: "assets/img/gallery-3.png",
//     cards: [
//       { img: "assets/img/ss-1.png", heading: "Demo" }
//     ]
//   }
];