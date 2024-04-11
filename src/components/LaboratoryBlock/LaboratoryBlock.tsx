import { FC } from 'react';
import s from './style.module.scss';
import { Link, animateScroll } from 'react-scroll';
import { Button } from '../UI/Button/Button';
import kapibaraInLab from '../../assets/images/kapibara_lab.png';
import arrow from '../../assets/images/icons/arrow.svg';

export const LaboratoryBlock: FC = () => {
  return (
    <section id='lab' className={s.laboratory}>
      <div className={s.laboratory__container}>
        <h3 className={s.laboratory__title}>Лаборатория</h3>
        <div className={s.laboratory__main}>
          <div className={s.laboratory__info}>
            <div className={s.laboratory__text}>
              <p className={s.laboratory__desc}>
                Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых 
                опытными капибарами-лаборантами. Мы специализируемся на анализе биоматериалов, 
                микробиологических исследованиях, генетической диагностике и многом другом. 
              </p>
              <p className={s.laboratory__desc}>
                Мы используем современное оборудование и методики и гарантируем точность и 
                надежность результатов.
              </p>
            </div>
            <Button icon={arrow}><Link to='form' smooth={`${animateScroll}`} duration={500}>Оставить заявку</Link></Button>
          </div>
          <img className={s.laboratory__img} src={kapibaraInLab} alt="Kapibara in lab" />
        </div>
      </div>
    </section>
  )
}