import { useState } from 'react';
import styles from './HelpSection.module.scss';
import { FAQItem } from './components/FAQItem/FAQItem';
import i18n from '../../../../i18m';

type FAQItemType = {
  id: number;
  question: string;
  answer: string;
};

const { t } = i18n;

const faqData: FAQItemType[] = [
  {
    id: 1,
    question: t('homePage.helpSection.helpItems.question1.question'),
    answer: t('homePage.helpSection.helpItems.question1.answer'),
  },
  {
    id: 2,
    question: t('homePage.helpSection.helpItems.question2.question'),
    answer: t('homePage.helpSection.helpItems.question2.answer'),
  },
  {
    id: 3,
    question: t('homePage.helpSection.helpItems.question3.question'),
    answer: t('homePage.helpSection.helpItems.question3.answer'),
  },
  {
    id: 4,
    question: t('homePage.helpSection.helpItems.question4.question'),
    answer: t('homePage.helpSection.helpItems.question4.answer'),
  },
  {
    id: 5,
    question: t('homePage.helpSection.helpItems.question5.question'),
    answer: t('homePage.helpSection.helpItems.question5.answer'),
  },
  {
    id: 6,
    question: t('homePage.helpSection.helpItems.question6.question'),
    answer: t('homePage.helpSection.helpItems.question6.answer'),
  },
  {
    id: 7,
    question: t('homePage.helpSection.helpItems.question7.question'),
    answer: t('homePage.helpSection.helpItems.question7.answer'),
  },
  {
    id: 8,
    question: t('homePage.helpSection.helpItems.question8.question'),
    answer: t('homePage.helpSection.helpItems.question8.answer'),
  },
];

export const HelpSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className={styles.helpSection}>
      <h2 className={styles.helpSection__title}>
        {t('homePage.helpSection.title')}
      </h2>

      <ul className={styles.helpSection__list}>
        {faqData.map(item => (
          <FAQItem
            key={item.id}
            {...item}
            isOpen={openId === item.id}
            onToggle={() =>
              setOpenId(prev => (prev === item.id ? null : item.id))
            }
          />
        ))}
      </ul>

      <div className={styles.helpSection__link}>
        <span>{t('homePage.helpSection.question')}</span>
        <a href="/faq">{t('homePage.helpSection.seeMore')}</a>
      </div>
    </section>
  );
};
