import { AboutBlock, Contacts, FooterList } from '@/components/molecules';
import s from './Footer.module.scss';

const Footer = () => {
  return <footer className={s.container}>
    <Contacts />
    <FooterList title="INFORMATION" items={['New Collection', 'About Store', 'Contact Us', 'Latest News', 'Our Sitemap', 'Orders History']} />
    <FooterList title="FOOTER MENU" items={['Instagram profile', 'New Collection', 'Contact Us', 'Latest News', 'Terms & Conditions', 'Purchase Theme']} />
    <FooterList title="USEFUL LINKS" items={['Instagram profile', 'New Collection', 'Contact Us', 'Latest News', 'Terms & Conditions', 'Purchase Theme']} />
    <AboutBlock />
  </footer>;
}

export default Footer;