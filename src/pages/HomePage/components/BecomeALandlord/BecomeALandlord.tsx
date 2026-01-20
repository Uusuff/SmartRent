import { useTranslation } from 'react-i18next';
import imgBAL from '../../../../assets/images/HomePageImg/becomeALandlord.png';
import styles from './BecomeALandlord.module.scss';

export const BecomeALandlord: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.become_a_landlord}>
      <div className={styles.become_a_landlord__content}>
        <h2 className={styles.content_title}>
          {t('homePage.becomeALandlord.title')}
        </h2>
        <p className={styles.content_description}>
          {t('homePage.becomeALandlord.description')}
        </p>
        <button className={styles.content_button}>
          {t('homePage.becomeALandlord.buttonText')}
        </button>
      </div>
      <div className={styles.become_a_landlord__image_wrapper}>
        <img src={imgBAL} alt="Become a Landlord" />
      </div>
    </div>
  );
};
