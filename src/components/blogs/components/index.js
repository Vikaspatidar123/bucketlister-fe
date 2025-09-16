import React, { useState } from "react";
import {
  BLOG_POSTS,
  BLOG_CATEGORIES,
  getBlogPostsByCategory,
} from "@/data/blogData";
import styles from "./style.module.scss";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(BLOG_POSTS);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setFilteredPosts(getBlogPostsByCategory(categoryId));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Head>
        <title>Travel Blogs - Stories & Tips | THE BUCKETLISTER</title>
        <meta
          name="description"
          content="Discover amazing travel stories, destination guides, and expert tips from THE BUCKETLISTER. Explore our collection of travel blogs and get inspired for your next adventure."
        />
        <meta
          name="keywords"
          content="travel blog, destination guides, travel tips, travel stories, adventure blog"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Travel Blog - Stories & Tips | THE BUCKETLISTER"
        />
        <meta
          property="og:description"
          content="Discover amazing travel stories, destination guides, and expert tips from THE BUCKETLISTER."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebucketlister.com/blogs" />
        <meta
          property="og:image"
          content="https://thebucketlister.com/assets/webp/website-banner.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Travel Blog - Stories & Tips | THE BUCKETLISTER"
        />
        <meta
          name="twitter:description"
          content="Discover amazing travel stories, destination guides, and expert tips from THE BUCKETLISTER."
        />
        <meta
          name="twitter:image"
          content="https://thebucketlister.com/assets/webp/website-banner.webp"
        />
        <link rel="canonical" href="https://thebucketlister.com/blogs" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "THE BUCKETLISTER Travel Blog",
            description:
              "Discover amazing travel stories, destination guides, and expert tips from THE BUCKETLISTER.",
            url: "https://thebucketlister.com/blogs",
            publisher: {
              "@type": "Organization",
              name: "THE BUCKETLISTER",
              url: "https://thebucketlister.com",
            },
            blogPost: BLOG_POSTS.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              url: `https://thebucketlister.com/blogs/${post.slug}`,
              datePublished: post.publishDate,
              author: {
                "@type": "Person",
                name: post.author,
              },
              image: post.featuredImage,
            })),
          })}
        </script>
      </Head>
      <div className={styles.blogsPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.backgroundImage}>
            <div className={styles.overlay} />
          </div>
          <div className={styles.content}>
            <div className={styles.container}>
              <h1 className={styles.mainHeading}>
                <span className={styles.line1}>Travel</span>
                <span className={styles.line2}>Blog</span>
              </h1>
              <p className={styles.subtitle}>
                Discover amazing destinations, get travel tips, and read
                inspiring stories from around the world
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className={styles.blogSection}>
          <div className={styles.container}>
            {/* Category Filter */}
            {/* <div className={styles.categoryFilter}>
            <h2 className={styles.filterTitle}>Browse by Category</h2>
            <div className={styles.categoryButtons}>
              {BLOG_CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div> */}

            {/* Featured Post */}
            {selectedCategory === "all" && BLOG_POSTS.length > 0 && (
              <div className={styles.featuredSection}>
                <h2 className={styles.sectionTitle}>Featured Post</h2>
                <div className={styles.featuredPost}>
                  <Link
                    href={`/blogs/${BLOG_POSTS[0].slug}`}
                    className={styles.featuredLink}
                  >
                    <div className={styles.featuredImage}>
                      <Image
                        src={BLOG_POSTS[0].featuredImage}
                        alt={BLOG_POSTS[0].title}
                        width={500}
                        height={500}
                      />
                      {/* <div className={styles.featuredOverlay}>
                      <span className={styles.featuredCategory}>{BLOG_POSTS[0].category}</span>
                    </div> */}
                    </div>
                    <div className={styles.featuredContent}>
                      <h3 className={styles.featuredTitle}>
                        {BLOG_POSTS[0].title}
                      </h3>
                      <p className={styles.featuredExcerpt}>
                        {BLOG_POSTS[0].excerpt}
                      </p>
                      <div className={styles.featuredMeta}>
                        <span className={styles.author}>
                          By {BLOG_POSTS[0].author}
                        </span>
                        <span className={styles.date}>
                          {formatDate(BLOG_POSTS[0].publishDate)}
                        </span>
                        <span className={styles.readTime}>
                          {BLOG_POSTS[0].readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}

            {/* Blog Grid */}
            <div className={styles.blogGrid}>
              <h2 className={styles.sectionTitle}>
                {selectedCategory === "all"
                  ? "All Posts"
                  : `${BLOG_CATEGORIES.find((cat) => cat.id === selectedCategory)?.name} Posts`}
              </h2>
              <div className={styles.postsGrid}>
                {filteredPosts
                  .filter(
                    (post, index) => selectedCategory !== "all" || index !== 0,
                  ) // Exclude featured post from grid when showing all
                  .map((post) => (
                    <Link
                      key={post.id}
                      href={`/blogs/${post.slug}`}
                      className={styles.postCard}
                    >
                      <div className={styles.postImage}>
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          width={500}
                          height={500}
                        />
                        {/* <div className={styles.postOverlay}>
                      <span className={styles.postCategory}>{post.category}</span>
                    </div> */}
                      </div>
                      <div className={styles.postContent}>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <p className={styles.postExcerpt}>{post.excerpt}</p>
                        <div className={styles.postMeta}>
                          <span className={styles.author}>
                            By {post.author}
                          </span>
                          <span className={styles.date}>
                            {formatDate(post.publishDate)}
                          </span>
                          <span className={styles.readTime}>
                            {post.readTime}
                          </span>
                        </div>
                        <div className={styles.postTags}>
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className={styles.tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className={styles.noPosts}>
                  <h3>No posts found in this category</h3>
                  <p>Check back later for new content!</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsPage;
