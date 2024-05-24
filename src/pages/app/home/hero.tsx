import heroImg from '@/assets/imgs/hero.webp'
import { Button } from '@/components/ui/button'
import { ImageWithLoader } from '@/components/ui/image-with-loader'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="py-6 lg:py-14">
      <div className="container flex flex-col-reverse gap-12 sm:items-center lg:flex-row lg:items-center lg:gap-20">
        <div>
          <h1 className="mb-6 text-center text-2xl font-semibold leading-tight lg:text-left lg:text-5xl">
            <span className="text-primary">Encontre seu Pet</span> Perdido.
            Juntos na Busca por Nossos{' '}
            <span className="relative">
              Pets
              <svg
                width="109"
                height="13"
                viewBox="0 0 109 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-2 left-px -z-[1] hidden -rotate-2 lg:block"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M69.4404 1.38321C65.6651 1.69267 13.8018 6.58193 10.0885 6.95325C-0.308949 7.8816 -1.73242 8.62426 2.41417 11.2855C8.16988 14.937 59.5381 7.9435 92.4014 7.01515C107.688 6.58192 109.297 6.27247 108.431 4.10634C107.255 0.764326 91.2254 -0.349691 69.4404 1.38321Z"
                  fill="#7723CD"
                />
              </svg>
            </span>{' '}
            Perdidos no Rio Grande do Sul
          </h1>

          <div className="space-y-4 text-center lg:text-left lg:text-xl">
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

          <div className="mt-5 flex flex-wrap gap-4">
            <Button
              asChild
              className="h-auto w-full items-center gap-2 rounded-lg border border-primary px-4 py-3 text-base leading-none lg:w-auto"
            >
              <Link to="/pets-encontrados">
                Achar meu pet{' '}
                <ChevronRight className="size-4" strokeWidth={3} />
              </Link>
            </Button>

            <Button
              asChild
              className="h-auto w-full items-center gap-2 rounded-lg border-primary px-4 py-3 text-base leading-none text-primary hover:bg-primary hover:text-white lg:w-auto"
              variant="outline"
            >
              <Link to="/cadastrar-pet">
                Cadastrar um pet{' '}
                <ChevronRight className="size-4" strokeWidth={3} />
              </Link>
            </Button>
          </div>
        </div>

        <ImageWithLoader
          src={heroImg}
          alt=""
          className="w-full max-w-[620px]"
        />
      </div>
    </section>
  )
}
