import { Helmet } from 'react-helmet-async'
import { Pets } from './pets'
import { RegisterPet } from './register-pet'

export function HomePage() {
  return (
    <>
      <Helmet title="Página Inicial" />

      <Pets />

      <RegisterPet />
    </>
  )
}
