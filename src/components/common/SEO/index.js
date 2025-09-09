import Head from 'next/head';
import { generateSEOTags } from '@/utils/seo';

const SEO = ({
  title,
  description,
  keywords = [],
  url,
  image,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noIndex = false,
  structuredData = null,
  additionalMetaTags = []
}) => {
  const seoData = generateSEOTags({
    title,
    description,
    keywords,
    url,
    image,
    type,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
    noIndex
  });

  return (
    <Head>
      <title>{seoData.title}</title>
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.canonicalUrl} />
      
      {/* Standard Meta Tags */}
      {seoData.metaTags.map((tag, index) => {
        if (tag.name) {
          return <meta key={`${tag.name}-${index}`} name={tag.name} content={tag.content} />;
        } else if (tag.property) {
          return <meta key={`${tag.property}-${index}`} property={tag.property} content={tag.content} />;
        }
        return null;
      })}
      
      {/* Additional Meta Tags */}
      {additionalMetaTags.map((tag, index) => {
        if (tag.name) {
          return <meta key={`additional-${tag.name}-${index}`} name={tag.name} content={tag.content} />;
        } else if (tag.property) {
          return <meta key={`additional-${tag.property}-${index}`} property={tag.property} content={tag.content} />;
        }
        return null;
      })}
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Favicon and Apple Touch Icons */}
      <link rel="icon" href="/assets/png/logo2.png" />
      <link rel="apple-touch-icon" href="/assets/png/logo2.png" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//d39lxglzvkql6.cloudfront.net" />
      
      {/* Preconnect for Critical Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

export default SEO;