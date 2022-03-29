import React from 'react';
import border from '../../assets/border.png';
import "./styles.css";


function NetSalarySection() {
  return (
    <section className="net-salary">
      <div>
        <span>Seu salário liquido será</span>
        <img src={border} alt="border" />
        <span className="net-salary--value"> -- </span>
      </div>
    </section>
  )
}

export default NetSalarySection;
