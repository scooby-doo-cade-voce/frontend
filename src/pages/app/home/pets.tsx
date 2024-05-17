import { Paw } from '@/components/paw'
import { PetCard } from '@/components/pet-card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Pets() {
  return (
    <section className="bg-[#FCFAFF] py-14">
      <div className="container">
        <h2 className="mb-4 flex items-center justify-center gap-4 text-5xl font-semibold text-black">
          Pets encontrados <Paw className="size-10 rotate-45" />
        </h2>

        <p className="text-balance text-center text-2xl">
          Veja aqui alguns dos animais que foram encontrados e estão aguardando
          para serem reunidos com suas famílias.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>

        <Button
          asChild
          className="mx-auto mt-12 flex h-auto w-fit items-center gap-2 rounded-lg px-4 py-3 text-base leading-none"
        >
          <Link to="/pets">
            Ver lista completa{' '}
            <ChevronRight className="size-4" strokeWidth={3} />
          </Link>
        </Button>
      </div>
    </section>
  )
}
