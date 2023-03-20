import React from 'react'

import { BlockImage, Box, Section } from '../components'
import blockImage from '../images/robot.jpg'

export function About() {
  return (
    <Section style={{ background: '#111', color: '#eee' }}>
      <Box>
        <div>
          <h2>Who We Are</h2>
          <p className='bold center'>
            <strong className='strong-color'>Indie Owls Creative</strong> specializes in delivering
            next-generation software for small businesses. We build scalable and innovative products
            and strive for lasting impact.
            <br />
            <br />
            Whatever your <strong className='strong-color'>crazy idea</strong> is, we'll turn it
            into actual reality.
          </p>
        </div>
        <Box>
          <BlockImage src={blockImage} style={{ backgroundPosition: 'top' }} />
        </Box>
      </Box>
    </Section>
  )
}

export default About
