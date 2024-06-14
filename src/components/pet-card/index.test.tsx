import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { PetCard } from '.'

describe('PetCard', () => {
  const mockProps = {
    id: 1,
    imageSrc: 'testImageSrc',
    title: 'testTitle',
    description: 'testDescription',
    specie: 'testSpecie',
    size: 'testSize',
    color: 'testColor',
  }
  it('displays the correct title', () => {
    render(<PetCard {...mockProps} />)
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
  })

  it('displays the correct description', () => {
    render(<PetCard {...mockProps} />)
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()
  })
})
