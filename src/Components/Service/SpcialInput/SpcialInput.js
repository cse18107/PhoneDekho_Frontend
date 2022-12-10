import React from "react";
import './SpcialInput.css';

const SpcialInput = ({label,placeholder,show,success_message}) => {
  return (
    <div className="input">
      <div className="label">{label}</div>
      <div className="input_message">
        <input type="text_field" placeholder={placeholder} />
       {show && <div className="success_message">{success_message}</div>}
      </div>
    </div>
  );
};

export default SpcialInput;
