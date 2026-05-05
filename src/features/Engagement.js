import React from 'react'

import { Card, Section, SectionHeading, SectionInner, Stack } from '../components'

const fitList = [
  'Founders defining an MVP or first commercial release',
  'Small teams modernizing a dated internal or client-facing product',
  'Operators who need a product partner to move from concept to implementation',
]

const engagementList = [
  'End-to-end MVP planning and product delivery',
  'Focused UX and interface redesigns for SaaS workflows',
  'Ongoing product support, iteration, and technical improvements after launch',
]

export function Engagement() {
  return (
    <Section id='engagements' $tone='accent'>
      <SectionInner>
        <SectionHeading eyebrow='Engagement model' title='Built for teams that need both product thinking and execution.' align='center'>
          Indie Owls is a strong fit when you need clarity on what to build, confidence in how it
          should work, and a delivery partner to keep the work moving.
        </SectionHeading>
        <Stack>
          <Card $variant='default'>
            <h3>Best fit for</h3>
            <ul>
              {fitList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card $variant='default'>
            <h3>Ways we can help</h3>
            <ul>
              {engagementList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </Stack>
      </SectionInner>
    </Section>
  )
}

export default Engagement
