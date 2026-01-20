/* eslint-disable react-hooks/rules-of-hooks */
import styles from './apartmentSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useFavorites } from '../../contexts/FavoritesContext';
import { Apartment } from '../../types/Apartment';
import { useTranslation } from 'react-i18next';
import type { Swiper as SwiperClass } from 'swiper';

type Props = {
  apartment: Apartment;
  isMapOpened: boolean;
  persistent: boolean;
  setActiveApartment: React.Dispatch<React.SetStateAction<Apartment | null>>;
  isDetailsPage: boolean;
  activeIndex: number;
  onSlideChange: (i: number) => void;
  onSwiperInit?: (swiper: SwiperClass) => void;
};

export const ApartmentSwiper: React.FC<Props> = ({
  isMapOpened,
  apartment,
  persistent,
  setActiveApartment,
  isDetailsPage,
  activeIndex,
  onSlideChange,
  onSwiperInit,
}) => {
  const { t } = useTranslation();
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(apartment.id);

  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      navigation
      pagination={{ clickable: true }}
      mousewheel
      keyboard
      onSwiper={onSwiperInit}
      onSlideChange={swiper => onSlideChange(swiper.activeIndex)}
      initialSlide={activeIndex}
      className={`${styles.apartmentSwiper} ${isMapOpened && styles[`apartmentSwiper--mapOpened`]}  ${isDetailsPage && styles[`apartmentSwiper--detailsPage`]}`}
    >
      <div
        className={`${styles.apartmentSwiper__badges} ${isMapOpened && styles[`apartmentSwiper__badges--mapOpened`]}`}
      >
        {apartment.new && (
          <div
            className={`${styles.apartmentSwiper__badge} ${isMapOpened && styles[`apartmentSwiper__badge--mapOpened`]}  ${styles['apartmentSwiper__badge--new']}`}
          >
            {t('apartment_card.apartment_card_badges.new')}
          </div>
        )}

        {apartment.petFriendly && (
          <div
            className={`${styles.apartmentSwiper__badge} ${isMapOpened && styles[`apartmentSwiper__badge--mapOpened`]}  ${styles['apartmentSwiper__badge--pet-friendly']}`}
          >
            {t('apartment_card.apartment_card_badges.pet_friendly')}
          </div>
        )}
      </div>

      {isDetailsPage && (
        <button className={`${styles.apartmentSwiper__share}`}></button>
      )}

      <button
        className={`${styles.apartmentSwiper__favs} ${isMapOpened && styles[`apartmentSwiper__favs--mapOpened`]} ${persistent && styles[`apartmentSwiper__favs--persistent`]} ${
          favorite ? styles['apartmentSwiper__favs--selected'] : ''
        }`}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(apartment);
        }}
      ></button>

      {persistent && (
        <button
          className={styles.apartmentSwiper__close}
          onClick={() => setActiveApartment(null)}
        ></button>
      )}

      {apartment.images.map((a, i) => (
        <SwiperSlide key={i}>
          {' '}
          <img
            src={apartment.images[i]}
            alt=""
            className={`${styles.apartmentSwiper__image} ${isMapOpened && styles[`apartmentSwiper__image--mapOpened`]} ${isDetailsPage && styles[`apartmentSwiper__image--detailsPage`]}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
