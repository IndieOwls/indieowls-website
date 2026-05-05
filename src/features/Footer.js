import React from 'react'
import styled from 'styled-components'

import { Card, SectionInner, Stack } from '../components'

export function Footer() {
  return (
    <StyledFooter>
      <SectionInner>
        <Stack>
          <CardList as='ul' $variant='muted'>
            <li>
              <strong>Indie Owls Creative</strong>
            </li>
            <li>A SaaS Product Development Company.</li>
            <li>Copyright © {new Date().getFullYear()} Indie Owls Creative, LLC.</li>
          </CardList>
          <CardList as='ul' $variant='muted'>
            <strong>Connect</strong>
            <li>
              <a
                href='https://www.linkedin.com/company/indie-owls-creative/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href='https://github.com/IndieOwls' target='_blank' rel='noopener noreferrer'>
                GitHub
              </a>
            </li>
          </CardList>
        </Stack>
      </SectionInner>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 0 0 ${({ theme }) => theme.spacing.xxxl};
`

const CardList = styled(Card)`
  list-style: none;
  padding-left: ${({ theme }) => theme.spacing.xl};
`

export default Footer
