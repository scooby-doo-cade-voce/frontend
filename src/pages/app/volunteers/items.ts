type Volunteer = {
  id: string
  name: string
  picture: string
  role: string
  email?: string
  socials: {
    type: 'instagram' | 'x' | 'linkedin' | 'github'
    url: string
  }[]
}

export const volunteers: Volunteer[] = [
  {
    id: '5b808f0d-7d23-4c4a-9d8e-82d7a1d2c529',
    name: 'Rodrigo Alexandre',
    picture: 'https://github.com/narradorww.png',
    role: 'Idealizador',
    email: 'rodrigo.anst@gmail.com',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/narradorww',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/rodrigo-alexandre-50736343/',
      },
      {
        type: 'instagram',
        url: 'https://instagram.com/narradorww',
      },
    ],
  },
  {
    id: '63f4c404-8976-4e96-b98c-7d02d8012b01',
    name: 'João Oliveira',
    picture: 'https://github.com/JoaooowDev.png',
    email: 'joaovictor.oliveira290502@gmail.com',
    role: 'Moderador',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/JoaooowDev',
      },
      {
        type: 'linkedin',
        url: 'https://linkedin.com/in/jo%C3%A3o-oliveira-ba7091247',
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/joaooowdev/',
      },
    ],
  },

  // lideres
  // liders financeiro
  {
    id: '2b4d9387-965a-4701-a37f-e2f61ea9e1f8',
    name: 'Mário Lúcio',
    picture: '/mario-lucio.jpg',
    role: 'Líder Financeiro',
    email: 'marioluciofjr@gmail.com',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/marioluciofjr',
      },
      {
        type: 'linkedin',
        url: 'https://linkedin.com/in/marioluciofjr',
      },
    ],
  },

  // liders marketing
  {
    id: '11273f9a-4cbb-4353-9690-5607496eb02c',
    name: 'Yasmin Costa',
    picture: 'https://avatars.githubusercontent.com/u/99223801?v=4',
    role: 'Líder Marketing',
    email: 'tiyasmin14@gmail.com',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/YASMINCOS',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/yasmin-costa-bb24a21a3/',
      },
    ],
  },

  // liders backend
  {
    id: 'a46df428-51ed-4794-8efe-0113c63c6367',
    name: 'Vanessa Souto',
    picture: '/vanessa-souto.jpg',
    email: 'vanessasoutoc@gmail.com',
    role: 'Líder Backend',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/vanessasoutoc,',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/vanessasoutoc/',
      },
      {
        type: 'x',
        url: 'https://twitter.com/vanessasoutoc',
      },
    ],
  },
  {
    id: 'f54492d9-8d1b-47a9-bf90-ac14c4609fc3',
    name: 'Matheus Rosmaninho',
    picture: 'https://github.com/matheusrosmaninho.png',
    role: 'Líder Backend',
    email: 'matheusrosmano@gmail.com',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/matheusrosmaninho',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/matheusrosmano/',
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/jmatheusrosmanoo/',
      },
    ],
  },
  {
    id: 'bb0834d4-0f27-4a17-9b62-a0a61a534cf4',
    name: 'Leonardo Simão',
    picture: 'https://github.com/leosimao.png',
    role: 'Líder Backend',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/leosimao',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/leonardo-sim%C3%A3o-259a341b8/',
      },
    ],
  },

  // liders frontend
  {
    id: 'f1bb122a-3c1f-4c86-9124-5a0e204efd19',
    name: 'Matheus Grossi',
    picture: 'https://github.com/matteothebrave.png',
    email: 'matheusgrossi33@gmail.com',
    role: 'Líder Frontend',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/matteothebrave',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/matheus-grossi-1437b2143/',
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/matheusgrossi__/',
      },
    ],
  },
  {
    id: '06102ff3-9f95-4391-99ae-3a37ec70974d',
    name: 'Yan Lyra',
    picture: 'https://github.com/ylyra.png',
    role: 'Líder Frontend',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/ylyra',
      },
    ],
  },
  {
    id: '7afdb06c-0ca4-4a0a-b89c-f66d8b7d5b1e',
    name: 'Rayane Barbosa',
    picture: 'https://github.com/rayane-barbosa.png',
    role: 'Líder Frontend',
    email: 'rayanebarbosa.machinelearning@gmail.com',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/rayane-barbosa',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/rayane-barbosa-36abb3152/',
      },
    ],
  },
  {
    id: '6564e306-f705-4649-b8f4-8b4772690f39',
    name: 'Gabriel Teles',
    picture: 'https://github.com/Teles-Gabriel.png',
    role: 'Líder Frontend',
    email: 'gabrielteles0609@gmail.com',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/Teles-Gabriel',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/gabriel--teles',
      },
      {
        type: 'instagram',
        url: 'https://instagram.com/gabrielteles001',
      },
    ],
  },

  // liders qa
  {
    id: '83617b19-34d8-4b02-b644-5ab6c087dc66',
    name: 'Geise Paveck',
    picture: 'https://github.com/geisepavecks.png',
    role: 'Líder QA',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/geisepavecks',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/geisepavecks/',
      },
    ],
  },
  {
    id: 'b056b4ce-2240-4e3b-a895-99a640632fd0',
    name: 'Daniel Rocha',
    picture: '/daniel-rocha.png',
    role: 'Líder QA',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/DanielRRocha',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/daniel-rosario-rocha/',
      },
    ],
  },

  // backend
  {
    id: '6e0a5143-64a2-4e22-8720-a4604025a7b9',
    name: 'Breno R.',
    picture: 'https://github.com/brenorr.png',
    role: 'Desenvolvedor Backend',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/brenorr',
      },
    ],
  },
  {
    id: 'e3f9aae9-9b0e-4680-9e4a-c19470f3fccd',
    name: 'João Vitor',
    picture: 'https://github.com/JoaoVitorJJV.png',
    role: 'Desenvolvedor Backend',
    email: 'joaovitorp42@gmail.com',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/JoaoVitorJJV',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/jo%C3%A3o-vitor-pinheiro-b52433219/',
      },
    ],
  },
  {
    id: '1fc3409c-ebc6-4af1-adc4-66be9e1804b9',
    name: 'André Diogo',
    picture: 'https://github.com/andredifs.png',
    role: 'Desenvolvedor Backend',
    email: 'andrefirsan@hotmail.com',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/andredifs',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/andredifs',
      },
    ],
  },

  // frontend
  {
    id: 'd62ee8aa-a617-4472-a789-92b0c930e99f',
    name: 'Guilherme Nunes',
    picture: 'https://github.com/Viilih.png',
    role: 'Desenvolvedor Frontend',
    email: 'gnlnascimento@@gmail.com',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/Viilih',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/nunesdev/',
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/guinunesln/',
      },
      {
        type: 'x',
        url: 'https://twitter.com/guincrf_',
      },
    ],
  },
  {
    id: '2d1cebb2-bd0d-46ef-a06a-349a9b262c90',
    name: 'Lana Gomes',
    picture: 'https://github.com/LanaGomes.png',
    role: 'Desenvolvedora Frontend',
    email: 'lana.gomes1919@gmail.com',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/LanaGomes',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/lana-gomes-b622981ab/',
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/lanahermana_art/',
      },
    ],
  },

  // qa
  {
    id: '47799317-0fb1-458c-a465-ddcdbe3b89c1',
    name: 'Luiz Bernardes',
    picture: '/luiz-fernando.jpeg',
    role: 'Líder QA',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/LFernandoBernardes',
      },
      {
        type: 'linkedin',
        url: 'https://linkedin.com/in/www.linkedin.com/in/luiz-fernando-bernardes-borges',
      },
    ],
  },
]
// 9f9d145b-5afa-4ec2-aa8d-2c4a7ac86c23
