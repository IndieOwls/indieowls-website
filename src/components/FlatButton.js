import styled, { css } from 'styled-components'

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
      border-color: ${({ theme }) => theme.colors.primaryDark};
      color: ${({ theme }) => theme.colors.white};
      transform: translateY(-1px);
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primaryDark};
      transform: translateY(-1px);
    }
  `,
  dark: css`
    background: transparent;
    border-color: rgba(255, 255, 255, 0.6);
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      border-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.white};
      background: rgba(255, 255, 255, 0.08);
      transform: translateY(-1px);
    }
  `,
}

export const FlatButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 190px;
  padding: 0.9rem 1.4rem;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  ${({ type = 'secondary' }) => variants[type] || variants.secondary};
`

export default FlatButton
