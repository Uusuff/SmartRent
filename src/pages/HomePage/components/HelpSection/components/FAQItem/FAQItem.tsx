import minus from '../../../../../../assets/icons/HelpSectionIco/minus.png';
import plus from '../../../../../../assets/icons/HelpSectionIco/plus.png';
import styles from './FAQItem.module.scss';

type Props = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export const FAQItem: React.FC<Props> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <li className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <div
        className={styles.item__header}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className={styles.item__question}>{question}</span>
        <div className={styles.item__icon}>
          <img src={isOpen ? minus : plus} alt="icon" />
        </div>
      </div>

      {isOpen && <p className={styles.item__body}>{answer}</p>}
    </li>
  );
};
