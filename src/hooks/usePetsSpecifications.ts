import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

type PetSpecificationResponse = {
  id: number
  label: string
}

type PetSpecification = {
  label: string
  value: string
}

type PetSpecifications = {
  colors: PetSpecification[]
  species: PetSpecification[]
  sizes: PetSpecification[]
  races: PetSpecification[]
}

const emptyPetSpecifications: PetSpecifications = {
  colors: [],
  species: [],
  sizes: [],
  races: [],
}

/**
 * The function `usePetsSpecifications` returns a query hook that fetches pet
 * specifications data and avoids unnecessary requests to the server.
 * @returns The `usePetsSpecifications` function is returning a query object that
 * includes a query key, a query function that is currently empty, initial data set
 * to `emptyPetSpecifications`, and `refetchOnWindowFocus` set to false to avoid
 * unnecessary requests to the server.
 */
export function usePetsSpecifications() {
  return useQuery({
    queryKey: ['pets-specifications'],
    queryFn: async () => {
      try {
        const [sizesResponse, speciesResponse, colorsResponse] =
          await Promise.allSettled([
            api.get<PetSpecificationResponse[]>('/sizes'),
            api.get<PetSpecificationResponse[]>('/species'),
            api.get<PetSpecificationResponse[]>('/colors'),
          ])

        const petSpecifications = emptyPetSpecifications

        if (sizesResponse.status === 'fulfilled') {
          petSpecifications.sizes = sizesResponse.value.data.map((item) => ({
            label: item.label,
            value: String(item.id),
          }))
        } else {
          toast.error('Não conseguimos carregar os tamanhos dos pets.')
        }

        if (speciesResponse.status === 'fulfilled') {
          petSpecifications.species = speciesResponse.value.data.map(
            (item) => ({
              label: item.label,
              value: String(item.id),
            }),
          )
        } else {
          toast.error('Não conseguimos carregar as espécies dos pets.')
        }

        if (colorsResponse.status === 'fulfilled') {
          petSpecifications.colors = colorsResponse.value.data.map((item) => ({
            label: item.label,
            value: String(item.id),
          }))
        } else {
          toast.error('Não conseguimos carregar as cores dos pets.')
        }

        return petSpecifications
      } catch (error) {
        return emptyPetSpecifications
      }
    },
    initialData: emptyPetSpecifications,
    // since this itens won't change constantly, we can set this to false to avoid unnecessary requests to the server
    refetchOnWindowFocus: false,
  })
}
