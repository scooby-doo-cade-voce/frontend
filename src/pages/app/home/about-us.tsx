import aboutUsImg from '@/assets/imgs/about-us.webp'
import { ImageWithLoader } from '@/components/ui/components/image-with-loader/image-with-loader'

export function AboutUs() {
  return (
    <section id="sobre-nos" className="py-6 lg:py-14">
      <div className="container flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
        <ImageWithLoader
          src={aboutUsImg}
          alt=""
          className="w-full max-w-[600px]"
        />

        <div>
          <h2 className="mb-3 text-center text-lg font-semibold text-primary lg:mb-7 lg:text-left lg:text-5xl">
            Sobre nós
          </h2>

          <div className="space-y-4 text-center text-sm lg:text-left lg:text-xl">
            <p>
              Devido à recente enchente no Rio Grande do Sul, muitos animais
              foram separados de seus donos. Em resposta a essa crise,
              desenvolvemos o projeto{' '}
              <strong className="font-semibold">&quot;Cadê Você?&quot;</strong>{' '}
              com um propósito simples, porém vital:{' '}
              <strong className="font-semibold">
                reunir animais perdidos com seus donos.
              </strong>
            </p>

            <p>
              Este projeto é uma plataforma que visa conectar de forma eficiente
              os donos de animais perdidos com seus fiéis amigos. Através de um
              chatbot e um site dedicado,{' '}
              <strong className="font-semibold">
                os usuários podem compartilhar informações sobre animais
                perdidos e encontrados
              </strong>
              , facilitando assim o reencontro.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
