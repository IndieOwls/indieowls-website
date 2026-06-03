import { style } from '@vanilla-extract/css'
import { vars } from '../layout/theme.css'

export const header = style({
  position: 'relative',
  overflow: 'hidden',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'stretch',
  background: `
    radial-gradient(circle at top left, rgba(20, 184, 166, 0.2), transparent 32%),
    linear-gradient(135deg, rgba(15, 23, 42, 0.88), rgba(15, 118, 110, 0.7))
  `,
})

export const heroImageWrapper = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
})

export const heroOverlay = style({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: `${vars.spacing.xxxl} 0`,
  background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.85) 100%)',
})

export const heroContent = style({
  display: 'grid',
  gap: vars.spacing.xxl,
  alignItems: 'end',
  '@media': {
    'screen and (min-width: 900px)': {
      gridTemplateColumns: `minmax(0, 2fr) minmax(${vars.layout.sidebarMin}, 1fr)`,
    },
  },
})

export const copyBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
  maxWidth: '720px',
})

export const heroStatement = style({
  color: vars.color.white,
  textShadow: '0 12px 30px rgba(15, 23, 42, 0.35)',
  fontSize: '3rem',
  fontWeight: vars.fontWeight.bold,
})

export const heroLead = style({
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.bold,
  fontFamily: vars.fontFamily.secondary,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: vars.color.highlight,
})

export const heroDescription = style({
  color: 'rgba(248, 250, 252, 0.9)',
  fontSize: vars.fontSize.medium,
})

export const actions = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.md,
})

export const highlights = style({
  display: 'grid',
  gap: vars.spacing.md,
})

export const highlightPill = style({
  padding: vars.spacing.lg,
  border: '1px solid rgba(255, 255, 255, 0.14)',
  borderRadius: vars.radii.md,
  background: 'rgba(15, 23, 42, 0.38)',
  color: vars.color.white,
  fontWeight: vars.fontWeight.medium,
  backdropFilter: 'blur(8px)',
})
