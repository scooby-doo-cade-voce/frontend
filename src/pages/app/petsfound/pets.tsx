import { Paw } from '@/components/paw'
import { PetCard } from '@/components/pet-card'
import { Button } from '@/components/ui/button'

export function Pets() {
  return (
    <section className="bg-[#FCFAFF] py-14">
      <div className="container">
        <h1 className="mb-4 flex items-center justify-center gap-4 text-3xl font-semibold text-black">
          Encontre Seu Pet Perdido: Animais Resgatados
        </h1>
        <h2 className="mb-4 flex items-center justify-center gap-4 text-3xl font-semibold text-black">
          Galeria de pets encontrados <Paw className="size-7 rotate-45" />
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>

        <Button
          asChild
          className="mx-auto mt-12 flex h-auto w-fit items-center gap-2 rounded-lg px-4 py-3 text-base leading-none"
        ></Button>
      </div>
    </section>
  )
}
