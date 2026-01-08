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
      "As a Lead Senior Frontend Developer with over 10 years of expertise, I specialise in building scalable SaaS solutions and high-performance web and mobile applications enhanced with AI. I build AI-powered SaaS, performant React UIs, emissions/ESG dashboards, onboarding (Joyride), LLM chatbots, and Storybook design systems. 10+ years in Germany, startup speed, enterprise quality.",
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
        "Polished CI/CD with GitHub Actions, enforced linting, type-safety, and PR checks.",
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
        "Defined and enforced frontend coding standards and best practices to ensure maintainability."

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
      summary: "Vehicle listing & detail app with filters, metrics, and dynamic routing.",
      linkPreview: "https://ev-explorer-rho.vercel.app/",
      linkSource: "https://github.com/durranijaved96/ev-explorer",
      image: "/EV.png",
      tech: ["Next.js", "TypeScript", "Tailwind", "Vercel", "Driver.js"],  
      impact: ["Vehicle Search", "Filter latency <50ms", "SSG per vehicle"],  
    },
    {
      name: "React Storybook",
      summary: "Design system playground with tokenized components + docs.",
      linkPreview: "https://my-react-storybook.vercel.app/?path=/story/introduction-introduction--page",
      linkSource: "https://github.com/durranijaved96/my-react-storybook",
      image: "/Storybook.png",
      tech: ["React", "Storybook", "Chromatic", "MDX"],
      impact: ["UI regressions ↓30%", "Docs auto-generated", "Design tokens"],
    },
    {
      name: "Foodifie UI",
      summary: "Role-based dashboard UI. (Demo: durranijaved96@gmail.com / Inside12345@#)",
      linkPreview: "https://foodifie.vercel.app/",
      linkSource: "https://github.com/durranijaved96/foodifie",
      image: "/Foodifie.png",
      tech: ["React", "Typescript", "Supabase", "MUI", "Vercel", "Stripe", "Joyride","MuiX charts"],
      impact: ["RBAC", "Edge SSR",],
    },
    {
      name: "ClimateWise",
      summary: "Climate impact & emissions dashboard for orgs.",
      linkPreview: "https://climate-wise-552b0ab8.base44.app/",
      image: "/ClimateWise.png",
      tech: ["React", "Typescript", "MUI", "base44","MuiX charts"],
      impact: ["Climate", "Emissions",],
    },
    {
      name: "EcoFlowAI",
      summary: "Renewable, Solar optimization with AI",
      linkPreview: "https://eco-flow-ai-3e3f28eb.base44.app/",
      image: "/EcoFlowAI.png",
      tech: ["React", "Typescript", "MUI", "base44","MuiX charts"],
      impact: ["Renewable Energy", "Solar",],
    },
  ],
  
  //Figma designs section
  designs: [
    {
      name: "Concept Design System",
      summary: "Design system with components for buttons, forms, cards, modals, and more.",
      image: "/Design_System.png",
      linkFigma: "https://www.figma.com/design/NP2QARSM0USnsz9GIwzngI/components?node-id=0-1&p=f&t=Ch3PS4ErbRD9WbY5-0",
      linkPreview: "https://www.figma.com/design/NP2QARSM0USnsz9GIwzngI/components?node-id=0-1&p=f&t=Ch3PS4ErbRD9WbY5-0",
    },
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
    description: `
  I am a Senior Frontend Developer passionate about building clean, scalable, and user-focused web applications. Over the past decade, I have worked across e-mobility platforms,ESG, Health care, IoT , Pharma etc , turning complex data and fuzzy product ideas into beautiful, high-performance SaaS experiences.
  
  My toolkit includes React, Next.js, and TypeScript, along with a strong design foundation in Figma and Storybook. I love creating design systems that bring consistency, speed, and joy to both users and developers. From interactive dashboards and onboarding flows to AI-powered assistants, my goal is to make interfaces that feel effortless.
  
  I believe great software comes from aligning engineering precision with thoughtful design, building UIs that not only work fast, but also look and feel right.
    `,
    image: "/Waqas.jpeg",
  },
  
};
