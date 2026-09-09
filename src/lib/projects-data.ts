export interface ProjectDetail {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string | number;
  slug: string;
  title: string;
  category: string;
  description: string;
  launchDate: string;
  image: string;
  scope: string;
  client?: string;
  location?: string;
  year: string;
  paragraphs: string[];
  galleryImages: string[];
  liveUrl?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    category: "Full Stack Platform",
    description:
      "Designed and developed a fully scalable e-commerce platform from scratch, focusing on simplicity and performance, which transformed workflows for over 10,000 users across multiple industries.",
    launchDate: "04.17.2025",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png",
    year: "2025",
    scope: "Scalable Architecture, Real-time APIs, Cloud Infrastructure",
    paragraphs: [
      "Designed and developed a fully scalable e-commerce platform from scratch, focusing on simplicity and performance, which transformed workflows for over 10,000 users across multiple industries.",
      "Engineered with a high-throughput transactional backbone, modern responsive user interface, and resilient data caching to guarantee sub-second interaction times under peak traffic.",
    ],
    galleryImages: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img2.png",
    ],
  },
  {
    id: 2,
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    category: "Fintech & Security",
    description:
      "Built a secure and intuitive mobile banking application with real-time transaction processing, biometric authentication, and seamless user experience for financial institutions.",
    launchDate: "03.15.2025",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img2.png",
    year: "2025",
    scope: "End-to-End Encryption, Biometrics, Real-time Processing",
    paragraphs: [
      "Built a secure and intuitive mobile banking application with real-time transaction processing, biometric authentication, and seamless user experience for financial institutions.",
      "Focused on zero-trust security standards, low-latency API handshakes, and strict accessibility compliance across mobile viewports.",
    ],
    galleryImages: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img2.png",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img3.png",
    ],
  },
  {
    id: 3,
    slug: "ai-content-generator",
    title: "AI Content Generator",
    category: "Artificial Intelligence",
    description:
      "Developed an AI-powered content generation platform that helps marketers create engaging content, with advanced NLP capabilities and customizable templates.",
    launchDate: "02.28.2025",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img3.png",
    year: "2025",
    scope: "LLM Pipeline, Streaming Inference, Vector Search",
    paragraphs: [
      "Developed an AI-powered content generation platform that helps marketers create engaging content, with advanced NLP capabilities and customizable templates.",
      "Implemented asynchronous streaming pipelines, prompt versioning systems, and robust error recovery mechanisms to ensure consistent generation quality.",
    ],
    galleryImages: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img3.png",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png",
    ],
  },
  {
    id: 4,
    slug: "project-management-tool",
    title: "Project Management Tool",
    category: "Enterprise Systems",
    description:
      "Created a comprehensive project management solution with real-time collaboration, task tracking, and analytics dashboard for remote teams and enterprises.",
    launchDate: "01.20.2025",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png",
    year: "2025",
    scope: "Distributed Collaboration, State Sync, Analytics Dashboards",
    paragraphs: [
      "Created a comprehensive project management solution with real-time collaboration, task tracking, and analytics dashboard for remote teams and enterprises.",
      "Built with optimistic UI updates, WebSocket synchronization, and role-based access control for seamless enterprise-grade team collaboration.",
    ],
    galleryImages: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png",
    ],
  },
  {
    id: 5,
    slug: "nordic-retreat",
    title: "Nordic Retreat",
    category: "Architecture & Design",
    description:
      "A minimalist sanctuary that embraces hygge living and the quiet beauty of the Scandinavian forest.",
    launchDate: "2024",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/tiny-home/erik-mclean-g3U7sqtdJ1w-unsplash.jpg",
    year: "2024",
    scope: "Prefab Design, Sustainable Materials, Off-Grid Systems",
    client: "Private Residence",
    location: "Østfold, Norway",
    paragraphs: [
      "Nestled among birch and pine on a quiet Norwegian lakeside, this 380 sq ft tiny home distills Scandinavian design to its essence. Light timber framing and triple-glazed windows maximize natural light during long winters, while a compact footprint leaves the surrounding forest undisturbed.",
      "Every square meter is considered—built-in storage, a fold-down dining table, and a sleeping loft create flexible living without compromise. Heated by a single wood-burning stove and powered by rooftop solar, the retreat operates fully off-grid, embodying the Scandinavian values of simplicity and environmental harmony.",
    ],
    galleryImages: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/tiny-home/erik-mclean-u9-yqtr6YrM-unsplash.jpg",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/tiny-home/erik-mclean-VEaI2ftIV2M-unsplash.jpg",
    ],
  },
];

export function getAllProjects(): ProjectItem[] {
  return PROJECTS_DATA;
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, count = 2): ProjectItem[] {
  return PROJECTS_DATA.filter((p) => p.slug !== currentSlug).slice(0, count);
}
