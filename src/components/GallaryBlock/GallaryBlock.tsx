import { FC } from 'react';
import s from './style.module.scss';
import leftLabFirst from '../../assets/images/lab_1.png'
import leftLabSecond from '../../assets/images/lab_2.png'
import leftLabThird from '../../assets/images/lab_3.png'
import rightLabFirst from '../../assets/images/lab_4.png'
import rightLabSecond from '../../assets/images/lab_5.png'
import rightLabThird from '../../assets/images/lab_6.png'
import rightLabFourth from '../../assets/images/lab_7.png'

export const GallaryBlock: FC = () => {
  return (
    <section id='gallery' className={s.gallary}>
      <h3 className={s.gallary__title}>Галерея</h3>
      <div className={s.gallary__images}>
        <div className={s.gallary__left}>
          <img className={s.gallary__first} src={leftLabFirst} alt="" />
          <img className={s.gallary__second} src={leftLabSecond} alt="" />
          <img className={s.gallary__third} src={leftLabThird} alt="" />
        </div>
        <div className={s.gallary__right}>
          <div className={s.gallary__fourth}>
            <img className={s.gallary__crop} src={rightLabFirst} alt="" />
          </div>
          <img className={s.gallary__fifth} src={rightLabSecond} alt="" />
          <img className={s.gallary__sixth} src={rightLabThird} alt="" />
          <img className={s.gallary__seventh} src={rightLabFourth} alt="" />
        </div>
      </div>
    </section>
  )
}