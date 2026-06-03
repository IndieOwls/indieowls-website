import { style } from '@vanilla-extract/css'
import { vars } from '../layout/theme.css'

export const section = style({
  padding: `${vars.spacing.xxxl} 0`,
})

export const toneDefault = style({
  background: 'transparent',
  color: 'inherit',
})

export const toneMuted = style({
  background: vars.color.surfaceMuted,
  color: 'inherit',
})

export const toneAccent = style({
  background: vars.color.canvas,
  color: 'inherit',
})

export const toneDark = style({
  background: vars.color.black,
  color: vars.color.white,
})

export const sectionInner = style({
  width: `min(calc(100% - 2rem), ${vars.layout.maxWidth})`,
  margin: '0 auto',
})

export const eyebrow = style({
  marginBottom: vars.spacing.sm,
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.bold,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: vars.color.highlight,
})
