'use client';

import React from 'react';
import Link from 'next/link';
import {Card, Label, Text} from '@gravity-ui/uikit';

import {notes} from '../../../../data/notes';

import style from './layout.module.css';

export const Layout: React.FC = () => {
  return (
    <div className={style.box}>
      <Card className={style.card} view="filled" type="container" size="l">
        <Text variant="header-2">Notes</Text>
        {notes.map((item) => (
          <div className={style.container} key={item.id}>
            <Link href={`/notes/${item.id}`}>
              <Text variant="header-1" className={style.block}>
                {item.title}
              </Text>
            </Link>
            <Label theme="info">{item.tag}</Label>
            <Text variant="body-1">{item.date}</Text>
          </div>
        ))}
      </Card>
    </div>
  );
};
