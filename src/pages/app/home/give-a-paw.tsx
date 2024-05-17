import { Paw } from '@/components/paw'
import { cva, VariantProps } from 'class-variance-authority'

import boyHuggingDogImg from '@/assets/imgs/boy-hugging-dog.webp'
import girlHuggingCatImg from '@/assets/imgs/girl-hugging-cat.webp'
import girlWithCatImg from '@/assets/imgs/girl-with-cat.webp'
import { ImageWithLoader } from '@/components/ui/image-with-loader'

const card = cva('p-5 lg:p-9 rounded-xl', {
  variants: {
    variant: {
      primary: 'bg-primary-50',
      secondary: 'bg-secondary-50',
      rose: 'bg-rose-50',
    },
  },
})

type CardProps = VariantProps<typeof card> & {
  title: string
  description: string
  image: string
}

const Card = ({
  title,
  image,
  description,
  variant = 'primary',
}: CardProps) => {
  return (
    <div
      className={card({
        variant,
      })}
    >
      <ImageWithLoader
        src={image}
        alt=""
        loading="lazy"
        className="mb-6 max-h-[375px] w-full max-w-[342px] object-contain lg:mb-12"
      />

      <strong className="mb-4 block text-center font-bold -tracking-[0.0625rem]">
        {title}
      </strong>

      <p className="text-center text-sm -tracking-[0.0625rem] lg:text-base">
        {description}
      </p>
    </div>
  )
}

export function GiveAPaw() {
  return (
    <section className="py-5 lg:py-12">
      <div className="container">
        <h2 className="font-poetsenone mb-6 flex flex-col-reverse items-center justify-center gap-3 text-center text-4xl -tracking-[0.0625rem] text-primary lg:flex-row lg:text-left lg:text-6xl">
          Dê uma patinha!
          <Paw className="-rotate-6 text-secondary-500" />
        </h2>

        <p className="text-center lg:text-2xl">
          Utilize nosso bot do WhatsApp para{' '}
          <strong className="font-semibold">
            registrar ou buscar pets perdidos
          </strong>{' '}
          de forma rápida e eficaz, ajudando a reconectar famílias com seus
          amigos peludos o mais breve possível.
        </p>

        <div className="mt-10 flex flex-col gap-5 lg:flex-row">
          <Card
            title="Envio de Informações via WhatsApp"
            description="Envie fotos e detalhes do seu pet perdido, como raça e cor, usando nosso bot no WhatsApp para agilizar a busca."
            image={girlWithCatImg}
            variant="rose"
          />

          <Card
            title="Envio de Informações via WhatsApp"
            description="Envie fotos e detalhes do seu pet perdido, como raça e cor, usando nosso bot no WhatsApp para agilizar a busca."
            image={boyHuggingDogImg}
            variant="secondary"
          />

          <Card
            title="Envio de Informações via WhatsApp"
            description="Envie fotos e detalhes do seu pet perdido, como raça e cor, usando nosso bot no WhatsApp para agilizar a busca."
            image={girlHuggingCatImg}
          />
        </div>
      </div>
    </section>
  )
}
