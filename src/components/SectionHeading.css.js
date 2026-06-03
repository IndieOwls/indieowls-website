import { style } from '@vanilla-extract/css'
import { vars } from '../layout/theme.css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  maxWidth: vars.layout.narrow,
  margin: `0 auto ${vars.spacing.xxl}`,
})

export const eyebrowText = style({
  margin: 0,
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.bold,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
})

export const eyebrowTextDark = style({
  color: 'rgba(248, 250, 252, 0.72)',
})

export const eyebrowTextDefault = style({
  color: vars.color.primaryDark,
})

export const lead = style({
  margin: '0 auto',
})

export const leadDark = style({
  color: 'rgba(248, 250, 252, 0.8)',
})

export const leadDefault = style({
  color: vars.color.textMuted,
})
