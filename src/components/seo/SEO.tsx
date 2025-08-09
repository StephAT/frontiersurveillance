import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  structuredData?: Record<string, any>;
}

const SEO = ({ title, description, path, structuredData }: SEOProps) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const canonical = typeof window !== "undefined" && !path ? window.location.href : `${origin}${path ?? ""}`;
  const logo = "/lovable-uploads/8bde92d0-f73d-40f7-a296-3c4e08122064.png";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={logo} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={logo} />

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
