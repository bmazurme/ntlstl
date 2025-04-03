'use client';
import React from 'react';
import {AsideHeader} from '@gravity-ui/navigation';
import {Theme} from '@gravity-ui/uikit';
import {Ghost} from '@gravity-ui/icons';

import ThemeButton from './theme-button';
import {Wrapper} from '../wrapper';

import {DARK, DEFAULT_THEME, LIGHT} from './constants';
import {ThemeContext} from '@/context/theme-context';
import {useMenuItems} from './use-menu-items';

interface AppProps {
  children: React.ReactNode;
}

export const App: React.FC<AppProps> = ({children}) => {
  const menuItems = useMenuItems();
  const [theme, setTheme] = React.useState<Theme>(DEFAULT_THEME);
  const isDark = theme === DARK;

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Wrapper>
        <AsideHeader
          logo={{icon: Ghost, text: 'ghost', href: '/'}}
          menuItems={menuItems}
          compact={true}
          hideCollapseButton={true}
          renderContent={() => <>{children}</>}
          renderFooter={() => (
            <ThemeButton isDark={isDark} onToggle={() => setTheme(isDark ? LIGHT : DARK)} />
          )}
        />
      </Wrapper>
    </ThemeContext.Provider>
  );
};
