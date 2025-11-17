import searchIcon from '../../../../assets/icons/ApartSearchIco/search.png';
import locationIcon from '../../../../assets/icons/ApartSearchIco/locatio.png';
import styles from './ApartmentSearch.module.scss';

export const ApartmentSearch = () => {
  return (
    <div className={styles.apartment_search}>
      <h1 className={styles.apartment_search__title}>FIND YOUR HOME</h1>
      <p className={styles.apartment_search__subtitle}>
        Rent without the commission
      </p>
      <div className={styles.apartment_search__inputContainer}>
        <div className={styles.apartment_search__location}>
          <img src={locationIcon} alt="Location Icon" />
          <input
            type="text"
            className={styles.location__input}
            placeholder="Enter a region, city"
          />
        </div>
        <div className={styles.apartment_search__moveIn}>
          <input
            type="text"
            className={styles.moveIn__input}
            placeholder="Move-in date"
          />
        </div>
        <div className={styles.apartment_search__moveOut}>
          <input
            type="text"
            className={styles.moveOut__input}
            placeholder="Move-out date"
          />
        </div>
        <button className={styles.apartment_search__button}>
          <img src={searchIcon} alt="Search Icon" />
          Search
        </button>
      </div>
    </div>
  );
};
