import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HighFive from '../../../assets/imgs/highfive.webp'
import { Button } from '../../../components/ui/button'

export function RegisterPet() {
  return (
    <section className="py-16">
      <div className="container flex gap-20">
        <div className="max-w-[618px] flex-1">
          <img src={HighFive} alt="highfive" height={550} width={450} />
        </div>

        <div className="flex-1">
          <h2 className="mb-11 text-balance text-4xl font-bold text-primary">
            Não encontrou seu pet?Cadastre Seu Pet e Amplie as Chances de
            Reencontro
          </h2>
          <p className="text-l text-balance">
            Se seu pet ainda não apareceu em nossa galeria, cadastre-o em nosso
            sistema com detalhes como foto, tamanho, cor, raça e nome. Isso
            aumentará as chances de que ele seja reconhecido e possamos
            notificá-lo assim que ele for encontrado. Mantenha a esperança;
            estamos aqui para ajudar a reunir sua família!
          </p>
          <Button
            asChild
            className="mt-12 h-auto items-center gap-2 rounded-lg px-4 py-3 text-base leading-none"
          >
            <Link to="/cadastrar-pet">
              Cadastrar um pet{' '}
              <ChevronRight className="size-4" strokeWidth={3} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
