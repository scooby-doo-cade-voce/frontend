import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ChevronRight, ZoomIn } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

interface PetCardProps {
  imageSrc: string
  title: string
  description: string
  species: string
  breed: string
  color: string
}

export function PetCard({
  imageSrc,
  title,
  description,
  species,
  breed,
  color,
}: PetCardProps) {
  return (
    <div className=" rounded-lg lg:shadow-[0px_0px_15px_rgba(24,47,67,0.2)]">
      <div className="relative">
        <Dialog>
          <DialogTrigger asChild>
            <button className="item-center absolute bottom-4 left-4 flex gap-1 text-sm font-semibold text-white transition-colors duration-200 ease-in-out hover:text-white/80">
              Ver mais <ZoomIn />
            </button>
          </DialogTrigger>
          <DialogPortal>
            <DialogContent className="flex max-h-[90vh] max-w-fit flex-col items-center p-0 lg:flex-row lg:gap-8">
              <div className="w-[420px] lg:h-[430px]">
                <img
                  src={imageSrc}
                  alt={title}
                  loading="lazy"
                  className="bg-shimmer h-full w-full object-cover object-center"
                />
              </div>
              <div className="overflow-auto p-4 lg:max-w-[300px] lg:p-6">
                <DialogTitle className="mb-4 text-3xl font-semibold tracking-tighter text-primary">
                  {title}
                </DialogTitle>
                <div className="space-y-2">
                  <div className="text-sm">
                    <strong className="mr-2 font-semibold">Espécie:</strong>
                    <span>{species}</span>
                  </div>
                  <div className="text-sm">
                    <strong className="mr-2 font-semibold">Raça:</strong>
                    <span>{breed}</span>
                  </div>
                  <div className="text-sm">
                    <strong className="mr-2 font-semibold">Cor:</strong>
                    <span>{color}</span>
                  </div>
                  <div>
                    <strong className="mb-2 block text-sm font-semibold tracking-tight">
                      Descrição:
                    </strong>
                    <DialogDescription className="text-sm tracking-tight">
                      {description}
                    </DialogDescription>
                  </div>
                </div>
                <Button
                  asChild
                  className="mt-5 h-auto w-full items-center gap-2 rounded-lg px-4 py-3 text-base leading-none lg:mt-12 lg:w-auto"
                >
                  <Link to="/cadastrar-pet">
                    Entrar em contato
                    <ChevronRight className="size-4" strokeWidth={3} />
                  </Link>
                </Button>
              </div>
            </DialogContent>
          </DialogPortal>
        </Dialog>
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          className="bg-shimmer h-60 w-full object-cover object-center"
        />
      </div>
      <div className="rounded-b-lg border-x border-b bg-white p-4">
        <strong className="mb-4 text-xl font-semibold lg:text-2xl">
          {title}
        </strong>
        <p className="mb-6 text-sm tracking-tighter">{description}</p>
        <button
          className="text-sm font-semibold text-primary transition-colors duration-200 ease-in-out hover:text-primary-600"
          type="button"
          onClick={(e) => {
            e.preventDefault()
            window.location.href = 'https://www.whatsapp.com/'
          }}
        >
          Entrar em contato
        </button>
      </div>
    </div>
  )
}
