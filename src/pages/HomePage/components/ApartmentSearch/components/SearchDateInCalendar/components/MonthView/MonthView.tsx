import styles from './MonthView.module.scss';
import arL from '../../../../../../../../assets/icons/SliderIco/arrow_left.png';
import arrLA from '../../../../../../../../assets/icons/SliderIco/disArr.png';
import aR from '../../../../../../../../assets/icons/SliderIco/arrow_right.png';

type MonthViewProps = {
  month: string;
  data: {
    year: number;
    month: number;
    days: (Date | null)[];
  };
  checkIn: Date | null;
  checkOut: Date | null;
  onSelect: (day: Date) => void;
  offset: number;
  setOffset: (offset: number) => void;
  isPrevDisabled?: boolean;
};

export const MonthView: React.FC<MonthViewProps> = ({
  month,
  data,
  checkIn,
  checkOut,
  onSelect,
  offset,
  setOffset,
  isPrevDisabled,
}) => {
  const title = new Date(data.year, data.month).toLocaleString('en', {
    month: 'long',
    year: 'numeric',
  });

  const normalize = (date: Date) => {
    const d = new Date(date);

    d.setHours(0, 0, 0, 0);

    return d;
  };

  const today = normalize(new Date());

  const isPastDay = (day: Date) => normalize(day) < today;
  const isToday = (day: Date) => normalize(day).getTime() === today.getTime();
  const isCheckInDay = (day: Date) =>
    checkIn && normalize(day).getTime() === normalize(checkIn).getTime();
  const isCheckOutDay = (day: Date) =>
    checkOut && normalize(day).getTime() === normalize(checkOut).getTime();

  const isBetween = (day: Date) =>
    checkIn &&
    checkOut &&
    normalize(day) > normalize(checkIn) &&
    normalize(day) < normalize(checkOut);

  const isLockedAfterCheckIn = (day: Date) => {
    if (!checkIn || checkOut) {
      return false;
    }

    const start = normalize(checkIn);
    const limit = new Date(start);

    limit.setDate(limit.getDate() + 30);

    const d = normalize(day);

    return d > start && d <= limit;
  };

  const getDayClass = (day: Date | null) => {
    if (!day) {
      return styles.empty;
    }

    if (isPastDay(day)) {
      return styles.inactive;
    }

    if (isBetween(day)) {
      return styles.selected_days;
    }

    if (isToday(day)) {
      return styles.today;
    }

    if (isCheckInDay(day)) {
      return styles.active_checkIn;
    }

    if (isCheckOutDay(day)) {
      return styles.active_checkOut;
    }

    if (isLockedAfterCheckIn(day)) {
      return styles.inactive;
    }

    return styles.defaultDay;
  };

  const handleClick = (day: Date | null) => {
    if (!day) {
      return;
    }

    if (isPastDay(day)) {
      return;
    }

    if (isLockedAfterCheckIn(day)) {
      return;
    }

    onSelect(day);
  };

  return (
    <div className={styles.monthContainer}>
      <div className={styles.monthHeader}>
        {month === 'left' && (
          <div
            className={
              styles.navButton + (isPrevDisabled ? ` ${styles.disabled}` : '')
            }
            onClick={() => {
              if (!isPrevDisabled) {
                setOffset(offset - 1);
              }
            }}
          >
            <img src={!isPrevDisabled ? arL : arrLA} alt="Previous month" />
          </div>
        )}

        <div className={styles.monthTitle}>{title}</div>

        {month === 'right' && (
          <div
            className={styles.navButton}
            onClick={() => setOffset(offset + 1)}
          >
            <img src={aR} alt="Next month" />
          </div>
        )}
      </div>

      <div className={styles.monthFooter}>
        <div className={styles.weekdaysRow}>
          {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
            <div key={d} className={styles.weekday}>
              {d}
            </div>
          ))}
        </div>

        <div className={styles.daysGrid}>
          {data.days.map((day, i) => {
            const cls = getDayClass(day);
            const showMinStay =
              day &&
              checkIn &&
              !checkOut &&
              normalize(day).getTime() === normalize(checkIn).getTime();

            return (
              <button
                key={`${data.year}-${data.month}-${i}`}
                className={`${styles.dayCell} ${cls}`}
                onClick={() => handleClick(day)}
                translate="no"
              >
                {showMinStay && (
                  <span className={styles.minStayLabel}>
                    30-night minimum stay
                  </span>
                )}
                {day ? day.getDate() : ''}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
