import { useScrollTop } from '@/hooks/useScrollTop'
import { Pets } from './pets'
import { RegisterPet } from './register-pet'

export function PetsFound() {
  useScrollTop()

  return (
    <>
      <Pets />
      <RegisterPet />
    </>
  )
}
