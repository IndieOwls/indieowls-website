import styled from 'styled-components'

import heroImage from '../images/hero_image.png'

export const HeaderContainer = styled.header`
  /* box */
  position: relative;
  background-image: url(${"'"}${heroImage}${"'"});
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 100%;
`

export const HeaderOverlay = styled.div`
  /* box */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  & > div {
    height: 90%;
  }

  @media only screen and (min-width: 700px) {
    & > div {
      align-items: center;
      width: 66%;
    }
  }
`

export const HeaderContent = styled.div`
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* box */
  position: relative;
  padding: 1.5rem 0;
  width: 100%;
  max-width: 400px;
  /* content */
  color: #eee;
  line-height: 1;
  text-align: center;

  small {
    line-height: 1;
  }
`

export const ServicesList = styled.ul`
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box */
  padding: 0;
  width: 100%;

  @media only screen and (min-width: 700px) {
    flex-direction: row;

    & > li {
      min-height: 300px;
    }
  }
`

export const ServicesListItem = styled.li`
  /* box */
  padding: 3rem 1.5rem 0;
  /* flex */
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    padding: 0 0 1rem;
  }
  p {
    font-size: 0.75rem;
  }
`
