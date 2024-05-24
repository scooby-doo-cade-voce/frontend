import { api } from '../../lib/axios'

export interface Color {
  id: number
  label: string
}

const colors = async (): Promise<Color[]> => {
  const { data } = await api('/colors')
  return data
}

export { colors }
