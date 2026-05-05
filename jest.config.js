module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    // Handle CSS imports (including CSS modules and normalize.css)
    '\\.css$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(jpg|jpeg|png|gif|svg|webp)$': '<rootDir>/__mocks__/fileMock.js',
    // Handle @fontsource imports
    '^@fontsource/.*$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  // Exclude node_modules except for gatsby's modules that need transformation
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby|gatsby-plugin-image|gatsby-script)/)',
  ],
}
