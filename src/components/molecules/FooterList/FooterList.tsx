import { FC } from 'react';
import s from './FooterList.module.scss';
import sLink from '@/styles/RRDLink.module.scss';
import { Link } from 'react-router-dom';
import { stringUtils } from '@/utils';

interface FooterListProps {
  title: string;
  items: string[];
}

const FooterList: FC<FooterListProps> = ({ title, items }) => {
  return <nav className={s.container}>
    <h3 className={s.title}>{title}</h3>
    {items.map((item) => <Link key={item} to={stringUtils.slugify(item)} className={`${s.item} ${sLink.link}`}>{item}</Link>)}
  </nav>
}

export default FooterList;