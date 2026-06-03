import React from 'react'
import { render, screen } from '@testing-library/react'

import { Card } from '../components/Card'
import { FlatButton } from '../components/FlatButton'
import { Stack } from '../components/Stack'
import { Section, SectionInner, Eyebrow } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('supports the default variant', () => {
    render(<Card data-testid='card'>Default</Card>)
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('supports the accent variant', () => {
    render(<Card data-testid='card' variant='accent'>Accent</Card>)
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('supports the muted variant', () => {
    render(<Card data-testid='card' variant='muted'>Muted</Card>)
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('supports the dark variant', () => {
    render(<Card data-testid='card' variant='dark'>Dark</Card>)
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('falls back to default for unknown variants', () => {
    render(<Card data-testid='card' variant='unknown'>Unknown</Card>)
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('renders as a div by default', () => {
    render(<Card data-testid='card'>Test</Card>)
    expect(screen.getByTestId('card').tagName.toLowerCase()).toBe('div')
  })

  it('renders multiple children', () => {
    render(
      <Card>
        <span>Item 1</span>
        <span>Item 2</span>
      </Card>
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })
})

describe('FlatButton', () => {
  it('renders children', () => {
    render(<FlatButton>Click me</FlatButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders as a button by default', () => {
    render(<FlatButton data-testid='btn'>Press</FlatButton>)
    expect(screen.getByTestId('btn').tagName.toLowerCase()).toBe('button')
  })

  it('renders as an anchor when "as" prop is "a"', () => {
    render(
      <FlatButton as='a' href='https://example.com' data-testid='link' type='primary'>
        Link
      </FlatButton>
    )
    const el = screen.getByTestId('link')
    expect(el.tagName.toLowerCase()).toBe('a')
    expect(el).toHaveAttribute('href', 'https://example.com')
  })

  it('supports the primary variant', () => {
    render(<FlatButton type='primary'>Primary</FlatButton>)
    expect(screen.getByText('Primary')).toBeInTheDocument()
  })

  it('supports the secondary variant', () => {
    render(<FlatButton type='secondary'>Secondary</FlatButton>)
    expect(screen.getByText('Secondary')).toBeInTheDocument()
  })

  it('supports the dark variant', () => {
    render(<FlatButton type='dark'>Dark</FlatButton>)
    expect(screen.getByText('Dark')).toBeInTheDocument()
  })

  it('falls back to secondary for unknown variants', () => {
    render(<FlatButton type='unknown'>Unknown</FlatButton>)
    expect(screen.getByText('Unknown')).toBeInTheDocument()
  })

  it('forwards additional HTML attributes', () => {
    render(
      <FlatButton disabled data-testid='btn' type='primary'>
        Disabled
      </FlatButton>
    )
    expect(screen.getByTestId('btn')).toBeDisabled()
  })
})

describe('Stack', () => {
  it('renders children', () => {
    render(
      <Stack>
        <span>Item 1</span>
        <span>Item 2</span>
      </Stack>
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('accepts a custom column count', () => {
    render(
      <Stack columns={3}>
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </Stack>
    )
    expect(screen.getByText('A')).toBeInTheDocument()
  })

  it('accepts a custom gap size', () => {
    render(
      <Stack gap='lg'>
        <span>Gap test</span>
      </Stack>
    )
    expect(screen.getByText('Gap test')).toBeInTheDocument()
  })

  it('accepts alignment prop', () => {
    render(
      <Stack align='center'>
        <span>Align test</span>
      </Stack>
    )
    expect(screen.getByText('Align test')).toBeInTheDocument()
  })
})

describe('Section primitives', () => {
  it('renders section wrappers and eyebrow text', () => {
    render(
      <Section>
        <SectionInner>
          <Eyebrow>Overview</Eyebrow>
          <SectionHeading eyebrow='Heading label' title='Section title'>
            Section lead text
          </SectionHeading>
        </SectionInner>
      </Section>
    )

    expect(screen.getByText('Overview')).toBeInTheDocument()
    expect(screen.getByText('Heading label')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /section title/i })).toBeInTheDocument()
    expect(screen.getByText('Section lead text')).toBeInTheDocument()
  })

  it('renders a section without eyebrow', () => {
    render(
      <Section>
        <SectionInner>
          <SectionHeading title='No eyebrow'>
            Lead only
          </SectionHeading>
        </SectionInner>
      </Section>
    )
    expect(screen.getByRole('heading', { name: /no eyebrow/i })).toBeInTheDocument()
    expect(screen.getByText('Lead only')).toBeInTheDocument()
  })

  it('renders a section heading without lead children', () => {
    render(
      <Section>
        <SectionInner>
          <SectionHeading title='Title only' />
        </SectionInner>
      </Section>
    )
    expect(screen.getByRole('heading', { name: /title only/i })).toBeInTheDocument()
  })

  it('supports muted section tone', () => {
    render(<Section tone='muted' data-testid='section'>Muted</Section>)
    expect(screen.getByTestId('section')).toBeInTheDocument()
  })

  it('supports accent section tone', () => {
    render(<Section tone='accent' data-testid='section'>Accent</Section>)
    expect(screen.getByTestId('section')).toBeInTheDocument()
  })

  it('supports dark section tone', () => {
    render(<Section tone='dark' data-testid='section'>Dark</Section>)
    expect(screen.getByTestId('section')).toBeInTheDocument()
  })

  it('renders as <section> by default', () => {
    render(<Section data-testid='section'>Test</Section>)
    expect(screen.getByTestId('section').tagName.toLowerCase()).toBe('section')
  })
})
