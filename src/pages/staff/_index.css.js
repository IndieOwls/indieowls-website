import { style } from '@vanilla-extract/css'
import { vars } from '../../layout/theme.css'

export const grid = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.xl,
  justifyContent: 'center',
})

export const staffLink = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.md,
  width: '260px',
  padding: vars.spacing.xl,
  borderRadius: vars.radii.md,
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  boxShadow: vars.shadow.sm,
  textDecoration: 'none',
  textAlign: 'center',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: vars.shadow.md,
  },
})

export const avatar = style({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  overflow: 'hidden',
})

export const name = style({
  margin: 0,
  color: vars.color.black,
})

export const role = style({
  fontSize: vars.fontSize.small,
  margin: 0,
  color: vars.color.textMuted,
})
