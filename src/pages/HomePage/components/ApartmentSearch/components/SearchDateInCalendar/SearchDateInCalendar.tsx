import { useEffect, useRef, useState } from 'react';
import styles from './SearchDateInCalendar.module.scss';
import { Calendar } from './components/Calendar/Calendar';
import i18n from '../../../../../../i18m';

type SearchDateInCalendarProps = {
  reservation: {
    checkIn: Date | null;
    checkOut: Date | null;
  };
  setReservation: (value: {
    checkIn: Date | null;
    checkOut: Date | null;
  }) => void;
};

export const SearchDateInCalendar: React.FC<SearchDateInCalendarProps> = ({
  reservation,
  setReservation,
}) => {
  const { t } = i18n;
  const [openCalendar, setOpenCalendar] = useState(false);

  const calendarRef = useRef<HTMLDivElement>(null);

  const handleCalendarChange = (newReservation: {
    checkIn: Date | null;
    checkOut: Date | null;
  }) => {
    setReservation(newReservation);

    if (newReservation.checkIn && newReservation.checkOut) {
      setOpenCalendar(false);
    }
  };

  const dateConversion = (date: Date | null) => {
    return date
      ?.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      .toUpperCase();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setOpenCalendar(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={styles.calendar}>
      <div className={styles.apartment_search__moveIn}>
        <input
          type="text"
          className={styles.moveIn__input}
          placeholder={t(
            'homePage.apartmentSearch.searchDate.moveInPlaceholder',
          )}
          value={reservation.checkIn ? dateConversion(reservation.checkIn) : ''}
          readOnly
          onClick={() => setOpenCalendar(true)}
        />
      </div>
      <div className={styles.apartment_search__moveOut}>
        <input
          type="text"
          className={styles.moveOut__input}
          placeholder={t(
            'homePage.apartmentSearch.searchDate.moveOutPlaceholder',
          )}
          value={
            reservation.checkOut ? dateConversion(reservation.checkOut) : ''
          }
          readOnly
          onClick={() => setOpenCalendar(true)}
        />
      </div>
      {openCalendar && (
        <div
          className={styles.calendarWrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <Calendar
            onChange={handleCalendarChange}
            reservation={reservation}
            isCatalogPage={false}
            isApartmentPage={false}
          />
        </div>
      )}
    </div>
  );
};
