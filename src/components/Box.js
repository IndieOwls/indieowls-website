import styled from 'styled-components'

/**
 * A styled-component to space out the content of a row.
 */
export const Box = styled.div`
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box */
  padding: 0;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }
`

export default Box
