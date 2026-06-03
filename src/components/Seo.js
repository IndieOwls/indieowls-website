import React from 'react'

export function Seo({ title, description, path, image }) {
  const siteUrl = 'https://www.indieowls.com'
  const siteName = 'Indie Owls Creative Studio'
  const defaultDescription =
    'SaaS product design and development agency. We partner with startups to shape product strategy and build platforms — without the overhead of a full engineering team.'
  const metaDescription = description || defaultDescription
  const canonical = path ? `${siteUrl}${path}` : siteUrl
  const ogImage = image || `${siteUrl}/android-chrome-192x192.png`

  return (
    <>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name='description' content={metaDescription} />
      <link rel='canonical' href={canonical} />

      {/* Open Graph */}
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:title' content={title || siteName} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:url' content={canonical} />
      <meta property='og:image' content={ogImage} />

      {/* Twitter Card */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title || siteName} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={ogImage} />

      {/* JSON-LD structured data (Organization) */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteName,
          url: siteUrl,
          description: defaultDescription,
          foundingDate: '2023',
          location: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Scranton',
              addressRegion: 'PA',
              addressCountry: 'US',
            },
          },
          sameAs: [
            'https://www.linkedin.com/company/indie-owls-creative/',
            'https://github.com/IndieOwls',
          ],
        })}
      </script>
    </>
  )
}

export default Seo
