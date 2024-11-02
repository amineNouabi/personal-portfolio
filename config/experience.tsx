export type Company = 'FeverTokens' | 'Gloowon'
export type CompanyDetail = {
  name: string
  longName?: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  FeverTokens: {
    name: 'Fevertokens',
    url: 'https://www.fevertokens.io/',
    position: 'Blockchain Mobile Developer',
    duration: 'Sep 2024 - Present',
    logo: {
      light:
        'https://cdn.prod.website-files.com/61d9a9b5355373e087deb806/659cf260960988ec5d061b68_FTlogo.png',
      dark: 'https://cdn.prod.website-files.com/61d9a9b5355373e087deb806/659cf260960988ec5d061b68_FTlogo.png',
    },
    roles: [
      <>
        Contributed to the development of crypto wallet apps for iOS and Android
        using React Native.
      </>,
      <>
        Developed CI/CD pipelines for (build | test) apps using EAS Build and
        Github Actions.
      </>,
      <>Development of wallet based authentification system.</>,
    ],
  },
  Gloowon: {
    name: 'Gloowon',
    longName: 'Gloowon Inc.',
    url: 'https://gloowon.com/',
    position: 'Solution Achitect & Software Engineer',
    duration: 'Sep 2021 - Sep 2024',
    logo: {
      light: '/worked_at_logos/gloowon/logo.png',
      dark: '/worked_at_logos/gloowon/logo.png',
    },
    roles: [
      <>
        Developed web-based platforms for different types of clients using
        ReactJS, NextJS, Typescript and NodeJS.
      </>,
      <>
        CI / CD pipelines for differnt dev tasks using Github Actions and turbo
        monorepo.
      </>,
      <>Hosting and maintaining Linux servers and web infrastructures.</>,
      <>Custom authentification system for different clients.</>,
    ],
  },
}

export const ExperiencesList = [Experiences.FeverTokens, Experiences.Gloowon]
