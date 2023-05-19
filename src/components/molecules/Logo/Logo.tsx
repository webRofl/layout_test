import { ReactComponent as LogoSVG } from '@/assets/icons/header_logo.svg';
import s from './Logo.module.scss';
import { Link } from 'react-router-dom';
import sLink from '@/styles/RRDLink.module.scss';

const Logo = () => {
  return <Link className={`${s.container} ${sLink.link}`} to="/">
    <LogoSVG className={s.logo} />
    <span className={s.name}>Artificial Intelligence</span>
  </Link>;
}

export default Logo;