/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-console */
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
import { useCurrency } from '../../../contexts/CurrencyContext';
import { conversionRates } from '../../../shared/utils/currencyUtils';

export const CatalogPage = () => {
  const { t } = useTranslation();
  const { apartments, loading } = useApartments();
  const [filteredApartments, setFilteredApartments] = useState<Apartment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [city, setCity] = useState(searchParams.get('city') || 'showAll');
  const [cityKey, setCityKey] = useState<string>(
    searchParams.get('city')?.toLowerCase() || 'showAll',
  );
  const [propertyType, setPropertyType] = useState(
    searchParams.get('propertyType') || 'showAll',
  );
  const [isMapOpened, setIsMapOpened] = useState(false);
  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const currentItems = filteredApartments.slice(startIndex, endIndex);
  const [date, setDate] = useState('showAll');
  const [neighborhood, setNeighborhood] = useState(
    searchParams.get('neighborhood') || 'showAll',
  );
  const { currency } = useCurrency();
  const [moveIn, setMoveIn] = useState(searchParams.get('MOVE_IN'));
  const [moveOut, setMoveOut] = useState(searchParams.get('MOVE_OUT'));
  const [priceUSD, setPriceUSD] = useState<number | null>(
    searchParams.get('price')
      ? Number(searchParams.get('price')) / conversionRates[currency]
      : null,
  );
  const [price, setPrice] = useState<number | string>(
    priceUSD !== null
      ? Math.round(priceUSD * conversionRates[currency])
      : 'showAll',
  );

  useEffect(() => {
    if (priceUSD !== null) {
      const step = ['USD', 'EUR', 'GBP'].includes(currency) ? 50 : 100;
      const converted =
        Math.round((priceUSD * conversionRates[currency]) / step) * step;

      setPrice(converted);
    }
  }, [currency, priceUSD]);

  useEffect(() => {
    if (moveIn && moveOut) {
      const inDate = new Date(moveIn);
      const outDate = new Date(moveOut);

      const formatOptions: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
      };

      const inMonthDay = inDate.toLocaleDateString('en-US', formatOptions);
      const outMonthDay = outDate.toLocaleDateString('en-US', formatOptions);
      const inYear = inDate.getFullYear();
      const outYear = outDate.getFullYear();
      let formattedDate;

      if (inYear === outYear) {
        formattedDate = `${inMonthDay} - ${outMonthDay} ${outYear}`;
      } else {
        formattedDate = `${inMonthDay} ${inYear} - ${outMonthDay} ${outYear}`;
      }

      setDate(formattedDate);
    } else {
      setDate(t('catalog_page.catalog_page_filter.titles.showAll'));
    }
  }, [moveIn, moveOut]);

  useEffect(() => {
    const params: Record<string, string> = {};
    let result = [...apartments];

    if (cityKey && cityKey !== 'showAll') {
      params.city = cityKey;

      result = result.filter(
        a => a.city.ENG.toLowerCase() === cityKey.toLowerCase(),
      );
    }

    if (neighborhood && neighborhood !== 'showAll') {
      params.neighborhood = neighborhood;

      result = result.filter(
        a => a.neighborhood.ENG.toLowerCase() === neighborhood.toLowerCase(),
      );
    }

    if (price && price !== 'showAll') {
      params.price = price.toString();

      const priceInUSD = Number(price) / conversionRates[currency];

      result = result.filter(a => a.price <= priceInUSD);
    }

    if (propertyType && propertyType !== 'showAll') {
      params.propertyType = propertyType;

      result = result.filter(
        a => a.propertyType.ENG.toLowerCase() === propertyType.toLowerCase(),
      );
    }

    if (moveIn) {
      params.MOVE_IN = moveIn;

      const moveInDate = new Date(moveIn);

      result = result.filter(a => new Date(a.availableFrom) <= moveInDate);
    }

    if (moveOut) {
      params.MOVE_OUT = moveOut;
    }

    if (currentPage > 1) {
      params.page = currentPage.toString();
    }

    console.log(propertyType);

    setSearchParams(params);
    setFilteredApartments(result);
    setCurrentPage(1);
  }, [
    city,
    neighborhood,
    price,
    propertyType,
    moveIn,
    moveOut,
    apartments,
    cityKey,
  ]);

  return (
    <section className={styles.catalogPage}>
      <CatalogFilter
        setCity={setCity}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        cityKey={cityKey}
        setCityKey={setCityKey}
        priceUSD={priceUSD}
        setPrice={setPrice}
        setPriceUSD={setPriceUSD}
        neighborhood={neighborhood}
        setNeighborhood={setNeighborhood}
        date={date}
        moveIn={moveIn}
        moveOut={moveOut}
        setMoveIn={setMoveIn}
        setMoveOut={setMoveOut}
      />

      {loading && <Loader />}

      {!loading && (
        <div
          className={`${styles.catalogPage__content} ${isMapOpened && styles[`catalogPage__content--mapOpened`]}`}
        >
          <div
            className={`${styles.catalogPage__contentInfo} ${isMapOpened && styles[`catalogPage__contentInfo--mapOpened`]}`}
          >
            <div
              className={`${styles.catalogPage__head} ${isMapOpened && styles[`catalogPage__head--mapOpened`]}`}
            >
              <h2 className={styles.catalogPage__title}>
                {cityKey === 'showAll'
                  ? propertyType === 'showAll'
                    ? t('catalog_page.catalog_page_head.titleNoCity', {
                        propertyType: t(
                          `catalog_page.catalog_page_filter.categories.property_types.all`,
                        ),
                      })
                    : t('catalog_page.catalog_page_head.titleNoCity', {
                        propertyType:
                          t(
                            `catalog_page.catalog_page_filter.categories.property_types.${propertyType.toLowerCase()}`,
                          )
                            .slice(0, 1)
                            .toUpperCase() +
                          t(
                            `catalog_page.catalog_page_filter.categories.property_types.${propertyType.toLowerCase()}`,
                          ).slice(1),
                      })
                  : propertyType === 'showAll'
                    ? t('catalog_page.catalog_page_head.title', {
                        propertyType: t(
                          `catalog_page.catalog_page_filter.categories.property_types.all`,
                        ),
                        city: t(
                          `catalog_page.catalog_page_filter.categories.cities_title.${cityKey.toLowerCase()}`,
                        ),
                      })
                    : t('catalog_page.catalog_page_head.title', {
                        propertyType:
                          t(
                            `catalog_page.catalog_page_filter.categories.property_types.${propertyType.toLowerCase()}`,
                          )
                            .slice(0, 1)
                            .toUpperCase() +
                          t(
                            `catalog_page.catalog_page_filter.categories.property_types.${propertyType.toLowerCase()}`,
                          ).slice(1),

                        city: t(
                          `catalog_page.catalog_page_filter.categories.cities_title.${cityKey.toLowerCase()}`,
                        ),
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
                {t('errors.notFound')}
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
