import { ChevronRight } from 'lucide-react'
import { Paw } from '../paw'
import { Button } from '../ui/button'

export function JoinUs() {
  return (
    <section className="bg-primary-500 py-10 text-white lg:py-20">
      <div className="container">
        <Paw className="mx-auto mb-2.5 size-10 lg:mb-11 lg:h-[68px] lg:w-[72px]" />

        <h2 className="mb-6 text-balance text-center text-2xl font-bold lg:mb-11 lg:text-5xl">
          Faça parte da nossa equipe
        </h2>

        <p className="text-balance text-center lg:text-xl ">
          Quer ajudar nos bastidores? Este é um projeto open-source e
          trabalhamos atualmente no nosso servidor do Discord divididos em
          equipes de UI/UX, Frontend, Backend, Marketing, Dados, QA e Finanças.
          Clique no botão abaixo e venha fazer parte também.
        </p>

        <Button
          asChild
          className="mx-auto mt-7 flex h-auto w-full gap-1 bg-white px-6 py-3 text-base font-semibold text-primary hover:bg-white/80 lg:mt-14 lg:w-fit"
        >
          <a
            href="https://discord.com/invite/Pr2BZmUG"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar no servidor <ChevronRight className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}
