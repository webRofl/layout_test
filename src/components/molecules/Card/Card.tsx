import { FC } from 'react';
import s from './Card.module.scss';

interface CardProps {
  image: string;
  title: string;
  desc: string;
}

const Card: FC<CardProps> = ({ image, title, desc }) => {
  return <div className={s.container}>
    <img src={image} alt={`${title} card image`} className={s.image} />
    <h2 className={s.title}>{title}</h2>
    <div className={s.desc}>{desc}</div>
  </div>;
}
 
export default Card;