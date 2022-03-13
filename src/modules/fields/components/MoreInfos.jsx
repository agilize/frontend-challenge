import PropTypes from 'prop-types';
import React from 'react';
import Interrogation from '../../../images/interrogation.svg';

const MoreInfos = ({ children }) => {
  return (
    <div className='flex content-center'>
      <object height='12px' data={Interrogation}>
        ?
      </object>
      <p className='text-xs'>{children}</p>
    </div>
  );
};

MoreInfos.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MoreInfos;
