import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'
import * as headerStyles from '../features/Header.css'

globalStyle('*, *:before, *:after', {
  boxSizing: 'border-box',
})

globalStyle('html', {
  scrollBehavior: 'smooth',
})

globalStyle('body', {
  margin: 0,
  background: `linear-gradient(180deg, ${vars.color.canvas} 0%, #ffffff 30%)`,
  color: vars.color.text,
  fontFamily: vars.fontFamily.primary,
  fontWeight: vars.fontWeight.normal,
  fontSize: vars.fontSize.base,
  lineHeight: 1.65,
})

globalStyle('#___gatsby, #gatsby-focus-wrapper', {
  minHeight: '100vh',
})

globalStyle('main, section, footer', {
  width: '100%',
})

globalStyle('img', {
  maxWidth: '100%',
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  color: vars.color.black,
  fontFamily: vars.fontFamily.secondary,
  lineHeight: 1.1,
})

globalStyle('h1', {
  fontSize: vars.fontSize.display,
})

globalStyle('h2', {
  fontSize: `clamp(2rem, 4vw, ${vars.fontSize.pageHeading})`,
})

globalStyle('h3', {
  fontSize: `clamp(1.25rem, 2vw, ${vars.fontSize.large})`,
})

globalStyle('p', {
  margin: 0,
  maxWidth: '65ch',
  color: vars.color.textMuted,
})

globalStyle('ul', {
  margin: 0,
  paddingLeft: '1.25rem',
})

globalStyle('li + li', {
  marginTop: vars.spacing.sm,
})

globalStyle('a', {
  color: vars.color.primaryDark,
  textDecorationThickness: '2px',
  textUnderlineOffset: '0.16em',
})

globalStyle('a:hover', {
  color: vars.color.primary,
})

globalStyle('strong', {
  color: vars.color.primaryDark,
  fontWeight: vars.fontWeight.bold,
})

/* Third-party: Gatsby Image wrapper inside the hero needs explicit sizing */
globalStyle(`${headerStyles.heroImageWrapper} .gatsby-image-wrapper`, {
  width: '100%',
  height: '100%',
})
