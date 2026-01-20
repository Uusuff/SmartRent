import { useState } from 'react';
import { SearchLocation } from './components/SearchLocation';
import { SearchDateInCalendar } from './components/SearchDateInCalendar';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../../../assets/icons/ApartSearchIco/search.png';
import styles from './ApartmentSearch.module.scss';
import { useTranslation } from 'react-i18next';

export const ApartmentSearch = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useState<string | null>(null);
  const [selectCity, setSelectCity] = useState<string | null>(null);
  const [reservation, setReservation] = useState<{
    checkIn: Date | null;
    checkOut: Date | null;
  }>({
    checkIn: null,
    checkOut: null,
  });

  const navigate = useNavigate();

  const clearForm = () => {
    setLocation(null);
    setReservation({
      checkIn: null,
      checkOut: null,
    });
  };

  const handleSearch = () => {
    if (!location || !reservation.checkIn || !reservation.checkOut) {
      return;
    }

    const params = new URLSearchParams({
      city: selectCity ?? '',
      MOVE_IN: reservation.checkIn.toISOString().split('T')[0],
      MOVE_OUT: reservation.checkOut.toISOString().split('T')[0],
    });

    navigate(`/apartments?${params.toString()}`);
    clearForm();
  };

  return (
    <div className={styles.apartment_search}>
      <h1 className={styles.apartment_search__title}>
        {t('homePage.apartmentSearch.title')}
      </h1>
      <p className={styles.apartment_search__subtitle}>
        {t('homePage.apartmentSearch.subtitle')}
      </p>
      <div className={styles.apartment_search__inputContainer}>
        <SearchLocation
          location={location}
          setLocation={setLocation}
          setSelectCity={setSelectCity}
        />
        <SearchDateInCalendar
          reservation={reservation}
          setReservation={setReservation}
        />
        <button
          className={styles.apartment_search__button}
          onClick={handleSearch}
        >
          <img src={searchIcon} alt="Search Icon" />
          {t('homePage.apartmentSearch.buttonText')}
        </button>
      </div>
    </div>
  );
};
