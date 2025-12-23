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
import { useTranslation } from 'react-i18next';

export const InfoSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isClicked, setIsClicked] = useState<string | boolean>(false);
  const { t } = useTranslation();

  const slides = [
    {
      img: slide1,
      title: t('homePage.infoSlider.slides.slide1.title'),
      description: t('homePage.infoSlider.slides.slide1.description'),
    },
    {
      img: slide2,
      title: t('homePage.infoSlider.slides.slide2.title'),
      description: t('homePage.infoSlider.slides.slide2.description'),
    },
    {
      img: slide3,
      title: t('homePage.infoSlider.slides.slide3.title'),
      description: t('homePage.infoSlider.slides.slide3.description'),
    },
    {
      img: slide4,
      title: t('homePage.infoSlider.slides.slide4.title'),
      description: t('homePage.infoSlider.slides.slide4.description'),
    },
    {
      img: slide5,
      title: t('homePage.infoSlider.slides.slide5.title'),
      description: t('homePage.infoSlider.slides.slide5.description'),
    },
  ];

  const nextSlide = () => setCurrent(prev => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);

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
        <h2 className={styles.top__title}>{t('homePage.infoSlider.title')}</h2>
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
