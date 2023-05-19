import { CSSProperties, FC, PropsWithChildren } from 'react';
import s from './Button.module.scss';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  styles?: CSSProperties;
  cb?: () => void;
  link?: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ styles, cb, link, children }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (link) navigate(link);

    if (cb) cb();
  };

  return <button className={s.container} style={styles} onClick={handleClick}>
    {children}
  </button>;
}

export default Button;