import { PetCard } from '@/components/pet-card'

export default function PetsDesktop() {
  return (
    <div className="grid gap-5 lg:grid-cols-4">
      <PetCard
        imageSrc="https://placedog.net/400?random"
        title="Vira lata marrom"
        description="Vira lata marrom com focinho preto, coleira bege, mancha branca no peito e mancha bege na pata direita de trás."
        species="Cachorro"
        breed="Vira lata"
        color="Marrom"
      />
    </div>
  )
}
