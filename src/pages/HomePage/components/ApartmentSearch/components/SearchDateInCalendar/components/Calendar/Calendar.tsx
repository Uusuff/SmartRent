import React, { useState } from 'react';
import { generateMonth } from '../GenerateMonth/generateMonth';
import { MonthView } from '../MonthView/MonthView';
import styles from './Calendar.module.scss';

type CalendarProps = {
  onChange: (reservation: {
    checkIn: Date | null;
    checkOut: Date | null;
  }) => void;

  reservation: {
    checkIn: Date | null;
    checkOut: Date | null;
  };
};

export const Calendar: React.FC<CalendarProps> = ({
  onChange,
  reservation,
}) => {
  const today = new Date();
  const [offset, setOffset] = useState(0);
  const [checkIn, setCheckIn] = useState<Date | null>(reservation.checkIn);
  const [checkOut, setCheckOut] = useState<Date | null>(reservation.checkOut);

  const baseDate = new Date(today.getFullYear(), today.getMonth() + offset, 1);
  const month1 = generateMonth(baseDate.getFullYear(), baseDate.getMonth());
  const month2 = generateMonth(baseDate.getFullYear(), baseDate.getMonth() + 1);

  const handleSelect = day => {
    if (!day) {
      return;
    }

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(day);
      setCheckOut(null);
      onChange?.({ checkIn: day, checkOut: null });

      return;
    }

    if (day > checkIn) {
      setCheckOut(day);
      onChange?.({ checkIn, checkOut: day });
    } else {
      setCheckIn(day);
      setCheckOut(null);
      onChange?.({ checkIn: day, checkOut: null });
    }
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarWrapper}>
        <MonthView
          month={'left'}
          data={month1}
          checkIn={checkIn}
          checkOut={checkOut}
          onSelect={handleSelect}
          offset={offset}
          setOffset={setOffset}
          isPrevDisabled={offset === 0}
        />

        <MonthView
          month={'right'}
          data={month2}
          checkIn={checkIn}
          checkOut={checkOut}
          onSelect={handleSelect}
          offset={offset}
          setOffset={setOffset}
          isPrevDisabled={false}
        />
      </div>
    </div>
  );
};
