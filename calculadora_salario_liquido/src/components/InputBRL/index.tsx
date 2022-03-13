import React, { InputHTMLAttributes } from 'react';
import { RiQuestionLine } from 'react-icons/ri';

import styles from './style.module.scss';

interface InputBrlProps extends InputHTMLAttributes<HTMLInputElement> {
  questionText: string;
  infoText: string;
}

export default function InputBRL({
  infoText,
  questionText,
  ...props
}: InputBrlProps) {
  return (
    <div className={styles.formControl}>
      <span className={styles.questionText}>{questionText}</span>
      <div className={styles.inputContainer}>
        <div className={styles.currency}>
          <span>R$</span>
        </div>
        <input type="text" maxLength={12} {...props} />
      </div>
      <div className={styles.infoText}>
        <RiQuestionLine />
        <span>{infoText}</span>
      </div>
    </div>
  );
}
