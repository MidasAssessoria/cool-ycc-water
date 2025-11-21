import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  // Fase 2.3: Preparar para internacionalização
  locale?: 'es' | 'pt' | 'en';
  // Fase 2.1: JSON-LD para produtos
  jsonLd?: object;
}

export const SEOHead = ({ 
  title, 
  description, 
  image, 
  url,
  locale = 'es',
  jsonLd 
}: SEOHeadProps) => {
  const defaultImage = '/assets/hero-waterpark.jpg';
  const defaultUrl = 'https://yccwaterpark.com.py';
  const canonicalUrl = url || defaultUrl;

  return (
    <Helmet>
      <title>{title} | YCC Water Park</title>
      <meta name="description" content={description} />
      
      {/* Fase 2.2: Canonical URL - evita conteúdo duplicado */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Fase 2.3: Hreflang para internacionalização (preparado para futuro) */}
      <link rel="alternate" hrefLang="es" href={`https://yccwaterpark.com.py${url ? new URL(url).pathname : ''}`} />
      <link rel="alternate" hrefLang="pt" href={`https://yccwaterpark.com.py/pt${url ? new URL(url).pathname : ''}`} />
      <link rel="alternate" hrefLang="en" href={`https://yccwaterpark.com.py/en${url ? new URL(url).pathname : ''}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://yccwaterpark.com.py${url ? new URL(url).pathname : ''}`} />
      
      {/* Language */}
      <html lang={locale} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === 'es' ? 'es_PY' : locale === 'pt' ? 'pt_BR' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Fase 2.1: JSON-LD para Rich Snippets */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
