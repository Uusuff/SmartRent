import { useEffect, useRef, useState } from 'react';
import styles from './SearchDateInCalendar.module.scss';
import { Calendar } from './components/Calendar/Calendar';

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

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.calendar}>
      <div className={styles.apartment_search__moveIn}>
        <input
          type="text"
          className={styles.moveIn__input}
          placeholder="Move-in date"
          value={reservation.checkIn ? dateConversion(reservation.checkIn) : ''}
          readOnly
          onClick={() => setOpenCalendar(true)}
        />
      </div>
      <div className={styles.apartment_search__moveOut}>
        <input
          type="text"
          className={styles.moveOut__input}
          placeholder="Move-out date"
          value={
            reservation.checkOut ? dateConversion(reservation.checkOut) : ''
          }
          readOnly
          onClick={() => setOpenCalendar(true)}
        />
      </div>
      {openCalendar && (
        <div className={styles.calendarWrapper}>
          <Calendar onChange={handleCalendarChange} reservation={reservation} />
        </div>
      )}
    </div>
  );
};
