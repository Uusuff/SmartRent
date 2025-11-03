import styles from './Header.module.css';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 SmartRent. All rights reserved.</p>
      <BurgerMenu />
    </footer>
  );
};
