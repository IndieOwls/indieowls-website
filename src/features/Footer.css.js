import { style } from '@vanilla-extract/css'
import { vars } from '../layout/theme.css'

export const footer = style({
  padding: `0 0 ${vars.spacing.xxl}`,
})

export const cardList = style({
  listStyle: 'none',
  paddingLeft: vars.spacing.xl,
})

export const legalRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.sm,
  justifyContent: 'center',
  marginTop: vars.spacing.xxl,
  fontSize: vars.fontSize.small,
  color: vars.color.textMuted,
})

export const legalLink = style({
  fontSize: 'inherit',
})

export const separator = style({
  color: vars.color.border,
})
