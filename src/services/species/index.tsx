import { api } from '../../lib/axios'

export interface Specie {
  id: number
  label: string
}

const species = async (): Promise<Specie[]> => {
  const { data } = await api('/species')
  return data
}

export { species }
