import { Link } from 'react-router-dom'
import { Logo } from '../logo'
import { socials } from './socials'

const currentYear = new Date().getFullYear()

const footerMenus = [
  {
    href: '/equipe',
    label: 'Equipe',
  },
  {
    href: 'https://apoia.se/cadevc',
    label: 'Apoiar',
  },
]

export function AppFooter() {
  return (
    <footer className="border-t bg-primary-500 text-white lg:bg-white lg:text-black">
      <div className="container py-10">
        <div className="grid gap-8 px-8 lg:mb-32 lg:grid-cols-3 lg:px-0">
          <div>
            <Logo className="mx-auto mb-8 h-[36px] w-[152px] text-white lg:mx-0 lg:mb-5 lg:h-[52px] lg:w-[222px] lg:text-primary" />

            <p className="text-center text-sm lg:text-left lg:text-lg lg:text-[#182F43]">
              Juntos, podemos fazer a diferença. Participe e ajude a reunir os
              pets às suas famílias.
            </p>
          </div>

          <div className="space-y-2 text-center lg:space-y-5 lg:text-left">
            <h4 className="text-lg font-semibold">Links Úteis:</h4>

            <ul className="space-y-2">
              {footerMenus.map((menu) => (
                <li key={menu.href.concat('footer-menu')}>
                  {menu.href.startsWith('/#') ? (
                    <a
                      href={menu.href}
                      className="text-sm transition-colors duration-200 ease-in-out hover:text-primary lg:text-base"
                    >
                      {menu.label}
                    </a>
                  ) : (
                    <Link
                      to={menu.href}
                      className="text-sm transition-colors duration-200 ease-in-out hover:text-primary lg:text-base"
                    >
                      {menu.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1 text-center lg:space-y-5 lg:text-left">
            <h4 className="text-lg font-semibold">Informações de Contato:</h4>

            <a
              href="mailto:scoobydoo@cadevoce.tech"
              className="group block cursor-pointer text-sm lg:text-base lg:text-black"
            >
              E-mail:{' '}
              <span className="underline-offset-4 transition-all duration-200 ease-in-out group-hover:underline lg:group-hover:text-primary">
                scoobydoo@cadevoce.tech
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
          {socials.map((social) => (
            <a
              href={social.href}
              key={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <strong className="block bg-primary-700 py-6 text-center text-sm font-normal text-white lg:bg-white lg:text-base lg:font-semibold lg:text-[#374957]">
        © {currentYear} Cadê você? Todos os direitos reservados.
      </strong>
    </footer>
  )
}
