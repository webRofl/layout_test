import { CardSlider, Card } from '@/components/molecules';
import sliderImage1 from '@/assets/images/slider_image1.png';
import sliderImage2 from '@/assets/images/slider_image2.png';
import sliderImage3 from '@/assets/images/slider_image3.png';
import sliderImage4 from '@/assets/images/slider_image4.png';
import sliderImage5 from '@/assets/images/slider_image5.png';

const Feature = () => {
  return <article>
    <CardSlider>
      <Card desc="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups." title="Naxly as the Winners in Global Agency Awards" image={sliderImage1} />
      <Card desc="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups." title="Expert Prespective Agency Awards" image={sliderImage2} />
      <Card desc="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups." title="Business Prespective Global Agency Awards" image={sliderImage3} />
      <Card desc="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups." title="Value for Results in Global Agency Awards" image={sliderImage4} />
      <Card desc="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups." title="Global Experience in Agency Awards" image={sliderImage5} />
      <Card desc="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups." title="my text 1" image={sliderImage2} />
      <Card desc="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups." title="my text 2" image={sliderImage4} />
      <Card desc="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups." title="my text 3" image={sliderImage1} />
      <Card desc="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups." title="my text 4" image={sliderImage3} />
      <Card desc="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups." title="my text 5" image={sliderImage5} />
      <Card desc="Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups." title="my text 6" image={sliderImage1} />
    </CardSlider>
  </article>
}

export default Feature;