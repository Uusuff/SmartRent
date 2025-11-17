import { useTranslation } from 'react-i18next';
import facebookIcon from '../../assets/icons/FooterIcons/Facebook.png';
import instagramIcon from '../../assets/icons/FooterIcons/Instagram.png';
import tikTokIcon from '../../assets/icons/FooterIcons/TikTok.png';
import youTubeIcon from '../../assets/icons/FooterIcons/YouTube.png';
import backToTop from '../../assets/icons/FooterIcons/BackToTop.png';
import styles from './Footer.module.scss';
import { Logo } from '../../components/logo/Logo';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.top__social_media}>
          <Logo />
          <h5 className={styles.social_media__title}>
            {t('footer.footer_top_social_media.subtitle')}
          </h5>
          <div className={styles.social_media__icons}>
            <img src={facebookIcon} alt="Facebook icon" />
            <img src={instagramIcon} alt="Instagram icon" />
            <img src={tikTokIcon} alt="TikTok icon" />
            <img src={youTubeIcon} alt="YouTube icon" />
          </div>
        </div>
        <div className={styles.top__info}>
          <div className={styles.info__item}>
            <h4 className={styles.item__title}>
              {t('footer.footer_top_company.title')}
            </h4>
            <ul className={styles.item__list}>
              <li className={styles.list__element}>
                {t('footer.footer_top_company.aboutUs')}
              </li>
              <li className={styles.list__element}>
                {t('footer.footer_top_company.howItWorks')}
              </li>
              <li className={styles.list__element}>
                {t('footer.footer_top_company.blog')}
              </li>
              <li className={styles.list__element}>
                {t('footer.footer_top_company.contactUs')}
              </li>
            </ul>
          </div>
          <div className={styles.info__item}>
            <h4 className={styles.item__title}>
              {t('footer.footer_top_for_landlords.title')}
            </h4>
            <ul className={styles.item__list}>
              <li className={styles.list__element}>
                {t('footer.footer_top_for_landlords.listYourProperty')}
              </li>
              <li className={styles.list__element}>
                {t('footer.footer_top_for_landlords.pricingPlans')}
              </li>
              <li className={styles.list__element}>
                {t('footer.footer_top_for_landlords.landlordSupport')}
              </li>
              <li className={styles.list__element}>
                {t('footer.footer_top_for_landlords.safetyAndVerification')}
              </li>
            </ul>
          </div>
          <div className={styles.info__item}>
            <h4 className={styles.item__title}>
              {t('footer.footer_top_for_tenants.title')}
            </h4>
            <ul className={styles.item__list}>
              <li className={styles.list__element}>
                {t('footer.footer_top_for_tenants.findAnApartment')}
              </li>
              <li className={styles.list__element}>
                {t('footer.footer_top_for_tenants.tenantGuide')}
              </li>
              <li className={styles.list__element}>
                {t('footer.footer_top_for_tenants.reviews')}
              </li>
              <li className={styles.list__element}>
                {t('footer.footer_top_for_tenants.helpCenter')}
              </li>
            </ul>
          </div>
          <div className={styles.info__item}>
            <h4 className={styles.item__title}>
              {t('footer.footer_top_legal.title')}
            </h4>
            <ul className={styles.item__list}>
              <li className={styles.list__element}>
                {t('footer.footer_top_legal.termsAndConditions')}
              </li>
              <li className={styles.list__element}>
                {t('footer.footer_top_legal.privacyPolicy')}
              </li>
              <li className={styles.list__element}>
                {t('footer.footer_top_legal.cookiePolicy')}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <p
          className={styles.bottom__text}
        >{`© 2025 SmartRent. ${t('footer.footer_bottom_text')}`}</p>
        <button
          className={styles.button__BackToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className={styles.BackToTop__text}>
            {t('footer.backToTop')}
          </span>
          <div className={styles.BackToTop__img}>
            <img src={backToTop} alt="Back to top" />
          </div>
        </button>
      </div>
    </footer>
  );
};
