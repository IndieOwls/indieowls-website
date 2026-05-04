const React = require('react')

// Mock gatsby module for testing
const gatsby = jest.genMockFromModule('gatsby')

gatsby.graphql = jest.fn()
gatsby.Link = jest.fn().mockImplementation(({ children, to, ...rest }) =>
  React.createElement('a', { href: to, ...rest }, children)
)
gatsby.StaticQuery = jest.fn()
gatsby.useStaticQuery = jest.fn()

module.exports = gatsby
