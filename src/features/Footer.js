import React from 'react'
import styled from 'styled-components'

import { Box, Section } from '../components'

import heroImage from '../images/hero_image.png'
import robotImage from '../images/robot.jpg'

const StyledFooter = styled(Section)`
  background: #00897b;
  color: #eee;
  font-size: 0.75rem;
  min-height: unset;
  padding-top: 1rem;
  padding-bottom: 4rem;

  a {
    color: #eee;
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
    font-weight: 600;
  }

  @media only screen and (min-width: 700px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export function Footer() {
  return (
    <StyledFooter as='footer'>
      <Box>
        <div>
          <p>© {new Date().getFullYear()} - Indie Owls Creative</p>
          <ul style={{ listStyleType: 'initial' }}>
            <li>
              The <a href={heroImage}>Snow Owl</a> image was generated programmatically with{' '}
              <a href='https://www.midjourney.com/'>Midjourney</a>
            </li>
            <li>
              The <a href={robotImage}>Robot</a> image was created by{' '}
              <a href='https://unsplash.com/@tetrakiss?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Arseny Togulev
              </a>{' '}
              via{' '}
              <a href='https://unsplash.com/photos/MECKPoKJYjM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Unsplash
              </a>{' '}
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <p>Find Us on Social Media</p>
            <li>
              <a
                href='https://www.linkedin.com/company/indie-owls-creative/'
                target='_blank'
                rel='noopener noreferrer'>
                LinkedIn
              </a>
            </li>
            <li>
              <a href='https://github.com/IndieOwls' target='_blank' rel='noopener noreferrer'>
                Github
              </a>
            </li>
            <li>
              <a
                href='https://www.twitch.tv/existentialistowl'
                target='_blank'
                rel='noopener noreferrer'>
                Twitch.tv
              </a>
            </li>
          </ul>
        </div>
      </Box>
    </StyledFooter>
  )
}

export default Footer
