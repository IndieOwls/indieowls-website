import { createGlobalTheme } from '@vanilla-extract/css'
import { theme } from './theme'

export const vars = createGlobalTheme(':root', {
  breakpoints: { ...theme.breakpoints },
  color: { ...theme.colors },
  fontFamily: { ...theme.fonts },
  fontSize: { ...theme.fontSizes },
  fontWeight: Object.fromEntries(
    Object.entries(theme.fontWeights).map(([k, v]) => [k, String(v)])
  ),
  spacing: { ...theme.spacing },
  radii: { ...theme.radii },
  shadow: { ...theme.shadows },
  layout: { ...theme.layout },
})
