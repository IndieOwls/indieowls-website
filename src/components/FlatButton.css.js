import { style } from '@vanilla-extract/css'
import { vars } from '../layout/theme.css'

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '190px',
  padding: '0.9rem 1.4rem',
  border: '1px solid transparent',
  borderRadius: vars.radii.pill,
  fontSize: '1rem',
  fontWeight: vars.fontWeight.bold,
  lineHeight: 1,
  textDecoration: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, color 0.2s ease, background 0.2s ease, border-color 0.2s ease',
})

export const variantPrimary = style({
  background: vars.color.primary,
  borderColor: vars.color.primary,
  color: vars.color.white,
  ':hover': {
    background: vars.color.primaryDark,
    borderColor: vars.color.primaryDark,
    color: vars.color.white,
    transform: 'translateY(-1px)',
  },
})

export const variantSecondary = style({
  background: vars.color.surface,
  borderColor: vars.color.border,
  color: vars.color.black,
  ':hover': {
    borderColor: vars.color.primary,
    color: vars.color.primaryDark,
    transform: 'translateY(-1px)',
  },
})

export const variantDark = style({
  background: 'transparent',
  borderColor: 'rgba(255, 255, 255, 0.6)',
  color: vars.color.white,
  ':hover': {
    borderColor: vars.color.white,
    color: vars.color.white,
    background: 'rgba(255, 255, 255, 0.08)',
    transform: 'translateY(-1px)',
  },
})
