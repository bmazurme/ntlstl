'use client';

import React from 'react';
import {Card, Label, Text} from '@gravity-ui/uikit';

import style from './layout.module.css';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Next',
  'Express',
  'Nest',
  'HTML',
  'CSS',
  'Redux',
  'React Router',
  'React Hook Form',
  'NPM',
  'Git',
  'Jest',
  'Cypress',
  'ESLint',
  'BEM',
  'MUI',
  'Tailwindcss',
  'AntDesign',
  'Webpack',
  'Vite',
  'Parcel',
  'PM2',
  'Docker',
  'NGINX',
  'Node',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Sequelize',
  'TypeORM',
  'Mongoose',
  'GitLab',
];

const educations = [
  {
    date: 2025,
    title: 'Алгоритмы и структуры данных',
    description: 'АНО ДПО «Образовательные технологии Яндекса»',
  },
  {
    date: 2024,
    title: 'Бэкенд на Node.js',
    description: 'АНО ДПО «Образовательные технологии Яндекса»',
  },
  {
    date: 2023,
    title: 'React-разработчик',
    description: 'АНО ДПО «Образовательные технологии Яндекса»',
  },
  {
    date: 2022,
    title: 'Мидл фронтенд-разработчик',
    description: 'АНО ДПО «Образовательные технологии Яндекса»',
  },
  {
    date: 2022,
    title: 'Веб-разработчик',
    description: 'АНО ДПО "ШАД"',
  },
  {
    date: 2009,
    title: 'Московский государственный строительный университет',
    description: 'ВиВ, Водоснабжение и водоотведение',
  },
];

const jobs = [
  {
    date: {
      from: 'Май 2022',
      to: 'по настоящее время',
    },
    name: 'Ifellow',
    position: 'Frontend-разработчик',
    details: [
      'внедрение на проекте статического анализа кода, модульного и e2e тестирования ESLint, Jest, Cypress, Husky',
      'внедрение на проекте ci/cd, тестирование, сборка, развертывание GitLab, GitLab runner, Linux, Tomcat, Maven, Node',
      'для авторизации по NTLM и взаимодействия со сторонними сервисами разработка BFF Nestjs, Redis, NTLM',
      'разработка новых модулей Frontend для CRM-системы JS, Vue',
      'разработка части Frontend для сервисов администрирования TS, React, RTK, MUI',
    ],
  },
  {
    date: {
      from: 'Апрель 2021',
      to: 'Май 2022',
    },
    name: 'Step logic',
    position: 'Frontend-разработчик',
    details: [
      `Разработка внутреннего портала. Разработка расчетных модулей для инженерных расчетов, формирование документации.
              Стек: JS, React, Redux, RTK query, MUI, CSS, BEM, React Table, KaTeX, viewer Autodesk Forge, JSZip, Canvas, ASP.NET Core, Webpack.
              Тесты: Jest.
              GitHub`,
    ],
  },
  {
    date: {
      from: 'Март 2019',
      to: 'Апрель 2021',
    },
    name: 'APEX project bureau',
    position: 'Desktop developer',
    details: [
      `Автоматизация процессов проектирования. Разработка приложений для инженерных расчетов, интеграция с Revit API, Forge API, AutoCAD, DiaLux.
              Стек: C#, WPF, WPFMath, JS, CSS, React, Webpack, PostgreSQL, LaTeX, Material design, Bootstrap, GitHub`,
    ],
  },
  {
    date: {
      from: 'Февраль 2007',
      to: 'Март 2019',
    },
    name: 'AECOM Construction Services',
    position: 'Desktop developer',
    details: ['Проектирование систем ВиВ'],
  },
];

export const Layout: React.FC = () => {
  return (
    <div className={style.box}>
      <Card className={style.card} view="filled" type="container" size="l">
        <Text variant="header-2">Fullstack-разработчик</Text>
        <Text variant="header-1" className={style.block}>
          Опыт работы
        </Text>
        {jobs.map((item, index) => (
          <div key={index} className={style.job}>
            <Text className={style.from} variant="code-1">{`${item.date.from} - `}</Text>
            <Text className={style.to} variant="code-1">
              {item.date.to}
            </Text>
            <Text className={style.name} variant="subheader-2">
              {item.name}
            </Text>
            <Text className={style.position} variant="subheader-1">
              {item.position}
            </Text>
            <div className={style.details}>
              {item.details.map((x, i) => (
                <Text variant="body-1" key={i}>
                  {x}
                </Text>
              ))}
            </div>
          </div>
        ))}
        <Text variant="header-1" className={style.block}>
          Образование
        </Text>
        <div className={style.educations}>
          {educations.map((item, index) => (
            <div className={style.education} key={index}>
              <Text className={style.date} variant="code-1">
                {item.date}
              </Text>
              <Text className={style.title} variant="subheader-2">
                {item.title}
              </Text>
              <Text className={style.description} variant="body-1">
                {item.description}
              </Text>
            </div>
          ))}
        </div>
        <Text variant="header-1" className={style.block}>
          Навыки
        </Text>
        <div className={style.skills}>
          {skills.map((skill) => (
            <Label className={style.label} theme="clear" key={skill}>
              {skill}
            </Label>
          ))}
        </div>
      </Card>
    </div>
  );
};
