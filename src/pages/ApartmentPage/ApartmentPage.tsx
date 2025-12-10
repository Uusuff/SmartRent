/* eslint-disable max-len */
import { useState } from 'react';
import { ApartmentInfo } from '../../components/ApartmentInfo/apartmentInfo';
import { ApartmentSwiper } from '../../components/apartmentSwiper/apartmentSwiper';
import { ApplyToRent } from '../../components/applyToRent/applyToRent';
import { Loader } from '../../components/Loader/Loader';
import { Reviews } from '../../components/Reviews/Reviews';
import { WhatsNearby } from '../../components/whats-nearby/whats-nearby';
import { useApartments } from '../../contexts/ApartmentsContext';
import styles from './ApartmentPage.module.scss';
import { NavLink, useParams } from 'react-router-dom';
import type { Swiper as SwiperClass } from 'swiper';
import { useTranslation } from 'react-i18next';

export const ApartmentPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { apartments, loading } = useApartments();
  const apartment = id
    ? apartments.find((x) => {
      return x.id === Number(id);
    })
    : undefined;
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );

  const handleThumbClick = (index: number) => {
    setActiveIndex(index);
    swiperInstance?.slideTo(index);
  };

  if (loading) {
    return <Loader />;
  }

  if (!apartment) {
    return <p>{t('errors.pageNotFound')}</p>;
  }

  return (
    <section className={styles.apartmentPage}>
      {!loading && (
        <div className={styles.apartmentPage__content}>
          <NavLink
            to="/apartments"
            className={`${styles[`apartmentPage__link-back`]}`}
          >
            {t('apartment_page.allProperties')}
          </NavLink>

          <ApartmentSwiper
            isMapOpened={false}
            persistent={false}
            apartment={apartment}
            setActiveApartment={() => {}}
            isDetailsPage={true}
            activeIndex={activeIndex}
            onSlideChange={setActiveIndex}
            onSwiperInit={(swiper: SwiperClass) => setSwiperInstance(swiper)}
          />

          <div className={styles.apartmentPage__carussel}>
            {apartment.images.map((photo, index) => (
              <img
                key={photo}
                src={photo}
                onClick={() => handleThumbClick(index)}
                className={
                  activeIndex === index
                    ? `${styles.apartmentPage__carusselPhoto} ${styles[`apartmentPage__carusselPhoto--active`]}`
                    : styles.apartmentPage__carusselPhoto
                }
                alt="preview"
              />
            ))}
          </div>

          <ApplyToRent apartment={apartment} />

          <nav className={`${styles.apartmentPage__nav}`}>
            <div className={`${styles.apartmentPage__navItem}`}>
              <span
                className={`${styles.apartmentPage__navIcon} ${styles[`apartmentPage__navIcon--video`]}`}
              ></span>
              <a href="" className={`${styles.apartmentPage__navLink}`}>
                {t('apartment_page.nav.video')}
              </a>
            </div>

            <div className={`${styles.apartmentPage__navItem}`}>
              <span
                className={`${styles.apartmentPage__navIcon} ${styles[`apartmentPage__navIcon--floor`]}`}
              ></span>
              <a href="" className={`${styles.apartmentPage__navLink}`}>
                {t('apartment_page.nav.floor')}
              </a>
            </div>

            <div className={`${styles.apartmentPage__navItem}`}>
              <span
                className={`${styles.apartmentPage__navIcon} ${styles[`apartmentPage__navIcon--map`]}`}
              ></span>
              <a
                href="#map"
                className={`${styles.apartmentPage__navLink}`}
                onClick={(e) => {
                  e.preventDefault();
                  const mapElement = document.getElementById('map');

                  mapElement?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('apartment_page.nav.map')}
              </a>
            </div>
          </nav>

          <ApartmentInfo apartment={apartment} />

          <article
            className={`${styles.apartmentPage__qa} ${styles[`apartmentPage__qa--guarantees`]}`}
          >
            <h3
              className={`${styles.apartmentPage__qaTitle} ${styles[`apartmentPage__qaTitle--guarantees`]}`}
            >
              {t('apartment_page.guarantees.title')}
            </h3>

            <div
              className={`${styles.apartmentPage__qaContainer} ${styles[`apartmentPage__qaContainer--guarantees`]}`}
            >
              <details className={styles.apartmentPage__qaItem}>
                <summary
                  className={`${styles.apartmentPage__question} ${styles[`apartmentPage__question--guarantees`]}`}
                >
                  <span
                    className={`${styles.apartmentPage__questionIcon} ${styles[`apartmentPage__questionIcon--deposit`]}`}
                  ></span>
                  {t('apartment_page.guarantees.deposit.question')}
                </summary>

                <div className={styles.apartmentPage__answerWrapper}>
                  <p
                    className={`${styles.apartmentPage__answer} ${styles[`apartmentPage__answer--guarantees`]}`}
                  >
                    {t('apartment_page.guarantees.deposit.answer')}
                  </p>
                </div>
              </details>

              <details className={styles.apartmentPage__qaItem}>
                <summary
                  className={`${styles.apartmentPage__question} ${styles[`apartmentPage__question--guarantees`]}`}
                >
                  <span
                    className={`${styles.apartmentPage__questionIcon} ${styles[`apartmentPage__questionIcon--property`]}`}
                  ></span>
                  {t('apartment_page.guarantees.verified.question')}
                </summary>

                <div className={styles.apartmentPage__answerWrapper}>
                  <p
                    className={`${styles.apartmentPage__answer} ${styles[`apartmentPage__answer--guarantees`]}`}
                  >
                    {t('apartment_page.guarantees.verified.answer')}
                  </p>
                </div>
              </details>

              <details className={styles.apartmentPage__qaItem}>
                <summary
                  className={`${styles.apartmentPage__question} ${styles[`apartmentPage__question--guarantees`]}`}
                >
                  <span
                    className={`${styles.apartmentPage__questionIcon} ${styles[`apartmentPage__questionIcon--verified`]}`}
                  ></span>
                  {t('apartment_page.guarantees.landlord.question')}
                </summary>

                <div className={styles.apartmentPage__answerWrapper}>
                  <p
                    className={`${styles.apartmentPage__answer} ${styles[`apartmentPage__answer--guarantees`]}`}
                  >
                    {t('apartment_page.guarantees.landlord.answer')}
                  </p>
                </div>
              </details>
            </div>
          </article>

          <div className={styles.apartmentPage__qa}>
            <h3 className={styles.apartmentPage__qaTitle}>
              {t('apartment_page.qa.title')}
            </h3>

            <div className={styles.apartmentPage__qaContainer}>
              <details className={styles.apartmentPage__qaItem}>
                <summary className={styles.apartmentPage__question}>
                  {' '}
                  {t('apartment_page.qa.howToRent.question')}
                </summary>
                <p className={styles.apartmentPage__answer}>
                  {t('apartment_page.qa.howToRent.answer')}
                </p>
              </details>

              <details className={styles.apartmentPage__qaItem}>
                <summary className={styles.apartmentPage__question}>
                  {t('apartment_page.qa.view.question')}
                </summary>
                <p className={styles.apartmentPage__answer}>
                  {t('apartment_page.qa.view.answer')}
                </p>
              </details>

              <details className={styles.apartmentPage__qaItem}>
                <summary className={styles.apartmentPage__question}>
                  {t('apartment_page.qa.contact.question')}
                </summary>
                <p className={styles.apartmentPage__answer}>
                  {t('apartment_page.qa.contact.answer')}
                </p>
              </details>

              <details className={styles.apartmentPage__qaItem}>
                <summary className={styles.apartmentPage__question}>
                  {t('apartment_page.qa.repair.question')}
                </summary>
                <p className={styles.apartmentPage__answer}>
                  {t('apartment_page.qa.repair.answer')}
                </p>
              </details>

              <details className={styles.apartmentPage__qaItem}>
                <summary className={styles.apartmentPage__question}>
                  {t('apartment_page.qa.confirmation.question')}
                </summary>
                <p className={styles.apartmentPage__answer}>
                  {t('apartment_page.qa.confirmation.answer')}
                </p>
              </details>
            </div>
          </div>

          <Reviews />
          <WhatsNearby
            apartmentLat={apartment.lat}
            apartmentLng={apartment.lng}
            apartmentAddress={apartment.address}
          />
        </div>
      )}
    </section>
  );
};
