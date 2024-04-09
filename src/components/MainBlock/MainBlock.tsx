import { FC } from 'react';
import s from './style.module.scss';
import mascot from '../../assets/images/kapibara_main.png';

export const MainBlock: FC = () => {

  return(
    <div className={s.main}>
      <div className={s.main__bg}></div>
      <div className={s.main__text}>
        <h1 className={s.main__title}>точные результаты</h1>
        <h2 className={s.main__subtitle}>точно в срок</h2>
      </div>
      <img className={s.main__img} src={mascot} alt="Kapibara" />
    </div>
  )
}