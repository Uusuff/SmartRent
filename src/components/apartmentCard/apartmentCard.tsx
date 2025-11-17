import { useFavorites } from '../../contexts/FavoritesContext';
import { useLang } from '../../contexts/LangContext';
import { Apartment } from '../../types/Apartment';
import styles from './apartmentCard.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  apartment: Apartment;
  isMapOpened: boolean;
  isCardOnMap: boolean;
  persistent: boolean;
  setActiveApartment: React.Dispatch<React.SetStateAction<Apartment | null>>;
};

export const ApartmentCard: React.FC<Props> = ({
  apartment,
  isMapOpened,
  isCardOnMap,
  persistent,
  setActiveApartment,
}) => {
  const { lang } = useLang();
  const today = new Date();
  const availableDate = new Date(apartment.availableFrom);
  const isAvailableNow = availableDate <= today;
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(apartment.id);
  const formattedDate = availableDate.toLocaleDateString(
    lang === 'en' ? 'en-GB' : 'uk-UA',
    {
      day: 'numeric',
      month: 'long',
    },
  );

  return (
    <article
      className={`${styles.apartmentCard} ${isMapOpened && styles[`apartmentCard--mapOpened`]} ${isCardOnMap && styles[`apartmentCard--onMap`]} ${persistent && styles[`apartmentCard--persistent`]}`}
    >
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        mousewheel
        keyboard
        className={`${styles.apartmentCard__slider} ${isMapOpened && styles[`apartmentCard__slider--mapOpened`]}`}
      >
        <div
          className={`${styles.apartmentCard__badges} ${isMapOpened && styles[`apartmentCard__badges--mapOpened`]}`}
        >
          {apartment.new && (
            <div
              className={`${styles.apartmentCard__badge} ${isMapOpened && styles[`apartmentCard__badge--mapOpened`]}  ${styles['apartmentCard__badge--new']}`}
            >
              New
            </div>
          )}

          {apartment.petFriendly && (
            <div
              className={`${styles.apartmentCard__badge} ${isMapOpened && styles[`apartmentCard__badge--mapOpened`]}  ${styles['apartmentCard__badge--pet-friendly']}`}
            >
              Pet-Friendly
            </div>
          )}
        </div>

        <button
          className={`${styles.apartmentCard__favs} ${isMapOpened && styles[`apartmentCard__favs--mapOpened`]} ${persistent && styles[`apartmentCard__favs--persistent`]} ${
            favorite ? styles['apartmentCard__favs--selected'] : ''
          }`}
          onClick={() => toggleFavorite(apartment)}
        ></button>
        {persistent && (
          <button
            className={styles.apartmentCard__close}
            onClick={() => setActiveApartment(null)}
          ></button>
        )}

        <SwiperSlide>
          {' '}
          <img
            src={apartment.images[0]}
            alt=""
            className={`${styles.apartmentCard__image} ${isMapOpened && styles[`apartmentCard__image--mapOpened`]}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={apartment.images[1]}
            alt=""
            className={`${styles.apartmentCard__image} ${isMapOpened && styles[`apartmentCard__image--mapOpened`]}`}
          />
        </SwiperSlide>
      </Swiper>

      <div
        className={`${styles.apartmentCard__details} ${isMapOpened && styles[`apartmentCard__details--mapOpened`]}`}
      >
        <h5
          className={`${styles.apartmentCard__title} ${isMapOpened && styles[`apartmentCard__title--mapOpened`]}`}
        >
          {apartment.propertyType.slice(0, 1).toUpperCase() +
            apartment.propertyType.slice(1)}{' '}
          in {apartment.city}
          <span
            className={`${styles.apartmentCard__id} ${isMapOpened && styles[`apartmentCard__id--mapOpened`]}`}
          >
            ID: {apartment.id}
          </span>
        </h5>

        <p
          className={`${styles.apartmentCard__address} ${isMapOpened && styles[`apartmentCard__address--mapOpened`]}`}
        >
          {apartment.address}
        </p>

        <div
          className={`${styles.apartmentCard__features} ${isMapOpened && styles[`apartmentCard__features--mapOpened`]}`}
        >
          <div
            className={`${styles.apartmentCard__feature} ${isMapOpened && styles[`apartmentCard__feature--mapOpened`]}`}
          >
            <a
              href=""
              className={`${styles.apartmentCard__featureIcon} ${styles[`apartmentCard__featureIcon--bedrooms`]} ${isMapOpened && styles[`apartmentCard__featureIcon--mapOpened`]}`}
            ></a>

            <p className={styles.apartmentCard__featuresQuantity}>
              {apartment.bedrooms}
            </p>
          </div>

          <div
            className={`${styles.apartmentCard__feature} ${isMapOpened && styles[`apartmentCard__feature--mapOpened`]}`}
          >
            <a
              href=""
              className={`${styles.apartmentCard__featureIcon} ${styles[`apartmentCard__featureIcon--bathrooms`]} ${isMapOpened && styles[`apartmentCard__featureIcon--mapOpened`]}`}
            ></a>
            <p className={styles.apartmentCard__featuresQuantity}>
              {apartment.bathrooms}
            </p>
          </div>

          <div
            className={`${styles.apartmentCard__feature} ${isMapOpened && styles[`apartmentCard__feature--mapOpened`]}`}
          >
            <a
              href=""
              className={`${styles.apartmentCard__featureIcon} ${styles[`apartmentCard__featureIcon--squares`]} ${isMapOpened && styles[`apartmentCard__featureIcon--mapOpened`]}`}
            ></a>
            <p className={styles.apartmentCard__featuresQuantity}>
              {apartment.squareMeters}м&sup2;
            </p>
          </div>
        </div>

        <div
          className={`${styles.apartmentCard__priceAndContacts} ${isMapOpened && styles[`apartmentCard__priceAndContacts--mapOpened`]}`}
        >
          <p
            className={`${styles.apartmentCard__price} ${isMapOpened && styles[`apartmentCard__price--mapOpened`]}`}
          >
            {lang === 'en' ? '$' : ''}
            {apartment.price}
            {lang === 'ua' ? 'грн' : ''}/month
            <span
              className={`${styles.apartmentCard__priceDetails} ${isMapOpened && styles[`apartmentCard__priceDetails--mapOpened`]}`}
            >
              excl. utilities
            </span>
          </p>

          <div
            className={`${styles.apartmentCard__contacts} ${isMapOpened && styles[`apartmentCard__contacts--mapOpened`]}`}
          >
            <a
              href={
                apartment.contact.startsWith('+')
                  ? `tel:${apartment.contact}`
                  : `mailto:${apartment.contact}`
              }
              className={`${styles.apartmentCard__contactsIcon} ${isMapOpened && styles[`apartmentCard__contactsIcon--mapOpened`]}`}
            ></a>
            <a
              href={
                apartment.contact.startsWith('@')
                  ? `mailto:${apartment.contact}`
                  : `tel:${apartment.contact}`
              }
              className={`${styles.apartmentCard__contactsText} ${isMapOpened && styles[`apartmentCard__contactsText--mapOpened`]}`}
            >
              Text landlord
            </a>
          </div>
        </div>

        <div
          className={`${styles.apartmentCard__availability} ${isMapOpened && styles[`apartmentCard__availability--mapOpened`]} ${
            isAvailableNow
              ? styles['apartmentCard__availability--available']
              : styles['apartmentCard__availability--notAvailable']
          }`}
        >
          {isAvailableNow ? (
            'Available now'
          ) : (
            <>
              Available from{' '}
              <span className={styles.apartmentCard__date}>
                {formattedDate}
              </span>
            </>
          )}
        </div>
      </div>
    </article>
  );
};
