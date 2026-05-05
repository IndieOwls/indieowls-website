import React from 'react'
import styled from 'styled-components'

import { Card, Section, SectionHeading, SectionInner, Stack } from '../components'

const stages = [
  {
    title: 'Discover',
    description: 'Clarify goals, risks, constraints, and the customer workflow the product needs to support first.',
  },
  {
    title: 'Scope',
    description: 'Translate product direction into a practical release plan, delivery priorities, and technical approach.',
  },
  {
    title: 'Design',
    description: 'Create the user experience, system structure, and interface patterns required for confident implementation.',
  },
  {
    title: 'Build',
    description: 'Develop the product in focused increments with room for feedback, refinement, and decisions as the product takes shape.',
  },
  {
    title: 'Launch and iterate',
    description: 'Support release readiness, improvements, and the next cycle of product learning after the first version is in use.',
  },
]

export function Process() {
  return (
    <Section id='process'>
      <SectionInner>
        <SectionHeading eyebrow='Process' title='How Indie Owls moves a SaaS idea into a working product.'>
          Because current in-house products are still evolving, we lead with a transparent process
          that shows how client work gets de-risked and delivered.
        </SectionHeading>
        <Stack $columns={5}>
          {stages.map(({ title, description }, index) => (
            <ProcessCard key={title} $variant='muted'>
              <StepNumber>Step {index + 1}</StepNumber>
              <h3>{title}</h3>
              <p>{description}</p>
            </ProcessCard>
          ))}
        </Stack>
      </SectionInner>
    </Section>
  )
}

const ProcessCard = styled(Card)`
  min-height: 100%;
`

const StepNumber = styled.span`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export default Process
