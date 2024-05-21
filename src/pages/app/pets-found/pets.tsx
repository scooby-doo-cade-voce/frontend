import { Paw } from '@/components/paw'
import { PetCard } from '@/components/pet-card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState, type ElementRef } from 'react'
import PurpleArrow from '../../../assets/imgs/purplearrow.webp'

type Animal = {
  id: number
  name: string
  description: string
  species: string
  breed: string
  color: string
  image: string
}

// dados fakes simulando o que virá da requisição
const animais: Animal[] = [
  {
    id: 1,
    name: 'Vira lata marrom',
    description:
      'Vira lata marrom com focinho preto, coleira bege, mancha branca no peito e mancha bege na pata direita de trás.',
    species: 'Cachorro',
    breed: 'Vira lata',
    color: 'Marrom',
    image: 'https://placedog.net/400?random1',
  },
  {
    id: 2,
    name: 'Golden Retriever',
    description: 'Golden Retriever com pelo dourado e muito amigável.',
    species: 'Cachorro',
    breed: 'Golden Retriever',
    color: 'Dourado',
    image: 'https://placedog.net/400?random2',
  },
  {
    id: 3,
    name: 'Kitty',
    description: 'Labrador preto com uma personalidade muito brincalhona.',
    species: 'Gato',
    breed: 'Labrador',
    color: 'Preto',
    image: 'https://placedog.net/400?random3',
  },
  {
    id: 4,
    name: 'Vacalo',
    description: 'Poodle branco com pelos encaracolados e muito elegante.',
    species: 'Cavalo',
    breed: 'Poodle',
    color: 'Branco',
    image: 'https://placedog.net/400?random4',
  },
  {
    id: 5,
    name: 'Periquito',
    description: 'Bulldog com uma aparência robusta e muito carinhoso.',
    species: 'Ave',
    breed: 'Bulldog',
    color: 'Branco',
    image: 'https://placedog.net/400?random5',
  },
  {
    id: 6,
    name: '6',
    description: 'Bulldog com uma aparência robusta e muito carinhoso.',
    species: 'Cachorro',
    breed: 'Bulldog',
    color: 'Branco',
    image: 'https://placedog.net/400?random5',
  },
  {
    id: 7,
    name: '7',
    description: 'Poodle branco com pelos encaracolados e muito elegante.',
    species: 'Cachorro',
    breed: 'Poodle',
    color: 'Branco',
    image: 'https://placedog.net/400?random4',
  },
]

export function Pets() {
  const [filters, setFilters] = useState({
    species: '',
    color: '',
    breed: '',
    porte: '',
  })

  const [resultados, setResultados] = useState<Animal[]>([])

  const selectRefSpecies = useRef<ElementRef<'select'>>(null)
  const selectRefColor = useRef<ElementRef<'select'>>(null)
  const selectRefBreed = useRef<ElementRef<'select'>>(null)
  const selectRefPorte = useRef<ElementRef<'select'>>(null)

  // Atualiza os estados de filters dinamicamente
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target
    setFilters({
      ...filters,
      [name]: value,
    })
  }

  const pegarFiltros = () => {
    const specie = selectRefSpecies.current?.value
    const cor = selectRefColor.current?.value
    const breed = selectRefBreed.current?.value
    const porte = selectRefPorte.current?.value

    console.log('Selected color:', cor)

    const filtros = {
      breed,
      color: cor,
      species: specie,
      size: porte,
    }
    const resultado = filtrar(animais, filtros)
    setResultados(resultado)
    console.log(resultado)
  }

  const filtrar = (
    animais: Animal[],
    filtros: Record<string, string | undefined>,
  ) => {
    return animais.filter((animal) => {
      return Object.keys(filtros).every((chave) => {
        return (
          !filtros[chave] ||
          (!!filtros[chave] &&
            animal[chave as keyof Animal] &&
            animal[chave as keyof Animal]
              .toString()
              .toLowerCase()
              .includes(filtros[chave]!.toString().toLowerCase()))
        )
      })
    })
  }

  useEffect(() => {
    setResultados(animais)
  }, [])

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
          <img src={PurpleArrow} alt="purplearrow" height={157} width={157} />
        </div>
        <h2 className="mb-16  flex items-center justify-center gap-3 text-3xl font-semibold text-black">
          Galeria de pets encontrados <Paw className="size-7 rotate-45" />
        </h2>
        <div className="flex justify-center space-x-4">
          <form className="max-w-sm">
            <select
              id="species"
              name="species"
              className="h-14 w-64 rounded-lg border border-gray-300 bg-primary-50 p-2.5 text-sm text-gray-900 text-primary-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={filters.species}
              onChange={handleFilterChange}
              ref={selectRefSpecies}
            >
              <option value="">Espécie</option>
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
              <option value="Equino">Equino</option>
              <option value="Bovino">Bovino</option>
            </select>
          </form>

          <form className="max-w-sm">
            <select
              id="breed"
              name="breed"
              className="h-14 w-64 rounded-lg border border-gray-300 bg-primary-50 p-2.5 text-sm text-gray-900 text-primary-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={filters.breed}
              onChange={handleFilterChange}
              ref={selectRefBreed}
            >
              <option value="">Raça</option>
              <option value="Labrador">Labrador</option>
              <option value="Vira lata">Vira lata</option>
              <option value="Vira lata caramelo">Vira lata caramelo</option>
              <option value="Caramelo Vira Lata">Caramelo Vira Lata</option>
            </select>
          </form>

          <form className="max-w-sm">
            <select
              id="porte"
              name="porte"
              className="h-14 w-64 rounded-lg border border-gray-300 bg-primary-50 p-2.5 text-sm text-gray-900 text-primary-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={filters.porte}
              onChange={handleFilterChange}
              ref={selectRefPorte}
            >
              <option value="">Porte</option>
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
            </select>
          </form>
          <form className="max-w-sm">
            <select
              id="color"
              name="color"
              className="h-14 w-64 rounded-lg border border-gray-300 bg-primary-50 p-2.5 text-sm text-gray-900 text-primary-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={filters.color}
              onChange={handleFilterChange}
              ref={selectRefColor}
            >
              <option value="">Cor</option>
              <option value="Vermelho">Vermelho</option>
              <option value="Branco">Branco</option>
              <option value="Caramelo">Caramelo</option>
              <option value="Cinza">Cinza</option>
            </select>
          </form>
          <Button className="w-23 h-17" onClick={pegarFiltros}>
            Filtrar
          </Button>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {/* Exibe os resultados do filtro */}
          {resultados.map((animal) => (
            <PetCard
              key={animal.id}
              imageSrc={animal.image}
              title={animal.name}
              description={animal.description}
              species={animal.species}
              breed={animal.breed}
              color={animal.color}
            />
          ))}
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
