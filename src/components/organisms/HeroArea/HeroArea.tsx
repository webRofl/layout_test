import { Description } from '@/components/molecules';
import s from './HeroArea.module.scss';
import heroAreImg from '@/assets/images/hero_area.png';
import { Button } from '@/components/atoms';
import { ReactComponent as PlaySVG } from '@/assets/icons/play.svg';
import { ReactComponent as Logo1 } from '@/assets/icons/logo1.svg';
import { ReactComponent as Logo2 } from '@/assets/icons/logo2.svg';
import { ReactComponent as Logo3 } from '@/assets/icons/logo3.svg';
import { ReactComponent as Logo4 } from '@/assets/icons/logo4.svg';

const HeroArea = () => {
  return <article className={s.container}>
    <div className={s.mainInfo}>
      <Description desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." title="Artificial intelligence & Syber security" prefix="Next genaretion platform" styles={{ paddingTop: 111, marginRight: 114 }}>
        <div className={s.buttonContainer}>
          <Button styles={{ padding: "15px 30px", fontWeight: 600, fontSize: 20 }}>
            Get Started
          </Button>
          <Button styles={{ padding: "15px 30px", fontWeight: 600, fontSize: 20, display: 'flex', gap: 10 }}>
            <PlaySVG className={s.playSVG} /> Watch Video
          </Button>
        </div>
      </Description>
      <img src={heroAreImg} alt="hero area image" className={s.image} />
    </div>
    <div className={s.logoBlock}>
      <Logo1 />
      <Logo2 />
      <Logo3 />
      <Logo4 />
    </div>
  </article>;
}

export default HeroArea;