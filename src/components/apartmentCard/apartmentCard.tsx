import { useFavorites } from '../../contexts/FavoritesContext';
import { useLang } from '../../contexts/LangContext';
import { Apartment } from '../../types/Apartment';
import styles from './apartmentCard.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useCurrency } from '../../contexts/CurrencyContext';
import { convertPrice } from '../../shared/utils/convertPrice';

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
  const { t } = useTranslation();
  const { lang } = useLang();
  const { currency } = useCurrency();
  const today = new Date();
  const availableDate = new Date(apartment.availableFrom);
  const isAvailableNow = availableDate <= today;
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(apartment.id);
  const day = availableDate.getDate();
  const month = availableDate.getMonth() + 1;
  const formattedDate = `${day} ${t(`apartment_card.months.${month}`)}`;
  const { label } = convertPrice(apartment.price, 'USD', currency);

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
              {t('apartment_card.apartment_card_badges.new')}
            </div>
          )}

          {apartment.petFriendly && (
            <div
              className={`${styles.apartmentCard__badge} ${isMapOpened && styles[`apartmentCard__badge--mapOpened`]}  ${styles['apartmentCard__badge--pet-friendly']}`}
            >
              {t('apartment_card.apartment_card_badges.pet_friendly')}
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
          {t('apartment_card.apartment_card_head.title', {
            propertyType:
              t(
                `catalog_page.catalog_page_filter.categories.property_types.${apartment.propertyType.toLowerCase()}`,
              )
                .slice(0, 1)
                .toUpperCase() +
              t(
                `catalog_page.catalog_page_filter.categories.property_types.${apartment.propertyType.toLowerCase()}`,
              ).slice(1),

            city: t(
              `catalog_page.catalog_page_filter.categories.cities_title.${apartment.city.toLowerCase()}`,
            ),
          })}
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
            {label}/{t('apartment_card.apartment_card_details.month')}
            <span
              className={`${styles.apartmentCard__priceDetails} ${isMapOpened && styles[`apartmentCard__priceDetails--mapOpened`]} ${(lang === 'UA' || lang === 'IT' || lang === 'ES' || lang === 'FR' || lang === 'DE') && styles[`apartmentCard__priceDetails--block`]}`}
            >
              {t('apartment_card.apartment_card_details.utilities')}
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
              {t('apartment_card.apartment_card_details.contacts')}
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
            t('apartment_card.apartment_card_details.available')
          ) : (
            <>
              {t('apartment_card.apartment_card_details.not_available')}{' '}
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
