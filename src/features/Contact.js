import React from 'react'
import { Box, FlatButton, Section } from '../components'

export function Contact() {
  return (
    <Section style={{ minHeight: 250 }}>
      <Box>
        <div>
          <h2 style={{ fontSize: '1rem' }}>
            <strong className='strong-color'>Now Available for Hire</strong>
          </h2>
          <FlatButton
            as='a'
            href='https://form.jotform.com/230766179585167'
            style={{
              marginBottom: '1rem',
              background: '#B2DFDB',
              color: '#111',
              border: '2px solid #111',
              maxWidth: 300,
            }}>
            Contact Us
          </FlatButton>
        </div>
      </Box>
    </Section>
  )
}

export default Contact
