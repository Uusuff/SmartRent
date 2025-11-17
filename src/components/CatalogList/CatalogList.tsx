import { Apartment } from '../../types/Apartment';
import { ApartmentCard } from '../apartmentCard/apartmentCard';
import styles from './CatalogList.module.scss';

type Props = {
  apartments: Apartment[];
  isMapOpened: boolean;
};

export const CatalogList: React.FC<Props> = ({ apartments, isMapOpened }) => {
  return (
    <div
      className={`${styles.catalogList} ${isMapOpened && styles[`catalogList--mapOpened`]}`}
    >
      <ul
        className={`${styles.catalogList__content} ${isMapOpened && styles[`catalogList__content--mapOpened`]}`}
      >
        {apartments.map((apartment, i) => {
          return (
            <ApartmentCard
              key={i}
              apartment={apartment}
              isMapOpened={isMapOpened}
            />
          );
        })}
      </ul>
    </div>
  );
};
