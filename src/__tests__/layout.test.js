import React from 'react'
import { render, screen } from '@testing-library/react'

import Layout from '../layout'

describe('Layout', () => {
  it('renders children inside ThemeProvider', () => {
    render(
      <Layout>
        <p>Test child content</p>
      </Layout>
    )
    expect(screen.getByText('Test child content')).toBeInTheDocument()
  })

  it('renders multiple children', () => {
    render(
      <Layout>
        <h1>Heading</h1>
        <p>Paragraph</p>
      </Layout>
    )
    expect(screen.getByRole('heading', { name: 'Heading' })).toBeInTheDocument()
    expect(screen.getByText('Paragraph')).toBeInTheDocument()
  })
})
