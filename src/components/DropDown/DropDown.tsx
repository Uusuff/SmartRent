import { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.scss';
import { Option } from '../../types/Option';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../../contexts/CurrencyContext';

type Props = {
  options: Option[];
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
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const showAllLabel = t('catalog_page.catalog_page_filter.titles.showAll');
  const { currency } = useCurrency();

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
            {typeof value === 'number'
              ? `${t('catalog_page.catalog_page_filter.categories.price.upTo')}
               ${currency === 'USD' ? `$${value}` : currency === 'PLN' ? `${value} zł` : currency === 'EUR' ? `€${value}` : currency === 'GBP' ? `£${value}` : currency === 'UAH' ? `₴${value}` : currency === 'CHF' ? `${value} CHF` : currency}`
              : options.find(opt => opt.value === value)?.label || showAllLabel}
            <span
              className={`${styles.dropdown__arrow} ${isOpen ? styles['dropdown__arrow--up'] : styles['dropdown__arrow--down']}`}
            ></span>
          </button>

          {isOpen && (
            <ul className={styles.dropdown__menu}>
              {options.map((opt, i) => (
                <li
                  key={i}
                  className={`${styles.dropdown__item} ${
                    String(opt.value).toLowerCase() ===
                    String(value).toLowerCase()
                      ? styles['dropdown__item--active']
                      : ''
                  } ${
                    typeof +opt.value === 'number' &&
                    +opt.value ===
                      +value.toString().split(' ')[
                        value.toString().split(' ').length - 1
                      ]
                      ? styles['dropdown__item--active']
                      : ''
                  }`}
                  onClick={e => handleSelect(e, opt.value)}
                >
                  {opt.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};
