import { useEffect, useState } from 'react';
import { Dropdown } from '../DropDown/DropDown';
import styles from './CatalogFilter.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useLang } from '../../contexts/LangContext';
import {
  locations,
  neighborhoods,
  prices,
  propertyTypes,
} from '../../translatedData/translatedData';
import { Apartment } from '../../types/Apartment';

type Props = {
  apartments: Apartment[];
  setFilteredApartments: React.Dispatch<React.SetStateAction<Apartment[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

export const CatalogFilter: React.FC<Props> = ({
  apartments,
  setFilteredApartments,
  setCurrentPage,
  currentPage,
  location,
  setLocation,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [date, setDate] = useState('Show all');
  const [neighborhood, setNeighborhood] = useState(
    searchParams.get('neighborhood') || 'Show all',
  );
  const [price, setPrice] = useState(searchParams.get('price') || 'Show all');
  const [propertyType, setPropertyType] = useState(
    searchParams.get('propertyType') || 'Show all',
  );
  const { lang } = useLang();
  const [moveIn, setMoveIn] = useState(searchParams.get('MOVE_IN'));
  const [moveOut, setMoveOut] = useState(searchParams.get('MOVE_OUT'));

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
      setDate('Show all');
    }
  }, [moveIn, moveOut]);

  useEffect(() => {
    const params: Record<string, string> = {};

    if (location && location !== 'Show all') {
      params.city = location;
    }

    if (neighborhood && neighborhood !== 'Show all') {
      params.neighborhood = neighborhood;
    }

    if (price && price !== 'Show all') {
      params.price = price.toString();
    }

    if (propertyType && propertyType !== 'Show all') {
      params.propertyType = propertyType;
    }

    if (moveIn) {
      params.MOVE_IN = moveIn;
    }

    if (moveOut) {
      params.MOVE_OUT = moveOut;
    }

    if (currentPage > 1) {
      params.page = currentPage.toString();
    }

    setSearchParams(params);
  }, [
    location,
    neighborhood,
    price,
    propertyType,
    moveIn,
    moveOut,
    currentPage,
    setSearchParams,
  ]);

  useEffect(() => {
    let result = [...apartments];

    if (location !== 'Show all') {
      result = result.filter(a => a.city === location);
    }

    if (neighborhood !== 'Show all') {
      result = result.filter(a => a.neighborhood === neighborhood);
    }

    if (price !== 'Show all') {
      const normalizedPrice =
        lang === 'en' ? +price.split(' ')[2].slice(1) : +price.split(' ')[1];

      result = result.filter(a => +a.price <= normalizedPrice);
    }

    if (propertyType !== 'Show all') {
      result = result.filter(a => a.propertyType === propertyType);
    }

    if (moveIn) {
      const moveInDate = new Date(moveIn);

      result = result.filter(a => new Date(a.availableFrom) <= moveInDate);
    }

    setFilteredApartments(result);
    setCurrentPage(1);
  }, [
    location,
    neighborhood,
    price,
    propertyType,
    moveIn,
    moveOut,
    apartments,
  ]);

  return (
    <div className={styles.filter}>
      <form className={styles.filter__form}>
        <div className={styles.filter__element}>
          <label htmlFor="location" className={styles.filter__label}>
            Location
          </label>

          <Dropdown
            options={locations.map(loc => (lang === 'en' ? loc.en : loc.ua))}
            value={location}
            onChange={val => setLocation(val as string)}
            isAllFilters={false}
          />
        </div>

        <div className={styles.filter__element}>
          <label htmlFor="location" className={styles.filter__label}>
            Date
          </label>

          <Dropdown
            options={locations.map(loc => (lang === 'en' ? loc.en : loc.ua))}
            value={date}
            onChange={val => setLocation(val as string)}
            isAllFilters={false}
          />
        </div>

        <div className={styles.filter__element}>
          <label htmlFor="neighborhood" className={styles.filter__label}>
            Neighborhood
          </label>

          <Dropdown
            options={neighborhoods.map(n => (lang === 'en' ? n.en : n.ua))}
            value={neighborhood}
            onChange={val => setNeighborhood(val as string)}
            isAllFilters={false}
          />
        </div>

        <div className={styles.filter__element}>
          <label htmlFor="price" className={styles.filter__label}>
            Price
          </label>

          <Dropdown
            options={prices.map(p =>
              lang === 'en' ? `$${p.usd}` : `p.uah грн`,
            )}
            value={price}
            onChange={val =>
              setPrice(
                lang === 'ua' ? `до ${val} грн` : (`up to ${val}` as string),
              )
            }
            isAllFilters={false}
          />
        </div>

        <div className={styles.filter__element}>
          <label htmlFor="propertyType" className={styles.filter__label}>
            Property type
          </label>

          <Dropdown
            options={propertyTypes.map(p => (lang === 'en' ? p.en : p.ua))}
            value={propertyType}
            onChange={val => setPropertyType(val as string)}
            isAllFilters={false}
          />
        </div>

        <div className={styles.filter__element}>
          <Dropdown
            options={[]}
            value="All filters"
            onChange={() => {}}
            isAllFilters={true}
          />
        </div>
      </form>
    </div>
  );
};
