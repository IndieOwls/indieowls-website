import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../layout/theme'

import { Card } from '../components/Card'
import { FlatButton } from '../components/FlatButton'
import { Stack } from '../components/Stack'

/**
 * Helper to wrap components in ThemeProvider (styled-components requires it).
 */
function withTheme(ui) {
  return <ThemeProvider theme={theme}>{ui}</ThemeProvider>
}

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------
describe('Card', () => {
  it('renders children', () => {
    render(withTheme(<Card>Card content</Card>))
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies additional style prop', () => {
    render(withTheme(<Card data-testid='card' style={{ color: 'red' }} />))
    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// FlatButton
// ---------------------------------------------------------------------------
describe('FlatButton', () => {
  it('renders children', () => {
    render(withTheme(<FlatButton>Click me</FlatButton>))
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders as a button by default', () => {
    render(withTheme(<FlatButton data-testid='btn'>Press</FlatButton>))
    expect(screen.getByTestId('btn').tagName.toLowerCase()).toBe('button')
  })

  it('renders as an anchor when "as" prop is "a"', () => {
    render(
      withTheme(
        <FlatButton as='a' href='https://example.com' data-testid='link'>
          Link
        </FlatButton>
      )
    )
    const el = screen.getByTestId('link')
    expect(el.tagName.toLowerCase()).toBe('a')
    expect(el).toHaveAttribute('href', 'https://example.com')
  })
})

// ---------------------------------------------------------------------------
// Stack
// ---------------------------------------------------------------------------
describe('Stack', () => {
  it('renders children', () => {
    render(withTheme(<Stack><span>Item 1</span><span>Item 2</span></Stack>))
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })
})
