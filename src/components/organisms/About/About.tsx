import aboutImg from '@/assets/images/about.png';
import { Description } from '@/components/molecules';
import s from './About.module.scss';

const About = () => {
  return <article className={s.container}>
    <Description title="What our clients say about our awesome solutions" desc="To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.
    
    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .
    
    Lorem ipsum is placeholder previewing layouts and visual mockups.
    
    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." fontSize={36} lineHeight={52} styles={{ width: '34rem' }} />
    <img src={aboutImg} alt="about image" className={s.image} />
  </article>;
}

export default About;