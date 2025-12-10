import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__content}>
        <h1 className={styles.notFound__title}>{t('errors.pageNotFound')}</h1>
        <Link to="/" className={styles.notFound__link}>
          {t('favorites.backHome')}
        </Link>

        <img
          src="src/assets/images/NotFound/notFound.jpg"
          alt="Page not found photo"
          className={styles.notFound__photo}
        />
      </div>
    </section>
  );
};
