import React, { useState } from 'react';
import ButtonComponent from '../Button';

import './styles.scss';

const Post = (props) => {
  const { title, subtitle, buttonLabel } = props;

  const [state, setState] = useState(false);

  return (
    <div className='post'>
      <h1 className='post__title'>{title}</h1>
      <ButtonComponent label={buttonLabel} isShow={state} showMore={setState} />
      {state && <p className='post__subtitle'>{subtitle}</p>}
    </div>
  );
};

export default Post;
