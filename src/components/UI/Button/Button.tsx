import { FC } from 'react';
import s from './style.module.scss';

interface Props {
  children: string | JSX.Element,
  icon: string,
  onSubmit?: () => void;
}

export const Button: FC<Props> = ({children, icon, onSubmit}) => {
  return (
    <button onSubmit={onSubmit} className={s.button}>
      {children}
      <img className={s.button__icon} src={icon} alt='icon' />
    </button>
  )
}