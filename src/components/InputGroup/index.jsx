import React from "react";
import ButtonComponent from "../Button";

const InputGroup = ({
  placeholder,
  label,
  buttonClick,
  btnStyle,
  inputChange,
}) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        onChange={(e) => inputChange(e)}
      />
      <ButtonComponent
        label={label}
        buttonClick={buttonClick}
        btnStyle={btnStyle}
      />
    </div>
  );
};

export default InputGroup;
