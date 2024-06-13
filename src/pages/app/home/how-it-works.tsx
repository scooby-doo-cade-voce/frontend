import howItWorksImg from '@/assets/imgs/how-it-works.webp'
import { ImageWithLoader } from '@/components/ui/components/image-with-loader/image-with-loader'

export function HowItWorks() {
  return (
    <section id="como-usar" className="py-4 lg:py-14">
      <div className="container flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-24">
        <div>
          <h2 className="mb-3 text-center text-lg font-semibold text-primary lg:mb-7 lg:text-left lg:text-5xl">
            Como funciona?
          </h2>

          <div className="space-y-4 text-center text-sm lg:text-left lg:text-xl">
            <p>
              O site oferece uma base de dados abrangente de animais perdidos,
              compilados a partir de informações fornecidas por instituições e
              ONGs dedicadas ao bem-estar animal. Com recursos de busca avançada
              e filtros específicos, tornamos mais fácil para os donos{' '}
              <strong className="font-semibold">encontrar</strong> seus animais
              perdidos e para aqueles que encontraram animais perdidos{' '}
              <strong className="font-semibold">localizar seus donos.</strong>
            </p>

            <p>
              <strong className="font-semibold">&quot;Cadê Você?&quot;</strong>{' '}
              é mais do que uma plataforma, é uma comunidade unida pelo amor aos
              animais e pelo desejo de ajudar uns aos outros em momentos de
              dificuldade.
            </p>
          </div>
        </div>

        <ImageWithLoader
          src={howItWorksImg}
          alt=""
          className="w-full max-w-[582px]"
        />
      </div>
    </section>
  )
}
