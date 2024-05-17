import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function RegisterPet() {
  return (
    <section className="py-16">
      <div className="container flex gap-20">
        <div className="max-w-[618px] flex-1">
          <span className="mb-4 block">Cadastro de Pets Encontrados</span>

          <h2 className="text-5xl font-semibold">
            Ajude a Reconectar Pets com suas Famílias
          </h2>

          <Button
            asChild
            className="mt-12 h-auto items-center gap-2 rounded-lg px-4 py-3 text-base leading-none"
          >
            <Link to="/cadastrar-pet">
              Cadastrar um pet{' '}
              <ChevronRight className="size-4" strokeWidth={3} />
            </Link>
          </Button>
        </div>

        <div className="flex-1">
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
