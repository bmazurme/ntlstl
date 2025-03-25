'use client';

import React from 'react';
import {Card, Label, Text} from '@gravity-ui/uikit';

import style from './layout.module.css';

export type NoteType = {id: number; title: string; tag: string; date: string};

export type AppProps = {
  // children: React.ReactNode;
  note: NoteType;
};

export const Layout: React.FC<AppProps> = ({note}: {note: NoteType}) => {
  return (
    <div className={style.box}>
      <Card className={style.card} view="filled" type="container" size="l">
        <Text variant="header-2">{note.title}</Text>
        <div className={style.container}>
          <Label theme="info">{note.tag}</Label>
          <Text variant="body-1">{note.date}</Text>
        </div>
      </Card>
    </div>
  );
};
