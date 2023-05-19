import { FC, PropsWithChildren, SyntheticEvent, useState } from 'react';
import s from './CardSlider.module.scss';

const CardSlider: FC<PropsWithChildren> = ({ children }) => {
  const [activePoint, setActivePoint] = useState(0);

  const handlePointClick = (event: SyntheticEvent<HTMLSpanElement>) => {
    console.log(event.currentTarget.dataset.queueNumber);
    setActivePoint(parseInt(event.currentTarget.dataset.queueNumber ?? '0'));
  };

  return <div className={s.container}>
    <div className={s.children} style={{ transform: `translateX(${activePoint * -45.5}%)` }}>{children}</div>
    <div className={s.points}>
      <span className={`${s.point} ${activePoint === 0 && s.pointActive}`}
      onClick={handlePointClick}
      data-queue-number={0}
      ></span>
      <span className={`${s.point} ${activePoint === 1 && s.pointActive}`}
      onClick={handlePointClick}
      data-queue-number={1}
      ></span>
      <span className={`${s.point} ${activePoint === 2 && s.pointActive}`}
      onClick={handlePointClick}
      data-queue-number={2}
      ></span>
    </div>
  </div>;
}

export default CardSlider
