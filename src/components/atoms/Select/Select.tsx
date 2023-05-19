import { FC } from 'react';
import s from './Select.module.scss';
import { ReactComponent as LanguageSVG } from '@/assets/icons/language.svg';

interface SelectProps {
  items: string[];
}

const Select: FC<SelectProps> = ({ items }) => {
  return <div className={s.container}>
    <LanguageSVG />
    <select name="language" className={s.select}>
      {items.map((item) => <option key={item}>{item}</option>)}
    </select>
  </div>
}

export default Select;