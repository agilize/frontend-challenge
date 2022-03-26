import React from 'react';
import Button from '../Button';
import './styles.css';

function AccountField() {
  return (
    <section>

      <div>
        <h3 className="field-title">
          Qual seu salário bruto
        </h3>
        <input 
          type="text" 
        />
        <div className="field-warning">
          ...
        </div>
      </div>

      <div>
        <h3 className="field-title">
          Qual seu salário bruto
        </h3>
        <input 
          type="text" 
        />
        <div className="field-warning">
          ...
        </div>
      </div>

      <div>
        <h3 className="field-title">
          Qual seu salário bruto
        </h3>
        <input 
          type="text" 
        />
        <div className="field-warning">
          ...
        </div>
      </div>

      <Button />

    </section>
  )
}

export default AccountField;
