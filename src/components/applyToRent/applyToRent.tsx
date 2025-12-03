/* eslint-disable max-len */
import { useLang } from '../../contexts/LangContext';
import { Apartment } from '../../types/Apartment';
import styles from './applyToRent.module.scss';
import { useCurrency } from '../../contexts/CurrencyContext';
import { convertPrice } from '../../shared/utils/convertPrice';
import { useTranslation } from 'react-i18next';
import landlordPhotoMale from './../../assets/icons/apartmentIcons/male.svg';
import landlordPhotoFemale from './../../assets/icons/apartmentIcons/landlord-female.webp';
import { Dropdown } from '../DropDown/DropDown';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

type Props = {
  apartment: Apartment;
};

export const ApplyToRent: React.FC<Props> = ({ apartment }) => {
  const { t } = useTranslation();
  const { lang } = useLang();
  const { currency } = useCurrency();
  const convert = (value: number) => convertPrice(value, 'USD', currency).label;
  const total =
    apartment.price + apartment.utilitiesPerMonth + apartment.tenantProtection;
  const [searchParams, setSearchParams] = useSearchParams();
  const [moveIn, setMoveIn] = useState<string | null>(
    searchParams.get('moveIn') || null,
  );
  const [moveOut, setMoveOut] = useState<string | null>(
    searchParams.get('moveOut') || null,
  );

  useEffect(() => {
    const moveInParam = searchParams.get('MOVE_IN');
    const moveOutParam = searchParams.get('MOVE_OUT');

    if (moveInParam) {
      setMoveIn(moveInParam);
    }

    if (moveOutParam) {
      setMoveOut(moveOutParam);
    }
  }, [searchParams]);

  const handleDateChange = (checkIn: Date | null, checkOut: Date | null) => {
    const moveInStr = checkIn ? checkIn.toISOString().split('T')[0] : null;
    const moveOutStr = checkOut ? checkOut.toISOString().split('T')[0] : null;

    setMoveIn(moveInStr);
    setMoveOut(moveOutStr);

    const params: Record<string, string> = {};

    if (moveInStr) {
      params.moveIn = moveInStr;
    }

    if (moveOutStr) {
      params.moveOut = moveOutStr;
    }

    setSearchParams(params);
  };

  return (
    <article className={styles.applyToRent}>
      <div className={styles.applyToRent__landlord}>
        <div className={styles[`applyToRent__landlord-left`]}>
          {apartment.landlord.gender === 'f' ? (
            <img
              src={landlordPhotoFemale}
              alt={t('apartment_page.applyToRent.landlordPhoto')}
              className={styles.applyToRent__landlordPhoto}
            />
          ) : (
            <img
              src={landlordPhotoMale}
              alt={t('apartment_page.applyToRent.landlordPhoto')}
              className={styles.applyToRent__landlordPhoto}
            />
          )}

          <div className={styles[`applyToRent__landlord-published`]}>
            {t('apartment_page.applyToRent.publishedBy')}{' '}
            <span className={styles.applyToRent__landlordName}>
              {apartment.landlord.name[lang]}
            </span>
          </div>
        </div>

        <div className={styles.applyToRent__landlordRate}>
          {apartment.landlord.rate}/5
        </div>
      </div>

      <div className={styles.applyToRent__dateContainer}>
        <div
          className={`${styles.applyToRent__date} ${styles[`applyToRent__date--moveIn`]}`}
        >
          <label htmlFor="moveIn" className={styles[`applyToRent__date-label`]}>
            {t('apartment_page.applyToRent.moveIn')}
          </label>

          <Dropdown
            options={[]}
            value={moveIn || 'Choose date'}
            isAllFilters={false}
            isCalendar={true}
            moveIn={moveIn}
            moveOut={moveOut}
            setMoveIn={setMoveIn}
            setMoveOut={setMoveOut}
            onChange={() => {}}
            onDateChange={handleDateChange}
            isApartmentPage={true}
          />
        </div>
        <div
          className={`${styles.applyToRent__date} ${styles[`applyToRent__date--moveOut`]}`}
        >
          <label
            htmlFor="moveOut"
            className={styles[`applyToRent__date-label`]}
          >
            {t('apartment_page.applyToRent.moveOut')}
          </label>

          <Dropdown
            options={[]}
            value={moveOut || 'Choose date'}
            isAllFilters={false}
            isCalendar={true}
            moveIn={moveIn}
            moveOut={moveOut}
            setMoveIn={setMoveIn}
            setMoveOut={setMoveOut}
            onChange={() => {}}
            isApartmentPage={true}
          />
        </div>
      </div>

      <div className={styles.applyToRent__costDetails}>
        <div className={styles.applyToRent__costItem}>
          <p className={styles.applyToRent__costDescription}>
            {t('apartment_page.applyToRent.firstMonth')}
          </p>

          <p className={styles.applyToRent__costRight}>
            <span className={styles.applyToRent__infoIcon}></span>
            <span className={styles.applyToRent__cost}>
              {convert(apartment.price)}
            </span>
          </p>
        </div>

        <div className={styles.applyToRent__costItem}>
          <p className={styles.applyToRent__costDescription}>
            {t('apartment_page.applyToRent.utilities')}
          </p>

          <p className={styles.applyToRent__costRight}>
            <span className={styles.applyToRent__infoIcon}></span>
            <span className={styles.applyToRent__cost}>
              {convert(apartment.utilitiesPerMonth)}
            </span>
          </p>
        </div>

        <div className={styles.applyToRent__costItem}>
          <p className={styles.applyToRent__costDescription}>
            {t('apartment_page.applyToRent.protection')}
          </p>

          <p className={styles.applyToRent__costRight}>
            <span className={styles.applyToRent__infoIcon}></span>
            <span className={styles.applyToRent__cost}>
              {convert(apartment.tenantProtection)}
            </span>
          </p>
        </div>

        <p className={styles[`applyToRent__costDescription-total`]}>
          {t('apartment_page.applyToRent.total')}
          <span className={styles.applyToRent__cost}>{convert(total)}</span>
        </p>
      </div>

      <a
        className={`${styles.applyToRent__button} ${styles[`applyToRent__button--apply`]}`}
      >
        {t('apartment_page.applyToRent.applyButton')}
      </a>

      <a
        href={
          apartment.contact.startsWith('+')
            ? `tel:${apartment.contact}`
            : `mailto:${apartment.contact}`
        }
        className={`${styles.applyToRent__button} ${styles[`applyToRent__button--contact`]}`}
      >
        <span className={styles.applyToRent__contactIcon}></span>
        {t('apartment_page.applyToRent.contactButton')}
      </a>
    </article>
  );
};
