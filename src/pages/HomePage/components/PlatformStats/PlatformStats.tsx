import style from './PlatformStats.module.scss';

export const PlatformStats = () => {
  return (
    <div className={style.platform_stats}>
      <div className={style.platform_stats__item}>
        <h3 className={style.platform_stats__item_count}>+10000</h3>
        <p className={style.platform_stats__item_text}>TENANTS</p>
      </div>
      <div className={style.platform_stats__item}>
        <h3 className={style.platform_stats__item_count}>+20000</h3>
        <p className={style.platform_stats__item_text}>PROPERTIES</p>
      </div>
      <div className={style.platform_stats__item}>
        <h3 className={style.platform_stats__item_count}>+100</h3>
        <p className={style.platform_stats__item_text}>CITIES</p>
      </div>
    </div>
  );
};
