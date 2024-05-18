import { menusItems } from '@/utils/menu'
import * as Collapsible from '@radix-ui/react-collapsible'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { ChevronRight, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../logo'
import { Button } from '../ui/button'

const menus = [
  {
    href: '/',
    label: 'Home',
  },
  ...menusItems,
]

export function AppHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <Collapsible.Root asChild open={isOpen} onOpenChange={setIsOpen}>
      <header className="dark:bg-neutral-1000 sticky top-0 z-40 border-b border-primary-400 bg-white py-6">
        <div className="container flex items-center justify-between gap-6">
          <Collapsible.Trigger className="lg:hidden">
            {!isOpen ? (
              <HamburgerMenuIcon className="size-6" />
            ) : (
              <X className="size-6" />
            )}
          </Collapsible.Trigger>

          <Link to="/" className="inline-block">
            <Logo className="h-[26px] w-[111px] text-primary lg:h-[52px] lg:w-[222px]" />
          </Link>

          <Collapsible.Content asChild forceMount>
            <nav className="radix-state-closed:animate-slideUpAndFade radix-state-open:animate-slideDownAndFade dark:bg-neutral-1000 fixed left-0 right-0 top-[90px] z-50 flex flex-col gap-4 bg-white p-4 radix-state-closed:hidden radix-state-open:bottom-0 lg:relative lg:top-0 lg:flex-row lg:items-center lg:justify-evenly lg:gap-6 lg:bg-transparent lg:p-0 lg:radix-state-closed:flex">
              {isHomePage &&
                menus.map((menu) => (
                  <a
                    key={menu.href.concat('header-menu-item')}
                    href={menu.href}
                  >
                    {menu.label}
                  </a>
                ))}

              {!isHomePage && <Link to="/">Voltar à home</Link>}

              <Button
                asChild
                className="h-auto items-center gap-2 rounded-lg px-4 py-3 text-base leading-none"
              >
                <Link to="/cadastrar-pet">
                  Cadastrar um pet{' '}
                  <ChevronRight className="size-4" strokeWidth={3} />
                </Link>
              </Button>
            </nav>
          </Collapsible.Content>
        </div>
      </header>
    </Collapsible.Root>
  )
}
