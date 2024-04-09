import { FC } from 'react';
import s from './style.module.scss';
import { NavBar } from '../UI/NavBar/NavBar';
import logo from '../../assets/svg/logo.svg';
import { PhoneRequest } from '../UI/PhoneRequest/PhoneRequest';

export const Header: FC = () => {
  return(
    <header className={s.header}>
      <img src={logo} alt='Kapibara Lab' />
      <NavBar />
      <PhoneRequest />
    </header>
  )
}