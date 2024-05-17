import { PetCard } from '@/components/pet-card'

export default function PetsDesktop() {
  return (
    <div className="grid gap-5 lg:grid-cols-4">
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
    </div>
  )
}
