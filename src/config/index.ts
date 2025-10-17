import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Waqas Javed Durrani — Senior Frontend Developer",
  author: "Waqas Javed Durrani",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/Waqas.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/waqas-javed-durrani-aa3b34102/" },
    { text: "Github", href: "https://github.com/waqas1739" },
    { text: "Youtube", href: "https://www.youtube.com/@waqasdurrani9077" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Waqas Javed Durrani",
    specialty: "Frontend/Full Stack Developer",
    summary:
      "I build AI-powered SaaS products: performant React UIs, emissions/ESG dashboards, onboarding flows, LLM chatbots, and design systems. 10+ years in Germany, startup-speed with enterprise quality.",
    email: "waqasdurrani29@gmail.com",
  },
  experience: [
    {
      company: "Envoria GmbH",
      position: "Senior Frontend Developer",
      startDate: "Sept 2024",
      endDate: "Present",
      summary: [
        "Redesigned Home dashboard with a widget-based system, improving usability and engagement.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.• Launched a new application theme and layouts, delivering a refreshed, user-friendly experienceIntegrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
        "Built an interactive onboarding wizard (Joyride) that boosted new-user adoption by 40%.",
        "Developed overview dashboards for emissions & ESG standards, with collapsible tree views and card-based layouts for better data exploration.",
        "Developed advanced data visualization components (PieCharts) for clearer sustainability insights.",
        "Built an attachments management module with multi-file upload & preview.",
        "Established a Storybook design system for reusable, scalable UI components.",
        "Developed AI-powered chatbot (Onyx AI) and integrated OpenAPI services.",
        "Improved developer productivity by introducing CI/CD pipelines (GitHub Actions) and enforcing frontend best practices."

      ],
    },
    {
      company: "elbwire GmbH",
      position: "Lead Senior Fullstack /Frontend Developer",
      startDate: "May 2023",
      endDate: "Sept 2024",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Vernaio GmbH",
      position: "Lead Frontend Developer",
      startDate: "Oct 2022",
      endDate: "May 2023",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "EV Explorer",
      summary: "Vehicle Listing & Detail App.",
      linkPreview: "https://ev-explorer-rho.vercel.app/",
      linkSource: "https://github.com/durranijaved96/ev-explorer",
      image: "/EV.png",
    },
    {
      name: "React Storybook",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "https://my-react-storybook.vercel.app/?path=/story/introduction-introduction--page",
      linkSource: "https://github.com/durranijaved96/my-react-storybook",
      image: "/Storybook.png",
    },
    {
      name: "Foodifie UI",
      summary: "A plateform for making projects and have apple widget system",
      linkPreview: "https://foodifie.vercel.app/",
      linkSource: "https://github.com/durranijaved96/foodifie",
      image: "/Foodifie.png",
    },
  ],
  about: {
    description: `
      I build AI-powered SaaS products: performant React UIs, emissions/ESG dashboards, onboarding flows, LLM chatbots, and design systems. 10+ years in Germany, startup-speed with enterprise quality.
    `,
    image: "/Waqas.jpeg",
  },
};

