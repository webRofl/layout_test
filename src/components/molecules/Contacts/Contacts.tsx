import { ReactComponent as Logo } from '@/assets/icons/header_logo.svg';
import { ReactComponent as MailSVG } from '@/assets/icons/mail.svg';
import { ReactComponent as PhoneSVG } from '@/assets/icons/phone.svg';
import { ReactComponent as PinPointSVG } from '@/assets/icons/pin_point.svg';
import s from './Contacts.module.scss';
import sLink from '@/styles/RRDLink.module.scss';

const Contacts = () => {
  return <div className={s.container}>
    <Logo />
    <h3 className={s.title}>Artificial Intelligence</h3>
    <div className={s.desc}>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</div>
    <div className={s.contact}>
      <a className={`${sLink.link} ${s.contact}`} href="mailto:Company@gmail.com">
        <MailSVG className={s.icon} /> Company@gmail.com
      </a>
    </div>
    <div className={s.contact}>
      <a className={`${sLink.link} ${s.contact}`} href="tel:(064) 332-1233">
        <PhoneSVG className={s.icon} /> Phone: (064) 332-1233
      </a>
    </div>
    <div className={s.contact}>
      <PinPointSVG className={s.icon} /> 450 Wall Street, USA, New York
    </div>
  </div>;
}

export default Contacts;