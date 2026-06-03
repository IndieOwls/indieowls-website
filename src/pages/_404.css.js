import { style } from '@vanilla-extract/css'
import { vars } from '../layout/theme.css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.lg,
  padding: `${vars.spacing.xxxl} 0`,
})

export const mutedCode = style({
  fontSize: '4rem',
  fontWeight: vars.fontWeight.bold,
  color: vars.color.surfaceStrong,
  fontFamily: vars.fontFamily.secondary,
  lineHeight: 1,
})

export const message = style({
  textAlign: 'center',
})

export const homeLink = style({
  fontSize: vars.fontSize.medium,
})
