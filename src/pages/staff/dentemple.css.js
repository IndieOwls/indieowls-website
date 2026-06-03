import { style } from '@vanilla-extract/css'
import { vars } from '../../layout/theme.css'

export const sectionCompact = style({
  padding: `${vars.spacing.xxl} 0`,
})

export const backLink = style({
  display: 'inline-block',
  fontSize: vars.fontSize.small,
  marginBottom: vars.spacing.xl,
})

export const profileHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xl,
  marginBottom: vars.spacing.lg,
})

export const ctaWrapper = style({
  marginTop: vars.spacing.lg,
})

export const avatar = style({
  width: '96px',
  height: '96px',
  minWidth: '96px',
  borderRadius: '50%',
  overflow: 'hidden',
})

export const name = style({
  margin: `0 0 ${vars.spacing.xs}`,
})

export const role = style({
  margin: `0 0 ${vars.spacing.xs}`,
  color: vars.color.primaryDark,
  fontWeight: vars.fontWeight.bold,
  fontSize: vars.fontSize.medium,
})

export const location = style({
  margin: `0 0 ${vars.spacing.sm}`,
  fontSize: vars.fontSize.small,
  color: vars.color.textMuted,
})

export const contactLinks = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexWrap: 'nowrap',
  gap: vars.spacing.md,
  alignItems: 'center',
})

export const contactLinksItem = style({
  marginTop: 0,
})

export const emailLink = style({
  whiteSpace: 'nowrap',
})

export const contactLink = style({
  fontSize: vars.fontSize.small,
})

export const skillsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
  gap: vars.spacing.xl,
})

export const skillCard = style({
  gap: vars.spacing.sm,
})

export const skillCategory = style({
  fontSize: vars.fontSize.base,
})

export const skillList = style({
  margin: 0,
  paddingLeft: '1.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
})

export const skillListItem = style({
  fontSize: vars.fontSize.small,
  color: vars.color.textMuted,
})

export const timeline = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: vars.layout.narrow,
})

export const timelineItem = style({
  position: 'relative',
  paddingLeft: vars.spacing.xl,
  paddingBottom: vars.spacing.xxl,
  selectors: {
    '&::before': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: '0.25rem',
      width: '2px',
      height: '100%',
      background: vars.color.primaryLight,
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      left: '-4px',
      top: '0.25rem',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: vars.color.primary,
    },
    '&:last-child': {
      paddingBottom: 0,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },
})

export const timelineHeader = style({
  marginBottom: vars.spacing.sm,
})

export const timelineTitle = style({
  margin: '0 0 0.125rem',
  fontSize: vars.fontSize.medium,
})

export const timelineMeta = style({
  margin: 0,
  fontSize: vars.fontSize.small,
  color: vars.color.textMuted,
})

export const timelineBody = style({})

export const timelineList = style({
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
})

export const timelineListItem = style({
  fontSize: vars.fontSize.small,
  color: vars.color.textMuted,
  selectors: {
    '&::marker': {
      color: vars.color.primary,
    },
  },
})

export const eduGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: vars.spacing.xl,
})

export const eduMeta = style({
  fontSize: vars.fontSize.small,
  color: vars.color.textMuted,
  margin: `0 0 ${vars.spacing.sm}`,
})
