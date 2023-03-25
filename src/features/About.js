import React from 'react'
import styled from 'styled-components'

import { Card, Stack } from '../components'
import blockImage from '../images/robot.jpg'

export function About() {
  return (
    <section>
      <Stack>
        <Card style={{ flex: 'unset' }}>
          <h2>Who We Are</h2>
          <p>
            <strong className='strong-color'>Indie Owls Creative</strong> specializes in delivering
            next-generation software for small businesses. We build scalable and innovative products
            and strive for lasting impact.
            <br />
            <br />
            Whatever your <strong className='strong-color'>crazy idea</strong> is, we'll turn it
            into actual reality.
          </p>
        </Card>
        <Card style={{ alignItems: 'flex-end', margin: 0, padding: 0, width: 500 }}>
          <DecorativeImage src={blockImage} />
        </Card>
      </Stack>
    </section>
  )
}

const DecorativeImage = styled.img`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    width: 500px;
  }
`

export default About
