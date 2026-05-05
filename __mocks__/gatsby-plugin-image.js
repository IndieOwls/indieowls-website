const React = require('react')

// Mock StaticImage: renders a plain <img> with the provided alt and any other props
const StaticImage = ({ src, alt, ...rest }) =>
  React.createElement('img', { src, alt, ...rest })

// Mock GatsbyImage: renders a plain <img> using the image object's fallback
const GatsbyImage = ({ image, alt, ...rest }) =>
  React.createElement('img', { src: image && image.images && image.images.fallback && image.images.fallback.src, alt, ...rest })

const getImage = (data) => data && data.childImageSharp && data.childImageSharp.gatsbyImageData

module.exports = { StaticImage, GatsbyImage, getImage }
