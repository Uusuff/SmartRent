import { useLang } from '../../contexts/LangContext';
import { Apartment } from '../../types/Apartment';
import styles from './apartmentCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../../contexts/CurrencyContext';
import { convertPrice } from '../../shared/utils/convertPrice';
import { ApartmentSwiper } from '../apartmentSwiper/apartmentSwiper';
import { Link, useSearchParams } from 'react-router-dom';

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
  const day = availableDate.getDate();
  const month = availableDate.getMonth() + 1;
  const formattedDate = `${day} ${t(`apartment_card.months.${month}`)}`;
  const { label } = convertPrice(apartment.price, 'USD', currency);
  const [searchParams] = useSearchParams();

  return (
    <Link
      to={{
        pathname: `/apartment/${apartment.id}`,
        search: searchParams.toString(),
      }}
      className={styles.apartmentCard__linkWrapper}
    >
      <article
        className={`${styles.apartmentCard} ${isMapOpened && styles[`apartmentCard--mapOpened`]} ${isCardOnMap && styles[`apartmentCard--onMap`]} ${persistent && styles[`apartmentCard--persistent`]}`}
      >
        <ApartmentSwiper
          isMapOpened={isMapOpened}
          persistent={persistent}
          apartment={apartment}
          setActiveApartment={setActiveApartment}
          isDetailsPage={false}
          activeIndex={0}
          onSlideChange={() => {}}
        />

        <div
          className={`${styles.apartmentCard__details} ${isMapOpened && styles[`apartmentCard__details--mapOpened`]}`}
        >
          <h5
            className={`${styles.apartmentCard__title} ${isMapOpened && styles[`apartmentCard__title--mapOpened`]}`}
          >
            {t('apartment_card.apartment_card_head.title', {
              propertyType:
                t(
                  `catalog_page.catalog_page_filter.categories.property_types.${apartment.propertyType.ENG.toLowerCase()}`,
                )
                  .slice(0, 1)
                  .toUpperCase() +
                t(
                  `catalog_page.catalog_page_filter.categories.property_types.${apartment.propertyType.ENG.toLowerCase()}`,
                ).slice(1),

              city: t(
                `catalog_page.catalog_page_filter.categories.cities_title.${apartment.city.ENG.toLowerCase()}`,
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
            {apartment.address[lang]}
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
                onClick={e => e.stopPropagation()}
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
    </Link>
  );
};
