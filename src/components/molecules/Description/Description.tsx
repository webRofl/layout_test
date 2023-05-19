import { CSSProperties, FC, PropsWithChildren } from 'react';
import s from './Description.module.scss';

interface DescriptionProps {
  prefix?: string;
  title: string;
  desc: string;
  styles?: CSSProperties;
  fontSize?: number;
  lineHeight?: number;
}

const Description: FC<PropsWithChildren<DescriptionProps>> = ({ prefix, title, desc, children, styles, fontSize, lineHeight }) => {
  return <div className={s.container} style={styles}>
    <div className={s.prefix}>{prefix}</div>
    <h1 className={s.title} style={{ fontSize, lineHeight: lineHeight + 'px'  }}>{title}</h1>
    <div className={s.desc}>{desc}</div>
    <div>{children}</div>
  </div>;
}
 
export default Description;