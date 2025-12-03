/* eslint-disable max-len */
import { Dropdown } from '../DropDown/DropDown';
import styles from './CatalogFilter.module.scss';
import { useTranslation } from 'react-i18next';
import { Option } from '../../types/Option';
import { useCurrency } from '../../contexts/CurrencyContext';
import { convertPrice } from '../../shared/utils/convertPrice';
import { conversionRates, priceValues } from '../../shared/utils/currencyUtils';

type Props = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  propertyType: string;
  setPropertyType: React.Dispatch<React.SetStateAction<string>>;
  cityKey: string;
  setCityKey: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  neighborhood: string;
  setNeighborhood: React.Dispatch<React.SetStateAction<string>>;
  priceUSD: number | null;
  setPrice: React.Dispatch<React.SetStateAction<number | string>>;
  setPriceUSD: React.Dispatch<React.SetStateAction<number | null>>;
  moveIn?: string | null;
  moveOut?: string | null;
  setMoveIn?: React.Dispatch<React.SetStateAction<string | null>>;
  setMoveOut?: React.Dispatch<React.SetStateAction<string | null>>;
};

export const CatalogFilter: React.FC<Props> = ({
  setCity,
  propertyType,
  setPropertyType,
  cityKey,
  setCityKey,
  date,
  neighborhood,
  setNeighborhood,
  priceUSD,
  setPrice,
  setPriceUSD,
  moveIn,
  moveOut,
  setMoveIn,
  setMoveOut,
}) => {
  const { t } = useTranslation();
  const { currency } = useCurrency();
  const showAllLabel = t('catalog_page.catalog_page_filter.titles.showAll');
  const propertyTypes: Option[] = [
    {
      value: 'apartment',
      label: t(
        'catalog_page.catalog_page_filter.categories.property_types.apartment',
      ),
    },
    {
      value: 'room',
      label: t(
        'catalog_page.catalog_page_filter.categories.property_types.room',
      ),
    },
    {
      value: 'studio',
      label: t(
        'catalog_page.catalog_page_filter.categories.property_types.studio',
      ),
    },
    {
      value: 'house',
      label: t(
        'catalog_page.catalog_page_filter.categories.property_types.house',
      ),
    },
  ];

  const locations: Option[] = [
    {
      value: 'kyiv',
      label: t('catalog_page.catalog_page_filter.categories.cities.kyiv'),
    },
    {
      value: 'lviv',
      label: t('catalog_page.catalog_page_filter.categories.cities.lviv'),
    },
    {
      value: 'dnipro',
      label: t('catalog_page.catalog_page_filter.categories.cities.dnipro'),
    },
    {
      value: 'odesa',
      label: t('catalog_page.catalog_page_filter.categories.cities.odesa'),
    },
    {
      value: 'kharkiv',
      label: t('catalog_page.catalog_page_filter.categories.cities.kharkiv'),
    },
    {
      value: 'vinnytsia',
      label: t('catalog_page.catalog_page_filter.categories.cities.vinnytsia'),
    },
    {
      value: 'ternopil',
      label: t('catalog_page.catalog_page_filter.categories.cities.ternopil'),
    },
    {
      value: 'ivano-frankivsk',
      label: t(
        'catalog_page.catalog_page_filter.categories.cities.ivano-frankivsk',
      ),
    },
    {
      value: 'zaporizhzhia',
      label: t(
        'catalog_page.catalog_page_filter.categories.cities.zaporizhzhia',
      ),
    },
    {
      value: 'chernihiv',
      label: t('catalog_page.catalog_page_filter.categories.cities.chernihiv'),
    },
  ];

  const neighborhoods: Option[] = [
    {
      value: 'downtown',
      label: t(
        'catalog_page.catalog_page_filter.categories.neighborhoods.downtown',
      ),
    },
    {
      value: 'riverside',
      label: t(
        'catalog_page.catalog_page_filter.categories.neighborhoods.riverside',
      ),
    },
    {
      value: 'university district',
      label: t(
        // eslint-disable-next-line max-len
        'catalog_page.catalog_page_filter.categories.neighborhoods.university district',
      ),
    },
    {
      value: 'suburb',
      label: t(
        'catalog_page.catalog_page_filter.categories.neighborhoods.suburb',
      ),
    },
    {
      value: 'near park',
      label: t(
        'catalog_page.catalog_page_filter.categories.neighborhoods.near park',
      ),
    },
    {
      value: 'industrial zone',
      label: t(
        // eslint-disable-next-line max-len
        'catalog_page.catalog_page_filter.categories.neighborhoods.industrial zone',
      ),
    },
    {
      value: 'old town',
      label: t(
        'catalog_page.catalog_page_filter.categories.neighborhoods.old town',
      ),
    },
  ];

  const priceOptions = priceValues.map(p => {
    const { converted, label } = convertPrice(p, 'USD', currency);

    return { value: converted, label };
  });

  const handlePriceChange = (value: number) => {
    setPrice(value);
    setPriceUSD(value / conversionRates[currency]);
  };

  const currentPriceOption =
    priceUSD !== null
      ? convertPrice(priceUSD, 'USD', currency).converted
      : showAllLabel;

  return (
    <div className={styles.filter}>
      <form className={styles.filter__form}>
        <div className={styles.filter__element}>
          <label htmlFor="location" className={styles.filter__label}>
            {t('catalog_page.catalog_page_filter.titles.location')}
          </label>

          <Dropdown
            options={locations}
            value={cityKey.toLowerCase()}
            onChange={val => {
              const selected = locations.find(loc => loc.value === val);

              if (selected) {
                setCityKey(selected.value.toString());
                setCity(selected.label);
              }
            }}
            isAllFilters={false}
            isCalendar={false}
            moveIn={moveIn}
            moveOut={moveOut}
            setMoveIn={setMoveIn}
            setMoveOut={setMoveOut}
            isApartmentPage={false}
          />
        </div>

        <div className={styles.filter__element}>
          <label htmlFor="date" className={styles.filter__label}>
            {t('catalog_page.catalog_page_filter.titles.date')}
          </label>

          <Dropdown
            options={[]}
            value={date}
            isAllFilters={false}
            isCalendar={true}
            moveIn={moveIn}
            moveOut={moveOut}
            setMoveIn={setMoveIn}
            setMoveOut={setMoveOut}
            onChange={() => {}}
            isApartmentPage={false}
          />
        </div>

        <div className={styles.filter__element}>
          <label htmlFor="neighborhood" className={styles.filter__label}>
            {t('catalog_page.catalog_page_filter.titles.neighborhood')}
          </label>

          <Dropdown
            options={neighborhoods}
            value={neighborhood.toLowerCase()}
            onChange={val => setNeighborhood(val as string)}
            isAllFilters={false}
            isCalendar={false}
            moveIn={moveIn}
            moveOut={moveOut}
            setMoveIn={setMoveIn}
            setMoveOut={setMoveOut}
            isApartmentPage={false}
          />
        </div>

        <div className={styles.filter__element}>
          <label htmlFor="price" className={styles.filter__label}>
            {t('catalog_page.catalog_page_filter.titles.price')}
          </label>

          <Dropdown
            options={priceOptions}
            value={currentPriceOption}
            onChange={val => handlePriceChange(+val)}
            isAllFilters={false}
            isCalendar={false}
            moveIn={moveIn}
            moveOut={moveOut}
            setMoveIn={setMoveIn}
            setMoveOut={setMoveOut}
            isApartmentPage={false}
          />
        </div>

        <div className={styles.filter__element}>
          <label htmlFor="propertyType" className={styles.filter__label}>
            {t('catalog_page.catalog_page_filter.titles.propertyType')}
          </label>
          <Dropdown
            options={propertyTypes}
            value={propertyType.toLowerCase()}
            onChange={val => setPropertyType(val as string)}
            isAllFilters={false}
            isCalendar={false}
            moveIn={moveIn}
            moveOut={moveOut}
            setMoveIn={setMoveIn}
            setMoveOut={setMoveOut}
            isApartmentPage={false}
          />
        </div>

        <div className={styles.filter__element}>
          <Dropdown
            options={[]}
            value={t('catalog_page.catalog_page_filter.titles.allFilters')}
            onChange={() => {}}
            isAllFilters={true}
            isCalendar={false}
            moveIn={moveIn}
            moveOut={moveOut}
            setMoveIn={setMoveIn}
            setMoveOut={setMoveOut}
            isApartmentPage={false}
          />
        </div>
      </form>
    </div>
  );
};
