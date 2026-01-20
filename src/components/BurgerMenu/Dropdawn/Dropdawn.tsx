import { useTranslation } from 'react-i18next';
import styles from './Dropdawn.module.scss';
import { useState } from 'react';
import { useLang } from '../../../contexts/LangContext';
import { useCurrency } from '../../../contexts/CurrencyContext';

interface DropdownProps {
  closeDropdown: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ closeDropdown }) => {
  const { currency, setCurrency } = useCurrency();
  const { lang, setLang } = useLang();
  const { t, i18n } = useTranslation();

  const languages = [
    { lang: 'English', abbreviated: 'ENG' },
    { lang: 'Español', abbreviated: 'ES' },
    { lang: 'Deutsch', abbreviated: 'DE' },
    { lang: 'Italiano', abbreviated: 'IT' },
    { lang: 'Français', abbreviated: 'FR' },
    { lang: 'Українська', abbreviated: 'UA' },
  ];

  const langMap: Record<string, string> = {
    ENG: 'ENG',
    ES: 'ES',
    DE: 'DE',
    IT: 'IT',
    FR: 'FR',
    UA: 'UA',
  };

  const [selectedLang, setSelectedLang] = useState(
    languages.find(l => langMap[l.abbreviated] === lang)?.abbreviated || 'ENG',
  );

  const [selectedCurr, setSelectedCurr] = useState(currency);

  const handleApply = () => {
    const langCode = langMap[selectedLang];

    setLang(langCode);
    i18n.changeLanguage(langCode);

    setCurrency(selectedCurr);
    closeDropdown();
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
              <label key={value.abbreviated}>
                <input
                  type="radio"
                  name="lang"
                  checked={selectedLang === value.abbreviated}
                  onChange={() => setSelectedLang(value.abbreviated)}
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
        disabled={lang === langMap[selectedLang] && currency === selectedCurr}
      >
        Apply
      </button>
    </div>
  );
};
