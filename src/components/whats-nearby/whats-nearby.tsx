/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './whats-nearby.module.scss';
import shopIcon from '../../assets/icons/mapIcons/shops.svg';
import restaurantIcon from '../../assets/icons/mapIcons/restaurants.svg';
import gymIcon from '../../assets/icons/mapIcons/gym.svg';
import supermarketIcon from '../../assets/icons/mapIcons/supermarkets.svg';
import transportIcon from '../../assets/icons/mapIcons/transport.svg';
import schoolIcon from '../../assets/icons/mapIcons/school.svg';
import barIcon from '../../assets/icons/mapIcons/bars.svg';
import hospitalIcon from '../../assets/icons/mapIcons/hospital.svg';
import parkIcon from '../../assets/icons/mapIcons/parks.svg';
import parkingIcon from '../../assets/icons/mapIcons/parking-lots.svg';
import home from '../../assets/icons/mapIcons/home.svg';
import { useTranslation } from 'react-i18next';

export type POI = {
  id: number;
  name: string;
  type: string;
  lat: number;
  lng: number;
  address?: string;
  stars?: number;
};

interface WhatsNearbyProps {
  apartmentLat: number;
  apartmentLng: number;
  radius?: number;
}

export const WhatsNearby: React.FC<WhatsNearbyProps> = ({
  apartmentLat,
  apartmentLng,
  radius = 500,
}) => {
  const { t } = useTranslation();
  const [pois, setPois] = useState<POI[]>([]);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const filters = [
    {
      name: t('apartment_page.whatsNearby.filters.supermarkets'),
      type: 'supermarket',
      icon: supermarketIcon,
    },
    {
      name: t('apartment_page.whatsNearby.filters.transport'),
      type: 'transport',
      icon: transportIcon,
    },
    {
      name: t('apartment_page.whatsNearby.filters.gyms'),
      type: 'gym',
      icon: gymIcon,
    },
    {
      name: t('apartment_page.whatsNearby.filters.restaurants'),
      type: 'restaurant',
      icon: restaurantIcon,
    },
    {
      name: t('apartment_page.whatsNearby.filters.schools'),
      type: 'school',
      icon: schoolIcon,
    },
    {
      name: t('apartment_page.whatsNearby.filters.shops'),
      type: 'shop',
      icon: shopIcon,
    },
    {
      name: t('apartment_page.whatsNearby.filters.bars'),
      type: 'bar',
      icon: barIcon,
    },
    {
      name: t('apartment_page.whatsNearby.filters.hospitals'),
      type: 'hospital',
      icon: hospitalIcon,
    },
    {
      name: t('apartment_page.whatsNearby.filters.parks'),
      type: 'park',
      icon: parkIcon,
    },
    {
      name: t('apartment_page.whatsNearby.filters.parking'),
      type: 'parking',
      icon: parkingIcon,
    },
  ];

  const getDivIcon = (iconUrl: string) => {
    return L.divIcon({
      className: '',
      html: `<div style="
        width: 40px;
        height: 40px;
        background-color: #EDF2F1;
        background-image: url(${iconUrl});
        background-size: 16px 16px;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
        border: 1px solid #165A43;
        box-shadow: 0 0 3px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });
  };

  const getApartmentIcon = () => {
    return L.divIcon({
      className: '',
      html: `<div style="
        width: 60px;
        height: 65px;
        background-image: url(${home});
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
      "></div>`,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -50],
    });
  };

  const mapOverpassToFilterType = (el: any) => {
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

    if (el.tags.amenity === 'school') {
      return 'school';
    }

    if (el.tags.amenity === 'hospital') {
      return 'hospital';
    }

    if (el.tags.amenity === 'parking') {
      return 'parking';
    }

    if (el.tags.leisure === 'park') {
      return 'park';
    }

    if (el.tags.leisure === 'fitness_centre') {
      return 'gym';
    }

    if (el.tags.amenity === 'bus_station') {
      return 'transport';
    }

    return 'shop';
  };

  useEffect(() => {
    if (apartmentLat && apartmentLng) {
      const fetchPOIs = async () => {
        const query = `
          [out:json];
          (
            node["amenity"="restaurant"](around:${radius},${apartmentLat},${apartmentLng});
            node["amenity"="cafe"](around:${radius},${apartmentLat},${apartmentLng});
            node["amenity"="bar"](around:${radius},${apartmentLat},${apartmentLng});
            node["amenity"="school"](around:${radius},${apartmentLat},${apartmentLng});
            node["amenity"="hospital"](around:${radius},${apartmentLat},${apartmentLng});
            node["leisure"="park"](around:${radius},${apartmentLat},${apartmentLng});
            node["shop"](around:${radius},${apartmentLat},${apartmentLng});
            node["amenity"="parking"](around:${radius},${apartmentLat},${apartmentLng});
            node["leisure"="fitness_centre"](around:${radius},${apartmentLat},${apartmentLng});
            node["amenity"="bus_station"](around:${radius},${apartmentLat},${apartmentLng});
          );
          out;
        `;
        const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          const poisData: POI[] = data.elements.map((el: any) => {
            const poi: POI = {
              id: el.id,
              name: el.tags.name || 'Unknown',
              type: mapOverpassToFilterType(el),
              lat: el.lat,
              lng: el.lon,
            };
            if (el.tags['addr:street'] || el.tags['addr:housenumber']) {
              poi.address = [
                el.tags['addr:street'],
                el.tags['addr:housenumber'],
              ]
                .filter(Boolean)
                .join(' ');
            }
            if (el.tags.stars) {
              poi.stars = Number(el.tags.stars);
            }
            return poi;
          });
          setPois(poisData);
        } catch (err) {
          console.error('Failed to fetch POIs', err);
        }
      };

      fetchPOIs();
    }
  }, [apartmentLat, apartmentLng, radius]);

  const handleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  const ResizeMap = ({ expanded }: { expanded: boolean }) => {
    const map = useMap();

    useEffect(() => {
      setTimeout(() => {
        map.invalidateSize();
      }, 300);
    }, [expanded, map]);

    return null;
  };

  return (
    <section className={styles.whatsNearby}>
      <h3 className={styles.whatsNearby__title}>
        {t('apartment_page.whatsNearby.title')}
      </h3>

      <div className={styles.whatsNearby__filters}>
        {filters.map(category => {
          return (
            <button
              key={category.type}
              className={`${styles.whatsNearby__filterButton} ${activeCategories.includes(category.type) ? styles['whatsNearby__filterButton--active'] : ''}`}
              onClick={() => {
                if (activeCategories.includes(category.type)) {
                  setActiveCategories(prev =>
                    prev.filter(c => c !== category.type),
                  );
                } else {
                  setActiveCategories(prev => [...prev, category.type]);
                }
              }}
            >
              <img src={category.icon} alt={category.name} />
              {category.name}
            </button>
          );
        })}
      </div>

      <MapContainer
        center={[apartmentLat, apartmentLng]}
        zoom={16}
        style={{ width: '100%', height: '500px' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {pois
          .filter(poi => {
            if (activeCategories.includes(poi.type)) {
              return true;
            } else {
              return false;
            }
          })
          .map(poi => {
            return (
              <Marker
                key={poi.id}
                position={[poi.lat, poi.lng]}
                icon={getDivIcon(
                  filters.find(f => f.type === poi.type)?.icon || shopIcon,
                )}
              >
                <Popup>
                  <strong>{poi.name}</strong>
                  <br />
                  {poi.address && <span>{poi.address}</span>}
                  {poi.stars && <span> ⭐ {poi.stars}</span>}
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
          className={`${styles['whats-nearby__button']} ${styles['map-wrapper__button--mapSize']}`}
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
    </section>
  );
};
