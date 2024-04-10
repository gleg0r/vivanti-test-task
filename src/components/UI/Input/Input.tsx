import { FC } from 'react';
import s from './style.module.scss';

interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isTouched: boolean;
}

export const Input: FC<InputProps> = ({ placeholder, onChange, isTouched}) => {
  return (
    <input
      className={s.input}
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      required={isTouched}
    />
  )
}