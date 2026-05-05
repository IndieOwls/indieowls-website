import React from 'react'
import styled from 'styled-components'

import { FlatButton, SectionInner, Eyebrow } from '../components'
import heroImage from '../images/hero_image.jpg'

const highlights = [
  'From initial planning to fully launched',
  'Cutting-edge Workflows',
  'Built for founders and small teams',
]

export function Header({ title, tagline, urls }) {
  return (
    <StyledHeader as='header'>
      <HeroOverlay>
        <SectionInner>
          <HeroContent>
            <CopyBlock>
              <Eyebrow $tone='dark'>{title}</Eyebrow>
              <HeroTitle>We Build Next-Generation Software for Today's Dreams</HeroTitle>
              <HeroLead>{tagline}</HeroLead>
              <HeroDescription>
                We partner with brands and early-stage founders to shape strategy and build
                platforms without the overhead of a full engineering team.
              </HeroDescription>
              <Actions>
                <FlatButton as='a' href={urls.contactForm} type='primary'>
                  Launch Your Idea
                </FlatButton>
                <FlatButton as='a' href='#process' type='dark'>
                  How We Work
                </FlatButton>
              </Actions>
            </CopyBlock>
            <Highlights aria-label='Agency highlights'>
              {highlights.map((highlight) => (
                <HighlightPill key={highlight}>{highlight}</HighlightPill>
              ))}
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

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 12px 30px rgba(15, 23, 42, 0.35);
`

const HeroLead = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
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
