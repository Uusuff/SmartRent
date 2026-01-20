import { Footer } from './modules/Footer';
import { Header } from './modules/Header';
import styles from './App.module.scss';
import './styles/resetStyles.scss';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <div className={styles.app}>
    <Header />

    <main className={styles.main_content}>{<Outlet />}</main>
    <Footer />
  </div>
);
