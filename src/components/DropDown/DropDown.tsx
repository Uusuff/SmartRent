import { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.scss';

type Props = {
  options: (string | number)[];
  value: string | number;
  onChange: (val: string | number) => void;
  isAllFilters: boolean;
};

export const Dropdown: React.FC<Props> = ({
  options,
  value,
  onChange,
  isAllFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    val: string | number,
  ) => {
    if (
      e.currentTarget.classList.contains(styles['dropdown__item--disabled'])
    ) {
      return;
    }

    onChange(val);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {isAllFilters ? (
        <div
          className={`${styles.dropdown} ${styles[`dropdown--allFilters`]}`}
          ref={dropdownRef}
        >
          <button
            type="button"
            className={`${styles.dropdown__toggle} ${styles[`dropdown__toggle--allFilters`]}`}
          >
            <span className={styles.dropdown__filterIcon}></span>
            {value}
          </button>
        </div>
      ) : (
        <div className={styles.dropdown} ref={dropdownRef}>
          <button
            type="button"
            className={styles.dropdown__toggle}
            onClick={() => setIsOpen(!isOpen)}
          >
            {value}
            <span
              className={`${styles.dropdown__arrow} ${isOpen ? styles['dropdown__arrow--up'] : styles['dropdown__arrow--down']}`}
            ></span>
          </button>

          {isOpen && (
            <ul className={styles.dropdown__menu}>
              {options.map(opt => (
                <li
                  key={opt}
                  className={`${styles.dropdown__item} ${
                    opt === value ? styles['dropdown__item--active'] : ''
                  }`}
                  onClick={e => handleSelect(e, opt)}
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};
