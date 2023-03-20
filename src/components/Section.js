import styled from 'styled-components'

/**
 * A section styled-component for the home page.
 */
export const Section = styled.section`
  /* box */
  width: 100%;
  margin: 0 auto;
  min-height: 200px;
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* typography */
  h2,
  p {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 700px) {
    min-height: 400px;
  }
`

export default Section
