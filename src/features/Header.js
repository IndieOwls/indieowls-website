import React from 'react'
import styled from 'styled-components'

import { FlatButton } from '../components'
import heroImage from '../images/hero_image.png'

export function Header({ title, tagline, urls }) {
  return (
    <StyledHeader as='header' className='header'>
      <HeaderContent className='header_content'>
        <ResponsiveBox className='responsive_box'>
          <div className='flex_child'>
            <SiteTitle>
              {title}
              <br />
              <small className='header_tagline'>{tagline}</small>
            </SiteTitle>
            <FlatButton as='a' href={urls.contactForm} type='primary'>
              Contact Us
            </FlatButton>
            <LinkedinButton as='a' href={urls.linkedin}>
              Connect on LinkedIn
            </LinkedinButton>
          </div>
        </ResponsiveBox>
      </HeaderContent>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  /* flex */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* box */
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 37%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${heroImage}) no-repeat center center scroll;
  /* content */
  text-align: center;
`

const HeaderContent = styled.div`
  /* flex */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* box */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* content */
  background: rgba(0, 0, 0, 0.33);
`

const ResponsiveBox = styled.div`
  /* flex */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
    width: 75%;
    margin-left: 5%;
  )
`

const SiteTitle = styled.h1`
  /* box */
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
  /* content */
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.large};
  letter-spacing: 0.03em;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.siteTitle};
  )
`

const LinkedinButton = styled(FlatButton)`
  background: ${({ theme }) => theme.colors.linkedin};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

export default Header
