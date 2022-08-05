import React, { useState } from "react";
import ButtonComponent from "../Button";

import "./styles.scss";

const Post = (props) => {
  const { title, subtitle, buttonLabel, img } = props;

  const [state, setState] = useState(false);

  return (
    <div className="post">
      <div>
        <img className="post__img" src={img} alt="product_image"></img>
      </div>
      <div>
        <h1 className="post__title">{title}</h1>
        <ButtonComponent
          label={buttonLabel}
          isShow={state}
          showMore={setState}
        />
        {state && <p className="post__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Post;
