import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../layout/theme'

import { Header } from '../features/Header'
import { About } from '../features/About'
import { Services } from '../features/Services'
import { Process } from '../features/Process'
import { Engagement } from '../features/Engagement'
import { Trust } from '../features/Trust'
import { Contact } from '../features/Contact'
import { Footer } from '../features/Footer'

function withTheme(ui) {
  return <ThemeProvider theme={theme}>{ui}</ThemeProvider>
}

const mockUrls = {
  contactForm: 'https://form.jotform.com/test',
  linkedin: 'https://www.linkedin.com/company/indie-owls-creative/',
}

describe('Header', () => {
  it('renders the hero headline', () => {
    render(withTheme(<Header title='Indie Owls Creative' tagline='SaaS product design and development for client teams' urls={mockUrls} />))
    expect(screen.getByRole('heading', { name: /client-facing saas products designed, shipped, and iterated with you/i })).toBeInTheDocument()
  })

  it('renders the hero CTAs', () => {
    render(withTheme(<Header title='Indie Owls Creative' tagline='Tagline' urls={mockUrls} />))
    expect(screen.getByRole('link', { name: /start a saas project/i })).toHaveAttribute('href', mockUrls.contactForm)
    expect(screen.getByRole('link', { name: /see how we work/i })).toHaveAttribute('href', '#process')
  })

  it('renders highlight pills', () => {
    render(withTheme(<Header title='Indie Owls Creative' tagline='Tagline' urls={mockUrls} />))
    expect(screen.getByText(/mvp to production roadmaps/i)).toBeInTheDocument()
    expect(screen.getByText(/modern react and ai-enabled workflows/i)).toBeInTheDocument()
  })
})

describe('About', () => {
  it('renders the agency overview heading', () => {
    render(withTheme(<About />))
    expect(screen.getByRole('heading', { name: /a saas product partner for teams that need clarity and execution/i })).toBeInTheDocument()
  })

  it('renders the supporting image with updated alt text', () => {
    render(withTheme(<About />))
    expect(screen.getByAltText(/abstract futuristic robot illustration/i)).toBeInTheDocument()
  })
})

describe('Services', () => {
  it('renders the capabilities heading', () => {
    render(withTheme(<Services />))
    expect(screen.getByRole('heading', { name: /what we help saas teams move forward/i })).toBeInTheDocument()
  })

  it('renders the four service cards', () => {
    render(withTheme(<Services />))
    expect(screen.getByText(/saas product strategy and validation/i)).toBeInTheDocument()
    expect(screen.getByText(/ux\/ui systems for complex application flows/i)).toBeInTheDocument()
    expect(screen.getByText(/full-stack delivery and iteration/i)).toBeInTheDocument()
    expect(screen.getByText(/automation and ai-assisted workflows/i)).toBeInTheDocument()
  })
})

describe('Process', () => {
  it('renders the process heading', () => {
    render(withTheme(<Process />))
    expect(screen.getByRole('heading', { name: /how indie owls moves a saas idea into a working product/i })).toBeInTheDocument()
  })

  it('renders the five process stages', () => {
    render(withTheme(<Process />))
    expect(screen.getByText(/discover/i)).toBeInTheDocument()
    expect(screen.getByText(/scope/i)).toBeInTheDocument()
    expect(screen.getByText(/design/i)).toBeInTheDocument()
    expect(screen.getByText(/build/i)).toBeInTheDocument()
    expect(screen.getByText(/launch and iterate/i)).toBeInTheDocument()
  })
})

describe('Engagement', () => {
  it('renders the engagement heading', () => {
    render(withTheme(<Engagement />))
    expect(screen.getByRole('heading', { name: /built for teams that need both product thinking and execution/i })).toBeInTheDocument()
  })

  it('renders best fit and engagement lists', () => {
    render(withTheme(<Engagement />))
    expect(screen.getByRole('heading', { name: /best fit for/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /ways we can help/i })).toBeInTheDocument()
    expect(screen.getByText(/end-to-end mvp planning and product delivery/i)).toBeInTheDocument()
  })
})

describe('Trust', () => {
  it('renders the trust heading', () => {
    render(withTheme(<Trust />))
    expect(screen.getByRole('heading', { name: /credibility through approach, not placeholders/i })).toBeInTheDocument()
  })

  it('renders trust signal cards', () => {
    render(withTheme(<Trust />))
    expect(screen.getByText(/product-minded delivery/i)).toBeInTheDocument()
    expect(screen.getByText(/modern technical foundations/i)).toBeInTheDocument()
    expect(screen.getByText(/clear collaboration cadence/i)).toBeInTheDocument()
  })
})

describe('Contact', () => {
  it('renders the contact heading', () => {
    render(withTheme(<Contact urls={mockUrls} />))
    expect(screen.getByRole('heading', { name: /need a saas product partner for what comes next/i })).toBeInTheDocument()
  })

  it('renders the updated contact CTA', () => {
    render(withTheme(<Contact urls={mockUrls} />))
    expect(screen.getByRole('link', { name: /contact indie owls/i })).toHaveAttribute('href', mockUrls.contactForm)
  })
})

describe('Footer', () => {
  it('renders brand positioning', () => {
    render(withTheme(<Footer />))
    expect(screen.getByText(/client-focused saas product design and development/i)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(withTheme(<Footer />))
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', mockUrls.linkedin)
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/IndieOwls')
    expect(screen.getByRole('link', { name: /twitch/i })).toHaveAttribute('href', 'https://www.twitch.tv/existentialistowl')
  })
})
