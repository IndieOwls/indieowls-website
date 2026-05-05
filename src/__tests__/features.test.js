import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../layout/theme'

import { Header } from '../features/Header'
import { About } from '../features/About'
import { Services } from '../features/Services'
import { Contact } from '../features/Contact'
import { Footer } from '../features/Footer'

/** Wrap in ThemeProvider (required by styled-components) */
function withTheme(ui) {
  return <ThemeProvider theme={theme}>{ui}</ThemeProvider>
}

const mockUrls = {
  contactForm: 'https://form.jotform.com/test',
  linkedin: 'https://www.linkedin.com/company/indie-owls-creative/',
}

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------
describe('Header', () => {
  const originalMatchMedia = window.matchMedia
  const originalRequestAnimationFrame = window.requestAnimationFrame
  const originalCancelAnimationFrame = window.cancelAnimationFrame
  const originalGetContext = HTMLCanvasElement.prototype.getContext
  const originalInnerWidth = window.innerWidth
  const originalMaxTouchPoints = navigator.maxTouchPoints

  const createMatchMedia = matches =>
    jest.fn().mockImplementation(query => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))

  const createWebGlContext = () => ({
    VERTEX_SHADER: 0x8b31,
    FRAGMENT_SHADER: 0x8b30,
    COMPILE_STATUS: 0x8b81,
    LINK_STATUS: 0x8b82,
    ARRAY_BUFFER: 0x8892,
    STATIC_DRAW: 0x88e4,
    FLOAT: 0x1406,
    TRIANGLE_STRIP: 0x0005,
    createShader: jest.fn(() => ({})),
    shaderSource: jest.fn(),
    compileShader: jest.fn(),
    getShaderParameter: jest.fn(() => true),
    deleteShader: jest.fn(),
    createProgram: jest.fn(() => ({})),
    attachShader: jest.fn(),
    linkProgram: jest.fn(),
    getProgramParameter: jest.fn(() => true),
    deleteProgram: jest.fn(),
    createBuffer: jest.fn(() => ({})),
    getAttribLocation: jest.fn(() => 0),
    getUniformLocation: jest.fn(() => ({})),
    bindBuffer: jest.fn(),
    bufferData: jest.fn(),
    useProgram: jest.fn(),
    enableVertexAttribArray: jest.fn(),
    vertexAttribPointer: jest.fn(),
    viewport: jest.fn(),
    uniform1f: jest.fn(),
    uniform2f: jest.fn(),
    drawArrays: jest.fn(),
    deleteBuffer: jest.fn(),
  })

  beforeEach(() => {
    window.matchMedia = createMatchMedia(true)
    window.requestAnimationFrame = jest.fn(() => 1)
    window.cancelAnimationFrame = jest.fn()
    window.innerWidth = 640
    Object.defineProperty(navigator, 'maxTouchPoints', {
      configurable: true,
      value: 0,
    })
    HTMLCanvasElement.prototype.getContext = jest.fn(() => null)
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
    window.requestAnimationFrame = originalRequestAnimationFrame
    window.cancelAnimationFrame = originalCancelAnimationFrame
    window.innerWidth = originalInnerWidth
    Object.defineProperty(navigator, 'maxTouchPoints', {
      configurable: true,
      value: originalMaxTouchPoints,
    })
    HTMLCanvasElement.prototype.getContext = originalGetContext
  })

  it('renders the site title', () => {
    render(withTheme(<Header title='Indie Owls Creative' tagline='Great tagline' urls={mockUrls} />))
    expect(screen.getByText('Indie Owls Creative')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(withTheme(<Header title='Indie Owls Creative' tagline='Great tagline' urls={mockUrls} />))
    expect(screen.getByText('Great tagline')).toBeInTheDocument()
  })

  it('renders a Contact Us link pointing to the contactForm URL', () => {
    render(withTheme(<Header title='Title' tagline='Tag' urls={mockUrls} />))
    const link = screen.getByRole('link', { name: /contact us/i })
    expect(link).toHaveAttribute('href', mockUrls.contactForm)
  })

  it('renders a LinkedIn link', () => {
    render(withTheme(<Header title='Title' tagline='Tag' urls={mockUrls} />))
    const link = screen.getByRole('link', { name: /connect on linkedin/i })
    expect(link).toHaveAttribute('href', mockUrls.linkedin)
  })

  it('falls back to the static motion treatment on mobile', () => {
    window.innerWidth = 640

    const { container } = render(withTheme(<Header title='Title' tagline='Tag' urls={mockUrls} />))

    expect(container.querySelector('header')).toHaveAttribute('data-hero-mode', 'fallback')
    expect(screen.getByTestId('hero-motion-fallback')).toBeInTheDocument()
    expect(screen.queryByTestId('hero-motion-canvas')).not.toBeInTheDocument()
  })

  it('activates the WebGL scene on larger screens when supported', async () => {
    window.matchMedia = createMatchMedia(false)
    window.innerWidth = 1280
    const webglContext = createWebGlContext()
    HTMLCanvasElement.prototype.getContext = jest.fn(contextType =>
      contextType === 'webgl' ? webglContext : null
    )

    const { container } = render(withTheme(<Header title='Title' tagline='Tag' urls={mockUrls} />))

    await waitFor(() => expect(container.querySelector('header')).toHaveAttribute('data-hero-mode', 'webgl'))
    expect(screen.getByTestId('hero-motion-canvas')).toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
describe('About', () => {
  it('renders "Who We Are" heading', () => {
    render(withTheme(<About />))
    expect(screen.getByRole('heading', { name: /who we are/i })).toBeInTheDocument()
  })

  it('renders "Indie Owls Creative" text', () => {
    render(withTheme(<About />))
    expect(screen.getAllByText(/indie owls creative/i).length).toBeGreaterThan(0)
  })

  it('renders the robot image with alt text', () => {
    render(withTheme(<About />))
    expect(screen.getByAltText(/a robot/i)).toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
describe('Services', () => {
  it('renders "Our Services" heading', () => {
    render(withTheme(<Services />))
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument()
  })

  it('renders the three service cards', () => {
    render(withTheme(<Services />))
    expect(screen.getByText(/javascript and react/i)).toBeInTheDocument()
    expect(screen.getByText(/next-generation features/i)).toBeInTheDocument()
    expect(screen.getByText(/agile product development/i)).toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
describe('Contact', () => {
  it('renders "Now Available for Hire" text', () => {
    render(withTheme(<Contact urls={mockUrls} />))
    expect(screen.getByText(/now available for hire/i)).toBeInTheDocument()
  })

  it('renders a Contact Us link using the contactForm URL from props', () => {
    render(withTheme(<Contact urls={mockUrls} />))
    const link = screen.getByRole('link', { name: /contact us/i })
    expect(link).toHaveAttribute('href', mockUrls.contactForm)
  })

  it('uses the provided URL, not a hardcoded one', () => {
    const customUrls = { contactForm: 'https://custom.form/123', linkedin: '' }
    render(withTheme(<Contact urls={customUrls} />))
    const link = screen.getByRole('link', { name: /contact us/i })
    expect(link).toHaveAttribute('href', 'https://custom.form/123')
  })
})

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
describe('Footer', () => {
  it('renders copyright notice', () => {
    render(withTheme(<Footer />))
    expect(screen.getByText(/indie owls creative/i)).toBeInTheDocument()
  })

  it('renders LinkedIn link', () => {
    render(withTheme(<Footer />))
    const links = screen.getAllByRole('link', { name: /linkedin/i })
    expect(links.length).toBeGreaterThan(0)
    expect(links[0]).toHaveAttribute('href', mockUrls.linkedin)
  })

  it('renders GitHub link', () => {
    render(withTheme(<Footer />))
    const link = screen.getByRole('link', { name: /github/i })
    expect(link).toHaveAttribute('href', 'https://github.com/IndieOwls')
  })

  it('renders Twitch.tv link', () => {
    render(withTheme(<Footer />))
    const link = screen.getByRole('link', { name: /twitch/i })
    expect(link).toHaveAttribute('href', 'https://www.twitch.tv/existentialistowl')
  })
})
