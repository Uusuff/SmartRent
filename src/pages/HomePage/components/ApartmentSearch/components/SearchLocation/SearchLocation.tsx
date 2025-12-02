import locIco from '../../../../../../assets/icons/ApartSearchIco/locatio.png';
import arrRight from '../../../../../../assets/icons/SliderIco/arrow_right.png';
import { useEffect, useRef, useState } from 'react';
import regions from '../../../../../../api/regions.json';
import styles from './SearchLocation.module.scss';

type SearchLocationProps = {
  location: string | null;
  setLocation: (value: string | null) => void;
};
type RegionEntry = [string, { [district: string]: string[] }];
type FilteredRegions = { city: string; district: string; region: string }[];

export const SearchLocation: React.FC<SearchLocationProps> = ({
  location,
  setLocation,
}) => {
  const [query, setQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState<RegionEntry | null>(
    null,
  );
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const regionsList = Object.entries(regions) as RegionEntry[];

  const [filteredRegions, setFilteredRegions] =
    useState<RegionEntry[]>(regionsList);
  const [filteredCities, setFilteredCities] = useState<FilteredRegions>([]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const openRegion = (region: RegionEntry) => {
    setSelectedRegion(region);
    setSelectedDistrict(null);
  };

  const openDistrict = (district: string) => {
    setSelectedDistrict(district);
  };

  const selectCity = (city: string) => {
    setQuery(`${city}, ${selectedDistrict}, ${selectedRegion?.[0]}`);
    setLocation(`${city}, ${selectedDistrict}, ${selectedRegion?.[0]}`);
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

    const cities: { city: string; district: string; region: string }[] = [];

    regionsList.forEach(([regionName, districts]) => {
      Object.entries(districts).forEach(([districtName, citiesList]) => {
        citiesList.forEach(city => {
          if (city.toLowerCase().includes(q)) {
            cities.push({
              city,
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
          placeholder="Enter a region, city"
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
                  onClick={() =>
                    setQuery(`${item.city}, ${item.district}, ${item.region}`)
                  }
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
                {'< назад'}
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
                {'< назад'}
              </li>

              {selectedRegion[1][selectedDistrict].map(city => (
                <li
                  key={city}
                  className={styles.city_item}
                  onClick={() => selectCity(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
