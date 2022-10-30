import React from "react";
import './TextTooltip.css';

const TextTooltip = (props) => {
  const { tooltipText } = props;
  return (
    <div class="tooltip">
      {props.children}
      <span class="tooltiptext">{tooltipText}</span>
    </div>
  );
};

export default TextTooltip;
