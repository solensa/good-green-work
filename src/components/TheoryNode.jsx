import React from 'react';
import { theories } from '../data/theories';

const TheoryNode = ({ theory, isSelected, onClick }) => {
  return (
    <div
      className={`theory-node ${isSelected ? 'selected' : ''}`}
      style={{ left: `${theory.x}%`, top: `${theory.y}%` }}
      onClick={() => onClick(theory)}
    >
      <div className="node-dot"></div>
      <div className="node-label">{theory.name}</div>
    </div>
  );
};

export default TheoryNode;
