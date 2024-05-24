import { AppHeader } from '@/components/header'
import { JoinUs } from '../../../components/join-us'
import { AppFooter } from '@/components/footer'
import { OthersPlatforms } from '@/components/others-platforms'

export function Team() {
  return (
    <>
      <AppHeader />
      <div className="container py-14">
        <h1 className="text-neut mb-8 text-center text-5xl font-semibold text-primary-500">
          Conheça quem faz esse projeto ter vida.
        </h1>
        <h3 className="font-regular text-center text-xl text-black">
          Descubra os profissionais dedicados e talentosos que são a força
          motriz por trás deste projeto
          <br />
          trazendo paixão e expertise para torná-lo um sucesso.
        </h3>
      </div>

      <JoinUs />
      <OthersPlatforms />
      <AppFooter />
    </>
  )
}
