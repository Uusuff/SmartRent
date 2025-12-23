import i18n from '../../../../i18m';
import style from './PlatformStats.module.scss';

export const PlatformStats = () => {
  const { t } = i18n;

  return (
    <div className={style.platform_stats}>
      <div className={style.platform_stats__item}>
        <h3 className={style.platform_stats__item_count}>
          {t('homePage.platformStats.item1.count')}
        </h3>
        <p className={style.platform_stats__item_text}>
          {t('homePage.platformStats.item1.text')}
        </p>
      </div>
      <div className={style.platform_stats__item}>
        <h3 className={style.platform_stats__item_count}>
          {t('homePage.platformStats.item2.count')}
        </h3>
        <p className={style.platform_stats__item_text}>
          {t('homePage.platformStats.item2.text')}
        </p>
      </div>
      <div className={style.platform_stats__item}>
        <h3 className={style.platform_stats__item_count}>
          {t('homePage.platformStats.item3.count')}
        </h3>
        <p className={style.platform_stats__item_text}>
          {t('homePage.platformStats.item3.text')}
        </p>
      </div>
    </div>
  );
};
