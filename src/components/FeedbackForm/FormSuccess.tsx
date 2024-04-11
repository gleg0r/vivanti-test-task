import { FC } from 'react';
import s from './style.module.scss'
import success from '../../assets/images/icons/success.svg';

export const FormSuccess: FC = () => {
  return(
    <section className={s.success}>
      <img className={s.success__img} src={success} alt="success" />
      <p className={s.success__text}>Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее время.</p>
    </section>
  )
}