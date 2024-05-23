import testImg from '@/assets/imgs/girt-sitting-next-to-dog.webp'
import { Paw } from '@/components/paw'
import { Button } from '@/components/ui/button'
import { ImageWithLoader } from '@/components/ui/image-with-loader'
import { Separator } from '@/components/ui/separator'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

export const PetSubscriptionDonePage = () => {
  return (
    <Fragment>
      <div className="container flex flex-col-reverse justify-between pb-7 pt-4 lg:flex-row lg:items-center lg:px-20 lg:pb-36 lg:pt-24">
        <div className="w-full space-y-9 lg:w-1/2">
          <h1 className="mb-4 text-center text-xl font-semibold leading-tight text-primary lg:max-w-96 lg:text-left lg:text-5xl">
            Cadastro Concluído com Sucesso!
          </h1>

          <div className="w-full space-y-4 lg:w-5/6 lg:space-y-8">
            <p className="text-center text-sm lg:text-left lg:text-base">
              Registro do seu pet concluído! Assim que localizarmos e
              cadastrarmos no sistema, entraremos em contato. Não se esqueça de
              conferir nossa galeria de animais encontrados regularmente.
            </p>

            <Separator className="w-full bg-primary-50" />

            <div className="flex flex-col gap-4 lg:max-w-[19rem]">
              <p className="text-center lg:text-left">
                Deseja cadastrar mais pets?
              </p>

              <Button
                asChild
                className="h-auto w-full items-center gap-2 rounded-lg border-primary px-4 py-3 text-base leading-none text-primary hover:bg-primary hover:text-white lg:w-3/5 "
                variant="outline"
              >
                <Link to="/cadastrar-pet">
                  Cadastrar mais
                  <ChevronRight className="size-4" strokeWidth={3} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <ImageWithLoader
            src={testImg}
            alt="Jovem mulher sentada próxima a um cachorro tirando uma foto"
          />
        </div>
      </div>

      <section className="bg-primary-500 py-10 text-white lg:py-20">
        <div className="container">
          <Paw className="mx-auto mb-2.5 size-10 lg:mb-11 lg:h-[68px] lg:w-[72px]" />

          <h2 className="mb-3 text-balance text-center text-xl font-bold lg:mb-11 lg:text-5xl">
            Você fez a diferença!
          </h2>

          <p className="text-balance text-center text-sm lg:text-xl">
            Não contavam com sua AUstúcia! Você registrou um pet perdido e
            trouxe esperança! O mundo precisa de mais pessoas como você. Se você
            tem mais pets perdidos, não hesite em cadastrar e continue fazendo a
            diferença.
          </p>
        </div>
      </section>
    </Fragment>
  )
}
