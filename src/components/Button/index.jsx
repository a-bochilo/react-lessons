import React from "react";
import Button from "react-bootstrap/Button";

import "./styles.scss";

const ButtonComponent = (props) => {
  const { label, buttonClick, id, btnStyle } = props;

  return (
    <Button variant={btnStyle} onClick={() => buttonClick(id)}>
      {label}
    </Button>
    // <button variant="danger" onClick={() => buttonClick(id)}>
    //   {label}
    // </button>
  );
};

export default ButtonComponent;
