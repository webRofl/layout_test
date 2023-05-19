import { FC } from 'react';
import s from './NavBar.module.scss';
import { Link } from 'react-router-dom';

interface NavBarProps {
  list: string[];
}

const NavBar: FC<NavBarProps> = ({ list }) => {
  return <nav className={s.container}>
    {list.map((item) => <Link to={item.toLowerCase()} key={item} className={s.item}>{item}</Link>)}
  </nav>;
}

export default NavBar;