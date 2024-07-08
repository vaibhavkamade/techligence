import React from 'react';
import FacetOption from './FacetOption';
import './FacetGroup.css'; // Add CSS for styling

const FacetGroup = ({ title, options, isExpanded, onToggle, onChange }) => {
  return (
    <>
    <div className="facet-group">
      <h3>
        <button onClick={onToggle} className="toggle-button">
          <span>{title}</span>
          <svg
            width="10"
            height="20"
            viewBox="0 0 18 28"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className={`chevron-icon ${isExpanded ? 'expanded' : ''}`}
          >
            <path
              d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </h3>
      {isExpanded && (
        <ul>
          {Object.keys(options).map(option => (
            <FacetOption
              key={option}
              option={option}
              isChecked={options[option]}
              onChange={onChange}
            />
          ))}
        </ul>
      )}
      <hr />
    </div>
    </>
  );
};

export default FacetGroup;
