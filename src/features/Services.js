import React from 'react'

import { Box, Section } from '../components'
import { ServicesList, ServicesListItem } from './containers'

export function Services() {
  return (
    <Section>
      <Box style={{ padding: '50px 0' }}>
        <div>
          <h2>Our Services</h2>
          <p className='bold center'>
            At <strong className='strong-color'>Indie Owls Creative</strong>, we pride ourselves on
            delivering an extensive array of software solutions tailored to your unique needs.
          </p>
        </div>
      </Box>
      <ServicesList>
        <ServicesListItem style={{ background: '#4F4F4F', color: '#eee' }}>
          <h3>
            <span className='bold'>1 - Javascript and React</span>
          </h3>
          <p>
            Expert-level coding and seamless functionality for all of your cross-platform needs.
            Scalable, secure, and reliable.
          </p>
        </ServicesListItem>
        <ServicesListItem style={{ background: '#E8EAED' }}>
          <h3>
            <span className='bold'>2 - Next-generation Features</span>
          </h3>
          <p>
            Innovative functionality utilizing the latest technologies to deliver unique user
            experiences. From AR/VR to AI and beyond, we've got you covered.
          </p>
        </ServicesListItem>
        <ServicesListItem style={{ background: '#111', color: '#eee' }}>
          <h3>
            <span className='bold'>3 - Agile Product Development</span>
          </h3>
          <p>
            Adapt to changing market needs and stay ahead of the competition. Find your market niche
            and build a product that will stand the test of time. We'll help you get there.
          </p>
        </ServicesListItem>
      </ServicesList>
    </Section>
  )
}

export default Services
