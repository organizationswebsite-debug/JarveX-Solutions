import { services } from "@/lib/services";
import { fleet } from "@/lib/fleet";
import { posts } from "@/lib/blog";
import { team } from "@/lib/team";

const BASE_URL = "https://www.jarvexsolutions.com";

export default function sitemap() {
  const staticRoutes = [
    "", "/services", "/fleet", "/pricing", "/about", "/team",
    "/testimonials", "/careers", "/blog", "/faq", "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const fleetRoutes = fleet.map((f) => ({
    url: `${BASE_URL}/fleet/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const teamRoutes = team.map((t) => ({
    url: `${BASE_URL}/team/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...fleetRoutes, ...blogRoutes, ...teamRoutes];
}

