import Menu from './componets/menu';
import Cards from './componets/cards';

import style from './notes-layout.module.css';

export default function NotesLayout({ links, cards }
  : { links: { name: string; to: string; }[]; cards: string[]; }) {
  return (
    <div className={style.notes}>
      <Menu links={links} />
      <Cards links={links} cards={cards} />
    </div>
  );
}