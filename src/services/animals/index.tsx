import { api } from '../../lib/axios'

interface Responsible {
  id: number
  name: string
  cellphone: string
  email?: string
}

interface Media {
  mediaType: string
  url: string
}
export interface Animal {
  id: number
  name: string
  description: string
  age?: number
  color_id: number
  size_id: number
  specie_id: number
  responsible: Responsible
  medias: Media[]
}

export interface SearchParams {
  specie_id: string
  size_id: string
  color_id: string
}

const animals = async (): Promise<Animal[]> => {
  const { data } = await api('/animals')
  return data
}

const search = async (params: SearchParams): Promise<Animal[]> => {
  const { data } = await api('/animals/search', { params })
  return data
}

export { animals, search }
