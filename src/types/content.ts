export type PlantMaterialType = 'Living Plants' | 'Artificial Plants';

export type ProjectCategory =
  | 'Residential'
  | 'Commercial'
  | 'Public & Exhibition';

export type GallerySize = 'lg' | 'md' | 'sm';
export type GalleryAspectRatio = 'landscape' | 'square' | 'portrait';

export type ProjectBlock =
  | { id: string; type: 'subtitle'; content: string }
  | { id: string; type: 'text'; content: string }
  | { id: string; type: 'image'; src: string; alt: string; caption?: string }
  | { id: string; type: 'drawing'; src: string; alt: string; title: string; caption?: string }
  | { id: string; type: 'designProcess'; title: string; steps: string[] }
  | { id: string; type: 'constructionProcess'; title: string; summary: string; details: string[] };

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  location: string;
  year: string;
  category: ProjectCategory;
  clientOrLead: string;
  contribution: string;
  plantMaterial: PlantMaterialType;
  plantPalette: string[];
  coverImage: string;
  coverAlt: string;
  summary: string;
  // Asymmetric gallery presentation metadata (CMS-ready)
  gallerySize: GallerySize;
  aspectRatio: GalleryAspectRatio;
  order: number;
  featuredOnHome: boolean;
  featuredOrder?: number;
  // Structured overview metadata
  overview: {
    background: string;
    siteCondition: string;
    concept: string;
    plantingAndSpace: string;
    processSummary: string;
    maintenance: string;
  };
  blocks: ProjectBlock[];
}

export type JournalCategory = 'GARDEN' | 'PLANTS' | 'DESIGN' | 'NOTES';
export type JournalWritingMode = 'quick' | 'editorial';

export type JournalBlock =
  | { id: string; type: 'subtitle'; content: string }
  | { id: string; type: 'text'; content: string }
  | { id: string; type: 'quote'; content: string; attribution?: string }
  | { id: string; type: 'image'; src: string; alt: string; caption?: string }
  | { id: string; type: 'gallery'; images: { src: string; alt: string; caption?: string }[] };

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: JournalCategory;
  writingMode: JournalWritingMode;
  coverImage: string;
  coverAlt: string;
  lead: string;
  aspectRatio: GalleryAspectRatio;
  blocks: JournalBlock[];
  relatedSlugs: string[];
}

export interface SiteSettings {
  brandName: string;
  wordmarkFirst: string;
  wordmarkSecond: string;
  studioTitle: string;
  tagline: string;
  contact: {
    email: string;
    instagramUrl: string;
    naverBlogUrl: string;
    showEmail: boolean;
    showInstagram: boolean;
    showNaverBlog: boolean;
  };
}

export interface HomeContent {
  hero: {
    image: string;
    imageAlt: string;
    studioLabel: string;
    headlineKo: string;
    headlineEn: string;
  };
  introduction: {
    headline: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  contactBanner: {
    headline: string;
    subcopy: string;
  };
}

export interface PhilosophyItem {
  id: string;
  indexLabel: string;
  titleEn: string;
  titleKo: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface CareerEntry {
  period: string;
  organization: string;
  role: string;
  note?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface AboutContent {
  philosophy: PhilosophyItem[];
  profile: {
    name: string;
    title: string;
    bio: string;
  };
  career: {
    professional: CareerEntry[];
    previous: CareerEntry[];
    education: { period: string; detail: string }[];
    awards: { date: string; detail: string }[];
  };
  studio: {
    title: string;
    description: string;
    services: ServiceItem[];
  };
}
