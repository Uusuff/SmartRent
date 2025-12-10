import { ApartmentSearch } from './components/ApartmentSearch';
import { PlatformStats } from './components/PlatformStats';
import { HowItWorks } from './components/HowItWorks';
import styles from './HomePage.module.scss';
import { InfoSlider } from './components/InfoSlider/InfoSlider';
import { BecomeALandlord } from './components/BecomeALandlord';
import { HelpSection } from './components/HelpSection/HelpSection';

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <ApartmentSearch />
      <PlatformStats />
      <HowItWorks />
      <InfoSlider />
      <BecomeALandlord />
      <HelpSection />
    </div>
  );
};
