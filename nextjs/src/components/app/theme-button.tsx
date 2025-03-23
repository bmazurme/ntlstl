'use client';
import React from 'react';

import {Button, Icon} from '@gravity-ui/uikit';
import {Moon, Sun} from '@gravity-ui/icons';

import style from './app.module.css';

export default function ThemeButton({isDark, onToggle}: {isDark: boolean; onToggle: () => void}) {
  return (
    <div className={style.button}>
      <Button size="l" view="flat" onClick={onToggle}>
        <Icon data={isDark ? Sun : Moon} />
      </Button>
    </div>
  );
}
