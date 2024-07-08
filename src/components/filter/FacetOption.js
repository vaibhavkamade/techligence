import React from 'react';
import './FacetOption.css'; // Add CSS for styling

const FacetOption = ({ option, isChecked, onChange }) => {
  return (
    <li className="facet-option">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onChange(option)}
          className="hidden-checkbox"
        />
        <div className="styled-checkbox">
          {isChecked && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -25 100 100" className="checkmark">
              <polygon fill="currentColor" points="0.4,23.9 36,59.6 99.6,-4 88.5,-4 77.4,-4 36,37.3 22.6,24 11.5,24 "></polygon>
            </svg>
          )}
        </div>
        <span className="checkbox-text">{option}</span>
      </label>
    </li>
  );
};

export default FacetOption;
