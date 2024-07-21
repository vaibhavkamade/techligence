import React, { useState } from 'react';
import FacetGroup from './FacetGroup';
import './FacetFilter.css';

const FacetFilter = ({ filters, onFilterChange }) => {
  const [expandedGroups, setExpandedGroups] = useState({
    productType: true,
    Theme: true,
    Interest: true,
    Age: true,
    PieceCount: true,
    Featured: true,
  });

  const handleCheckboxChange = (group, option) => {
    const updatedFilters = {
      ...filters,
      [group]: {
        ...filters[group],
        [option]: !filters[group][option],
      },
    };
    onFilterChange(updatedFilters);
  };

  const toggleGroup = (group) => {
    setExpandedGroups(prevExpandedGroups => ({
      ...prevExpandedGroups,
      [group]: !prevExpandedGroups[group],
    }));
  };

  return (
    <div className="facet-filter">
      {Object.keys(filters).map(group => (
        <FacetGroup
          key={group}
          title={group}
          options={filters[group]}
          isExpanded={expandedGroups[group]}
          onToggle={() => toggleGroup(group)}
          onChange={(option) => handleCheckboxChange(group, option)}
        />
      ))}
    </div>
  );
};

export default FacetFilter;
