import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import { Card, Section, SectionHeading, SectionInner, Stack } from '../components'

const principles = [
  'Strategy, UX, and engineering stay connected from day one.',
  'We scope for momentum, then build with long-term maintainability in mind.',
  'Every engagement is shaped around a clear product goal, not just a feature list.',
]

export function About() {
  return (
    <Section id='about'>
      <SectionInner>
        <Stack $align='center'>
          <div>
            <SectionHeading eyebrow='Agency overview' title='A SaaS product partner for teams that need clarity and execution.'>
              Indie Owls is a client services studio focused on helping founders, operators, and
              growing businesses turn product ideas into launch-ready SaaS experiences.
            </SectionHeading>
            <CopyCard $variant='muted'>
              <p>
                We work like an embedded product team, combining discovery, interface design,
                delivery planning, and engineering to help clients move from fuzzy requirements to
                software that feels purposeful and ready to grow.
              </p>
              <PrincipleList>
                {principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </PrincipleList>
            </CopyCard>
          </div>
          <ImageCard $variant='accent'>
            <StaticImage
              src='../images/robot.jpg'
              alt='Abstract futuristic robot illustration'
              width={500}
              loading='lazy'
              placeholder='blurred'
            />
            <ImageCaption>
              Design for what ships next, while keeping the foundation strong enough for what comes
              after launch.
            </ImageCaption>
          </ImageCard>
        </Stack>
      </SectionInner>
    </Section>
  )
}

const CopyCard = styled(Card)`
  gap: ${({ theme }) => theme.spacing.lg};
`

const PrincipleList = styled.ul`
  color: ${({ theme }) => theme.colors.textMuted};
`

const ImageCard = styled(Card)`
  overflow: hidden;
  align-items: stretch;
  padding: ${({ theme }) => theme.spacing.lg};
`

const ImageCaption = styled.p`
  padding: 0 ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.sm};
`

export default About
