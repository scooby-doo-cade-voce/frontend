import { InstagramIcon } from '@/components/icons/instagram.svg'
import { LinkedInIcon } from '@/components/icons/linkedin.svg'
import { XIcon } from '@/components/icons/x.svg'
import { ImageWithLoader } from '@/components/ui/components/image-with-loader/image-with-loader'
import { Github } from 'lucide-react'
import { JoinUs } from '../../../components/join-us'
import { volunteers } from './items'

export function Team() {
  return (
    <>
      <div className="container py-14">
        <h1 className="mb-5 text-center text-6xl font-semibold text-primary-500">
          Conheça quem faz esse projeto ter vida.
        </h1>

        <p className="font-regular mb-8 text-center text-2xl text-black">
          Descubra os profissionais dedicados e talentosos que são a força
          motriz por trás deste projeto trazendo paixão e expertise para
          torná-lo um sucesso.
        </p>

        <div className="grid gap-12 lg:grid-cols-4">
          {volunteers.map((item) => (
            <div key={item.id}>
              <div className="overflow-hidden rounded-xl bg-[#4891E0]">
                <ImageWithLoader
                  src={item.picture}
                  alt=""
                  className="aspect-square w-full object-cover"
                />
              </div>

              <div className="px-2.5 pb-2.5 pt-5">
                <strong className="block text-2xl font-semibold">
                  {item.name}
                </strong>

                {item.email && (
                  <a
                    href={`mailto:${item.email}`}
                    className="mb-3.5 block truncate text-primary underline-offset-4 transition-all duration-200 ease-in-out hover:text-primary-700 hover:underline"
                  >
                    {item.email}
                  </a>
                )}

                <span className="block text-sm text-black/80">{item.role}</span>

                {item.socials.length > 0 && (
                  <div className="mt-3.5 flex flex-wrap items-center gap-3.5">
                    {item.socials.map((social) => (
                      <a
                        key={social.url}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded ring-primary-50 ring-offset-white transition-all duration-200 ease-in-out hover:ring-4"
                      >
                        {social.type === 'instagram' && (
                          <InstagramIcon className="size-6" />
                        )}
                        {social.type === 'x' && <XIcon className="size-6" />}
                        {social.type === 'linkedin' && (
                          <LinkedInIcon className="size-6" />
                        )}
                        {social.type === 'github' && (
                          <Github className="size-6" />
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <JoinUs />
    </>
  )
}
