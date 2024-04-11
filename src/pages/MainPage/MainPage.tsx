import { FC } from 'react';
import s from './style.module.scss';
import { useSelector } from 'react-redux';
import { MainBlock } from '../../components/MainBlock/MainBlock';
import { LaboratoryBlock } from '../../components/LaboratoryBlock/LaboratoryBlock';
import { GallaryBlock } from '../../components/GallaryBlock/GallaryBlock';
import { FeedbackForm } from '../../components/FeedbackForm/FeedbackForm';
import { FormSuccess } from '../../components/FeedbackForm/FormSuccess';
import { RootState } from '../../store';

export const MainPage: FC = () => {
  const { status } = useSelector((state: RootState) => state.form);
 
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
        { status !== 'resolved' ?  <FeedbackForm /> : <FormSuccess />}
      </div>
    </main>
  );
};
