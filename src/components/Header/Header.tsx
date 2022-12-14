import styles from './Header.module.css';

interface IProps {
  label: string,
  active: boolean
}

export default function Header({ language, toggleLanguage }
  : { language: IProps[], toggleLanguage: (label: string) => void }) {
  return (
    <div className={styles.header}>
      <ul className={styles.header__list}>
        <li className={styles.header__link}><a href='/'>[ntlstl]</a></li>
      </ul>

      <ul className={styles.language__list}>
        {language.map(({ label, active }) =>
          <li
            key={label}
            className={`${styles.language__link} ${active ? styles.language__link_active : ''}`}
            onClick={() => toggleLanguage(label)}
          >
            {label}
          </li>
        )}
      </ul>
    </div>
  )
}
