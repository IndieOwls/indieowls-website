const React = require('react')

// Destructure out Gatsby-specific props, pass only valid HTML attrs to <img>
const StaticImage = ({ src, alt, imgStyle, style, placeholder, layout, loading, ...rest }) =>
  React.createElement('img', { src, alt, ...rest })

const GatsbyImage = ({ image, alt, imgStyle, style, ...rest }) =>
  React.createElement('img', {
    src: image && image.images && image.images.fallback && image.images.fallback.src,
    alt,
    ...rest,
  })

const getImage = (data) => data && data.childImageSharp && data.childImageSharp.gatsbyImageData
const getSrc = (data) => data && data.childImageSharp && data.childImageSharp.src

module.exports = { StaticImage, GatsbyImage, getImage, getSrc }
