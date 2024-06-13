import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    )
  })

  it('renders correctly with variant prop', () => {
    render(<Button variant="destructive" />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass(
      'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
    )
  })

  it('renders correctly with size prop', () => {
    render(<Button size="lg" />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-10 rounded-md px-8')
  })
})
