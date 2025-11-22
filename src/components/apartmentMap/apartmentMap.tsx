import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './ApartmentMap.module.scss';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { useApartments } from '../../contexts/ApartmentsContext';
import { Loader } from '../Loader/Loader';
import { Apartment } from '../../types/Apartment';
import { ApartmentCard } from '../apartmentCard/apartmentCard';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../../contexts/CurrencyContext';
import { convertPrice } from '../../shared/utils/convertPrice';
import { conversionRates } from '../../shared/utils/currencyUtils';

L.Icon.Default.mergeOptions({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
});

type Props = {
  setIsMapOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const ApartmentMap: React.FC<Props> = ({ setIsMapOpened }) => {
  const { t } = useTranslation();
  const { apartments, loading } = useApartments();
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoom, setZoom] = useState(13);
  const [hoverApartment, setHoverApartment] = useState<Apartment | null>(null);
  const hoverTimeout = React.useRef<NodeJS.Timeout | null>(null);
  const [activeApartment, setActiveApartment] = useState<Apartment | null>(
    null,
  );
  const { currency } = useCurrency();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const card = document.getElementById('clicked-apartment-card');

      if (card && !card.contains(e.target as Node)) {
        setActiveApartment(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleExpand = () => setIsExpanded(prev => !prev);

  const ResizeMap = ({ expanded }: { expanded: boolean }) => {
    const map = useMap();

    useEffect(() => {
      setTimeout(() => map.invalidateSize(), 300);

      const onZoom = () => setZoom(map.getZoom());

      map.on('zoomend', onZoom);
    }, [expanded, map]);

    return null;
  };

  const createPriceIcon = (price: number) => {
    const priceInUsd = price / conversionRates[currency];
    const isCheap = priceInUsd < 500;
    const width = isCheap ? 90 : 92;
    const height = isCheap ? 36 : 40;
    const zoomThreshold = isCheap ? 15 : 14;
    const showPrice = zoom >= zoomThreshold;
    const { label } = convertPrice(price, 'USD', currency);
    const htmlContent = showPrice ? label : '';

    return L.divIcon({
      className: 'price-marker',
      html: `<div class="price-marker-content">${htmlContent}</div>`,
      iconSize: [width, height],
      iconAnchor: [width / 2, height / 2],
    });
  };

  if (loading) {
    return <Loader />;
  }

  const geocodedApartments = apartments.filter(
    apt => apt.lat !== null && apt.lng !== null,
  );

  return (
    <div className={styles.pageContainer}>
      {isExpanded && <div className={styles.overlay}></div>}

      <div
        className={`${styles['map-wrapper']} ${
          isExpanded ? styles['map-wrapper--expanded'] : ''
        }`}
      >
        <MapContainer
          center={[50.4501, 30.5234]}
          zoom={13}
          className={styles['map-container']}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {geocodedApartments.map(apt => (
            <Marker
              key={apt.id}
              position={[apt.lat!, apt.lng!]}
              icon={createPriceIcon(apt.price)}
              eventHandlers={{
                mouseover: () => {
                  if (hoverTimeout.current) {
                    clearTimeout(hoverTimeout.current);
                  }

                  setHoverApartment(apt);
                },
                mouseout: () => {
                  hoverTimeout.current = setTimeout(() => {
                    setHoverApartment(null);
                  }, 200);
                },
                click: e => {
                  e.originalEvent.stopPropagation();
                  setActiveApartment(apt);
                  setHoverApartment(null);
                },
              }}
            />
          ))}

          <button
            className={`${styles['map-wrapper__button']} ${styles['map-wrapper__button--hideMap']}`}
            onClick={() => setIsMapOpened(prev => !prev)}
          >
            <span
              className={`${styles['map-wrapper__buttonIcon']} ${styles['map-wrapper__buttonIcon--hide']}`}
            ></span>
            {t('apartments_map.hide')}
          </button>

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

          {hoverApartment && !activeApartment && (
            <ApartmentCard
              apartment={hoverApartment}
              isMapOpened={true}
              isCardOnMap={true}
              persistent={false}
              setActiveApartment={() => {}}
            />
          )}

          {activeApartment && (
            <ApartmentCard
              apartment={activeApartment}
              isMapOpened={true}
              isCardOnMap={true}
              persistent={true}
              setActiveApartment={setActiveApartment}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default ApartmentMap;
