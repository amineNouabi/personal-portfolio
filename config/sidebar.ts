import { IconType } from 'react-icons'
import { FaAt, FaGithub, FaLinkedin } from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahmed-amine-nouabi-2508461b9/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/amineNouabi',
    icon: FaGithub,
  },
  {
    label: 'Email',
    href: 'mailto:nouabi@nouabi.engineer',
    icon: FaAt,
  },
]
