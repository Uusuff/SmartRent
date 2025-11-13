/* eslint-disable max-len */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './apartmentMap.module.scss';
const apartments = [
  { id: 1, lat: 50.4501, lng: 30.5234, price: '₴15 000' },
  { id: 2, lat: 50.4547, lng: 30.5166, price: '₴20 000' },
  { id: 3, lat: 50.458, lng: 30.52, price: '₴18 500' },
];

const createPriceIcon = price =>
  L.divIcon({
    className: styles.priceMarker,
    html: `<div class="${styles.priceMarkerContent}">${price}</div>`,
    iconSize: [60, 30],
  });

export default function ApartmentMap() {
  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        center={[50.4501, 30.5234]}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.mapContainer}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {apartments.map(apt => (
          <Marker
            key={apt.id}
            position={[apt.lat, apt.lng]}
            icon={createPriceIcon(apt.price)}
          >
            <Popup>
              <div className={styles.popup}>
                <span className={styles.popupPrice}>{apt.price}</span>
                <span>2-кімнатна квартира</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
