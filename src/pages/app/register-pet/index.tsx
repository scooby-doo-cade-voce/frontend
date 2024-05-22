import registerAPetImg from '@/assets/imgs/register-a-pet.webp'
import { Paw } from '@/components/paw'
import { ImageWithLoader } from '@/components/ui/image-with-loader'
import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'

const RegisterPetForm = lazy(() => import('./register-form'))

export function RegisterPet() {
  return (
    <div className="container flex flex-col gap-6 py-16 lg:flex-row lg:items-center lg:gap-24 lg:py-32">
      <Helmet title="Cadastrar Pet" />

      <div className="flex max-w-md flex-col gap-1">
        <h1 className="text-center text-2xl font-semibold text-primary lg:mb-5 lg:text-left lg:text-5xl">
          Cadastre um pet
        </h1>

        <p className="mb-1 text-balance text-center font-light lg:text-left lg:text-xl">
          Registre e Aumente as Possibilidades de Encontrar seu Amigo
        </p>

        <ImageWithLoader
          src={registerAPetImg}
          alt=""
          className="order-first w-full max-w-[440px] lg:order-none"
        />
      </div>

      <Suspense>
        <RegisterPetForm />
      </Suspense>

      <section className="bg-primary-500 py-10 text-white lg:py-20">
        <div className="container">
          <Paw className="mx-auto mb-2.5 size-10 lg:mb-11 lg:h-[68px] lg:w-[72px]" />

          <h2 className="mb-6 text-balance text-center text-2xl font-bold lg:mb-11 lg:text-5xl">
            Está quase lá...
          </h2>

          <p className="text-balance text-center lg:text-xl">
            Continue assim! Se você encontrou um pet perdido, preencha as
            informações do pet e ajude-o a ter seu lar de volta. Cada ação sua
            traz esperança. Cadastre um pet para começar a fazer a diferença
            agora mesmo.
          </p>
        </div>
      </section>
    </div>
  )
}
