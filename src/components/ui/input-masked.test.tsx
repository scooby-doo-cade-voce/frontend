import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { MaskedInput } from './input-masked'

describe('MaskedInput', () => {
  it('renders without errors', () => {
    render(<MaskedInput />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  it('renders with custom class name', () => {
    render(<MaskedInput className="custom-input" />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-input')
  })
  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<MaskedInput ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
