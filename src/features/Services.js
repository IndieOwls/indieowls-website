import React from 'react'
import styled from 'styled-components'
import { Card, Stack } from '../components'

export function Services() {
  return (
    <section>
      <Stack>
        <Card style={{ padding: '5rem 0' }}>
          <h2>Our Services</h2>
          <p>
            At <strong>Indie Owls Creative</strong>, we pride ourselves on delivering an extensive
            array of software solutions tailored to your unique needs.
          </p>
        </Card>
      </Stack>
      <Stack>
        <NestedCard style={{ background: '#4DB6AC' }}>
          <h3>
            <span>1 - Javascript and React</span>
          </h3>
          <p>
            Expert-level coding and seamless functionality for all of your cross-platform needs.
            Scalable, secure, and reliable.
          </p>
        </NestedCard>
        <NestedCard style={{ background: '#FCF5E5' }}>
          <h3>
            <span>2 - Next-generation Features</span>
          </h3>
          <p>
            Innovative functionality utilizing the latest technologies to deliver unique user
            experiences. From AR/VR to AI and beyond, we've got you covered.
          </p>
        </NestedCard>
        <NestedCard style={{ background: '#333333', color: '#eeeeee' }}>
          <h3>
            <span>3 - Agile Product Development</span>
          </h3>
          <p>
            Adapt to changing market needs and stay ahead of the competition. Find your market niche
            and build a product that will stand the test of time. We'll help you get there.
          </p>
        </NestedCard>
      </Stack>
    </section>
  )
}

const NestedCard = styled(Card)`
  height: 350px;
  justify-content: flex-start;
  padding: 3rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 2% 0;
  }
`

export default Services
