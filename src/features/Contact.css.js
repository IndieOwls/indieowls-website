import { style } from '@vanilla-extract/css'
import { vars } from '../layout/theme.css'

export const calloutCard = style({
  padding: vars.spacing.xxl,
})

export const actionColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
})

export const inquiryList = style({
  color: vars.color.textMuted,
})
