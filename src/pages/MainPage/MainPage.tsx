import { FC } from 'react';
import s from './style.module.scss';
import { MainBlock } from '../../components/MainBlock/MainBlock';
import { LaboratoryBlock } from '../../components/LaboratoryBlock/LaboratoryBlock';
import { GallaryBlock } from '../../components/GallaryBlock/GallaryBlock';

export const MainPage: FC = () => {
  return (
    <main className={s.main}>
      <MainBlock />
      <div className='container'>
        <p className={s.main__welcome}>
          Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают
          исключительно капибары — ваш надежный партнер в обеспечении качественной
          и точной диагностики!
        </p>
      </div>
      <LaboratoryBlock />
      <div className='container'>
        <GallaryBlock />
      </div>
    </main>
  );
};
