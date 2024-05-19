import { Paw } from '@/components/paw'
import { PetCard } from '@/components/pet-card'
import { Button } from '@/components/ui/button'
import PurpleArrow from '../../../assets/imgs/purplearrow.webp'
import { ChevronRight } from 'lucide-react'

export function Pets() {
  return (
    <section className="bg-[#FCFAFF] py-14">
      <div className="container">
        <h1 className="text-neut mb-8 text-center text-3xl font-semibold">
          Encontre Seu Pet Perdido:
          <br />
          <span>Animais Resgatados</span>
        </h1>
        <h3 className="font-regular text-center text-xl text-black">
          Veja aqui alguns dos animais que foram encontrados e estão
          <br />
          aguardando para serem reunidos com suas famílias.
        </h3>
        <div className="mb-8 grid place-content-center gap-1">
          <img src={PurpleArrow} alt="purplearrow" height={110} width={110} />
        </div>
        <h2 className="mb-16 flex items-center justify-center gap-3 text-3xl font-semibold text-black">
          Galeria de pets encontrados <Paw className="size-7 rotate-45" />
        </h2>
        <div className="flex justify-center space-x-4">
          <form className="max-w-sm">
            <select
              id=""
              className="h-14 w-64 rounded-lg border border-gray-300 bg-primary-50 p-2.5 text-sm text-gray-900 text-primary-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option selected>Espécie</option>
              <option value="">Cachorro</option>
              <option value="">Gato</option>
              <option value="">Equínuo</option>
              <option value="">Bovino</option>
            </select>
          </form>

          <form className="max-w-sm">
            <select
              id=""
              className="h-14 w-64 rounded-lg border border-gray-300 bg-primary-50 p-2.5 text-sm text-gray-900 text-primary-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option selected>Raça</option>
              <option value="">Caramelo</option>
              <option value="">Vira lata</option>
              <option value="">Vira lata caramelo</option>
              <option value="">Caramelo Vira Lata</option>
            </select>
          </form>

          <form className="max-w-sm">
            <select
              id=""
              className="h-14 w-64 rounded-lg border border-gray-300 bg-primary-50 p-2.5 text-sm text-gray-900 text-primary-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option selected>Porte</option>
              <option value="">P</option>
              <option value="">M</option>
              <option value="">G</option>
              <option value="">GG</option>
            </select>
          </form>
          <form className="max-w-sm">
            <select
              id=""
              className="h-14 w-64 rounded-lg border border-gray-300 bg-primary-50 p-2.5 text-sm text-gray-900 text-primary-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option selected>Cor</option>
              <option value="">Vermelho</option>
              <option value="">Branco</option>
              <option value="">Caramelo</option>
              <option value="">Cinza</option>
            </select>
          </form>
          <Button className="w-23 h-17">Filtrar</Button>
        </div>

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

        <div className="mt-8 flex justify-center">
          <nav className="inline-flex space-x-2">
            <Button className="h-12 w-12 rounded-lg border border-gray-300 bg-transparent px-3 py-1 text-sm font-medium text-primary-500 hover:bg-gray-200">
              1
            </Button>
            <Button className="h-12 w-12 rounded-lg border border-gray-300 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-500 hover:bg-gray-200">
              2
            </Button>
            <Button className="h-12 w-12 rounded-lg border border-gray-300 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-500 hover:bg-gray-200">
              3
            </Button>
            <Button className="h-12 w-12 rounded-lg border border-gray-300 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-500 hover:bg-gray-200">
              ...
            </Button>
            <Button className="h-12 w-12 rounded-lg border border-gray-300 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-500 hover:bg-gray-200">
              9
            </Button>
            <Button className="h-12 w-12 rounded-lg border border-gray-300 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-500 hover:bg-gray-200">
              {' '}
              <ChevronRight className="h-13 w-13" />
            </Button>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Pets
