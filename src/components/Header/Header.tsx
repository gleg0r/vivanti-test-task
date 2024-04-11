import { FC } from 'react';
import s from './style.module.scss';
import { NavBar } from '../UI/NavBar/NavBar';
import logo from '../../assets/images/logo.svg';
import { PhoneRequest } from '../UI/PhoneRequest/PhoneRequest';

export const Header: FC = () => {
  return(
    <header className={s.header}>
      <div className='container'>
        <div className={s.header__logo}>
          <img src={logo} alt='Kapibara Lab' />
          <span className={s.header__text}>Современные методики<br/> диагностики</span>
        </div>
        <NavBar />
        <PhoneRequest />
      </div>
    </header>
  )
}