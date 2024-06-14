import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { JoinUs } from './index'

describe('JoinUs component', () => {
  beforeEach(() => {
    render(<JoinUs />)
  })

  it('renders without crashing', () => {
    const joinUsElement = screen.getByText(/Faça parte da nossa equipe/i)
    expect(joinUsElement).toBeInTheDocument()
  })

  it('contains a Paw component', () => {
    const pawElement = screen.getByTestId('join-us-paw')
    expect(pawElement).toBeInTheDocument()
  })

  it('contains a Button component', () => {
    const buttonElement = screen.getByTestId('join-us-button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('contains a link to the Discord server', () => {
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute(
      'href',
      'https://discord.com/invite/Pr2BZmUG',
    )
  })
})
