import React from 'react'
import { render, screen } from '@testing-library/react'

import IndexPage from '../pages/index'

// gatsby is auto-mocked via __mocks__/gatsby.js
// StaticImage is auto-mocked via __mocks__/gatsby-plugin-image.js

const mockData = {
  site: {
    siteMetadata: {
      title: 'Indie Owls Creative Studio',
      tagline: 'Innovative Software Solutions for the Modern Web.',
      urls: {
        contactForm: 'https://form.jotrain.com/123',
        linkedin: 'https://linkedin.com/company/indie-owls',
      },
    },
  },
}

describe('Homepage Z-pattern layout', () => {
  it('renders all major sections in order', () => {
    render(<IndexPage data={mockData} />)
    const main = document.querySelector('main')
    expect(main).toBeInTheDocument()

    const sections = main.querySelectorAll('section')
    expect(sections.length).toBeGreaterThanOrEqual(4)
  })

  it('renders the hero header', () => {
    render(<IndexPage data={mockData} />)
    const header = document.querySelector('header')
    expect(header).toBeInTheDocument()
    expect(screen.getByText(/you think it\. we build it\./i)).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<IndexPage data={mockData} />)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders the process section', () => {
    render(<IndexPage data={mockData} />)
    expect(screen.getByText('Our Process')).toBeInTheDocument()
  })

  it('renders the contact section', () => {
    render(<IndexPage data={mockData} />)
    expect(screen.getByText(/start the conversation/i)).toBeInTheDocument()
  })

  it('renders the FAQ section', () => {
    render(<IndexPage data={mockData} />)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<IndexPage data={mockData} />)
    expect(screen.getByText(/based in scranton, pa/i)).toBeInTheDocument()
  })
})
