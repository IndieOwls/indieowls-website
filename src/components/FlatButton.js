import styled from 'styled-components'

/**
 * Flat button styled-component.
 */
export const FlatButton = styled.button`
  /* box */
  background-color: transparent;
  border: 2px solid #eee;
  cursor: pointer;
  min-width: 200px;
  width: 90%;
  padding: 0.5rem 1rem;
  /* flex */
  display: flex;
  justify-content: center;
  align-items: center;
  /* content */
  color: #eee;
  text-transform: uppercase;
  /* transition */
  transition: all 0.2s ease-in-out;
`

export default FlatButton
