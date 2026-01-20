import { useTranslation } from 'react-i18next';
import styles from './HowItWorks.module.scss';

export const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.how_it_works}>
      <h2 className={styles.how_it_works__title}>
        {t('homePage.howItWorks.title')}
      </h2>
      <div className={styles.how_it_works__steps}>
        <div className={styles.step}>
          <h2 className={styles.step_number}>
            {t('homePage.howItWorks.step1.number')}
          </h2>
          <h3 className={styles.step_title}>
            {t('homePage.howItWorks.step1.title')}
          </h3>
          <p className={styles.step_description}>
            {t('homePage.howItWorks.step1.description')}
          </p>
        </div>
        <div className={styles.step}>
          <h2 className={styles.step_number}>
            {t('homePage.howItWorks.step2.number')}
          </h2>
          <h3 className={styles.step_title}>
            {t('homePage.howItWorks.step2.title')}
          </h3>
          <p className={styles.step_description}>
            {t('homePage.howItWorks.step2.description')}
          </p>
        </div>
        <div className={styles.step}>
          <h2 className={styles.step_number}>
            {t('homePage.howItWorks.step3.number')}
          </h2>
          <h3 className={styles.step_title}>
            {t('homePage.howItWorks.step3.title')}
          </h3>
          <p className={styles.step_description}>
            {t('homePage.howItWorks.step3.description')}
          </p>
        </div>
        <div className={styles.step}>
          <h2 className={styles.step_number}>
            {t('homePage.howItWorks.step4.number')}
          </h2>
          <h3 className={styles.step_title}>
            {t('homePage.howItWorks.step4.title')}
          </h3>
          <p className={styles.step_description}>
            {t('homePage.howItWorks.step4.description')}
          </p>
        </div>
      </div>
    </div>
  );
};
