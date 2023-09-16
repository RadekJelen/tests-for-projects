import './arrowUp.css';
import { useEffect, useState } from 'react';
import { ReactComponent as Arrow } from '../../icons/arrow.svg';

export const ArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  const scrollListener = () => {
    const elementVisibleFrom = 500;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    winScroll < elementVisibleFrom ? setIsVisible(false) : setIsVisible(true);
  };

  const onButtonClick = () => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  return (
    <div
      className="arrow-up"
      data-is-visible={isVisible}
      onClick={onButtonClick}
      title='Scroll to the top'
    >
      <Arrow className="arrow-up__icon" />
    </div>
  )
}