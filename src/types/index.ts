export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}
export interface DesignProps {
  name: string;
  summary?: string;
  image: string;
  linkFigma?: string;
  linkPreview?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  designs?: DesignProps[];   
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  linkFigma?: string;

  //  New optional fields
  tech?: string[];          // e.g., ["Next.js", "TypeScript", "Tailwind", "Vercel"]
  impact?: string[];       
  role?: string;            
  year?: string;            
  linkCaseStudy?: string;    
}


export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
// 🔹 Footer Section
export interface NavLink {
  text: string;
  href: string;
}
export interface FooterProps {
  author: string;
  socialLinks: NavLink[];
}