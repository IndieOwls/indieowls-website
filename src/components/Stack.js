import styled from 'styled-components'

export const Stack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme, $gap = 'xl' }) => theme.spacing[$gap] || $gap};
  align-items: ${({ $align = 'stretch' }) => $align};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(${({ $columns = 2 }) => $columns}, minmax(0, 1fr));
  }
`

export default Stack
