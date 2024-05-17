import { Paw } from '../paw'

export function HelpFind() {
  return (
    <section className="bg-primary-500 py-20 text-white">
      <div className="container">
        <Paw className="mx-auto mb-11 h-[68px] w-[72px]" />

        <h2 className="mb-11 text-center text-5xl font-bold">
          Faça a Diferença na Vida de um Pet
        </h2>

        <p className="text-balance text-center text-2xl">
          Não espere mais! Se você encontrou um pet perdido, cadastre-o aqui e
          ajude-nos a reconectá-lo com sua família. Cada ação sua traz
          esperança. Clique no botão abaixo para começar a fazer a diferença
          agora mesmo.
        </p>
      </div>
    </section>
  )
}
