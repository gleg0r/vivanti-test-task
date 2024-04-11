import { FC } from 'react';
import s from './style.module.scss';

export const Loader: FC = () => {
  return (
    <div className={s.loader}></div>
  )
}