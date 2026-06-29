import React from 'react';

const TheoryDetails = ({ theory }) => {
  if (!theory) {
    return (
      <div className="empty-state">
        Select a theory on the map to view its details.
      </div>
    );
  }

  return (
    <div className="details-section">
      <div className="details-header">
        <h2>{theory.name}</h2>
      </div>
      {theory.microGroup && (
        <div className="details-tag-container">
          <span className="micro-group-tag">{theory.microGroup}</span>
        </div>
      )}
      <p>{theory.description}</p>
    </div>
  );
};

export default TheoryDetails;
