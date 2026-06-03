import { style } from '@vanilla-extract/css'
import { vars } from '../layout/theme.css'

export const stack = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: `var(--stack-gap, ${vars.spacing.xl})`,
  alignItems: `var(--stack-align, stretch)`,
  width: '100%',
  '@media': {
    'screen and (min-width: 900px)': {
      gridTemplateColumns: 'repeat(var(--stack-cols, 2), minmax(0, 1fr))',
    },
  },
})
