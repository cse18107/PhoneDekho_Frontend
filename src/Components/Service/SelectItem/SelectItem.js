import React from "react";
import './SelectItem.css';

const SelectItem = ({options, width}) => {
  return (
    <div className="select-by">
      <select name="role" style={{"width":`${width}`}}>
        {options && options.map(option=>{
            return (<option>{option}</option>);
        })}
      </select>
    </div>
  );
};

export default SelectItem;
