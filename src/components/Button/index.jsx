import React from 'react';

import './styles.scss';

const ButtonComponent = (props) => {
  const { label, showMore, isShow } = props;

  return (
    <button className='button' onClick={() => showMore(!isShow)}>
      {isShow ? label.hide : label.showMore}
    </button>
  );
};

export default ButtonComponent;
