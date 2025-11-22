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
import { useCurrency } from '../../contexts/CurrencyContext';
import { useLang } from '../../contexts/LangContext';

export const BurgerMenu = () => {
  const { currency } = useCurrency();
  const { lang } = useLang();
  const [isOpen, setIsOpen] = useState(false);

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
        <img src={flagIcons[lang]} alt={lang} />
      </div>

      <span className={styles.burger_menu__text}>{`${lang}, ${currency}`}</span>

      <div
        className={styles.burger_menu__arrow}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={isOpen ? arrowUp : arrowDown} alt="arrow" />
      </div>

      {isOpen && <Dropdown closeDropdown={() => setIsOpen(false)} />}
    </div>
  );
};
