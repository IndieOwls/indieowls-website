import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

export const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
	box-sizing: border-box;
}

body {
	/* box */
	background-color: ${({ theme }) => theme.colors.white};
	/* content */
  font-family: ${({ theme }) => theme.fonts.primary};
	font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
}

body, #___gatsby, #gatsby-focus-wrapper, section {
		/* flex */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* box */
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
}

h1 {
	font-family: ${({ theme }) => theme.fonts.secondary};
	font-size: ${({ theme }) => theme.fontSizes.pageHeading};
	padding: 1rem 0;

	small {
		font-size: 1.5rem;
	}
}

h2, h3, h4, h5, h6 {
  font-family: ${({ theme }) => theme.fonts.secondary};
}

.flex_child {
	flex: 1;
}
`

export default GlobalStyle
