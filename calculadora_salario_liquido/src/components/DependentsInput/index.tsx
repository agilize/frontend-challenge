import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { RiQuestionLine } from 'react-icons/ri';

import styles from './style.module.scss';

interface DependentsInputProps {
  questionText: string;
  infoText: string;
  isDisable: boolean;
  handleIncrease: () => void;
  handleDecrease: () => void;
  dependentsValue: number;
}

export default function DependentsInput({
  infoText,
  questionText,
  isDisable,
  handleDecrease,
  handleIncrease,
  dependentsValue,
}: DependentsInputProps) {
  return (
    <div className={styles.formControl}>
      <span className={styles.questionText}>{questionText}</span>
      <div className={styles.inputControl}>
        <button disabled={isDisable} type="button" onClick={handleDecrease}>
          <FiMinusCircle />
        </button>
        <input type="text" placeholder="0" value={dependentsValue} readOnly />
        <button disabled={isDisable} type="button" onClick={handleIncrease}>
          <FiPlusCircle />
        </button>
      </div>
      <div className={styles.infoText}>
        <RiQuestionLine />
        <span>{infoText}</span>
      </div>
    </div>
  );
}
