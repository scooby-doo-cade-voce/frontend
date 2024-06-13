import { render } from '@testing-library/react'
import { ImageWithLoader } from './image-with-loader'
import '@testing-library/jest-dom'

describe('ImageWithLoader', () => {
  it('renders without errors', () => {
    render(<ImageWithLoader src="test.jpg" alt="Test Image" />)
  })

  it('renders with the correct alt text', () => {
    const altText = 'Test Image'
    const { getByAltText } = render(
      <ImageWithLoader src="test.jpg" alt={altText} />,
    )
    expect(getByAltText(altText)).toBeInTheDocument()
  })

  it('applies the provided className', () => {
    const className = 'custom-class'
    const { container } = render(
      <ImageWithLoader src="test.jpg" alt="Test Image" className={className} />,
    )
    expect(container.firstChild).toHaveClass(className)
  })
})
