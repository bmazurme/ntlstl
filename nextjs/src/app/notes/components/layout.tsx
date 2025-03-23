'use client';

import React from 'react';
import {Card, Text} from '@gravity-ui/uikit';

import style from './layout.module.css';

export const Layout: React.FC = () => {
  return (
    <div className={style.box}>
      <Card className={style.card} view="filled" type="container" size="l">
        <Text variant="header-2">Notes</Text>
        <Text variant="header-1" className={style.block}>
          Установка NVM + Node.js
        </Text>
        <Text variant="header-1" className={style.block}>
          Установка git
        </Text>
      </Card>
    </div>
  );
};
