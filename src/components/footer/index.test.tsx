import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppFooter } from './index'

describe('AppFooter', () => {
  test('renders footer menus', () => {
    render(
      <MemoryRouter>
        <AppFooter />
      </MemoryRouter>,
    )

    const footerMenus = [
      { href: '/equipe', label: 'Equipe' },
      { href: 'https://apoia.se/cadevc', label: 'Apoiar' },
    ]

    footerMenus.forEach((menu) => {
      const linkElement = screen.getByText(menu.label)
      expect(linkElement).toBeInTheDocument()
      if (menu.href.startsWith('http')) {
        expect(linkElement.closest('a')).toHaveAttribute('href', menu.href)
      } else {
        expect(linkElement.closest('a')).toHaveAttribute('href', menu.href)
      }
    })
  })
})
