import styled from 'styled-components'

/**
 * Flat button styled-component.
 */
export const FlatButton = styled.button`
  /* box */
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({ theme, type = '' }) =>
    type === 'primary' ? theme.colors.primary : 'transparent'};
  border: 1px solid
    ${({ theme, type = '' }) => (type === 'primary' ? theme.colors.white : theme.colors.black)};
  border-radius: 0;
  min-width: 250px;
  /* content */
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme, type = '' }) =>
    type === 'primary' ? theme.colors.white : theme.colors.black};
  text-decoration: none;
  text-align: center;
  /* interaction */
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme, type = '' }) =>
      type === 'primary' ? theme.colors.primaryDark : 'transparent'};
    color: ${({ theme, type = '' }) =>
      type === 'primary' ? theme.colors.white : theme.colors.primaryDark};
  }
`

export default FlatButton
