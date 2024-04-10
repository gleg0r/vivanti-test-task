import { FC } from 'react';
import s from './style.module.scss';
import logo from '../../assets/images/footer_logo.svg';
export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className='container'>
        <p className={s.footer__text}>Все права защищены Российской Ассоциацией Капибар</p>
        <img className={s.footer__logo} src={logo} alt="KapibaraLab" />
      </div>
    </footer>
  )
}