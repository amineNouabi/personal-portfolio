import { IconType } from 'react-icons'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { IoLogoPwa } from 'react-icons/io5'
import {
  SiAnsible,
  SiApollographql,
  SiArduino,
  SiC,
  SiCpanel,
  SiCplusplus,
  SiDassaultsystemes,
  SiDocker,
  SiElectron,
  SiExpo,
  SiFramer,
  SiGit,
  SiGnubash,
  SiGraphql,
  SiJavascript,
  SiJira,
  SiLinux,
  SiMaterialUi,
  SiMathworks,
  SiMongodb,
  SiMysql,
  SiNextDotJs,
  SiNodeDotJs,
  SiNodeRed,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiRedis,
  SiRedux,
  SiSiemens,
  SiSocketDotIo,
  SiStyledComponents,
  SiTailwindcss,
  SiTypescript,
  SiVim,
  SiVisualstudiocode,
} from 'react-icons/si'

export type SkillCategory =
  | 'engineering'
  | 'embedded systems'
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'desktop'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  engineering: [
    {
      name: 'Ansys',
      icon: SiAnsible,
    },
    {
      name: 'Solidworks',
      icon: SiDassaultsystemes,
    },
    {
      name: 'Catiav5',
      icon: SiDassaultsystemes,
    },
    {
      name: 'Matlab',
      icon: SiMathworks,
    },
    {
      name: 'TIA Portal',
      icon: SiSiemens,
    },
    {
      name: 'Node red',
      icon: SiNodeRed,
    },
  ],
  'embedded systems': [
    {
      name: 'C',
      icon: SiC,
    },
    {
      name: 'C++',
      icon: SiCplusplus,
    },
    {
      name: 'Arduino',
      icon: SiArduino,
    },
    {
      name: 'Raspberry Pi',
      icon: SiRaspberrypi,
    },
  ],
  backend: [
    {
      name: 'Node',
      icon: SiNodeDotJs,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Graphql (JS, C#)',
      icon: SiGraphql,
    },
    {
      name: 'PHP (Wordpress, Slim)',
      icon: SiPhp,
    },
    {
      name: 'Python',
      icon: SiPython,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextDotJs,
    },
    {
      name: 'Apollo Graphql',
      icon: SiApollographql,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Redis',
      icon: SiRedis,
    },
    {
      name: 'SocketIO',
      icon: SiSocketDotIo,
    },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'CPanel',
      icon: SiCpanel,
    },
    {
      name: 'Github Actions',
      icon: SiGit,
    },
    {
      name: 'EAS Build',
      icon: SiExpo,
    },
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledComponents,
    },
    {
      name: 'AntDesign',
      icon: AiOutlineAntDesign,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialUi,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'TailwindCSS',
      icon: SiTailwindcss,
    },
    {
      name: 'Shadcn',
      icon: SiNextDotJs,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
    {
      name: 'Linux',
      icon: SiLinux,
    },
    {
      name: 'Vim',
      icon: SiVim,
    },
    {
      name: 'Jira',
      icon: SiJira,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
    {
      name: 'Web PWA',
      icon: IoLogoPwa,
    },
  ],
  desktop: [
    {
      name: 'Electron',
      icon: SiElectron,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
