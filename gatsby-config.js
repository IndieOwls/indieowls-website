/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Indie Owls Creative Studio`,
    tagline: `Innovative Software Solutions for the Modern Web.`,
    siteUrl: `https://www.indieowls.com`,
    urls: {
      contactForm: 'https://form.jotform.com/230766179585167',
      linkedin: 'https://www.linkedin.com/company/indie-owls-creative/',
    },
  },
  plugins: [
    'gatsby-plugin-vanilla-extract',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => 'https://www.indieowls.com',
        serialize: ({ path }) => ({ url: path, changefreq: 'monthly', priority: 0.7 }),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Indie Owls Creative Studio`,
        short_name: `Indie Owls`,
        start_url: `/`,
        background_color: `#ecfeff`,
        theme_color: `#0f766e`,
        display: `standalone`,
        icon: `src/images/android-chrome-192x192.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.indieowls.com',
        sitemap: 'https://www.indieowls.com/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-netlify',
  ],
}
