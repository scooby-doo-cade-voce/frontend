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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
    name: 'Mário Lúcio',
    picture:
      'https://cdn.discordapp.com/attachments/1243259954320642129/1243407120582447185/foto_rindo.jpg?ex=66515c9e&is=66500b1e&hm=9a4f100c7a8ef12e2584ef83b76ebb37cb56d8bb53df9619b0bf390ce05969fb&',
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

  // liders backend
  {
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
    name: 'Vanessa Souto',
    picture:
      'https://cdn.discordapp.com/attachments/1243259954320642129/1243406585036800082/IMG_20220627_075056.jpg?ex=66515c1f&is=66500a9f&hm=88d0fb646ca8adf5011eebcd0a572eaa28ede91715ada566ff81438f78f6a963&',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
    name: 'Matheus Grossi',
    picture: 'https://github.com/matteothebrave.png',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
    name: 'Luiz Bernardes',
    picture:
      'https://cdn.discordapp.com/attachments/1243259954320642129/1243683510192177224/Foto_Perfil.jpeg?ex=66525e07&is=66510c87&hm=f356513484e2781673e434113ac33131efaebaafddbf92e15f16e8458a76225b&',
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
  {
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
    name: 'Daniel Rocha',
    picture:
      'https://media.discordapp.net/attachments/1243259954320642129/1243678091516051597/perfil.png?ex=665258fb&is=6651077b&hm=9e0222c7f61487a92f6061781a12026f78c3dd91085b413951f226ac99689800&=&format=webp&quality=lossless',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
    id: '53cc60e2-f143-4002-8be9-686619bd29f8',
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
]
// 53cc60e2-f143-4002-8be9-686619bd29f8
