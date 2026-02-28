import { Container } from "@/components/ui/container";
import { BlogTextCard } from "./blog-text-card";
import { BlogImageCard } from "./blog-image-card";

const blogPosts = [
  {
    type: "text",
    date: "Aug 21, 2023",
    title: "How to Build a Sustainable House",
    excerpt: "Discover the latest trends and technologies in sustainable construction. Learn how to reduce your carbon footprint while building your dream home.",
    href: "/blog/sustainable-house",
  },
  {
    type: "image",
    image: "/images/services/service-1.jpg",
    date: "Sep 05, 2023",
    title: "The Future of Modern Architecture",
    href: "/blog/modern-architecture",
  },
  {
    type: "text",
    date: "Oct 12, 2023",
    title: "Top 10 Construction Safety Tips",
    excerpt: "Safety first! Explore essential safety protocols and tips for construction sites to ensure a secure working environment for everyone involved.",
    href: "/blog/safety-tips",
  },
  {
    type: "image",
    image: "/images/services/service-1.jpg", 
    date: "Nov 15, 2023",
    title: "Renovating Old Buildings",
    href: "/blog/renovating",
  },
  {
    type: "text",
    date: "Dec 01, 2023",
    title: "Choosing the Right Materials",
    excerpt: "From concrete to timber, selecting the right materials is crucial for longevity. Here is a guide to help you make informed decisions.",
    href: "/blog/materials",
  },
  {
    type: "image",
    image: "/images/services/service-1.jpg", 
    date: "Jan 10, 2024",
    title: "Smart Homes Integration",
    href: "/blog/smart-homes",
  },
];

export function BlogSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-28 bg-background">
      <Container>
        <div className="text-center mb-6 sm:mb-10 md:mb-12 space-y-2">
          <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold px-2">
            NEWS
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 justify-items-stretch">
          {blogPosts.map((post, index) => (
            post.type === "text" ? (
              // @ts-expect-error (Sadəlik üçün)
              <BlogTextCard key={index} {...post} />
            ) : (
              // @ts-expect-error Blog image card props spread
              <BlogImageCard key={index} {...post} />
            )
          ))}
        </div>

      </Container>
    </section>
  );
}