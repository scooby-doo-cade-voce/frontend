import { AppHeader } from '@/components/header'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

jest.mock('@/hooks/useIsMobile', () => ({
  useIsMobile: () => true,
}))

jest.mock('@uidotdev/usehooks', () => ({
  useWindowScroll: () => [{ y: 0 }],
}))

describe('AppHeader', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <AppHeader />
      </Router>,
    )
  })
  it('displays the hamburger menu icon on mobile', () => {
    render(
      <Router>
        <AppHeader />
      </Router>,
    )
    const hamburgerMenuIcon = screen.getByRole('button')
    expect(hamburgerMenuIcon).toBeInTheDocument()
  })

  it('displays the navigation menu when the hamburger menu icon is clicked', () => {
    render(
      <Router>
        <AppHeader />
      </Router>,
    )
    const hamburgerMenuIcon = screen.getByRole('button')
    fireEvent.click(hamburgerMenuIcon)
    const navMenu = screen.getByRole('navigation')
    expect(navMenu).toBeInTheDocument()
  })

  it('displays the "Voltar à home" link when not on the home page', () => {
    window.history.pushState({}, '', '/not-home')
    render(
      <Router>
        <AppHeader />
      </Router>,
    )
    const link = screen.getByText('Voltar à home')
    expect(link).toBeInTheDocument()
  })

  it('displays the "Cadastrar um pet" link when not on the subscription page', () => {
    window.history.pushState({}, '', '/not-subscription')
    render(
      <Router>
        <AppHeader />
      </Router>,
    )
    const link = screen.getByText('Cadastrar um pet')
    expect(link).toBeInTheDocument()
  })
})
