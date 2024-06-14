import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Textarea } from './textarea'

describe('Textarea', () => {
  test('renders without errors', () => {
    render(<Textarea />)
    const textareaElement = screen.getByRole('textbox')
    expect(textareaElement).toBeInTheDocument()
  })

  test('renders with initial value', () => {
    const initialValue = 'Hello World'
    render(<Textarea value={initialValue} />)
    const textareaElement = screen.getByRole('textbox') as HTMLTextAreaElement
    expect(textareaElement.value).toBe(initialValue)
  })
  test('renders with placeholder', () => {
    const placeholder = 'Enter your text'
    render(<Textarea placeholder={placeholder} />)
    const textareaElement = screen.getByRole('textbox') as HTMLTextAreaElement
    expect(textareaElement.placeholder).toBe(placeholder)
  })

  test('renders with custom class', () => {
    const customClass = 'custom-textarea'
    render(<Textarea className={customClass} />)
    const textareaElement = screen.getByRole('textbox')
    expect(textareaElement).toHaveClass(customClass)
  })
})
