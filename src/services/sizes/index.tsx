import { api } from '../../lib/axios'

export interface Size {
  id: number
  label: string
}

const sizes = async (): Promise<Size[]> => {
  const { data } = await api('/sizes')
  return data
}

export { sizes }
