import { FC } from 'react';
import s from './style.module.scss';

export const NavBar:FC = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.navbar__list}>
        <li className={s.navbar__item}>
          <a href="#" className={s.navbar__link_active}>Лаборатория</a>
        </li>
        <li className={s.navbar__item}>
          <a href="#" className={s.navbar__link}>Галерея</a>
        </li>
        <li className={s.navbar__item}>
          <a href="#" className={s.navbar__link}>Оставить заявку</a>
        </li>
      </ul>
    </nav>
  )
}