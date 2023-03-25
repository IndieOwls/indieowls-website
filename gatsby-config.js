/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Indie Owls Creative`,
    tagline: `Next-Generation Software for the Modern Business`,
    siteUrl: `https://www.indieowls.com`,
    urls: {
      contactForm: 'https://form.jotform.com/230766179585167',
      linkedin: 'https://www.linkedin.com/company/indie-owls-creative/',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins:400,600', 'Roboto Slab'],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-netlify',
  ],
}
