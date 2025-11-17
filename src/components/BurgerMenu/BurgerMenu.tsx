import iconUK from '../../assets/icons/BurgerMenuIcons/ukraine.png';
import iconENG from '../../assets/icons/BurgerMenuIcons/USA.png';
import iconFR from '../../assets/icons/BurgerMenuIcons/france.png';
import iconES from '../../assets/icons/BurgerMenuIcons/spain.png';
import iconDE from '../../assets/icons/BurgerMenuIcons/germany.png';
import iconIT from '../../assets/icons/BurgerMenuIcons/italy.png';
import arrowDown from '../../assets/icons/BurgerMenuIcons/ArrowDown.png';
import arrowUp from '../../assets/icons/BurgerMenuIcons/ArrowUp.png';
import styles from './BurgerMenu.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Dropdown } from './Dropdawn/Dropdawn';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState({
    lang: 'English',
    abbreviated: 'ENG',
  });

  const flagIcons: Record<string, string> = {
    UA: iconUK,
    ENG: iconENG,
    FR: iconFR,
    ES: iconES,
    DE: iconDE,
    IT: iconIT,
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.burger_menu} ref={menuRef}>
      <div className={styles.burger_menu__img}>
        <img src={flagIcons[language.abbreviated]} alt={language.lang} />
      </div>

      <span className={styles.burger_menu__text}>
        {`${language.abbreviated}, ${currency}`}
      </span>

      <div
        className={styles.burger_menu__arrow}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={isOpen ? arrowUp : arrowDown} alt="arrow" />
      </div>

      {isOpen && (
        <Dropdown
          language={language}
          currency={currency}
          setLanguage={setLanguage}
          setCurrency={setCurrency}
          closeDropdown={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
