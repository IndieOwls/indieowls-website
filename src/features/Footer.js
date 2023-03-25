import React from 'react'
import styled from 'styled-components'
import { Card, Stack } from '../components'

export function Footer() {
  return (
    <StyledFooter>
      <Stack>
        <CardList as='ul'>
          <strong>Copyright © {new Date().getFullYear()} - Indie Owls Creative</strong>
          <li>
            Snow Owl Image generated with <a href='https://www.midjourney.com/'>Midjourney</a>.
          </li>
          <li>
            Robot Image by{' '}
            <a href='https://unsplash.com/@anilinverse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Adam Lukomski
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/photos/ja9VHwgcABo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
            .
          </li>
        </CardList>
        <CardList as='ul'>
          <strong>Find Us on Social Media</strong>
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
        </CardList>
      </Stack>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.primaryLight};
  width: 100%;
  height: 100%;
  padding: 3rem 0 4rem;
`

const CardList = styled(Card)`
  list-style-type: none;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2rem 5% 2rem;
  padding: 0;

  strong {
    margin-bottom: 1rem;
  }
`

export default Footer
