import s from './AboutBlock.module.scss';
import sLink from '@/styles/RRDLink.module.scss';
import { ReactComponent as Facebook } from '@/assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '@/assets/icons/instagram.svg';
import { ReactComponent as Twitter } from '@/assets/icons/twitter.svg';
import { ReactComponent as Linkedin } from '@/assets/icons/linkedin.svg';
import { ReactComponent as Youtube } from '@/assets/icons/youtube.svg';
import { Select } from '@/components/atoms';

const AboutBlock = () => {
  return <div className={s.container}>
    <h3 className={s.title}>ABOUT THE STORE</h3>
    <div className={s.desc}>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</div>
    <a className={`${s.website} ${sLink.link}`} href="https://www.company.com" target="_blank">www.company.com</a>
    <div className={s.soc}>
      <a href="https://facebook.com" target="_blank"><Facebook /></a>
      <a href="https://instagram.com" target="_blank"><Instagram /></a>
      <a href="https://twitter.com" target="_blank"><Twitter /></a>
      <a href="https://linkedin.com" target="_blank"><Linkedin /></a>
      <a href="https://youtube.com" target="_blank"><Youtube /></a>
    </div>
    <Select items={['English', 'Русский']} />
  </div>
}

export default AboutBlock;