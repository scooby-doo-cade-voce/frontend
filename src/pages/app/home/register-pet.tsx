import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function RegisterPet() {
  return (
    <section className="py-6 lg:py-16">
      <div className="container flex flex-col gap-20 lg:flex-row">
        <div className="max-w-[618px] flex-1">
          <span className="mb-4 block text-center text-sm lg:text-left lg:text-base">
            Cadastro de Pets Encontrados
          </span>

          <h2 className="text-center text-lg font-semibold lg:text-left lg:text-5xl">
            Ajude a Reconectar Pets com suas Famílias
          </h2>

          <p className="text-center text-sm lg:hidden">
            Aqui você pode cadastrar os pets no nosso banco de dados, incluindo
            fotos e informações detalhadas, como raça, cor e local onde foi
            encontrado. Seu envolvimento é essencial para ajudar esses animais a
            voltarem para casa. Cadastre um pet encontrado e seja parte desta
            importante missão de reunião.
          </p>

          <Button
            asChild
            className="mt-6 h-auto w-full items-center gap-2 rounded-lg px-4 py-3 text-base leading-none lg:mt-12 lg:w-auto"
          >
            <Link to="/cadastrar-pet">
              Cadastrar um pet{' '}
              <ChevronRight className="size-4" strokeWidth={3} />
            </Link>
          </Button>
        </div>

        <div className="hidden flex-1 lg:block">
          <p className="text-lg">
            Aqui você pode cadastrar os pets no nosso banco de dados, incluindo
            fotos e informações detalhadas, como raça, cor e local onde foi
            encontrado. Seu envolvimento é essencial para ajudar esses animais a
            voltarem para casa. Cadastre um pet encontrado e seja parte desta
            importante missão de reunião.
          </p>
        </div>
      </div>
    </section>
  )
}
