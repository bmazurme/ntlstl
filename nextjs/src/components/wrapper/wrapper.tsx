'use client';

import React, {useContext} from 'react';
import block from 'bem-cn-lite';
import {ThemeProvider} from '@gravity-ui/uikit';
import {ThemeContext} from '@/context/theme-context';
import {DEFAULT_THEME} from '../app/constants';
import './wrapper.scss';

const b = block('wrapper');

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

export type AppProps = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<AppProps> = ({children}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <div className={b()}>
        <div className={b('content')}>{children}</div>
      </div>
    </ThemeProvider>
  );
};
