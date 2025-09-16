import React from "react";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blogData";
import Link from "next/link";
import Head from "next/head";
import styles from "./style.module.scss";
import Image from "next/image";

const BlogPostPage = ({ post }) => {
  if (!post) {
    return <div>Post not found</div>;
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderContent = (content) => {
    // Split content by sections (## headers) and render with images
    const sections = content
      .split(/(?=##\s)/g)
      .filter((section) => section.trim());

    return sections.map((section, index) => {
      const lines = section.split("\n").filter((line) => line.trim());
      const sectionContent = [];

      lines.forEach((line, lineIndex) => {
        if (line.startsWith("## ")) {
          sectionContent.push(
            <h2
              key={`h2-${index}-${lineIndex}`}
              className={styles.sectionHeading}
            >
              {line.replace("## ", "")}
            </h2>,
          );
        } else if (line.trim() && !line.startsWith("#")) {
          sectionContent.push(
            <p key={`p-${index}-${lineIndex}`} className={styles.paragraph}>
              {line.trim()}
            </p>,
          );
        }
      });

      // Add image after certain sections for visual break
      if (index === 2 && post.images && post.images.length > 0) {
        sectionContent.push(
          <div key={`img-${index}`} className={styles.contentImage}>
            <Image
              src={post.images[0].url}
              alt={post.images[0].caption}
              className={styles.inlineImage}
              width={500}
              height={500}
            />
            <p className={styles.imageCaption}>{post.images[0].caption}</p>
          </div>,
        );
      }

      return (
        <div key={`section-${index}`} className={styles.contentSection}>
          {sectionContent}
        </div>
      );
    });
  };

  return (
    <>
      <Head>
        <title>{post.seo.metaTitle}</title>
        <meta name="description" content={post.seo.metaDescription} />
        <meta name="keywords" content={post.seo.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={post.author} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://thebucketlister.com/blogs/${post.slug}`}
        />
        <meta
          property="og:image"
          content={`https://thebucketlister.com${post.featuredImage}`}
        />
        <meta property="og:site_name" content="THE BUCKETLISTER" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta
          name="twitter:image"
          content={`https://thebucketlister.com${post.featuredImage}`}
        />
        <link
          rel="canonical"
          href={`https://thebucketlister.com/blogs/${post.slug}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: `https://thebucketlister.com${post.featuredImage}`,
            url: `https://thebucketlister.com/blogs/${post.slug}`,
            datePublished: post.publishDate,
            dateModified: post.publishDate,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "THE BUCKETLISTER",
              url: "https://thebucketlister.com",
              logo: {
                "@type": "ImageObject",
                url: "https://thebucketlister.com/assets/png/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://thebucketlister.com/blogs/${post.slug}`,
            },
            articleSection: post.category,
            keywords: post.tags.join(", "),
            wordCount: post.content.split(" ").length,
            timeRequired: post.readTime,
          })}
        </script>
      </Head>
      <div className={styles.blogPostPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroImage}>
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={500}
              height={500}
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <div className={styles.container}>
              <div className={styles.breadcrumb}>
                <Link href="/blogs" className={styles.breadcrumbLink}>
                  Blog
                </Link>
                <span className={styles.breadcrumbSeparator}>/</span>
                <span className={styles.breadcrumbCurrent}>{post.title}</span>
              </div>
              <h1 className={styles.heroTitle}>{post.title}</h1>
              <p className={styles.heroExcerpt}>{post.excerpt}</p>
              <div className={styles.heroMeta}>
                <span className={styles.author}>By {post.author}</span>
                <span className={styles.date}>
                  {formatDate(post.publishDate)}
                </span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className={styles.articleContent}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              {/* Article Body */}
              <div className={styles.articleBody}>
                {renderContent(post.content)}

                {/* Tags */}
                <div className={styles.tagSection}>
                  <h3 className={styles.tagTitle}>Tags</h3>
                  <div className={styles.tags}>
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className={styles.sidebar}>
                {/* Table of Contents */}
                <div className={styles.tocSection}>
                  <h3 className={styles.tocTitle}>In This Article</h3>
                  <nav className={styles.toc}>
                    {post.content.match(/##\s(.+)/g)?.map((heading, index) => (
                      <a
                        key={index}
                        href={`#${heading
                          .replace("## ", "")
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className={styles.tocLink}
                      >
                        {heading.replace("## ", "")}
                      </a>
                    )) || []}
                  </nav>
                </div>

                {/* Call to Action */}
                <div className={styles.ctaSection}>
                  <h3 className={styles.ctaTitle}>Ready to Explore?</h3>
                  <p className={styles.ctaText}>
                    Turn your travel dreams into reality with THE
                    BUCKETLISTER&apos;s curated experiences.
                  </p>
                  <Link href="/explore" className={styles.ctaButton}>
                    Explore Trips
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.container}>
              <h2 className={styles.relatedTitle}>Related Articles</h2>
              <div className={styles.relatedGrid}>
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blogs/${relatedPost.slug}`}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedImage}>
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        width={500}
                        height={500}
                      />
                      <div className={styles.relatedOverlay}>
                        <span className={styles.relatedCategory}>
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className={styles.relatedContent}>
                      <h3 className={styles.relatedCardTitle}>
                        {relatedPost.title}
                      </h3>
                      <p className={styles.relatedExcerpt}>
                        {relatedPost.excerpt}
                      </p>
                      <div className={styles.relatedMeta}>
                        <span className={styles.relatedAuthor}>
                          By {relatedPost.author}
                        </span>
                        <span className={styles.relatedReadTime}>
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className={styles.newsletterSection}>
          <div className={styles.container}>
            <div className={styles.newsletterCard}>
              <h2 className={styles.newsletterTitle}>
                Never Miss an Adventure
              </h2>
              <p className={styles.newsletterText}>
                Subscribe to our newsletter for the latest travel stories,
                destination guides, and exclusive offers.
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterButton}>Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const { BLOG_POSTS } = await import("@/data/blogData");
  const paths = BLOG_POSTS.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { getBlogPostBySlug } = await import("@/data/blogData");
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default BlogPostPage;
