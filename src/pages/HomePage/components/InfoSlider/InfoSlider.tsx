import { useEffect, useState } from 'react';
import slide1 from '../../../../assets/images/SliderImages/slide_1.webp';
import slide2 from '../../../../assets/images/SliderImages/slide_2.webp';
import slide3 from '../../../../assets/images/SliderImages/slide_3.webp';
import slide4 from '../../../../assets/images/SliderImages/slide_4.webp';
import slide5 from '../../../../assets/images/SliderImages/slide_5.webp';
import arrLeft from '../../../../assets/icons/SliderIco/arrow_left.png';
import arrRight from '../../../../assets/icons/SliderIco/arrow_right.png';
import arrLeftActive from '../../../../assets/icons/SliderIco/activeArrL.png';
import arrRightActive from '../../../../assets/icons/SliderIco/activeArrR.png';
import styles from './InfoSlider.module.scss';

const slides = [
  {
    img: slide1,
    title: 'Direct communication',
    description:
      'Talk directly with property owners — no agents involved. ' +
      'Skip middlemen, avoid extra fees, and get honest deals faster. ' +
      ' Communicate, negotiate, and arrange viewings quickly, ' +
      'all in one place.',
  },
  {
    img: slide2,
    title: 'Flexible leases',
    description:
      'Choose from options — long-term or month-to-month. Easily renew ' +
      'or end your lease whenever you need. Enjoy the freedom to live ' +
      'life on your terms.',
  },
  {
    img: slide3,
    title: 'Verified listings',
    description:
      'All listings are verified for accuracy and safety. ' +
      'Browse confidently knowing every property and landlord ' +
      'has passed our quality check.',
  },
  {
    img: slide4,
    title: 'Secure payments',
    description:
      'Pay rent safely through our platform. Track all transactions, ' +
      'receive instant confirmations, and avoid hidden fees or risks.',
  },
  {
    img: slide5,
    title: 'Global access',
    description:
      'Find trusted rentals anywhere — from city centers to coastal escapes. ' +
      'Access listings worldwide and connect with verified landlords ' +
      'in minutes.',
  },
];

export const InfoSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isClicked, setIsClicked] = useState<string | boolean>(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div className={styles.info_slider}>
      <div className={styles.info_slider__top}>
        <h2 className={styles.top__title}>The smart way to rent</h2>
        <div className={styles.top__buttons}>
          <button
            className={styles.buttons__btn}
            onMouseDown={() => setIsClicked('left')}
            onMouseUp={() => setIsClicked(false)}
            onMouseLeave={() => setIsClicked(false)}
            onClick={() => prevSlide()}
            aria-label="Previous slide"
          >
            <img
              src={isClicked === 'left' ? arrLeftActive : arrLeft}
              alt="Previous slide"
            />
          </button>
          <button
            className={styles.buttons__btn}
            onMouseDown={() => setIsClicked('right')}
            onMouseUp={() => setIsClicked(false)}
            onMouseLeave={() => setIsClicked(false)}
            onClick={() => nextSlide()}
            aria-label="Next slide"
          >
            <img
              src={isClicked === 'right' ? arrRightActive : arrRight}
              alt="Next slide"
            />
          </button>
        </div>
      </div>

      <div className={styles.info_slider__bottom}>
        <div
          className={styles.slide}
          style={{
            backgroundImage: `url(${slide.img})`,
          }}
        >
          <div className={styles.slide__content}>
            <span className={styles.slide__count}>
              {current + 1}/{slides.length}
            </span>
            <h3 className={styles.slide__title}>{slide.title}</h3>
            <p className={styles.slide__description}>{slide.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
