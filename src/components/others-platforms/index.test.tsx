import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { OthersPlatforms } from '.'

describe('OthersPlatforms', () => {
  test('renders without crashing', () => {
    render(<OthersPlatforms />)
    expect(screen).not.toBeNull()
  })

  test('contains the heading', () => {
    render(<OthersPlatforms />)
    const heading = screen.getByText(/Explore Mais Opções/i)
    expect(heading).toBeInTheDocument()
  })

  test('contains the paragraph text', () => {
    render(<OthersPlatforms />)
    const paragraph = screen.getByText(/Se você ainda não encontrou seu pet/i)
    expect(paragraph).toBeInTheDocument()
  })
})
