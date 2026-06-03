import { style } from '@vanilla-extract/css'
import { vars } from '../layout/theme.css'

export const base = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: vars.spacing.md,
  justifyContent: 'flex-start',
  width: '100%',
  padding: vars.spacing.xl,
  borderRadius: vars.radii.md,
  vars: {
    '--card-heading-color': vars.color.black,
    '--card-text-color': vars.color.textMuted,
  },
})

/* Card sub-component base styles */
export const heading = style({
  color: 'var(--card-heading-color)',
  margin: 0,
  fontFamily: vars.fontFamily.secondary,
  lineHeight: 1.1,
  fontSize: `clamp(1.25rem, 2vw, ${vars.fontSize.large})`,
})

export const text = style({
  color: 'var(--card-text-color)',
  margin: 0,
  maxWidth: '65ch',
})

/* Variants */
export const variantDefault = style({
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  boxShadow: vars.shadow.sm,
})

export const variantMuted = style({
  background: vars.color.surfaceMuted,
  border: `1px solid ${vars.color.surfaceStrong}`,
  boxShadow: vars.shadow.sm,
})

export const variantAccent = style({
  background: `linear-gradient(180deg, ${vars.color.primaryLight} 0%, #ffffff 100%)`,
  border: `1px solid ${vars.color.primaryLight}`,
  boxShadow: vars.shadow.md,
})

export const variantDark = style({
  background: vars.color.black,
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: vars.shadow.md,
  color: vars.color.white,
  vars: {
    '--card-heading-color': vars.color.white,
    '--card-text-color': vars.color.white,
  },
})
