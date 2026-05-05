import styled, { css } from 'styled-components'

const variants = {
  default: css`
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  `,
  muted: css`
    background: ${({ theme }) => theme.colors.surfaceMuted};
    border: 1px solid ${({ theme }) => theme.colors.surfaceStrong};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  `,
  accent: css`
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.primaryLight} 0%, #ffffff 100%);
    border: 1px solid ${({ theme }) => theme.colors.primaryLight};
    box-shadow: ${({ theme }) => theme.shadows.md};
  `,
  dark: css`
    background: ${({ theme }) => theme.colors.black};
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: ${({ theme }) => theme.shadows.md};
    color: ${({ theme }) => theme.colors.white};

    h3,
    p,
    li,
    strong {
      color: ${({ theme }) => theme.colors.white};
    }
  `,
}

export const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: flex-start;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.md};
  ${({ $variant = 'default' }) => variants[$variant] || variants.default};
`

export default Card
