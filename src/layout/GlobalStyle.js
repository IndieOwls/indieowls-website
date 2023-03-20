import { createGlobalStyle } from 'styled-components'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Poppins:400,600', 'Roboto Slab'],
  },
})

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* end reset */

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: 'Poppins', sans-serif;
	font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #111111;
  background-color: #fff;
}

h1 {
	font-family: 'Roboto Slab', serif;
	font-size: 2rem;
	padding: 1rem 0;

	small {
		font-size: 1rem;
	}
}

h2, h3, h4, h5, h6 {
  font-family: 'Roboto Slab', serif;
	font-size: 0.75rem;
}

p {
	font-size: 1rem;
	padding: 1rem;
}

a {
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
	font-weight: 600;
}

p.bold, span.bold {
	font-weight: 600;
}
p.center, span.center {
	text-align: center;
}
strong {
	font-weight: 600;
}
strong.strong-color {
	color: #00897B;
}
`

export default GlobalStyle
