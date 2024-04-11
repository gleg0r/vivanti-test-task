import { FC, useEffect } from 'react';
import { useState } from 'react';
import s from './style.module.scss';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { Loader } from '../UI/Loader/Loader';
import checkMark from '../../assets/images/icons/check_mark.svg';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { sendData } from '../../store/slices/formSlice';

interface User {
  name: string;
  secondName: string;
  surName: string;
}

interface InputChecked {
  name: boolean;
  secondName: boolean;
  surName: boolean;
}

export const FeedbackForm: FC = () => {
  const [user, setUser] = useState<User>({name: '', secondName: '', surName: '',});
  const [isTouched, setIsTouched] = useState<InputChecked>({name: false, secondName: false, surName: false})
  const [isSumbit, setIsSubmit] = useState<boolean>(false);
  const { status } = useSelector((state: RootState) => state.form)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(isSumbit) {
      dispatch(sendData('Data Sent'));
    }
  }, [dispatch, isSumbit])
  
  function secondNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const secondName = event.target.value;
    const updatedUser = {...user, secondName: secondName};
    setUser(updatedUser);
    const updateCheck = {...isTouched, secondName: true}
    setIsTouched(updateCheck);
  }

  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    const updatedUser = {...user, name: name};
    setUser(updatedUser);
    const updateCheck = {...isTouched, name: true}
    setIsTouched(updateCheck);
  }

  function surnameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const surName = event.target.value;
    const updatedUser = {...user, surName: surName};
    setUser(updatedUser); 
    const updateCheck = {...isTouched, surName: true}
    setIsTouched(updateCheck);
  }

  function sendRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(user.name !== '' && user.secondName !== '' && user.surName !== '') setIsSubmit(true);
    if(user.name === '') setIsTouched({...isTouched, name: true});
    if(user.secondName === '') setIsTouched({...isTouched, secondName: true});
    if(user.surName === '') setIsTouched({...isTouched, surName: true});
  }

  return (
    <section id='form' className={s.feedback}>
      <h3 className={s.feedback__title}>Заявка на диагностику</h3>
      <p className={s.feedback__text}>Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите качественные результаты в кратчайшие сроки!</p>
      <form onSubmit={sendRequest} className={s.feedback__form}>
        <label className={s.feedback__fields}>
          <Input isTouched={isTouched.secondName} onChange={secondNameHandler} placeholder='Фамилия' />
          <Input isTouched={isTouched.name} onChange={nameHandler} placeholder='Имя' />
          <Input isTouched={isTouched.surName} onChange={surnameHandler} placeholder='Отчество' />
        </label>
        {
          status !== 'loading' ? <Button icon={checkMark}>Отправить</Button> : <Loader />
        }
        
      </form>
    </section>
  )
}