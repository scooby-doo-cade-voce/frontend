import { Paw } from '@/components/paw'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
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

      <section className="bg-primary-500 py-10 text-white lg:py-20">
        <div className="container">
          <Paw className="mx-auto mb-2.5 size-10 lg:mb-11 lg:h-[68px] lg:w-[72px]" />

          <h2 className="mb-3 text-balance text-center text-xl font-bold lg:mb-11 lg:text-5xl">
            Faça a Diferença na Vida de um Pet
          </h2>

          <p className="text-balance text-center text-sm lg:text-xl">
            Não espere mais! Se você encontrou um pet perdido, cadastre-o aqui e
            ajude-nos a reconectá-lo com sua família. Cada ação sua traz
            esperança. Clique no botão abaixo para começar a fazer a diferença
            agora mesmo.
          </p>

          <Button
            asChild
            className="mx-auto mt-7 flex h-auto w-full gap-1 bg-white px-6 py-3 text-base font-semibold text-primary hover:bg-white/80 lg:mt-14 lg:w-fit"
          >
            <Link to="/cadastrar-pet">
              Cadastrar Pet <ChevronRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
