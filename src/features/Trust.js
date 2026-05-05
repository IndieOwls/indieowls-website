import React from 'react'

import { Card, Section, SectionHeading, SectionInner, Stack } from '../components'

const trustSignals = [
  {
    title: 'Product-minded delivery',
    description:
      'We frame decisions around customer journeys, release priorities, and long-term usefulness so the work supports an actual product, not just a pile of features.',
  },
  {
    title: 'Modern technical foundations',
    description:
      'Our work leans on modern frontend practices, clear component systems, and scalable implementation choices that support iteration after launch.',
  },
  {
    title: 'Clear collaboration cadence',
    description:
      'Clients get a visible plan, regular checkpoints, and a partnership model that keeps strategy, design, and engineering aligned throughout the engagement.',
  },
]

export function Trust() {
  return (
    <Section id='trust' $tone='dark'>
      <SectionInner>
        <SectionHeading eyebrow='Why teams hire Indie Owls' title='Credibility through approach, not placeholders.' tone='dark' align='center'>
          We are not presenting unfinished internal SaaS products as proof. Instead, we show the
          systems, collaboration style, and technical discipline clients can expect when they work
          with us.
        </SectionHeading>
        <Stack $columns={3}>
          {trustSignals.map(({ title, description }) => (
            <Card key={title} $variant='dark'>
              <h3>{title}</h3>
              <p>{description}</p>
            </Card>
          ))}
        </Stack>
      </SectionInner>
    </Section>
  )
}

export default Trust
