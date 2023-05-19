import { Logo } from '@/components/molecules';
import s from './Header.module.scss';
import { NavBar } from '@/components/molecules';
import { Button } from '@/components/atoms';

const Header = () => {
  return <header className={s.container}>
    <Logo />
    <NavBar list={['Home', 'About', 'Services', 'Blog', 'Contact']} />
    <Button styles={{ width: 112, height: 52, marginLeft: 256 }} link="sign-in">
      Sign In
    </Button>
  </header>;
}

export default Header;