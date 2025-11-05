import { NavLink } from 'react-router-dom';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import userIcon from '../../assets/icons/HeadersIcons/user.png';
import favorites from '../../assets/icons/HeadersIcons/favarites.png';
import styles from './Header.module.scss';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className={styles.header__buttons}>
        <NavLink to="/landlord">
          <button className={styles.landlord__button}>
            {t('header.buttonText')}
          </button>
        </NavLink>
        <BurgerMenu />
        <NavLink to="/favorites" className={styles.header__button}>
          <button className={styles.favorites__button}>
            <img src={favorites} alt="favorites icon" />
          </button>
        </NavLink>
        <NavLink to="/user" className={styles.header__button}>
          <button className={styles.user__button}>
            <img src={userIcon} alt="user icon" />
          </button>
        </NavLink>
      </div>
    </header>
  );
};
