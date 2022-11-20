import React from "react";
import './SpcialInput.css';

const SpcialInput = ({label,placeholder,success_message}) => {
  return (
    <div className="input">
      <div className="label">{label}</div>
      <div className="input_message">
        <input type="text" placeholder={placeholder} />
        <div className="success_message">{success_message}</div>
      </div>
    </div>
  );
};

export default SpcialInput;
