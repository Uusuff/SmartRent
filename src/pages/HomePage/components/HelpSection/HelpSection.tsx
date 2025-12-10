import { useState } from 'react';
import styles from './HelpSection.module.scss';
import { FAQItem } from './components/FAQItem/FAQItem';

type FAQItemType = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FAQItemType[] = [
  {
    id: 1,
    question: 'How does SmartRent work?',
    answer:
      'SmartRent connects tenants and landlords directly. You can search ' +
      'for apartments, communicate with property owners via chat, and ' +
      'arrange rentals without agents or additional fees.',
  },
  {
    id: 2,
    question: 'Is it free to use SmartRent?',
    answer:
      'Yes, SmartRent is completely free for tenants. Landlords can list ' +
      'properties at no cost, with optional premium features available.',
  },
  {
    id: 3,
    question: 'How does SmartRent verify landlords and listings?',
    answer:
      'We verify landlords and listings through a combination of ' +
      'identity checks, document validation, and listing reviews to ' +
      'ensure safety and reliability.',
  },
  {
    id: 4,
    question: 'How can I contact the landlord or tenant?',
    answer:
      'You can contact landlords or tenants directly through the ' +
      'built-in messaging system. Contact details are available after ' +
      'you express interest in a listing.',
  },
  {
    id: 5,
    question: 'Can I visit the apartment before renting?',
    answer:
      'Yes, you can arrange a visit with the landlord or property ' +
      'manager before finalizing your rental to make sure the apartment ' +
      'meets your expectations.',
  },
  {
    id: 6,
    question: 'What if I want to cancel my stay?',
    answer:
      'Cancellation terms depend on the agreement with the landlord. ' +
      'Please review the listing details and communicate directly with ' +
      'the property owner for specific policies.',
  },
  {
    id: 7,
    question: 'Are utilities included in the rent?',
    answer:
      'Utility inclusion varies by listing. Some apartments include ' +
      'utilities in the rental price, while others charge them ' +
      'separately. Always check the listing details.',
  },
  {
    id: 8,
    question: 'Is SmartRent available in my city?',
    answer:
      'SmartRent is continuously expanding to new cities. You can check ' +
      'availability by searching for listings in your desired location.',
  },
];

export const HelpSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className={styles.helpSection}>
      <h2 className={styles.helpSection__title}>
        Still trying to figure it out?
      </h2>

      <ul className={styles.helpSection__list}>
        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            {...item}
            isOpen={openId === item.id}
            onToggle={() =>
              setOpenId((prev) => (prev === item.id ? null : item.id))
            }
          />
        ))}
      </ul>

      <div className={styles.helpSection__link}>
        <span>Have a different question?</span>
        <a href="/faq">See more</a>
      </div>
    </section>
  );
};
