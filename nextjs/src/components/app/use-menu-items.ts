import {AsideHeaderProps} from '@gravity-ui/navigation';
import {Bookmark, LogoTelegram, Person} from '@gravity-ui/icons';
import GitHub from '../../assets/icons/github.svg';

export const useMenuItems = (): AsideHeaderProps['menuItems'] => {
  return [
    {id: 'profile', icon: Person, title: 'Person', link: '/profile'},
    {id: 'notes', icon: Bookmark, title: 'Notes', link: '/notes'},
    {id: 'github', icon: GitHub, title: 'GitHub', link: 'https://github.com/bmazurme'},
    {id: 'telegram', icon: LogoTelegram, title: 'Telegram', link: '/'},
  ];
};
