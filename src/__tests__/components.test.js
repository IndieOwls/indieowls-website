import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../layout/theme'

import { Card } from '../components/Card'
import { FlatButton } from '../components/FlatButton'
import { Stack } from '../components/Stack'
import { Section, SectionInner, Eyebrow } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'

function withTheme(ui) {
  return <ThemeProvider theme={theme}>{ui}</ThemeProvider>
}

describe('Card', () => {
  it('renders children', () => {
    render(withTheme(<Card>Card content</Card>))
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('supports visual variants', () => {
    render(withTheme(<Card data-testid='card' $variant='accent'>Accent</Card>))
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })
})

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
        <FlatButton as='a' href='https://example.com' data-testid='link' type='primary'>
          Link
        </FlatButton>
      )
    )
    const el = screen.getByTestId('link')
    expect(el.tagName.toLowerCase()).toBe('a')
    expect(el).toHaveAttribute('href', 'https://example.com')
  })
})

describe('Stack', () => {
  it('renders children', () => {
    render(withTheme(<Stack><span>Item 1</span><span>Item 2</span></Stack>))
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })
})

describe('Section primitives', () => {
  it('renders section wrappers and eyebrow text', () => {
    render(
      withTheme(
        <Section>
          <SectionInner>
            <Eyebrow>Overview</Eyebrow>
            <SectionHeading eyebrow='Heading label' title='Section title'>
              Section lead text
            </SectionHeading>
          </SectionInner>
        </Section>
      )
    )

    expect(screen.getByText('Overview')).toBeInTheDocument()
    expect(screen.getByText('Heading label')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /section title/i })).toBeInTheDocument()
    expect(screen.getByText('Section lead text')).toBeInTheDocument()
  })
})
