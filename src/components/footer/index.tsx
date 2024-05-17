import { menusItems } from '@/utils/menu'
import { Link } from 'react-router-dom'
import { Logo } from '../logo'

const currentYear = new Date().getFullYear()

const footerMenus = [
  ...menusItems,
  {
    href: '/cadastrar-pet',
    label: 'Cadastar um pet',
  },
  {
    href: '/apoiar',
    label: 'Apoiar',
  },
]

export function AppFooter() {
  return (
    <footer className="border-t pb-5 pt-12 lg:pb-10 lg:pt-24">
      <div className="container">
        <div className="mb-20 grid gap-6 lg:mb-32 lg:grid-cols-3">
          <div>
            <Logo className="h-[26px] w-[111px] text-primary lg:h-[52px] lg:w-[222px]" />

            <p className="mt-5 text-[#182F43] lg:text-lg">
              Juntos, podemos fazer a diferença. Participe e ajude a reunir os
              pets às suas famílias.
            </p>
          </div>

          <div className="space-y-3 lg:space-y-5">
            <h4 className="text-lg font-semibold">Links Úteis:</h4>

            <ul className="space-y-3">
              {footerMenus.map((menu) => (
                <li key={menu.href.concat('footer-menu')}>
                  <Link
                    to={menu.href}
                    className="transition-colors duration-200 ease-in-out hover:text-primary"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-lg font-semibold">Informações de Contato:</h4>

            <a
              href="mailto:scoobydoo@cadevoce.tech"
              className="group block text-black"
            >
              E-mail:{' '}
              <span className="underline-offset-4 transition-all duration-200 ease-in-out group-hover:text-primary group-hover:underline">
                scoobydoo@cadevoce.tech
              </span>
            </a>
          </div>
        </div>

        <strong className="block text-center font-semibold text-[#374957]">
          © {currentYear} Cadê você? Todos os direitos reservados.
        </strong>
      </div>
    </footer>
  )
}
