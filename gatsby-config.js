/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Indie Owls Creative Studio`,
    tagline: `Tech Expertise, Product Design, and Agile Development`,
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
