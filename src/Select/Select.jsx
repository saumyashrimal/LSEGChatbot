import React from 'react';
import './Style.css'

const Select = ({ label, options, onSelect, disabled }) => {
  const handleOptionClick = (value) => {
    !disabled && onSelect(value);
  }
  return (
    <div className='container'>
      <ul>
        <li className='label'>{label}</li>
        {options.map((option) => 
        <li onClick={() => handleOptionClick(option.value)}>{option.label}</li>
        )}
      </ul>
    </div>
  );
};
 
export default Select;
