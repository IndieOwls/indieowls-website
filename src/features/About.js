import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import { Card, Stack } from '../components'

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
        <ImageCard style={{ alignItems: 'flex-end', margin: 0, padding: 0, width: 500 }}>
          <StaticImage
            src='../images/robot.jpg'
            alt='A robot'
            width={500}
            loading='lazy'
            placeholder='blurred'
          />
        </ImageCard>
      </Stack>
    </section>
  )
}

const ImageCard = styled(Card)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`

export default About
