import styles from './HowItWorks.module.scss';

export const HowItWorks = () => {
  return (
    <div className={styles.how_it_works}>
      <h2 className={styles.how_it_works__title}>How It Works</h2>
      <div className={styles.how_it_works__steps}>
        <div className={styles.step}>
          <h2 className={styles.step_number}>1</h2>
          <h3 className={styles.step_title}>Find an apartment</h3>
          <p className={styles.step_description}>
            Search by location, price, type, or amenities to find the perfect
            rental
          </p>
        </div>
        <div className={styles.step}>
          <h2 className={styles.step_number}>2</h2>
          <h3 className={styles.step_title}>Contact the owner</h3>
          <p className={styles.step_description}>
            Message landlords directly through SmartRent’s secure chat platform
          </p>
        </div>
        <div className={styles.step}>
          <h2 className={styles.step_number}>3</h2>
          <h3 className={styles.step_title}>Schedule a viewing</h3>
          <p className={styles.step_description}>
            Pick a convenient date and time to see the apartment in person
            easily
          </p>
        </div>
        <div className={styles.step}>
          <h2 className={styles.step_number}>4</h2>
          <h3 className={styles.step_title}>Secure your payment</h3>
          <p className={styles.step_description}>
            Confirm the rental and make safe, seamless payments through the
            platform
          </p>
        </div>
      </div>
    </div>
  );
};
