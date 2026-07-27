import React, { useState, useEffect } from 'react';
import { diagramNotes } from '../data/diagramNotes';

// Diagrams are inlined rather than embedded via <img> so that the page's
// webfont (Inter) applies to the SVG text; images render in isolation and
// fall back to system fonts.
const TheoryDetails = ({ theory }) => {
  const [svg, setSvg] = useState('');
  const theoryId = theory?.id;

  useEffect(() => {
    if (!theoryId) return undefined;
    let alive = true;
    setSvg('');
    fetch(`${import.meta.env.BASE_URL}diagrams/${theoryId}.svg`)
      .then((r) => (r.ok ? r.text() : ''))
      .then((text) => {
        if (alive) setSvg(text);
      })
      .catch(() => {
        if (alive) setSvg('');
      });
    return () => {
      alive = false;
    };
  }, [theoryId]);

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
      {diagramNotes[theory.id] && (
        <p className="diagram-note">{diagramNotes[theory.id]}</p>
      )}
      {svg && (
        <div
          className="theory-diagram"
          role="img"
          aria-label={`${theory.name} diagram`}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      )}
      <p>{theory.description}</p>
    </div>
  );
};

export default TheoryDetails;
