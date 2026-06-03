import React from 'react'
import { render, screen } from '@testing-library/react'

import DentempleProfilePage from '../pages/staff/dentemple'

describe('Denny S. Temple profile page', () => {
  it('renders the full name as heading', () => {
    render(<DentempleProfilePage />)
    expect(screen.getByRole('heading', { name: /denny s\. temple/i })).toBeInTheDocument()
  })

  it('renders the role', () => {
    render(<DentempleProfilePage />)
    expect(screen.getByText('Software Contractor')).toBeInTheDocument()
  })

  it('renders the location', () => {
    render(<DentempleProfilePage />)
    expect(screen.getByText(/^U\.S\.A\./)).toBeInTheDocument()
  })

  it('renders a back link to staff listing', () => {
    render(<DentempleProfilePage />)
    const backLink = screen.getByText(/← our team/i)
    expect(backLink.closest('a')).toHaveAttribute('href', '/staff')
  })

  it('renders the summary section', () => {
    render(<DentempleProfilePage />)
    expect(screen.getByText('Summary')).toBeInTheDocument()
  })

  it('renders the skills section', () => {
    render(<DentempleProfilePage />)
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument()
  })

  it('renders skill category cards', () => {
    render(<DentempleProfilePage />)
    expect(screen.getByText('Languages')).toBeInTheDocument()
    expect(screen.getByText('Frameworks & Libraries')).toBeInTheDocument()
    expect(screen.getByText('Tools & Platforms')).toBeInTheDocument()
  })

  it('renders the experience section', () => {
    render(<DentempleProfilePage />)
    expect(screen.getByText('Experience')).toBeInTheDocument()
  })

  it('renders job timeline entries', () => {
    render(<DentempleProfilePage />)
    expect(screen.getAllByText('Job Title').length).toBeGreaterThanOrEqual(3)
  })

  it('renders the education & certifications section', () => {
    render(<DentempleProfilePage />)
    expect(screen.getByText('Education & Certifications')).toBeInTheDocument()
  })

  it('renders the Buy Me a Coffee section', () => {
    render(<DentempleProfilePage />)
    expect(screen.getByText('Support me')).toBeInTheDocument()
  })

  it('renders the Coffee CTA link with correct URL', () => {
    render(<DentempleProfilePage />)
    const coffeeLink = screen.getByText('Buy me a coffee').closest('a')
    expect(coffeeLink).toHaveAttribute(
      'href',
      expect.stringContaining('buymeacoffee.com/dentemple'),
    )
    expect(coffeeLink).toHaveAttribute('target', '_blank')
  })

  it('renders the footer', () => {
    render(<DentempleProfilePage />)
    expect(screen.getByText(/based in scranton, pa/i)).toBeInTheDocument()
  })
})
