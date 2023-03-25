import styled from 'styled-components'

export const Stack = styled.div`
  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* box */
  width: 100%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`

export default Stack
