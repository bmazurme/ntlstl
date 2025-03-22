/* eslint-disable import/no-duplicates */
'use client';

import React, {createContext} from 'react';

import {Ghost} from '@gravity-ui/icons';
import {AsideHeader} from '@gravity-ui/navigation';
import {AsideHeaderProps} from '@gravity-ui/navigation';
import {Bookmark, ListUl} from '@gravity-ui/icons';
import {Button, Icon, Theme} from '@gravity-ui/uikit';
import {Moon, Sun} from '@gravity-ui/icons';
import {Wrapper} from '../wrapper';

import style from './app.module.css';

export const useMenuItems = (): AsideHeaderProps['menuItems'] => {
  return [
    {id: 'overview', icon: ListUl, title: 'Overview', link: '/'},
    {id: 'notes', icon: Bookmark, title: 'Notes', link: '/notes'},
  ];
};

interface AppProps {
  children: React.ReactNode;
}

const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_THEME = DARK;

export const ThemeContext = createContext<{theme: Theme; setTheme: (theme: Theme) => void}>({
  theme: LIGHT,
  setTheme: () => {},
});



export const App: React.FC<AppProps> = ({children}) => {
  const menuItems = useMenuItems();
  const [theme, setTheme] = React.useState<Theme>(DEFAULT_THEME);
  const isDark = theme === DARK;

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Wrapper>
        <AsideHeader
          logo={{icon: Ghost, text: 'nextjs-example', href: '/'}}
          menuItems={menuItems}
          compact={true}
          hideCollapseButton={true}
          renderContent={() => <>{children}</>}
          renderFooter={() => (
            <div className={style.button}>
              <Button
                size="l"
                view="flat"
                onClick={() => {
                  setTheme(isDark ? LIGHT : DARK);
                }}
              >
                <Icon data={isDark ? Sun : Moon} />
              </Button>
            </div>
          )}
        />
      </Wrapper>
    </ThemeContext.Provider>
  );
};
