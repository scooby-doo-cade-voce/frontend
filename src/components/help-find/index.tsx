import { Paw } from '../paw'

export function HelpFind() {
  return (
    <section className="bg-primary-500 py-10 text-white lg:py-20">
      <div className="container">
        <Paw className="mx-auto mb-2.5 size-10 lg:mb-11 lg:h-[68px] lg:w-[72px]" />

        <h2 className="mb-6 text-balance text-center text-2xl font-bold lg:mb-11 lg:text-5xl">
          Faça a Diferença na Vida de um Pet
        </h2>

        <p className="text-balance text-center lg:text-2xl">
          Não espere mais! Se você encontrou um pet perdido, cadastre-o aqui e
          ajude-nos a reconectá-lo com sua família. Cada ação sua traz
          esperança. Clique no botão abaixo para começar a fazer a diferença
          agora mesmo.
        </p>
      </div>
    </section>
  )
}
