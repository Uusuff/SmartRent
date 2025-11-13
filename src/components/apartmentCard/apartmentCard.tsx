import { useFavorites } from '../../contexts/FavoritesContext';
import { useLang } from '../../contexts/LangContext';
import { Apartment } from '../../types/Apartment';
import styles from './apartmentCard.module.scss';

type Props = {
  apartment: Apartment;
};

export const ApartmentCard: React.FC<Props> = ({ apartment }) => {
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
    <article className={styles.apartmentCard}>
      <div className={styles.apartmentCard__top}>
        <div className={styles.apartmentCard__badges}>
          {apartment.new && (
            <div
              className={`${styles.apartmentCard__badge} ${styles['apartmentCard__badge--new']}`}
            >
              New
            </div>
          )}

          {apartment.petFriendly && (
            <div
              className={`${styles.apartmentCard__badge} ${styles['apartmentCard__badge--pet-friendly']}`}
            >
              Pet-Friendly
            </div>
          )}
        </div>

        <button
          className={`${styles.apartmentCard__favs} ${
            favorite ? styles['apartmentCard__favs--selected'] : ''
          }`}
          onClick={() => toggleFavorite(apartment)}
        ></button>

        <img
          src={apartment.image}
          alt=""
          className={styles.apartmentCard__image}
        />
      </div>

      <div className={styles.apartmentCard__details}>
        <h5 className={styles.apartmentCard__title}>
          {apartment.propertyType.slice(0, 1).toUpperCase() +
            apartment.propertyType.slice(1)}{' '}
          in {apartment.city}
          <span className={styles.apartmentCard__id}>ID: {apartment.id}</span>
        </h5>

        <p className={styles.apartmentCard__address}>{apartment.address}</p>

        <div className={styles.apartmentCard__features}>
          <div className={styles.apartmentCard__feature}>
            <a
              href=""
              className={`${styles.apartmentCard__featureIcon} ${styles[`apartmentCard__featureIcon--bedrooms`]}`}
            ></a>
            <p className={styles.apartmentCard__featuresQuantity}>
              {apartment.bedrooms}
            </p>
          </div>

          <div className={styles.apartmentCard__feature}>
            <a
              href=""
              className={`${styles.apartmentCard__featureIcon} ${styles[`apartmentCard__featureIcon--bathrooms`]}`}
            ></a>
            <p className={styles.apartmentCard__featuresQuantity}>
              {apartment.bathrooms}
            </p>
          </div>

          <div className={styles.apartmentCard__feature}>
            <a
              href=""
              className={`${styles.apartmentCard__featureIcon} ${styles[`apartmentCard__featureIcon--squares`]}`}
            ></a>
            <p className={styles.apartmentCard__featuresQuantity}>
              {apartment.squareMeters}м&sup2;
            </p>
          </div>
        </div>

        <div className={styles.apartmentCard__price}>
          {lang === 'en' ? '$' : ''}
          {apartment.price}
          {lang === 'ua' ? 'грн' : ''}/month
          <span className={styles.apartmentCard__priceDetails}>
            excl. utilities
          </span>
          <a
            href={
              apartment.contact.startsWith('@')
                ? `mailto:${apartment.contact}`
                : `tel:${apartment.contact}`
            }
            className={styles.apartmentCard__contacts}
          >
            Text landlord
          </a>
        </div>

        <div
          className={`${styles.apartmentCard__availability} ${
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
