import React, { useState } from 'react';
import FacetGroup from './FacetGroup';
import './FacetFilter.css'; // Add CSS for styling

const FacetFilter = () => {
  const [filters, setFilters] = useState({
    productType: {
      'Sets': false,
      'Home decor': false,
    },
    Theme: {
      'Creator Expert': false,
      'Other': false,
      'Botanical Collection': false,
    },
    Interest: {
      'Art': false,
      'Botanicals': false,
      'Decorations': false,
      'Nature Toys': false,
      'Seasonal': false,
    },
    Age: {
      '6+': false,
      '9+': false,
      '18+': false,
    },
    PieceCount: {
      '100-249': false,
      '250-499': false,
      '500-999': false,
    },
    Featured: {
      'New': false,
    },
  });

  const [expandedGroups, setExpandedGroups] = useState({
    productType: true,
    Theme: true,
    Interest: true,
    Age: true,
    PieceCount: true,
    Featured: true,
  });

  const handleCheckboxChange = (group, option) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [group]: {
        ...prevFilters[group],
        [option]: !prevFilters[group][option],
      },
    }));
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
