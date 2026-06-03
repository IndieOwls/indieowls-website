import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Header } from '../features/Header'
import { Contact } from '../features/Contact'
import { Footer } from '../features/Footer'
import { Services } from '../features/Services'
import { Process } from '../features/Process'
import { Faq } from '../features/Faq'

const defaultSiteData = {
  title: 'Indie Owls Creative Studio',
  tagline: 'Innovative Software Solutions for the Modern Web.',
  urls: {
    contactForm: 'https://form.jotform.com/230766179585167',
    linkedin: 'https://www.linkedin.com/company/indie-owls-creative/',
  },
}

describe('Header', () => {
  it('renders the company title in an eyebrow heading', () => {
    render(<Header {...defaultSiteData} />)
    const heading = screen.getByRole('heading', { name: /indie owls creative studio/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders the tagline as lead text', () => {
    render(<Header {...defaultSiteData} />)
    expect(
      screen.getByText(/innovative software solutions for the modern web/i),
    ).toBeInTheDocument()
  })

  it('renders three highlight pills', () => {
    render(<Header {...defaultSiteData} />)
    const highlights = screen.getByLabelText('Agency highlights')
    expect(highlights).toBeInTheDocument()
    expect(highlights.children.length).toBe(3)
  })

  it('renders both CTA action buttons', () => {
    render(<Header {...defaultSiteData} />)
    expect(screen.getByText('How We Work')).toBeInTheDocument()
    expect(screen.getByText('Launch Your Idea')).toBeInTheDocument()
  })

  it('renders the Launch button with the external contact URL', () => {
    render(<Header {...defaultSiteData} />)
    const launchLink = screen.getByText('Launch Your Idea').closest('a')
    expect(launchLink).toHaveAttribute('href', defaultSiteData.urls.contactForm)
  })

  it('renders as a <header> element', () => {
    render(<Header {...defaultSiteData} />)
    const header = document.querySelector('header')
    expect(header).toBeInTheDocument()
  })

  it('renders without urls gracefully', () => {
    const { container } = render(
      <Header title={defaultSiteData.title} tagline={defaultSiteData.tagline} urls={{}} />,
    )
    expect(container.querySelector('header')).toBeInTheDocument()
  })
})

describe('Contact', () => {
  it('renders the eyebrow label', () => {
    render(<Contact urls={defaultSiteData.urls} />)
    expect(screen.getByText(/start the conversation/i)).toBeInTheDocument()
  })

  it('renders the section heading title', () => {
    render(<Contact urls={defaultSiteData.urls} />)
    expect(screen.getByRole('heading', { name: /burned by ai slop/i })).toBeInTheDocument()
  })

  it('renders the lead text', () => {
    render(<Contact urls={defaultSiteData.urls} />)
    expect(screen.getByText(/just-right engineering recipes/i)).toBeInTheDocument()
  })

  it('renders all four inquiry-list items', () => {
    render(<Contact urls={defaultSiteData.urls} />)
    expect(screen.getByText(/prototypes launched in weeks/i)).toBeInTheDocument()
    expect(screen.getByText(/intelligent use of ai agentic workflows/i)).toBeInTheDocument()
    expect(screen.getByText(/scrum team certified/i)).toBeInTheDocument()
    expect(screen.getByText(/guaranteed made in the u.s.a/i)).toBeInTheDocument()
  })

  it('renders a CTA linking to the contact form', () => {
    render(<Contact urls={defaultSiteData.urls} />)
    const cta = screen.getByText(/get in touch today/i).closest('a')
    expect(cta).toHaveAttribute('href', defaultSiteData.urls.contactForm)
  })

  it('has the contact section as an anchor target', () => {
    render(<Contact urls={defaultSiteData.urls} />)
    const section = document.querySelector('section#contact')
    expect(section).toBeInTheDocument()
  })

  it('renders with empty urls gracefully', () => {
    render(<Contact urls={{}} />)
    expect(screen.getByText(/start the conversation/i)).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders the company name as a bold label', () => {
    render(<Footer />)
    expect(screen.getByText(/indie owls creative studio/i)).toBeInTheDocument()
  })

  it('renders the location text', () => {
    render(<Footer />)
    expect(screen.getByText(/based in scranton, pa/i)).toBeInTheDocument()
  })

  it('renders a legal row with the current year', () => {
    const thisYear = new Date().getFullYear()
    render(<Footer />)
    expect(screen.getByText(new RegExp(thisYear.toString()))).toBeInTheDocument()
  })

  it('renders a Privacy Policy link', () => {
    render(<Footer />)
    const link = screen.getByText('Privacy Policy').closest('a')
    expect(link).toHaveAttribute('href', '/privacy')
  })

  it('renders a Terms of Service link', () => {
    render(<Footer />)
    const link = screen.getByText('Terms of Service').closest('a')
    expect(link).toHaveAttribute('href', '/terms')
  })

  it('renders a LinkedIn link', () => {
    render(<Footer />)
    const link = screen.getByText('LinkedIn').closest('a')
    expect(link).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
  })

  it('renders a GitHub link', () => {
    render(<Footer />)
    const link = screen.getByText('GitHub').closest('a')
    expect(link).toHaveAttribute('href', expect.stringContaining('github.com'))
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
  })

  it('renders as a <footer> element', () => {
    render(<Footer />)
    const footer = document.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })
})

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders the eyebrow label', () => {
    render(<Services />)
    expect(screen.getByText('What we do')).toBeInTheDocument()
  })

  it('renders service cards', () => {
    render(<Services />)
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThanOrEqual(3)
  })
})

describe('Process', () => {
  it('renders the section heading', () => {
    render(<Process />)
    expect(screen.getByText('Our Process')).toBeInTheDocument()
  })

  it('renders the eyebrow label', () => {
    render(<Process />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
  })

  it('renders three step numbers', () => {
    render(<Process />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders the Strategy phase', () => {
    render(<Process />)
    expect(screen.getByText('Strategy')).toBeInTheDocument()
  })

  it('renders the Build phase', () => {
    render(<Process />)
    expect(screen.getByText('Build')).toBeInTheDocument()
  })

  it('renders the Launch phase', () => {
    render(<Process />)
    expect(screen.getByText('Launch')).toBeInTheDocument()
  })

  it('renders deliverable labels', () => {
    render(<Process />)
    const deliverables = screen.getAllByText(/deliverable:/i)
    expect(deliverables.length).toBe(3)
  })

  it('mentions Zoom in client communication', () => {
    render(<Process />)
    const zoomMentions = screen.getAllByText(/zoom/i)
    expect(zoomMentions.length).toBe(3)
  })
})

describe('Faq', () => {
  it('renders the section heading', () => {
    render(<Faq />)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders all question buttons', () => {
    render(<Faq />)
    expect(screen.getByText('Question 1')).toBeInTheDocument()
    expect(screen.getByText('Question 2')).toBeInTheDocument()
    expect(screen.getByText('Question 3')).toBeInTheDocument()
  })

  it('shows answer on click', () => {
    render(<Faq />)
    const q1 = screen.getByText('Question 1')
    fireEvent.click(q1)
    expect(screen.getByText('Answer 1.')).toBeInTheDocument()
  })
})
