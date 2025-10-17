import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Waqas Javed Durrani — Senior Frontend Developer",
  author: "Waqas Javed Durrani",
  description:
    "Senior Frontend Engineer based in Munich, Germany. I build high-performance React UIs, ESG/emissions dashboards, onboarding flows, LLM chatbots, and design systems.",
  lang: "en",
  siteLogo: "/Waqas.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Designs", href: "#designs" }, 
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/waqas-javed-durrani-aa3b34102/" },
    { text: "GitHub", href: "https://github.com/durranijaved96" }, 
    { text: "YouTube", href: "https://www.youtube.com/@waqasdurrani9077" },
    { text: "Figma", href: "https://www.figma.com/@waqas39" }, 
  ],
  socialImage: "/Waqas.jpeg",
  canonicalURL: "https://portfolio-omega-snowy-94.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Waqas Javed Durrani",
    specialty: "Senior Frontend / Full-Stack Developer",
    summary:
      "As a Lead Senior Frontend Developer with over 10 years of expertise, I specialise in building scalable SaaS solutions and high-performance web and mobile applications enhanced with AI. I build AI-powered SaaS: performant React UIs, emissions/ESG dashboards, onboarding (Joyride), LLM chatbots, and Storybook design systems. 10+ years in Germany, startup speed, enterprise quality.",
    email: "waqasdurrani29@gmail.com",
  },

  experience: [
    {
      company: "Envoria GmbH",
      position: "Senior Frontend Developer",
      startDate: "Sep 2024",
      endDate: "Present",
      summary: [
        "Shipped a widget-based Home dashboard; consistent card system and layout grid.",
        "Built interactive onboarding with react-joyride (guided tours, persisted state).",
        "Delivered emissions/ESG overview dashboards with collapsible org tree and cards.",
        "Added advanced data-viz (status PieCharts) and attachments module (multi-file upload).",
        "Established a Storybook design system; improved UI consistency and dev velocity.",
        "Integrated AI assistant (Onyx AI) and OpenAI APIs for in-app help.",
        "Hardened CI/CD with GitHub Actions; enforced linting, type-safety, and PR checks.",
      ],
    },
    {
      company: "elbwire GmbH",
      position: "Lead Senior Full-Stack / Frontend Developer",
      startDate: "May 2023",
      endDate: "Sep 2024",
      summary: [
        "Sole engineer responsible for the SaaS platform’s frontend architecture, design,and development.",
        "Led frontend architecture in React/TypeScript and develop high-performance, scalable user interfaces, ensuring best practices in responsive design and user experience",
        "Established and maintained a comprehensive design system, promoting UI consistency and enhancing the overall user experience.",
        "Implemented and managed CI/CD pipelines using GitHub Actions, facilitating continuous integration and automated deployments to AWS services",
        "Payment integration via Stripe for subscription based approach",
        "Contributed to backend with Node.js services to support product workflows.",
        "Deployed and operated infrastructure on AWS (S3, CloudFront, Route53, Lambda) with SSL certification.",
        "• Defined and enforced frontend coding standards and best practices to ensure maintainability."

      ],
    },
    {
      company: "Vernaio GmbH",
      position: "Lead Frontend Developer",
      startDate: "Oct 2022",
      endDate: "May 2023",
      summary: [
        "Creating design system react components for storybook and delivered components",
        "Created New UI for the Vernaio SaaS platform",
        "Led the team of 5 frontend devs for development of Saas app",
        "Planning resources for prioritsed tasks. Architectural oversight for features being worked on",
        "Architecting and implementing new features.",
        " Ensuring code quality, scalability and extensibility.Fixing bugs and identifying ways to reduce the bugs escalated.",
        " Collaboration with Product, UI/UX and all other teams",
      ],
    },
  ],

  projects: [
    {
      name: "EV Explorer",
      summary: "Vehicle listing & detail app with filtering, metrics, and dynamic routing.",
      linkPreview: "https://ev-explorer-rho.vercel.app/",
      linkSource: "https://github.com/durranijaved96/ev-explorer",
      image: "/EV.png",
    },
    {
      name: "React Storybook",
      summary: "My design system playground—tokenized components + docs in Storybook.",
      linkPreview:
        "https://my-react-storybook.vercel.app/?path=/story/introduction-introduction--page",
      linkSource: "https://github.com/durranijaved96/my-react-storybook",
      image: "/Storybook.png",
    },
    {
      name: "Foodifie UI",
      summary: "Widget-style dashboard UX with clean cards and animations.",
      linkPreview: "https://foodifie.vercel.app/",
      linkSource: "https://github.com/durranijaved96/foodifie",
      image: "/Foodifie.png",
    },
  ],

  //Figma designs section
  designs: [
    {
      name: "Digital Avatars Dashboard UI",
      summary: "Dashboard view for creating digital AI avatars.You can create avatars and see on dashboard.",
      image: "/Digital_Avatars.png",
      linkFigma: "https://www.figma.com/files/team/1395660445958283348/recents-and-sharing?fuid=841727067542136599",
      linkPreview: "https://www.figma.com/design/U9aYLeOajxwYVFiiOVGH0l/Dashboard-Concept-AI-Avatars?t=xG0pAwEV0ECsNBUe-0",
    },
    {
      name: "Elecromobility App Concept",
      summary: "Modern concept for an electric mobility mobile app.",
      image: "/Electromobility_App.png",
      linkFigma: "https://www.figma.com/design/RckdQ3R7cbfkuUlnJ2NfLc/Electricmobility-app-mobile-view?t=xG0pAwEV0ECsNBUe-0I",
      linkPreview: "https://www.figma.com/design/RckdQ3R7cbfkuUlnJ2NfLc/Electricmobility-app-mobile-view?t=xG0pAwEV0ECsNBUe-0",
    },
    {
      name: "Hotel Booking Concept App",
      summary: "Modern concept for user experience in mobile app.",
      image: "/Hotel_App.png",
      linkFigma: "https://www.figma.com/design/7ihcJK8OHfU406l0Uabj20/Hotel-Booking---Concept-App?t=xG0pAwEV0ECsNBUe-0",
      linkPreview: "https://www.figma.com/design/7ihcJK8OHfU406l0Uabj20/Hotel-Booking---Concept-App?t=xG0pAwEV0ECsNBUe-0",
    },
    {
      name: "Augmented Healthcare SPA",
      summary: "Modern concept for user experience in mobile app.",
      image: "/AR_Health.png",
      linkFigma: "https://www.figma.com/design/8gMXfQFUBv9kENvD9diLTb/Augmented-healthcare-Concept?t=xG0pAwEV0ECsNBUe-0",
      linkPreview: "https://www.figma.com/design/8gMXfQFUBv9kENvD9diLTb/Augmented-healthcare-Concept?t=xG0pAwEV0ECsNBUe-0",
    },
    {
      name: "Food App SPA",
      summary: "Modern concept for user experience in mobile app.",
      image: "/Food_App.png",
      linkFigma: "https://www.figma.com/design/jffobPFEwujpHnjPq6YQa7/Food-APp-Conceptual-landing-page?t=xG0pAwEV0ECsNBUe-0",
      linkPreview: "https://www.figma.com/design/jffobPFEwujpHnjPq6YQa7/Food-APp-Conceptual-landing-page?t=xG0pAwEV0ECsNBUe-0",
    },
    {
      name: "IIOT Concept App",
      summary: "Modern concept for user experience in mobile app.",
      image: "/IIOT.png",
      linkFigma: "https://www.figma.com/design/qa1UjrWs1pwT7Bn8LCyDOi/IIOT-new-concept?node-id=3-35&p=f&t=xG0pAwEV0ECsNBUe-0",
      linkPreview: "https://www.figma.com/design/qa1UjrWs1pwT7Bn8LCyDOi/IIOT-new-concept?node-id=3-35&p=f&t=xG0pAwEV0ECsNBUe-0",
    },

  ],

  about: {
    description:
      "I focus on UI + UX, clean component APIs, design systems, type-safe data flows, and fast UI. I enjoy turning fuzzy product ideas into shippable features with crisp polish.",
    image: "/Waqas.jpeg",
  },
};
