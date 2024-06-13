import { Paw } from '@/components/paw'
import { PetCard } from '@/components/pet-card'
import { Button } from '@/components/ui/components/button/button'
import {
  Animal,
  SearchParams,
  search as animalsSearch,
  animals as getAnimals,
} from '@/services/animals'
import { Color, colors as getColors } from '@/services/colors'
import { Size, sizes as getSizes } from '@/services/sizes'
import { Specie, species as getSpecies } from '@/services/species'
import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PurpleArrow from '../../../assets/imgs/purplearrow.webp'

export function Pets() {
  const initialState: {
    specie_id: string
    color_id: string
    size_id: string
  } = {
    specie_id: '',
    color_id: '',
    size_id: '',
  }

  const { control, handleSubmit } = useForm({
    defaultValues: initialState,
    /* resolver: yupResolver(validationSchema), */
  })

  const onSubmit = async (data: SearchParams): Promise<void> => {
    const result: Animal[] = await animalsSearch(data)
    setAnimals(result)
  }

  const [species, setSpecies] = useState<Specie[]>([])
  const [colors, setColors] = useState<Color[]>([])
  const [sizes, setSizes] = useState<Size[]>([])
  const [animals, setAnimals] = useState<Animal[]>([])

  const listSpecies = async (): Promise<void> => {
    const result = await getSpecies()
    setSpecies(result)
  }

  const listColors = async (): Promise<void> => {
    const result = await getColors()
    setColors(result)
  }

  const listSizes = async (): Promise<void> => {
    const result = await getSizes()
    setSizes(result)
  }

  const listAnimals = async (): Promise<void> => {
    const result = await getAnimals()
    setAnimals(result)
  }

  useEffect(() => {
    Promise.all([listColors(), listSizes(), listAnimals(), listSpecies()])
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
        <div className="justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-6">
              <Controller
                key={`species`}
                name="specie_id"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <select
                    className="h-14 flex-grow rounded-lg border border-gray-300 bg-primary-50 p-2.5 text-sm text-gray-900 text-primary-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={value}
                    onChange={(val) => onChange(val)}
                  >
                    <option value="">Espécie</option>
                    {species?.map((specie: Specie) => (
                      <option key={specie.id} value={specie.id}>
                        {specie.label}
                      </option>
                    ))}
                  </select>
                )}
              />

              <Controller
                key={`sizes`}
                name="size_id"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <select
                    className="h-14 flex-grow rounded-lg border border-gray-300 bg-primary-50 p-2.5 text-sm text-gray-900 text-primary-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={value?.toString()}
                    onChange={(val) => onChange(val)}
                  >
                    <option value="">Tamanho</option>
                    {sizes?.map((size: Size) => (
                      <option key={size.id} value={size.id}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                )}
              />

              <Controller
                key={`colors`}
                name="color_id"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <select
                    className="h-14 flex-grow rounded-lg border border-gray-300 bg-primary-50 p-2.5 text-sm text-gray-900 text-primary-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={value?.toString()}
                    onChange={(val) => onChange(val)}
                  >
                    <option value="">Cor</option>
                    {colors?.map((color: Color) => (
                      <option key={color.id} value={color.id}>
                        {color.label}
                      </option>
                    ))}
                  </select>
                )}
              />
              <Button className="h-17 flex-grow">Filtrar</Button>
            </div>
          </form>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {/* Exibe os resultados do filtro */}
          {animals?.map((animal) => (
            <PetCard
              imageSrc={animal.medias[0].url}
              key={animal.id}
              id={animal.id}
              title={animal.name}
              description={animal.description}
              specie={
                species.filter(
                  (item: Specie) => item.id === animal.specie_id,
                )[0].label
              }
              size={
                sizes.find((item: Size) => item.id === animal.size_id)?.label
              }
              color={
                colors.find((item: Color) => item.id === animal.color_id)?.label
              }
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
