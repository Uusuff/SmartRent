import { useTranslation } from 'react-i18next';
import styles from './Dropdawn.module.scss';
import { useState } from 'react';
import { t } from 'i18next';

interface DropdownProps {
  language: { lang: string; abbreviated: string };
  currency: string;
  setLanguage: (lang: { lang: string; abbreviated: string }) => void;
  setCurrency: (curr: string) => void;
  closeDropdown: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  language,
  currency,
  setLanguage,
  setCurrency,
  closeDropdown,
}) => {
  const [selectedLang, setSelectedLang] = useState(language);
  const [selectedCurr, setSelectedCurr] = useState(currency);
  const { i18n } = useTranslation();

  const languages = [
    {
      lang: 'English',
      abbreviated: 'ENG',
    },
    {
      lang: 'Español',
      abbreviated: 'ES',
    },
    {
      lang: 'Deutsch',
      abbreviated: 'DE',
    },
    {
      lang: 'Italiano',
      abbreviated: 'IT',
    },
    {
      lang: 'Français',
      abbreviated: 'FR',
    },
    {
      lang: 'Українська',
      abbreviated: 'UA',
    },
  ];

  const handleApply = () => {
    setLanguage(selectedLang);
    setCurrency(selectedCurr);
    closeDropdown();
    i18n.changeLanguage(selectedLang.abbreviated);
  };

  return (
    <div className={styles.dropdown_menu}>
      <div className={styles.dropdown_menu__sections}>
        <div>
          <h4 className={styles.dropdown_menu__title}>
            {t('header.dropdownLanguage')}
          </h4>
          <div className={styles.options}>
            {languages.map(value => (
              <label key={value.lang}>
                <input
                  type="radio"
                  name="lang"
                  checked={selectedLang.lang === value.lang}
                  onChange={() => setSelectedLang(value)}
                />
                {value.lang}
              </label>
            ))}
          </div>
        </div>
        <div>
          <h4 className={styles.dropdown_menu__title}>
            {t('header.dropdownCurrency')}
          </h4>
          <div className={styles.options}>
            {['USD', 'PLN', 'EUR', 'CHF', 'GBP', 'UAH'].map(curr => (
              <label key={curr}>
                <input
                  type="radio"
                  name="curr"
                  checked={selectedCurr === curr}
                  onChange={() => setSelectedCurr(curr)}
                />
                {curr === 'USD' && '$ '}
                {curr === 'PLN' && 'zł '}
                {curr === 'EUR' && '€ '}
                {curr === 'CHF' && ''}
                {curr === 'GBP' && '£ '}
                {curr === 'UAH' && '₴ '}
                {curr}
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        className={styles.apply_btn}
        onClick={handleApply}
        disabled={language === selectedLang && currency === selectedCurr}
      >
        Apply
      </button>
    </div>
  );
};
