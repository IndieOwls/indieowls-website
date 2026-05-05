import React from 'react'
import styled from 'styled-components'

import { Card, Section, SectionHeading, SectionInner, Stack } from '../components'

const services = [
  {
    title: 'SaaS product strategy and validation',
    description:
      'Shape the right first release, define the roadmap, and align the product around customer workflows and business goals before engineering momentum is wasted.',
  },
  {
    title: 'UX/UI systems for complex application flows',
    description:
      'Design onboarding, dashboards, permissions, and decision-heavy experiences that feel usable from the first walkthrough to everyday use.',
  },
  {
    title: 'Full-stack delivery and iteration',
    description:
      'Build core product foundations, refine features in small releases, and support launch-readiness with code that stays maintainable as the product grows.',
  },
  {
    title: 'Automation and AI-assisted workflows',
    description:
      'Introduce internal tooling, smart workflows, and pragmatic AI features where they create operational leverage for the product and the team behind it.',
  },
]

export function Services() {
  return (
    <Section id='capabilities' $tone='muted'>
      <SectionInner>
        <SectionHeading eyebrow='Capabilities' title='What we help SaaS teams move forward.' align='center'>
          Each engagement is built around business outcomes, user clarity, and dependable product
          execution instead of disconnected design and development handoffs.
        </SectionHeading>
        <Stack $columns={2}>
          {services.map(({ title, description }, index) => (
            <ServiceCard key={title} $variant={index === 0 ? 'accent' : 'default'}>
              <ServiceNumber>0{index + 1}</ServiceNumber>
              <h3>{title}</h3>
              <p>{description}</p>
            </ServiceCard>
          ))}
        </Stack>
      </SectionInner>
    </Section>
  )
}

const ServiceCard = styled(Card)`
  min-height: 260px;
`

const ServiceNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryDark};
`

export default Services
