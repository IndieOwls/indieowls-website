import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.canvas} 0%, #ffffff 30%);
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.65;
  }

  #___gatsby, #gatsby-focus-wrapper {
    min-height: 100vh;
  }

  main {
    width: 100%;
  }

  section, footer {
    width: 100%;
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.secondary};
    line-height: 1.1;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.display};
  }

  h2 {
    font-size: clamp(2rem, 4vw, ${({ theme }) => theme.fontSizes.pageHeading});
  }

  h3 {
    font-size: clamp(1.25rem, 2vw, ${({ theme }) => theme.fontSizes.large});
  }

  p {
    margin: 0;
    max-width: 65ch;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  li + li {
    margin-top: ${({ theme }) => theme.spacing.sm};
  }

  a {
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration-thickness: 2px;
    text-underline-offset: 0.16em;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  strong,
  .strong-color {
    color: ${({ theme }) => theme.colors.primaryDark};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  .flex_child {
    flex: 1;
  }
`

export default GlobalStyle
