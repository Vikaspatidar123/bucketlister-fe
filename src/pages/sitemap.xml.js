import { BLOG_POSTS } from "@/data/blogData";
import { TRAVEL_PACKAGES_DATA } from "@/components/TravelPackagesSection/constants";

const SITE_URL = "https://thebucketlister.com";

function generateSiteMap() {
  // Get current date for lastmod
  const currentDate = new Date().toISOString();

  // Static pages with their priorities and change frequencies
  const staticPages = [
    { url: "", priority: "1.0", changefreq: "daily" }, // Home page
    { url: "/explore", priority: "0.9", changefreq: "daily" },
    { url: "/blogs", priority: "0.8", changefreq: "weekly" },
    { url: "/contact-us", priority: "0.7", changefreq: "monthly" },
    { url: "/about", priority: "0.6", changefreq: "monthly" },
    { url: "/terms-and-conditions", priority: "0.5", changefreq: "yearly" },
    { url: "/privacy-policy", priority: "0.5", changefreq: "yearly" },
    { url: "/cancellation-policy", priority: "0.5", changefreq: "yearly" },
    { url: "/reels", priority: "0.6", changefreq: "weekly" },
  ];

  // Generate blog URLs
  const blogUrls =
    BLOG_POSTS?.map((post) => ({
      url: `/blogs/${post.slug}`,
      priority: "0.7",
      changefreq: "monthly",
      lastmod: post.publishDate || currentDate,
    })) || [];

  // Generate trip URLs (if TRAVEL_PACKAGES_DATA exists)
  const tripUrls =
    TRAVEL_PACKAGES_DATA?.map((trip) => ({
      url: `/trip?id=${trip.id}`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: currentDate,
    })) || [];

  // Combine all URLs
  const allUrls = [
    ...staticPages.map((page) => ({
      ...page,
      lastmod: currentDate,
    })),
    ...blogUrls,
    ...tripUrls,
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
        .map(({ url, priority, changefreq, lastmod }) => {
          return `
            <url>
              <loc>${SITE_URL}${url}</loc>
              <lastmod>${lastmod}</lastmod>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make the request to the sitemap
  const sitemap = generateSiteMap();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );
  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
