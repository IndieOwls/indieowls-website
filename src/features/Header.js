import React from 'react'
import styled from 'styled-components'

import { FlatButton, SectionInner, Eyebrow } from '../components'
import heroImage from '../images/hero_image.jpg'

export function Header({ title, tagline, urls }) {
  return (
    <StyledHeader as='header'>
      <HeroOverlay>
        <SectionInner>
          <HeroContent>
            <CopyBlock>
              <Eyebrow as='h1' $tone='dark'>
                {title}
              </Eyebrow>
              <HeroStatement>You think it. We build it.</HeroStatement>
              <HeroLead>{tagline}</HeroLead>
              <HeroDescription>
                We partner with startups to shape product strategy and build platforms&mdash;
                without the overhead of a full engineering team.
              </HeroDescription>
              <Actions>
                <FlatButton as='a' href='#contact' type='dark'>
                  How We Work
                </FlatButton>
                <FlatButton as='a' href={urls.contactForm} type='primary'>
                  Launch Your Idea
                </FlatButton>
              </Actions>
            </CopyBlock>
            <Highlights aria-label='Agency highlights'>
              <HighlightPill>Product Strategy & Design</HighlightPill>
              <HighlightPill>
                Built <em>with</em> AI. Not <em>by</em> AI.
              </HighlightPill>
              <HighlightPill>Launch at an Affordable Price</HighlightPill>
            </Highlights>
          </HeroContent>
        </SectionInner>
      </HeroOverlay>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  background:
    radial-gradient(circle at top left, rgba(20, 184, 166, 0.2), transparent 32%),
    linear-gradient(135deg, rgba(15, 23, 42, 0.88), rgba(15, 118, 110, 0.7)),
    url(${heroImage}) no-repeat center center / cover;
`

const HeroOverlay = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.8));
`

const HeroContent = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: end;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 2fr) minmax(${({ theme }) => theme.layout.sidebarMin}, 1fr);
  }
`

const CopyBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 720px;
`

const HeroStatement = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 12px 30px rgba(15, 23, 42, 0.35);
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const HeroLead = styled.small`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: limegreen;
`

const HeroDescription = styled.p`
  color: rgba(248, 250, 252, 0.9);
  font-size: ${({ theme }) => theme.fontSizes.medium};
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`

const Highlights = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`

const HighlightPill = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(15, 23, 42, 0.38);
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  backdrop-filter: blur(8px);
`

export default Header
