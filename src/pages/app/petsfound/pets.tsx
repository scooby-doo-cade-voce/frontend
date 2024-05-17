import { Paw } from '@/components/paw'
import { PetCard } from '@/components/pet-card'
import { Button } from '@/components/ui/button'
import PurpleArrow from '../../../assets/imgs/purplearrow.webp'

export function Pets() {
  return (
    <section className="bg-[#FCFAFF] py-14">
      <div className="container">
        <h1 className="text-neut mb-8 text-center text-3xl font-semibold ">
          Encontre Seu Pet Perdido:
          <br />
          <span>Animais Resgatados</span>
        </h1>
        <h3 className="font-regular text-1xl text-center text-black">
          Veja aqui alguns dos animais que foram encontrados e estão
          <br />
          aguardando para serem reunidos com suas famílias.
        </h3>
        <div className="mb-8 grid place-content-center gap-1">
          <img src={PurpleArrow} alt="purplearrow" height={110} width={110} />
        </div>
        <h2 className="mb-16 flex items-center justify-center gap-3 text-3xl font-semibold text-black">
          Galeria de pets encontrados <Paw className="size-7 rotate-45 " />
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
