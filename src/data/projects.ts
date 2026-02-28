export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  year: string;
  area: string;
  client: string;
  duration: string;
  gallery: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "modern-city-center",
    title: "Modern City Center",
    category: "Commercial",
    location: "Baku, Azerbaijan",
    image: "/images/projects/project-1.jpg",
    year: "2024",
    area: "12,500 m²",
    client: "Private Developer",
    duration: "18 months",
    description:
      "A landmark commercial development in the heart of Baku, combining retail, office space, and premium amenities. ZEST Development delivered full turnkey construction with strict adherence to international standards, sustainable materials, and innovative facade solutions. The project has become a reference for modern commercial architecture in the region.",
    gallery: [
      "/images/projects/project-1.jpg",
      "/images/projects/project-2.jpg",
      "/images/projects/project-3.jpg",
    ],
    highlights: [
      "LEED-oriented design and execution",
      "Integrated retail and office spaces",
      "Underground parking and smart building systems",
      "Landscaped plaza and public areas",
    ],
  },
  {
    slug: "skyline-residence",
    title: "Skyline Residence",
    category: "Residential",
    location: "Sumqayit, Azerbaijan",
    image: "/images/projects/project-2.jpg",
    year: "2023",
    area: "8,200 m²",
    client: "Residential Holding",
    duration: "14 months",
    description:
      "High-rise residential complex with panoramic views, premium finishes, and community facilities. From foundation to handover, our team managed all phases including structure, MEP, facade, and interior common areas. The building offers a mix of one- to four-bedroom units with high-end specifications.",
    gallery: [
      "/images/projects/project-2.jpg",
      "/images/projects/project-1.jpg",
      "/images/projects/project-3.jpg",
    ],
    highlights: [
      "Reinforced concrete structure with seismic design",
      "Premium facade and double-glazed units",
      "Rooftop terrace and fitness center",
      "24/7 security and smart access",
    ],
  },
  {
    slug: "eco-green-villa",
    title: "Eco Green Villa",
    category: "Architecture",
    location: "Ganja, Azerbaijan",
    image: "/images/projects/project-3.jpg",
    year: "2023",
    area: "1,850 m²",
    client: "Private Client",
    duration: "10 months",
    description:
      "Sustainable villa project focusing on energy efficiency, natural materials, and integration with the landscape. ZEST Development handled architecture coordination, construction, and fit-out, including solar integration and rainwater systems. The result is a low-carbon, comfortable family residence.",
    gallery: [
      "/images/projects/project-3.jpg",
      "/images/projects/project-1.jpg",
      "/images/projects/project-2.jpg",
    ],
    highlights: [
      "Solar panels and energy-efficient envelope",
      "Natural stone and timber elements",
      "Landscaped garden and outdoor living",
      "Rainwater harvesting and greywater reuse",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
