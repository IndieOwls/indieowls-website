import React from 'react'
import { render, screen } from '@testing-library/react'

import StaffPage from '../pages/staff/index'

describe('Staff listing page', () => {
  it('renders the page heading', () => {
    render(<StaffPage />)
    expect(screen.getByRole('heading', { name: /our team/i })).toBeInTheDocument()
  })

  it('renders a staff member card', () => {
    render(<StaffPage />)
    expect(screen.getByText('Denny S. Temple')).toBeInTheDocument()
    expect(screen.getByText('Software Contractor')).toBeInTheDocument()
  })

  it('links to the staff profile page', () => {
    render(<StaffPage />)
    const link = screen.getByText('Denny S. Temple').closest('a')
    expect(link).toHaveAttribute('href', '/staff/dentemple')
  })

  it('renders the footer', () => {
    render(<StaffPage />)
    expect(screen.getByText(/based in scranton, pa/i)).toBeInTheDocument()
  })
})
