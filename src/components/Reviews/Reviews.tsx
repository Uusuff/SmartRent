/* eslint-disable max-len */
import styles from './Reviews.module.scss';
import review1 from '../../assets/images/reviews/review1.png';
import review2 from '../../assets/images/reviews/review2.png';
import review3 from '../../assets/images/reviews/review3.png';
import review4 from '../../assets/images/reviews/review4.png';
import review5 from '../../assets/images/reviews/review5.png';
import { useTranslation } from 'react-i18next';

export const reviews = [
  {
    id: 1,
    img: review1,
    name: 'apartment_page.reviews.review_1.name',
    country: 'apartment_page.reviews.review_1.country',
    date: 'apartment_page.reviews.review_1.date',
    text: 'apartment_page.reviews.review_1.text',
    stars: 5,
  },
  {
    id: 2,
    img: review2,
    name: 'apartment_page.reviews.review_2.name',
    country: 'apartment_page.reviews.review_2.country',
    date: 'apartment_page.reviews.review_2.date',
    text: 'apartment_page.reviews.review_2.text',
    stars: 4,
  },
  {
    id: 3,
    img: review3,
    name: 'apartment_page.reviews.review_3.name',
    country: 'apartment_page.reviews.review_3.country',
    date: 'apartment_page.reviews.review_3.date',
    text: 'apartment_page.reviews.review_3.text',
    stars: 5,
  },
  {
    id: 4,
    img: review4,
    name: 'apartment_page.reviews.review_4.name',
    country: 'apartment_page.reviews.review_4.country',
    date: 'apartment_page.reviews.review_4.date',
    text: 'apartment_page.reviews.review_4.text',
    stars: 4,
  },
  {
    id: 5,
    img: review5,
    name: 'apartment_page.reviews.review_5.name',
    country: 'apartment_page.reviews.review_5.country',
    date: 'apartment_page.reviews.review_5.date',
    text: 'apartment_page.reviews.review_5.text',
    stars: 5,
  },
];

export const Reviews = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.reviews}>
      <h3 className={styles.reviews__title}>
        {t('apartment_page.reviews.title')}
      </h3>

      <div className={styles.reviews__blocks}>
        {reviews.map(a => (
          <article className={styles.reviews__block} key={a.id}>
            <div className={styles.reviews__head}>
              <img src={a.img} alt={t('apartment_page.reviews.photoAlt')} />

              <div>
                <p className={styles.reviews__name}>{t(a.name)}</p>
                <p className={styles.reviews__location}>{t(a.country)}</p>
              </div>
            </div>

            <div className={styles.reviews__rate}>
              <span className={styles.reviews__stars}>
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    key={star}
                    className={
                      star <= a.stars
                        ? styles['reviews__star--active']
                        : styles.reviews__star
                    }
                  ></span>
                ))}
              </span>
              <p className={styles.reviews__date}>{t(a.date)}</p>
            </div>

            <p className={styles.reviews__description}>{t(a.text)}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
