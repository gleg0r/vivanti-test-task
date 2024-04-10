import { FC } from 'react';
import s from './style.module.scss';
import { MainBlock } from '../../components/MainBlock/MainBlock';
import { LaboratoryBlock } from '../../components/LaboratoryBlock/LaboratoryBlock';
import { GallaryBlock } from '../../components/GallaryBlock/GallaryBlock';
import { FeedbackForm } from '../../components/FeedbackForm/FeedbackForm';

export const MainPage: FC = () => {
  return (
    <main className={s.main}>
      <MainBlock />
      <p className={s.main__welcome}>
          Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают
          исключительно капибары — ваш надежный партнер в обеспечении качественной
          и точной диагностики!
      </p>
      <LaboratoryBlock />
      <div className='container'>
        <GallaryBlock />
      </div>
      <div className='container'>
        <FeedbackForm />
      </div>
    </main>
  );
};
