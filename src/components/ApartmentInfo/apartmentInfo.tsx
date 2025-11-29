/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useLang } from '../../contexts/LangContext';
import { convertPrice } from '../../shared/utils/convertPrice';
import { Apartment } from '../../types/Apartment';
import styles from './apartmentInfo.module.scss';
import { useState } from 'react';

type Props = {
  apartment: Apartment;
};

export const ApartmentInfo: React.FC<Props> = ({ apartment }) => {
  const { t } = useTranslation();
  const { lang } = useLang();
  const { currency } = useCurrency();
  const { label } = convertPrice(apartment.price, 'USD', currency);
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={styles.apartmentInfo}>
      <div className={styles.apartmentInfo__head}>
        <h2
          className={`${styles.apartmentInfo__title} ${styles[`apartmentInfo__title--head`]}`}
        >
          {apartment.title[lang]}, {t('apartment_page.country')}
        </h2>

        <ul className={styles.apartmentInfo__specs}>
          <li className={styles.apartmentInfo__spec}>
            {apartment.bedrooms}{' '}
            {apartment.bedrooms > 1
              ? t('apartment_page.specs.bedrooms')
              : t('apartment_page.specs.bedroom')}
          </li>
          <li className={styles.apartmentInfo__spec}>
            {apartment.bathrooms}{' '}
            {apartment.bathrooms > 1
              ? t('apartment_page.specs.bathrooms')
              : t('apartment_page.specs.bathroom')}
          </li>
          <li className={styles.apartmentInfo__spec}>
            {apartment.squareMeters}m²
          </li>
        </ul>

        <p className={styles.apartmentInfo__price}>
          {label}/{t('apartment_card.apartment_card_details.month')}{' '}
          <span className={`${styles.apartmentInfo__priceDetails}`}>
            {t('apartment_card.apartment_card_details.utilities')}
          </span>
        </p>
      </div>

      <article
        className={`${styles.apartmentInfo__description} ${styles.apartmentInfo__article}`}
      >
        <h3 className={styles.apartmentInfo__title}>
          {t('apartment_page.description')}
        </h3>
        <p
          className={`${styles.apartmentInfo__descriptionText} ${
            expanded ? styles['apartmentInfo__descriptionText--expanded'] : ''
          }`}
        >
          {apartment.description[lang]}
        </p>
        <button
          className={styles.apartmentInfo__descriptionButton}
          onClick={() => setExpanded(prev => !prev)}
        >
          {expanded ? t('apartment_page.less') : t('apartment_page.more')}
        </button>
      </article>

      <article
        className={`${styles.apartmentInfo__features} ${styles.apartmentInfo__article}`}
      >
        <h3 className={styles.apartmentInfo__title}>
          {t('apartment_page.features.title')}
        </h3>

        <ul className={styles.apartmentInfo__featuresList}>
          <li className={styles.apartmentInfo__feature}>
            <span
              className={`${styles.apartmentInfo__featureIcon} ${styles[`apartmentInfo__featureIcon--wifi`]}`}
            ></span>
            {t('apartment_page.features.wifi')}
          </li>
          <li className={styles.apartmentInfo__feature}>
            {' '}
            <span
              className={`${styles.apartmentInfo__featureIcon} ${styles[`apartmentInfo__featureIcon--kitchen`]}`}
            ></span>
            {t('apartment_page.features.kitchen')}
          </li>
          <li className={styles.apartmentInfo__feature}>
            {' '}
            <span
              className={`${styles.apartmentInfo__featureIcon} ${styles[`apartmentInfo__featureIcon--tv`]}`}
            ></span>
            {t('apartment_page.features.tv')}
          </li>
          <li className={styles.apartmentInfo__feature}>
            {' '}
            <span
              className={`${styles.apartmentInfo__featureIcon} ${styles[`apartmentInfo__featureIcon--conditioner`]}`}
            ></span>
            {t('apartment_page.features.conditioning')}
          </li>
          <li className={styles.apartmentInfo__feature}>
            {' '}
            <span
              className={`${styles.apartmentInfo__featureIcon} ${styles[`apartmentInfo__featureIcon--workspace`]}`}
            ></span>
            {t('apartment_page.features.workspace')}
          </li>
          <li className={styles.apartmentInfo__feature}>
            {' '}
            <span
              className={`${styles.apartmentInfo__featureIcon} ${styles[`apartmentInfo__featureIcon--furniture`]}`}
            ></span>
            {t('apartment_page.features.furnished')}
          </li>
          <li className={styles.apartmentInfo__feature}>
            {' '}
            <span
              className={`${styles.apartmentInfo__featureIcon} ${styles[`apartmentInfo__featureIcon--washing-machine`]}`}
            ></span>
            {t('apartment_page.features.washing')}
          </li>
          <li className={styles.apartmentInfo__feature}>
            {' '}
            <span
              className={`${styles.apartmentInfo__featureIcon} ${styles[`apartmentInfo__featureIcon--heating`]}`}
            ></span>
            {t('apartment_page.features.heating')}
          </li>
          <li className={styles.apartmentInfo__feature}>
            {' '}
            <span
              className={`${styles.apartmentInfo__featureIcon} ${styles[`apartmentInfo__featureIcon--bath`]}`}
            ></span>
            {t('apartment_page.features.bath')}
          </li>
          <li className={styles.apartmentInfo__feature}>
            {' '}
            <span
              className={`${styles.apartmentInfo__featureIcon} ${styles[`apartmentInfo__featureIcon--elevator`]}`}
            ></span>
            {t('apartment_page.features.elevator')}
          </li>
        </ul>

        <button className={styles.apartmentInfo__featuresButton}>
          {t('apartment_page.features.button')}
        </button>
      </article>

      <article
        className={`${styles.apartmentInfo__policies} ${styles.apartmentInfo__article}`}
      >
        <h3 className={styles.apartmentInfo__title}>
          {t('apartment_page.policies.title')}
        </h3>

        <div className={styles.apartmentInfo__lists}>
          <div className={styles.apartmentInfo__listContainer}>
            <h5 className={styles.apartmentInfo__listTitle}>
              {t('apartment_page.policies.rules')}
            </h5>

            <ul className={styles.apartmentInfo__list}>
              <li className={styles.apartmentInfo__listItem}>
                <span className={styles.apartmentInfo__listLabel}>
                  {t('apartment_page.policies.pets')}{' '}
                </span>
                {apartment.petFriendly
                  ? t('apartment_page.policies.allowed')
                  : t('apartment_page.policies.notAllowed')}
              </li>

              <li className={styles.apartmentInfo__listItem}>
                <span className={styles.apartmentInfo__listLabel}>
                  {t('apartment_page.policies.smoking')}
                </span>{' '}
                {t('apartment_page.policies.outside')}
              </li>

              <li className={styles.apartmentInfo__listItem}>
                <span className={styles.apartmentInfo__listLabel}>
                  {t('apartment_page.policies.instruments')}{' '}
                </span>
                {t('apartment_page.policies.negotiable')}
              </li>

              <li className={styles.apartmentInfo__listItem}>
                <span className={styles.apartmentInfo__listLabel}>
                  {t('apartment_page.policies.forCouples')}
                </span>{' '}
                {t('apartment_page.policies.yes')}
              </li>
            </ul>
          </div>

          <div className={styles.apartmentInfo__listContainer}>
            <h5 className={styles.apartmentInfo__listTitle}>
              {t('apartment_page.policies.eligibility')}
            </h5>

            <ul className={styles.apartmentInfo__list}>
              <li className={styles.apartmentInfo__listItem}>
                {t('apartment_page.policies.proof')}
              </li>
              <li className={styles.apartmentInfo__listItem}>
                {t('apartment_page.policies.id')}
              </li>
              <li className={styles.apartmentInfo__listItem}>
                {t('apartment_page.policies.contract')}
              </li>
            </ul>
          </div>

          <div className={styles.apartmentInfo__listContainer}>
            <h5 className={styles.apartmentInfo__listTitle}>
              {t('apartment_page.policies.payments')}
            </h5>

            <ul className={styles.apartmentInfo__list}>
              <li className={styles.apartmentInfo__listItem}>
                <span className={styles.apartmentInfo__listLabel}>
                  {t('apartment_page.policies.paymentMethods')}
                </span>{' '}
                {t('apartment_page.policies.methods')}
              </li>
              <li className={styles.apartmentInfo__listItem}>
                <span className={styles.apartmentInfo__listLabel}>
                  {t('apartment_page.policies.utilityBills')}
                </span>{' '}
                {t('apartment_page.policies.paidByLandlord')}
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article
        className={`${styles.apartmentInfo__cancelation} ${styles.apartmentInfo__article}`}
      >
        <h5 className={styles.apartmentInfo__title}>
          {t('apartment_page.cancelation.title')}
        </h5>

        <ul
          className={`${styles.apartmentInfo__list} ${styles[`apartmentInfo__list--cancel`]}`}
        >
          <li className={styles.apartmentInfo__listItem}>
            {t('apartment_page.cancelation.fullRef')}
          </li>
          <li className={styles.apartmentInfo__listItem}>
            {t('apartment_page.cancelation.noRef')}
          </li>
          <li className={styles.apartmentInfo__listItem}>
            {t('apartment_page.cancelation.protection')}
          </li>
        </ul>

        <a href="" className={styles.apartmentInfo__cancelationLink}>
          {t('apartment_page.cancelation.link')}
        </a>
      </article>
    </section>
  );
};
