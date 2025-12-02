import searchIcon from '../../../../assets/icons/ApartSearchIco/search.png';
import styles from './ApartmentSearch.module.scss';
import { SearchLocation } from './components/SearchLocation';
import { SearchDateInCalendar } from './components/SearchDateInCalendar';
import { useState } from 'react';

export const ApartmentSearch = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [reservation, setReservation] = useState<{
    checkIn: Date | null;
    checkOut: Date | null;
  }>({
    checkIn: null,
    checkOut: null,
  });

  const clearForm = () => {
    setLocation(null);
    setReservation({
      checkIn: null,
      checkOut: null,
    });
  };

  const handleSearch = () => {
    clearForm();
  };

  return (
    <div className={styles.apartment_search}>
      <h1 className={styles.apartment_search__title}>FIND YOUR HOME</h1>
      <p className={styles.apartment_search__subtitle}>
        Rent without the commission
      </p>
      <div className={styles.apartment_search__inputContainer}>
        <SearchLocation location={location} setLocation={setLocation} />
        <SearchDateInCalendar
          reservation={reservation}
          setReservation={setReservation}
        />
        <button
          className={styles.apartment_search__button}
          onClick={handleSearch}
        >
          <img src={searchIcon} alt="Search Icon" />
          Search
        </button>
      </div>
    </div>
  );
};
