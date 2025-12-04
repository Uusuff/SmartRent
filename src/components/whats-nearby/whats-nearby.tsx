/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './whats-nearby.module.scss';
import { useTranslation } from 'react-i18next';
import { MultiLangText } from '../../types/Apartment';

const shopIcon = new URL(
  '../../assets/icons/mapIcons/shops.svg',
  import.meta.url,
).href;
const shopIconActive = new URL(
  '../../assets/icons/mapIcons/shops-active.svg',
  import.meta.url,
).href;

const restaurantIcon = new URL(
  'assets/icons/mapIcons/restaurants.svg',
  import.meta.url,
).href;
const restaurantIconActive = new URL(
  'assets/icons/mapIcons/restaurants-active.svg',
  import.meta.url,
).href;

const gymIcon = new URL('assets/icons/mapIcons/gym.svg', import.meta.url).href;
const gymIconActive = new URL(
  'assets/icons/mapIcons/gym-active.svg',
  import.meta.url,
).href;

const supermarketIcon = new URL(
  '../../assets/icons/mapIcons/supermarkets.svg',
  import.meta.url,
).href;
const supermarketIconActive = new URL(
  '../../assets/icons/mapIcons/supermarkets-active.svg',
  import.meta.url,
).href;

const transportIcon = new URL(
  '../../assets/icons/mapIcons/transport.svg',
  import.meta.url,
).href;
const transportIconActive = new URL(
  '../../assets/icons/mapIcons/transport-active.svg',
  import.meta.url,
).href;

const schoolIcon = new URL(
  '../../assets/icons/mapIcons/school.svg',
  import.meta.url,
).href;
const schoolIconActive = new URL(
  '../../assets/icons/mapIcons/school-active.svg',
  import.meta.url,
).href;

const barIcon = new URL('../../assets/icons/mapIcons/bars.svg', import.meta.url)
  .href;
const barIconActive = new URL(
  '../../assets/icons/mapIcons/bars-active.svg',
  import.meta.url,
).href;

const hospitalIcon = new URL(
  '../../assets/icons/mapIcons/hospital.svg',
  import.meta.url,
).href;
const hospitalIconActive = new URL(
  '../../assets/icons/mapIcons/hospital-active.svg',
  import.meta.url,
).href;

const parkIcon = new URL(
  '../../assets/icons/mapIcons/parks.svg',
  import.meta.url,
).href;
const parkIconActive = new URL(
  '../../assets/icons/mapIcons/parks-active.svg',
  import.meta.url,
).href;

const parkingIcon = new URL(
  '../../assets/icons/mapIcons/parking-lots.svg',
  import.meta.url,
).href;
const parkingIconActive = new URL(
  '../../assets/icons/mapIcons/parking-lots-active.svg',
  import.meta.url,
).href;

const homeIcon = new URL(
  '../../assets/icons/mapIcons/home.svg',
  import.meta.url,
).href;

export type POI = {
  id: number;
  name: string;
  type: string;
  lat: number;
  lng: number;
  address: string;
  stars: number;
};

interface WhatsNearbyProps {
  apartmentLat: number;
  apartmentLng: number;
  apartmentAddress: MultiLangText;
  radius?: number;
}

type OverpassTags = {
  name?: string;
  stars?: string;
  'addr:street'?: string;

  shop?: string;
  amenity?: string;
  healthcare?: string;
  leisure?: string;
  landuse?: string;
  sport?: string;
  parking?: string;

  highway?: string;
  railway?: string;
  public_transport?: string;

  [key: string]: string | undefined;
};

type OverpassElement = {
  id: number;
  lat?: number;
  lon?: number;
  center?: {
    lat: number;
    lon: number;
  };
  tags: OverpassTags;
};

export const WhatsNearby: React.FC<WhatsNearbyProps> = ({
  apartmentLat,
  apartmentLng,
  apartmentAddress,
  radius = 1500,
}) => {
  const { t, i18n } = useTranslation();
  const [pois, setPois] = useState<POI[]>([]);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activePoiId, setActivePoiId] = useState<number | null>(null);
  const mapRef = React.useRef<L.Map | null>(null);

  const langKeys = ['ENG', 'UA', 'DE', 'FR', 'IT', 'ES'] as const;

  type LangKey = (typeof langKeys)[number];

  const normalizeLang = (lng: string): LangKey => {
    const short = lng.split('-')[0];

    if (short === 'en') {
      return 'ENG';
    }

    if (short === 'ua') {
      return 'UA';
    }

    if (short === 'de') {
      return 'DE';
    }

    if (short === 'fr') {
      return 'FR';
    }

    if (short === 'it') {
      return 'IT';
    }

    if (short === 'es') {
      return 'ES';
    }

    return 'ENG';
  };

  const currentLang: LangKey = normalizeLang(i18n.language);

  const filters = [
    {
      name: t('apartment_page.whatsNearby.filters.supermarkets'),
      type: 'supermarket',
      icon: supermarketIcon,
      activeIcon: supermarketIconActive,
    },
    {
      name: t('apartment_page.whatsNearby.filters.transport'),
      type: 'transport',
      icon: transportIcon,
      activeIcon: transportIconActive,
    },
    {
      name: t('apartment_page.whatsNearby.filters.gyms'),
      type: 'gym',
      icon: gymIcon,
      activeIcon: gymIconActive,
    },
    {
      name: t('apartment_page.whatsNearby.filters.restaurants'),
      type: 'restaurant',
      icon: restaurantIcon,
      activeIcon: restaurantIconActive,
    },
    {
      name: t('apartment_page.whatsNearby.filters.schools'),
      type: 'school',
      icon: schoolIcon,
      activeIcon: schoolIconActive,
    },
    {
      name: t('apartment_page.whatsNearby.filters.shops'),
      type: 'shop',
      icon: shopIcon,
      activeIcon: shopIconActive,
    },
    {
      name: t('apartment_page.whatsNearby.filters.bars'),
      type: 'bar',
      icon: barIcon,
      activeIcon: barIconActive,
    },
    {
      name: t('apartment_page.whatsNearby.filters.hospitals'),
      type: 'hospital',
      icon: hospitalIcon,
      activeIcon: hospitalIconActive,
    },
    {
      name: t('apartment_page.whatsNearby.filters.parks'),
      type: 'park',
      icon: parkIcon,
      activeIcon: parkIconActive,
    },
    {
      name: t('apartment_page.whatsNearby.filters.parking'),
      type: 'parking',
      icon: parkingIcon,
      activeIcon: parkingIconActive,
    },
  ];

  const getApartmentIcon = () =>
    L.divIcon({
      className: '',
      html: `<div style="
      width: 60px;
      height: 65px;
      background-image: url(${homeIcon});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    "></div>`,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -50],
    });

  const getDivIcon = (
    iconUrl: string,
    activeIconUrl: string,
    isActive?: boolean,
  ) =>
    L.divIcon({
      className: '',
      html: `
        <div style="
          width: 40px;
          height: 40px;
          background-image: url(${isActive ? activeIconUrl : iconUrl});
          background-size: 16px 16px;
          background-repeat: no-repeat;
          background-position: center;
          background-color: ${isActive ? '#165A43' : '#EDF2F1'};
          border-radius: 50%;
          border: 1px solid #165A43;
          cursor: pointer;
        "></div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

  const mapOverpassToFilterType = (el: OverpassElement): string => {
    if (el.tags) {
      if (el.tags.shop === 'supermarket') {
        return 'supermarket';
      }

      if (el.tags.shop) {
        return 'shop';
      }

      if (el.tags.amenity === 'restaurant' || el.tags.amenity === 'cafe') {
        return 'restaurant';
      }

      if (el.tags.amenity === 'bar') {
        return 'bar';
      }

      if (el.tags.amenity === 'school' || el.tags.amenity === 'university') {
        return 'school';
      }

      if (
        el.tags.amenity === 'hospital' ||
        el.tags.healthcare === 'hospital' ||
        el.tags.amenity === 'clinic' ||
        el.tags.healthcare === 'clinic'
      ) {
        return 'hospital';
      }

      if (el.tags.amenity === 'parking' || el.tags.parking) {
        return 'parking';
      }

      if (
        el.tags.leisure === 'park' ||
        el.tags.leisure === 'garden' ||
        el.tags.leisure === 'nature_reserve' ||
        el.tags.landuse === 'forest' ||
        el.tags.leisure === 'recreation_ground' ||
        el.tags.leisure === 'grass'
      ) {
        return 'park';
      }

      if (
        [
          'park',
          'garden',
          'nature_reserve',
          'recreation_ground',
          'grass',
        ].includes(el.tags.leisure || '') ||
        el.tags.landuse === 'forest'
      ) {
        return 'park';
      }

      if (
        el.tags.leisure === 'fitness_centre' ||
        el.tags.leisure === 'gym' ||
        el.tags.sport === 'gym' ||
        el.tags.sport === 'fitness'
      ) {
        return 'gym';
      }

      if (
        el.tags.amenity === 'bus_station' ||
        el.tags.highway === 'bus_stop' ||
        el.tags.railway === 'station' ||
        el.tags.railway === 'tram_stop' ||
        el.tags.railway === 'halt' ||
        el.tags.public_transport === 'platform'
      ) {
        return 'transport';
      }
    }

    return 'shop';
  };

  const getRandomStars = () => Math.floor(Math.random() * 4) + 2;

  const getWalkingMinutes = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceMeters = R * c * 1000;

    return Math.round(distanceMeters / 83);
  };

  const renderStars = (stars: number) => {
    const fullStars = Math.floor(stars);
    const starsArray = Array.from({ length: 5 }, (_, i) =>
      i < fullStars ? 'active' : 'inactive',
    );

    return (
      <div className={styles['popup-stars']}>
        <span className={styles['popup-rate']}>{fullStars}/5</span>
        {starsArray.map((status, idx) => (
          <span
            key={idx}
            className={`${styles['popup-stars__star']} ${status === 'active' ? styles['popup-stars__star--active'] : styles['popup-stars__star--inactive']}`}
          />
        ))}
      </div>
    );
  };

  const generateRandomHouseNumber = (existingAddress: string) => {
    const matches = existingAddress.match(/\d+/);
    const existingNumber = matches ? Number(matches[0]) : null;
    let randomNumber = Math.floor(Math.random() * 200) + 1;

    while (randomNumber === existingNumber) {
      randomNumber = Math.floor(Math.random() * 200) + 1;
    }

    return randomNumber;
  };

  useEffect(() => {
    if (!apartmentLat || !apartmentLng) {
      return;
    }

    const fetchPOIs = async () => {
      const query = `
        [out:json][timeout:25];
        (
          node["amenity"="restaurant"](around:${radius},${apartmentLat},${apartmentLng});
          node["amenity"="cafe"](around:${radius},${apartmentLat},${apartmentLng});
          node["amenity"="bar"](around:${radius},${apartmentLat},${apartmentLng});
          node["amenity"="school"](around:${radius},${apartmentLat},${apartmentLng});
          node["amenity"="university"](around:${radius},${apartmentLat},${apartmentLng});
          node["amenity"="hospital"](around:${radius},${apartmentLat},${apartmentLng});
          node["healthcare"="hospital"](around:${radius},${apartmentLat},${apartmentLng});
          node["amenity"="clinic"](around:${radius},${apartmentLat},${apartmentLng});
          node["healthcare"="clinic"](around:${radius},${apartmentLat},${apartmentLng});
          node["leisure"="park"](around:${radius},${apartmentLat},${apartmentLng});
          node["leisure"="garden"](around:${radius},${apartmentLat},${apartmentLng});
          node["leisure"="nature_reserve"](around:${radius},${apartmentLat},${apartmentLng});
          node["landuse"="forest"](around:${radius},${apartmentLat},${apartmentLng});
          node["leisure"="recreation_ground"](around:${radius},${apartmentLat},${apartmentLng});
          node["leisure"="grass"](around:${radius},${apartmentLat},${apartmentLng});
          node["leisure"="fitness_centre"](around:${radius},${apartmentLat},${apartmentLng});
          node["leisure"="gym"](around:${radius},${apartmentLat},${apartmentLng});
          node["sport"="gym"](around:${radius},${apartmentLat},${apartmentLng});
          node["sport"="fitness"](around:${radius},${apartmentLat},${apartmentLng});
          node["amenity"="bus_station"](around:${radius},${apartmentLat},${apartmentLng});
          node["highway"="bus_stop"](around:${radius},${apartmentLat},${apartmentLng});
          node["railway"="station"](around:${radius},${apartmentLat},${apartmentLng});
          node["railway"="tram_stop"](around:${radius},${apartmentLat},${apartmentLng});
          node["railway"="halt"](around:${radius},${apartmentLat},${apartmentLng});
          node["public_transport"="platform"](around:${radius},${apartmentLat},${apartmentLng});
          node["shop"="supermarket"](around:${radius},${apartmentLat},${apartmentLng});
          node["shop"](around:${radius},${apartmentLat},${apartmentLng});
          node["amenity"="parking"](around:${radius},${apartmentLat},${apartmentLng});
          node["parking"](around:${radius},${apartmentLat},${apartmentLng});
        );
        out center;
      `;

      try {
        const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        const data = await response.json();
        const poisData: POI[] = data.elements.map((el: OverpassElement) => {
          const street = apartmentAddress[currentLang]
            .replace(/\d+/, '')
            .trim();
          const address =
            el.tags['addr:street']?.trim() ||
            `${street} ${generateRandomHouseNumber(apartmentAddress[currentLang])}`;

          return {
            id: el.id,
            name:
              el.tags.name ||
              t(
                `apartment_page.whatsNearby.mapMarkers.${mapOverpassToFilterType(el)}`,
              ),
            type: mapOverpassToFilterType(el),
            lat: el.lat || el.center?.lat,
            lng: el.lon || el.center?.lon,
            address,
            stars: el.tags.stars ? Number(el.tags.stars) : getRandomStars(),
          };
        });

        setPois(poisData);
      } catch (err) {
        console.error('Failed to fetch POIs', err);
      }
    };

    fetchPOIs();
  }, [apartmentLat, apartmentLng, radius, apartmentAddress, currentLang, t]);

  const handleExpand = () => setIsExpanded(prev => !prev);

  const ResizeMap = ({ expanded }: { expanded: boolean }) => {
    const map = useMap();

    useEffect(() => {
      if (!map) {
        return;
      }

      map.invalidateSize();
      const timeout = setTimeout(() => map.invalidateSize(), 550);

      return () => clearTimeout(timeout);
    }, [expanded, map]);

    return null;
  };

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    mapRef.current.invalidateSize();
    const timeout = setTimeout(() => mapRef.current?.invalidateSize(), 600);

    return () => clearTimeout(timeout);
  }, [isExpanded]);

  return (
    <section className={styles.whatsNearby} id="map">
      <h3 className={styles.whatsNearby__title}>
        {t('apartment_page.whatsNearby.title')}
      </h3>
      <div className={styles.whatsNearby__filters}>
        {filters.map(category => (
          <button
            key={category.type}
            className={`${styles.whatsNearby__filterButton} ${activeCategories.includes(category.type) ? styles['whatsNearby__filterButton--active'] : ''}`}
            onClick={() =>
              setActiveCategories(prev =>
                prev.includes(category.type)
                  ? prev.filter(c => c !== category.type)
                  : [...prev, category.type],
              )
            }
          >
            <img src={category.icon} alt={category.name} />
            {category.name}
          </button>
        ))}
      </div>

      <div className={styles.whatsNearby_container}>
        {isExpanded && <div className={styles.overlay}></div>}
        <div
          className={`${styles['map-wrapper']} ${isExpanded ? styles['map-wrapper--expanded'] : ''}`}
        >
          <MapContainer
            center={[apartmentLat, apartmentLng]}
            zoom={16}
            className={styles['map-container']}
            ref={mapRef}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {pois
              .filter(poi => activeCategories.includes(poi.type))
              .map(poi => {
                const distance = getWalkingMinutes(
                  apartmentLat,
                  apartmentLng,
                  poi.lat,
                  poi.lng,
                );
                const filter = filters.find(f => f.type === poi.type);

                return (
                  <Marker
                    key={poi.id}
                    position={[poi.lat, poi.lng]}
                    icon={getDivIcon(
                      filter?.icon || shopIcon,
                      filter?.activeIcon || shopIconActive,
                      poi.id === activePoiId,
                    )}
                    eventHandlers={{
                      click: () =>
                        setActivePoiId(prev =>
                          prev === poi.id ? null : poi.id,
                        ),
                    }}
                  >
                    <Popup>
                      <strong className={styles['popup-name']}>
                        {poi.name}
                      </strong>
                      <span className={styles['popup-address']}>
                        {poi.address}
                      </span>
                      {renderStars(poi.stars)}
                      <span className={styles['popup-distance']}>
                        {distance === 0 ? 1 : distance}
                        {t('apartment_page.whatsNearby.distance')}
                      </span>
                    </Popup>
                  </Marker>
                );
              })}
            <Marker
              position={[apartmentLat, apartmentLng]}
              icon={getApartmentIcon()}
            >
              <Popup>{t('apartment_page.whatsNearby.apartment')}</Popup>
            </Marker>

            <button
              className={`${styles['map-wrapper__button']} ${styles['map-wrapper__button--mapSize']}`}
              onClick={handleExpand}
            >
              <span
                className={`${styles['map-wrapper__buttonIcon']} ${styles['map-wrapper__buttonIcon--expand']}`}
              ></span>
              {isExpanded
                ? t('apartments_map.collapse')
                : t('apartments_map.expand')}
            </button>

            <ResizeMap expanded={isExpanded} />
          </MapContainer>
        </div>
      </div>
    </section>
  );
};
