// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { useFavorites } from '../../../contexts/FavoritesContext';
import { CatalogList } from '../../../components/CatalogList/CatalogList';
import styles from './Favorites.module.scss';

export const Favorites = () => {
  const { favorites } = useFavorites();
  const { t } = useTranslation();

  return (
    <section className={styles.favorites}>
      <h1 className={styles.favorites__title}>{t('favorites.title')}</h1>
      <p className={styles.favorites__quantity}>
        {favorites.length === 1
          ? t('favorites.item')
          : t('favorites.items', { count: favorites.length })}
      </p>

      <a href="#" className={styles.favorites__homeLink}>
        Back home
      </a>

      {favorites.length > 0 && (
        <CatalogList apartments={favorites} isMapOpened={false} />
      )}
    </section>
  );
};
