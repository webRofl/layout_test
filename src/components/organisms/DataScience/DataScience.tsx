import dataScienceImg from '@/assets/images/dataScience.png';
import { Button } from '@/components/atoms';
import { Description } from '@/components/molecules';
import s from './DataScience.module.scss';

const DataScience = () => {
  return <article className={s.container}>
    <img src={dataScienceImg} alt="data science img" />
    <Description desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." title="Apply AI, Deep Learning and Data Sciece to solve" styles={{ marginRight: 387, marginTop: 178 }} fontSize={38}>
      <Button styles={{ padding: '15px 30px', fontWeight: 600, marginTop: 50 }}>Learn More</Button>
    </Description>
  </article>
}
 
export default DataScience;