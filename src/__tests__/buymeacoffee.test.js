import React from 'react'
import { render, screen } from '@testing-library/react'

import { BuyMeACoffee } from '../components/BuyMeACoffee'

describe('BuyMeACoffee', () => {
  it('renders the heading', () => {
    render(<BuyMeACoffee username='dennytemple' />)
    expect(screen.getByText('Support me')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<BuyMeACoffee username='dennytemple' />)
    expect(screen.getByText(/consider buying me a coffee/i)).toBeInTheDocument()
  })

  it('renders a CTA link with the coffee URL', () => {
    render(<BuyMeACoffee username='dennytemple' />)
    const link = screen.getByText('Buy me a coffee').closest('a')
    expect(link).toHaveAttribute('href', 'https://buymeacoffee.com/dennytemple')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
  })

  it('accepts a custom label', () => {
    render(<BuyMeACoffee username='dennytemple' label='Support' />)
    expect(screen.getByText('Support')).toBeInTheDocument()
  })
})
