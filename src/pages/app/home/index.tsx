import { Helmet } from 'react-helmet-async'
import { AboutUs } from './about-us'
import { GiveAPaw } from './give-a-paw'
import { Hero } from './hero'
import { HowItWorks } from './how-it-works'
import { Pets } from './pets'
import { RegisterPet } from './register-pet'

export function HomePage() {
  return (
    <>
      <Helmet title="Página Inicial" />

      <Hero />
      <AboutUs />
      <HowItWorks />
      <GiveAPaw />
      <Pets />
      <RegisterPet />
    </>
  )
}
