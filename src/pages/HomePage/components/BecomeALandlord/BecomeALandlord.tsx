import imgBAL from '../../../../assets/images/HomePageImg/becomeALandlord.png';
import styles from './BecomeALandlord.module.scss';

export const BecomeALandlord: React.FC = () => {
  return (
    <div className={styles.become_a_landlord}>
      <div className={styles.become_a_landlord__content}>
        <h2 className={styles.content_title}>Become a Landlord</h2>
        <p className={styles.content_description}>
          Join our community of trusted landlords and start earning steady
          income without the hassle. We help you find reliable tenants, manage
          contracts, and handle everything online. Rent out your property with
          confidence — simple, safe, and stress-free.
        </p>
        <button className={styles.content_button}>Find out more</button>
      </div>
      <div className={styles.become_a_landlord__image_wrapper}>
        <img src={imgBAL} alt="Become a Landlord" />
      </div>
    </div>
  );
};
