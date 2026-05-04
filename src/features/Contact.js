import React from 'react'
import styled from 'styled-components'

import { FlatButton } from '../components'

export function Contact({ urls }) {
  return (
    <section style={{ height: 400 }}>
      <h2>
        <strong className='strong-color'>Now Available for Hire</strong>
      </h2>
      <CallToAction as='a' href={urls.contactForm}>
        Contact Us
      </CallToAction>
    </section>
  )
}

const CallToAction = styled(FlatButton)`
  background: ${({ theme }) => theme.colors.secondary};
`

export default Contact
