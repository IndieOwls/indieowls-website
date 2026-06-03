import { style } from '@vanilla-extract/css'
import { vars } from '../layout/theme.css'

export const card = style({
  textAlign: 'center',
})

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.md,
})

export const description = style({
  fontSize: vars.fontSize.small,
  maxWidth: '32ch',
})

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  padding: '0.75rem 1.5rem',
  borderRadius: vars.radii.pill,
  background: '#ffdd00',
  color: '#0f172a',
  fontWeight: vars.fontWeight.bold,
  fontSize: vars.fontSize.base,
  textDecoration: 'none',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    color: '#0f172a',
  },
})
