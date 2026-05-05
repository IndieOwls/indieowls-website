import styled from 'styled-components'

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: ${({ theme, $tone = 'default' }) => {
    if ($tone === 'muted') return theme.colors.surfaceMuted
    if ($tone === 'accent') return theme.colors.canvas
    if ($tone === 'dark') return theme.colors.black
    return 'transparent'
  }};
  color: ${({ theme, $tone = 'default' }) => ($tone === 'dark' ? theme.colors.white : 'inherit')};
`

export const SectionInner = styled.div`
  width: min(calc(100% - 2rem), ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;
`

export const Eyebrow = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme, $tone = 'default' }) =>
    $tone === 'dark' ? 'rgba(248, 250, 252, 0.72)' : theme.colors.primaryDark};
`

export default Section
