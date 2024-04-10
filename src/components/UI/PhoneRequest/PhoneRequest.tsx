import { FC } from 'react';
import s from './style.module.scss';
import phoneIcon from '../../../assets/images/icons/phone.svg';

export const PhoneRequest: FC = () => {

  return (
    <div className={s.phone}>
      <img className={s.phone__img} src={phoneIcon} alt='Phone Icon' />
      <div className={s.phone__text}>
        <a className={s.phone__link} href='tel:+71234567890'>+7 123 456 7890</a>
        <p className={s.phone__desc}>Звонок бесплатный</p>
      </div>
    </div>
  )  
}