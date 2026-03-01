export interface NewsItem {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  image?: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "new-commercial-project-baku",
    date: "Feb 15, 2025",
    title: "New commercial project launched in Baku",
    excerpt: "ZEST Development has started construction on a mixed-use commercial building in the heart of Baku, featuring retail and office spaces.",
    category: "Projects",
  },
  {
    slug: "sustainability-certification",
    date: "Jan 28, 2025",
    title: "Sustainability practices recognised",
    excerpt: "Our commitment to resource efficiency and green building practices has been highlighted in the latest industry report.",
    category: "Sustainability",
  },
  {
    slug: "partnership-announcement",
    date: "Jan 10, 2025",
    title: "Partnership with local suppliers",
    excerpt: "We have signed new agreements with local material suppliers to support sustainable sourcing and regional growth.",
    category: "Company",
  },
  {
    slug: "safety-award-2024",
    date: "Dec 20, 2024",
    title: "Safety excellence award 2024",
    excerpt: "Our team has received recognition for outstanding safety performance across all active construction sites.",
    category: "Safety",
  },
  {
    slug: "year-in-review",
    date: "Dec 05, 2024",
    title: "2024 year in review",
    excerpt: "A look back at our key projects, milestones, and the progress we have made together with our clients and partners.",
    category: "Company",
  },
  {
    slug: "residential-handover",
    date: "Nov 22, 2024",
    title: "Residential complex handover completed",
    excerpt: "The Skyline Residence project has been successfully handed over to the client, with all units ready for occupancy.",
    category: "Projects",
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
