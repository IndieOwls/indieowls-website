import {
  theme,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  spacing,
  radii,
  shadows,
  layout,
} from '../layout/theme'

describe('theme', () => {
  it('exports a theme object', () => {
    expect(theme).toBeDefined()
    expect(typeof theme).toBe('object')
  })

  describe('breakpoints', () => {
    it('has sm breakpoint', () => {
      expect(breakpoints.sm).toBeDefined()
    })
    it('has md breakpoint', () => {
      expect(breakpoints.md).toBeDefined()
    })
    it('has lg breakpoint', () => {
      expect(breakpoints.lg).toBeDefined()
    })
  })

  describe('colors', () => {
    it('has primary color', () => {
      expect(colors.primary).toBeDefined()
    })
    it('has secondary color', () => {
      expect(colors.secondary).toBeDefined()
    })
    it('has white and black', () => {
      expect(colors.white).toBeDefined()
      expect(colors.black).toBeDefined()
    })
    it('has linkedin color', () => {
      expect(colors.linkedin).toBeDefined()
    })
    it('has surface and border colors', () => {
      expect(colors.surface).toBeDefined()
      expect(colors.border).toBeDefined()
    })
  })

  describe('fontSizes', () => {
    it('has base font size', () => {
      expect(fontSizes.base).toBeDefined()
    })
    it('has pageHeading font size', () => {
      expect(fontSizes.pageHeading).toBeDefined()
    })
    it('has siteTitle font size', () => {
      expect(fontSizes.siteTitle).toBeDefined()
    })
    it('has display and small font sizes', () => {
      expect(fontSizes.display).toBeDefined()
      expect(fontSizes.small).toBeDefined()
    })
  })

  describe('fontWeights', () => {
    it('has normal weight', () => {
      expect(fontWeights.normal).toBe(400)
    })
    it('has medium and bold weights', () => {
      expect(fontWeights.medium).toBe(500)
      expect(fontWeights.bold).toBe(600)
    })
  })

  describe('fonts', () => {
    it('has primary font', () => {
      expect(fonts.primary).toMatch(/poppins/i)
    })
    it('has secondary font', () => {
      expect(fonts.secondary).toMatch(/roboto slab/i)
    })
  })

  describe('additional design tokens', () => {
    it('has spacing scale', () => {
      expect(spacing.md).toBeDefined()
      expect(spacing.xxxl).toBeDefined()
    })

    it('has border radii and shadows', () => {
      expect(radii.md).toBeDefined()
      expect(shadows.md).toBeDefined()
    })

    it('has layout width tokens', () => {
      expect(layout.maxWidth).toBeDefined()
      expect(layout.narrow).toBeDefined()
    })
  })
})
