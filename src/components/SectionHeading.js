import React from 'react'
import styled from 'styled-components'

export function SectionHeading({ eyebrow, title, children, align = 'left', tone = 'default' }) {
  return (
    <Wrapper $align={align}>
      {eyebrow ? <EyebrowText $tone={tone}>{eyebrow}</EyebrowText> : null}
      <h2>{title}</h2>
      {children ? <Lead $align={align} $tone={tone}>{children}</Lead> : null}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: ${({ theme }) => theme.layout.narrow};
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  text-align: ${({ $align }) => $align};
`

const EyebrowText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme, $tone }) => ($tone === 'dark' ? 'rgba(248, 250, 252, 0.72)' : theme.colors.primaryDark)};
`

const Lead = styled.p`
  margin: 0 auto;
  color: ${({ theme, $tone }) => ($tone === 'dark' ? 'rgba(248, 250, 252, 0.8)' : theme.colors.textMuted)};
  ${({ $align }) => ($align === 'center' ? 'text-align: center;' : '')}
`

export default SectionHeading
