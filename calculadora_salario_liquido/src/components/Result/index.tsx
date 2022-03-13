import { useEffect, useState } from 'react';

import { CalcParameters } from '../../types';
import { calculateSalary } from '../../utils/calculateSalary';
import styles from './style.module.scss';

interface ResultProps {
  params: CalcParameters;
  isShowResult: boolean;
}

interface CalculatedResults {
  salary: {
    grossSalary: string;
    netSalary: string;
  };
  irrf: {
    aliquot: string;
    value: string;
  };
  inss: {
    aliquot: string | null;
    value: string;
  };
  otherDiscounts: string;
}

const initialValue = {
  salary: {
    grossSalary: '',
    netSalary: '',
  },
  irrf: {
    aliquot: '',
    value: '',
  },
  inss: {
    aliquot: '',
    value: '',
  },

  otherDiscounts: '',
};

export default function Result({ params, isShowResult }: ResultProps) {
  const [calculated, setCalculated] = useState<CalculatedResults>(initialValue);
  useEffect(() => {
    if (isShowResult) {
      setCalculated(calculateSalary(params));
    }
  }, [isShowResult]);

  return (
    <section className={styles.resultContainer}>
      <div className={styles.firstWrapper}>
        <h2>Seu salário líquido será</h2>
        <div className={styles.salaryContainer}>
          <img src="./assets/border.png" alt="border" />
          {isShowResult && (
            <strong data-testid="net-salary">
              {calculated.salary.netSalary}
            </strong>
          )}
        </div>
      </div>

      {isShowResult && (
        <div className={styles.secondWrapper}>
          <h3>Como o cálculo é feito?</h3>
          <ul>
            <li>
              <span>Salário bruto</span>
              <span>{calculated.salary.grossSalary}</span>
            </li>

            <li>
              <span>
                INSS (
                {calculated.inss.aliquot
                  ? calculated.inss.aliquot
                  : calculated.inss.value}
                )
              </span>
              <span>{calculated.inss.value}</span>
            </li>

            <li>
              <span>IRRF ({calculated.irrf.aliquot})</span>
              <span>{calculated.irrf.value}</span>
            </li>

            <li>
              <span>Outros descontos</span>
              <span>{calculated.otherDiscounts}</span>
            </li>
          </ul>

          <div>
            <span>Salário líquido</span>
            <span>{calculated.salary.netSalary}</span>
          </div>
        </div>
      )}
    </section>
  );
}
