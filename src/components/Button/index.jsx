import React from "react";

import "./styles.scss";

const ButtonComponent = (props) => {
  const { label, showMore, isShow } = props;

  const btnClass = isShow ? "button button_show" : "button button_hide";

  return (
    <button className={btnClass} onClick={() => showMore(!isShow)}>
      {isShow ? label.hide : label.showMore}
    </button>
  );
};

export default ButtonComponent;
