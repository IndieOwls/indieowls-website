import React from 'react'

import { HeaderContainer, HeaderOverlay, HeaderContent } from './containers'
import { Box, FlatButton } from '../components'

export function Header() {
  return (
    <HeaderContainer className='header'>
      <HeaderOverlay className='header_overlay'>
        <Box>
          <HeaderContent className='header_content'>
            <h1 className='header_heading'>
              Indie&nbsp;Owls Creative
              <br />
              <small className='header_tagline'>
                Innovative&nbsp;Software&nbsp;Solutions for the Modern&nbsp;Web
              </small>
            </h1>

            <FlatButton
              as='a'
              href='https://form.jotform.com/230766179585167'
              style={{ marginBottom: '1rem', background: '#B2DFDB', color: '#111' }}>
              Contact Us
            </FlatButton>
            <FlatButton as='a' href='https://www.linkedin.com/company/indie-owls-creative/'>
              Connect on LinkedIn
            </FlatButton>
          </HeaderContent>
        </Box>
      </HeaderOverlay>
    </HeaderContainer>
  )
}

export default Header
