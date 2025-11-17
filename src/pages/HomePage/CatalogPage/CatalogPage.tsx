import { CatalogFilter } from '../../../components/CatalogFilter/CatalogFilter';
import { useApartments } from '../../../contexts/ApartmentsContext';
import styles from './CatalogPage.module.scss';
import { useEffect, useState } from 'react';
import { CatalogList } from '../../../components/CatalogList/CatalogList';
import { Pagination } from '../../../components/Pagination/pagination';
import { useSearchParams } from 'react-router-dom';
import { Apartment } from '../../../types/Apartment';
import ApartmentMap from '../../../components/apartmentMap/apartmentMap';
import { Loader } from '../../../components/Loader/Loader';
import { useTranslation } from 'react-i18next';

export const CatalogPage = () => {
  const { apartments, loading } = useApartments();
  const [filteredApartments, setFilteredApartments] = useState<Apartment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const [location, setLocation] = useState(searchParams.get('city') || '');
  const [isMapOpened, setIsMapOpened] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (location.length > 0) {
      setFilteredApartments(apartments.filter(a => a.city === location));
    }
  }, [apartments, location]);

  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const currentItems = filteredApartments.slice(startIndex, endIndex);

  return (
    <section className={styles.catalogPage}>
      <CatalogFilter
        apartments={apartments}
        setFilteredApartments={setFilteredApartments}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        location={location}
        setLocation={setLocation}
      />

      {loading && <Loader />}

      {!loading && (
        <div className={styles.catalogPage__content}>
          <div className={styles.catalogPage__contentInfo}>
            <div
              className={`${styles.catalogPage__head} ${isMapOpened && styles[`catalogPage__head--mapOpened`]}`}
            >
              <h2 className={styles.catalogPage__title}>
                Apartment
                {t('catalog_page.catalog_page_head.title', {
                  propertyType: '',
                  city: 'Kyiv',
                })}
              </h2>

              <p className={styles.catalogPage__quantity}>
                {t('catalog_page.catalog_page_head.quantity', {
                  quantity: filteredApartments.length,
                })}
              </p>

              <div className={styles.catalogPage__links}>
                <div className={styles.catalogPage__linkItem}>
                  <a
                    className={`${styles.catalogPage__linkIcon} ${styles[`catalogPage__linkIcon--recommended`]}`}
                  ></a>
                  <a
                    className={`${styles.catalogPage__link}`}
                    href="recommeded"
                  >
                    {t('catalog_page.catalog_page_head.links.recommended')}
                  </a>
                </div>

                <div
                  className={`${styles.catalogPage__linkItem} ${isMapOpened && styles[`catalogPage__linkItem--hidden`]}`}
                >
                  <a
                    className={`${styles.catalogPage__linkIcon} ${styles[`catalogPage__linkIcon--map`]}`}
                  ></a>
                  <button
                    className={`${styles.catalogPage__link}`}
                    onClick={() => setIsMapOpened(!isMapOpened)}
                  >
                    {t('catalog_page.catalog_page_head.links.map')}
                  </button>
                </div>
              </div>
            </div>

            {!loading && currentItems.length > 0 ? (
              <CatalogList
                apartments={currentItems}
                isMapOpened={isMapOpened}
              />
            ) : (
              <p className={styles.catalogPage__notFound}>
                There are no results found!
              </p>
            )}

            {currentItems.length > 0 && (
              <Pagination
                total={filteredApartments.length}
                currentPage={currentPage}
                onPageChange={(p: number) => {
                  setCurrentPage(p);
                }}
                isMapOpened={isMapOpened}
              />
            )}
          </div>

          {isMapOpened && <ApartmentMap setIsMapOpened={setIsMapOpened} />}
        </div>
      )}
    </section>
  );
};
