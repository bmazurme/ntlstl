import { Links } from '../utils/config';
import { BiLogoGithub, BiLogoTelegram, BiLogoLinkedin } from 'react-icons/bi';

export const contactLinks = [
  {
    label: 'Telegram',
    icon: BiLogoTelegram,
    url: Links.TELEGRAM,
   },
  {
    label: 'LinkedIn',
    icon: BiLogoLinkedin,
    url: Links.LINKEDIN,
  },
  {
    label: 'GitHub',
    icon: BiLogoGithub,
    url: Links.GITHUB,
  },
];
