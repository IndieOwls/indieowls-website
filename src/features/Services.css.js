import { style } from '@vanilla-extract/css'
import { vars } from '../layout/theme.css'

export const grid = style({
  display: 'grid',
  gap: vars.spacing.xl,
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
})
