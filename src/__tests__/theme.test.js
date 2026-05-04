import { theme, breakpoints, colors, fonts, fontSizes, fontWeights } from '../layout/theme'

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
  })

  describe('fontSizes', () => {
    it('has base font size', () => {
      expect(fontSizes.base).toBeDefined()
    })
    it('has pageHeading font size (used in GlobalStyle h1)', () => {
      expect(fontSizes.pageHeading).toBeDefined()
    })
    it('has siteTitle font size', () => {
      expect(fontSizes.siteTitle).toBeDefined()
    })
    it('has large font size', () => {
      expect(fontSizes.large).toBeDefined()
    })
    it('has small font size', () => {
      expect(fontSizes.small).toBeDefined()
    })
  })

  describe('fontWeights', () => {
    it('has normal weight', () => {
      expect(fontWeights.normal).toBe(400)
    })
    it('has bold weight', () => {
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
})
