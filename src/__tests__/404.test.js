import React from 'react'
import { render, screen } from '@testing-library/react'

import NotFoundPage from '../pages/404'

describe('404 Page', () => {
  it('renders a 404 status', () => {
    render(<NotFoundPage />)
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('renders page not found message', () => {
    render(<NotFoundPage />)
    expect(screen.getByText('Page not found.')).toBeInTheDocument()
  })

  it('renders a link back to the home page', () => {
    render(<NotFoundPage />)
    const homeLink = screen.getByText('Back home').closest('a')
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('renders the footer', () => {
    render(<NotFoundPage />)
    expect(screen.getByText(/based in scranton, pa/i)).toBeInTheDocument()
  })
})
