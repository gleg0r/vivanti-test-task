import { FC } from 'react';
import { Link, animateScroll } from 'react-scroll';
import s from './style.module.scss';

export const NavBar:FC = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.navbar__list}>
        <li className={s.navbar__item}>
          <Link to="lab" smooth={`${animateScroll}`} duration={500} className={s.navbar__link_active}>Лаборатория</Link>
        </li>
        <li className={s.navbar__item}>
          <Link to="gallery" smooth={`${animateScroll}`} duration={500} className={s.navbar__link}>Галерея</Link>
        </li>
        <li className={s.navbar__item}>
          <Link to="form" smooth={`${animateScroll}`} duration={700} className={s.navbar__link}>Оставить заявку</Link>
        </li>
      </ul>
    </nav>
  )
}