import { FC } from 'react';
import s from './style.module.scss';

interface Props {
  children: string,
  icon: string,
}

export const Button: FC<Props> = ({children, icon}) => {
  return (
    <button className={s.button}>
      {children}
      <img className={s.button__icon} src={icon} alt='icon' />
    </button>
  )
}