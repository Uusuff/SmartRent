import locIco from '../../../../../../assets/icons/ApartSearchIco/locatio.png';
import arrRight from '../../../../../../assets/icons/SliderIco/arrow_right.png';
import { useEffect, useMemo, useRef, useState } from 'react';
import regionsUA from '../../../../../../api/Regions/regions-UA.json';
import regionsENG from '../../../../../../api/Regions/regions-ENG.json';
import i18n from 'i18next';
import styles from './SearchLocation.module.scss';
import { locations } from '../../../../../../api/Locations/locations';

type SearchLocationProps = {
  location: string | null;
  setLocation: (value: string | null) => void;
  setSelectCity: (value: string | null) => void;
};

type RegionEntry = [
  string,
  { [district: string]: { city: string; abriviatur: string }[] },
];
type FilteredCities = {
  city: string;
  abriviatur: string;
  district: string;
  region: string;
}[];

export const SearchLocation: React.FC<SearchLocationProps> = ({
  location,
  setLocation,
  setSelectCity,
}) => {
  const { t } = i18n;
  const [query, setQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState<RegionEntry | null>(
    null,
  );
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const regionsList = useMemo(() => {
    return Object.entries(
      i18n.language === 'ENG'
        ? regionsENG
        : i18n.language === 'UA'
          ? regionsUA
          : regionsENG,
    ) as RegionEntry[];
  }, [i18n.language]);

  const [filteredRegions, setFilteredRegions] =
    useState<RegionEntry[]>(regionsList);
  const [filteredCities, setFilteredCities] = useState<FilteredCities>([]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const existingLocations = locations;

  const openRegion = (region: RegionEntry) => {
    setSelectedRegion(region);
    setSelectedDistrict(null);
  };

  const openDistrict = (district: string) => {
    setSelectedDistrict(district);
  };

  const selectCity = (city: { city: string; abriviatur: string }) => {
    if (!selectedRegion || !selectedDistrict) {
      return;
    }

    const fullLocation = `${city.city}, ${selectedDistrict}, ${selectedRegion[0]}`;

    setQuery(fullLocation);
    setLocation(fullLocation);
    setSelectCity(city.abriviatur);
    setDropdownOpen(false);
    setSelectedRegion(null);
    setSelectedDistrict(null);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
        setSelectedRegion(null);
        setSelectedDistrict(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredRegions(regionsList);
      setFilteredCities([]);

      return;
    }

    const q = query.toLowerCase();

    const reg = regionsList.filter(([regionName]) =>
      regionName.toLowerCase().includes(q),
    );

    const cities: FilteredCities = [];

    regionsList.forEach(([regionName, districts]) => {
      Object.entries(districts).forEach(([districtName, citiesList]) => {
        citiesList.forEach(cityObj => {
          if (cityObj.city.toLowerCase().includes(q)) {
            cities.push({
              city: cityObj.city,
              abriviatur: cityObj.abriviatur,
              district: districtName,
              region: regionName,
            });
          }
        });
      });
    });

    setFilteredRegions(reg);
    setFilteredCities(cities);
  }, [query, regionsList]);

  useEffect(() => {
    if (location === null) {
      setQuery('');
      setSelectedRegion(null);
      setSelectedDistrict(null);
      setDropdownOpen(false);
    }
  }, [location]);

  return (
    <div className={styles.apartment_search__location} ref={wrapperRef}>
      <div className={styles.location__search__location_top}>
        <img src={locIco} alt="Location Icon" />
        <input
          type="text"
          className={styles.location__input}
          placeholder={t('homePage.apartmentSearch.searchLocation.placeholder')}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setDropdownOpen(true)}
        />
      </div>

      {dropdownOpen && (
        <>
          {query && filteredCities.length > 0 && (
            <ul className={styles.cities_list}>
              {filteredCities.map(item => (
                <li
                  key={`${item.city}-${item.district}`}
                  className={styles.city_item}
                  onClick={() => selectCity(item)}
                >
                  {`${item.city}, ${item.district}, ${item.region}`}
                  <img src={arrRight} alt="arrow right" />
                </li>
              ))}
            </ul>
          )}

          {query === '' && !selectedRegion && (
            <ul className={styles.regions_list}>
              {filteredRegions.map(region => (
                <li
                  key={region[0]}
                  className={styles.region_item}
                  onClick={() => openRegion(region)}
                >
                  {region[0]}
                  <img src={arrRight} alt="arrow right" />
                </li>
              ))}
            </ul>
          )}

          {selectedRegion && !selectedDistrict && (
            <ul className={styles.cities_list}>
              <li
                className={styles.city_item}
                onClick={() => setSelectedRegion(null)}
              >
                {'< ' + t('homePage.apartmentSearch.searchLocation.goBack')}
              </li>

              {Object.keys(selectedRegion[1]).map(district => (
                <li
                  key={district}
                  className={styles.city_item}
                  onClick={() => openDistrict(district)}
                >
                  {district}
                  <img src={arrRight} alt="arrow right" />
                </li>
              ))}
            </ul>
          )}

          {selectedRegion && selectedDistrict && (
            <ul className={styles.cities_list}>
              <li
                className={styles.city_item}
                onClick={() => setSelectedDistrict(null)}
              >
                {'< ' + t('homePage.apartmentSearch.searchLocation.goBack')}
              </li>

              {selectedRegion[1][selectedDistrict].map(cityObj => (
                <li
                  key={cityObj.abriviatur}
                  className={
                    existingLocations.includes(cityObj.abriviatur.toLowerCase())
                      ? styles.city_item
                      : `${styles.city_item} ${styles.disabled}`
                  }
                  onClick={() => selectCity(cityObj)}
                >
                  {cityObj.city}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
