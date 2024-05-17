import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

export function PetCard() {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        src="https://placedog.net/400?random"
        alt=""
        loading="lazy"
        className="bg-shimmer h-60 w-full object-cover object-center"
      />

      <div className="bg-white p-4">
        <strong className="mb-4 text-2xl font-semibold">
          Vira lata marrom
        </strong>

        <p className="mb-6 text-sm tracking-tighter">
          Vira lata marrom com focinho preto, coleira bege, mancha branca no
          peito e mancha bege na pata direita de trás.{' '}
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <button className="hover:text-primary-600 text-sm font-semibold text-primary transition-colors duration-200 ease-in-out">
              Entrar em contato
            </button>
          </DialogTrigger>

          <DialogContent className="flex max-w-fit flex-col items-center gap-8 p-0 lg:flex-row">
            <div className="h-[430px] w-[420px]">
              <img
                src="https://placedog.net/400?random"
                alt=""
                loading="lazy"
                className="bg-shimmer h-full w-full object-cover object-center"
              />
            </div>

            <div className="max-w-[300px] p-6">
              <DialogTitle className="mb-4 text-3xl font-semibold tracking-tighter text-primary">
                Vira lata marrom
              </DialogTitle>

              <div className="space-y-2">
                <div className="text-sm">
                  <strong className="mr-2 font-semibold">Espécie:</strong>
                  <span>Cachorro</span>
                </div>

                <div className="text-sm">
                  <strong className="mr-2 font-semibold">Raça:</strong>
                  <span>Vira lata</span>
                </div>

                <div className="text-sm">
                  <strong className="mr-2 font-semibold">Cor:</strong>
                  <span>Marrom</span>
                </div>

                <div>
                  <strong className="mb-2 block text-sm font-semibold tracking-tight">
                    Descrição:
                  </strong>
                  <DialogDescription className="text-sm tracking-tight">
                    Vira lata marrom com focinho preto, coleira bege, mancha
                    branca no peito e mancha bege na pata direita de trás.
                  </DialogDescription>
                </div>
              </div>

              <Button
                asChild
                className="mt-12 h-auto items-center gap-2 rounded-lg px-4 py-3 text-base leading-none"
              >
                <Link to="/cadastrar-pet">
                  Entrar em contato{' '}
                  <ChevronRight className="size-4" strokeWidth={3} />
                </Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
