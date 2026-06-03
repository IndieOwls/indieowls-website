import React from 'react'
import { render } from '@testing-library/react'
import { Seo } from '../components/Seo'

describe('Seo', () => {
  it('renders a title', () => {
    render(<Seo title='Test Page' />)
    expect(document.title).toMatch(/Test Page \| Indie Owls Creative Studio/)
  })

  it('renders meta description', () => {
    const { container } = render(<Seo title='Test' description='Custom description' />)
    expect(container.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      'Custom description',
    )
  })

  it('falls back to a default description', () => {
    const { container } = render(<Seo title='Test' />)
    expect(container.querySelector('meta[name="description"]')).toBeInTheDocument()
  })

  it('renders a canonical link', () => {
    const { container } = render(<Seo title='Test' path='/test-page' />)
    expect(container.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      expect.stringContaining('/test-page'),
    )
  })

  it('renders Open Graph tags', () => {
    const { container } = render(<Seo title='Test' />)
    expect(container.querySelector('meta[property="og:title"]')).toHaveAttribute('content', 'Test')
    expect(container.querySelector('meta[property="og:description"]')).toBeInTheDocument()
    expect(container.querySelector('meta[property="og:url"]')).toHaveAttribute(
      'content',
      expect.stringContaining('indieowls.com'),
    )
  })

  it('renders Twitter card tags', () => {
    const { container } = render(<Seo title='Test' />)
    expect(container.querySelector('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary_large_image',
    )
  })

  it('renders JSON-LD structured data', () => {
    const { container } = render(<Seo />)
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).toBeInTheDocument()
    const data = JSON.parse(script.textContent)
    expect(data['@type']).toBe('Organization')
    expect(data.name).toMatch(/Indie Owls/)
    expect(data.location.address.addressLocality).toBe('Scranton')
  })
})
