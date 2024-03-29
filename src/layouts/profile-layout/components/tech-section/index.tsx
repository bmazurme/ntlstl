import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import techList from '../../../../mock-data/tech-list';

import styles from './tech-section.module.css';

export default function TechSection({ profile }: any) {
  return (
    <section className={styles.tech}>
      <h2 className={styles.title}>{profile.tech}</h2>
      <ul className={styles.tags}>
        {techList.map(({ label, icon: Component }) =>
          <li
            key={uuidv4()}
            className={styles.tag}
          >
            {Component
              ? <span className={styles.icon}>
                  <Component size="20px" />
                </span>
              : null}
            {label}
          </li>)
        }
      </ul>
    </section>
  );
}
