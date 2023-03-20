import styled from 'styled-components'

/**
 * Block image styled-component
 */
export const BlockImage = styled.div`
  display: block;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${({ height }) => (height ? height : '100%')};
  width: ${({ width }) => (width ? width : '100%')};
  min-height: 200px;
  min-width: 200px;
`

export default BlockImage
