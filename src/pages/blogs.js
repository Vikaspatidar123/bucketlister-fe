import BlogsPageComponent from "@/components/blogs/components";
import SEO from "@/components/common/SEO";
import React from "react";

const BlogsPage = () => {
  return (
    <>
      <SEO
        title="Travel Blog - Stories & Guides"
        description="Explore travel stories, destination guides, and adventure tips from THE BUCKETLISTER. Get inspired for your next journey with our travel blog."
        keywords={[
          "travel blog",
          "travel stories",
          "destination guides",
          "travel tips",
          "adventure blog",
          "travel inspiration",
        ]}
        url="/blogs"
      />
      <BlogsPageComponent />
    </>
  );
};

export default BlogsPage;
