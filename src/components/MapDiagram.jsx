import React, { useRef, useState } from 'react';

const MapDiagram = ({ selectedTheory, onSelectTheory, showLabels, activeTheories }) => {
  const containerRef = useRef(null);
  const [hoveredTheory, setHoveredTheory] = useState(null);

  return (
    <div className="diagram-container" ref={containerRef}>
      {/* Background Quadrants */}
      <div className="quadrants">
        <div className="quadrant quadrant-tl">
          <div className="quadrant-label">Internal Appraisal<br/>Mechanisms</div>
        </div>
        <div className="quadrant quadrant-tr">
          <div className="quadrant-label">Work System<br/>Mechanisms</div>
        </div>
        <div className="quadrant quadrant-bl">
          <div className="quadrant-label">Human Needs &<br/>Motives</div>
        </div>
        <div className="quadrant quadrant-br">
          <div className="quadrant-label">Job Conditions &<br/>Work Factors</div>
        </div>
      </div>

      {/* Axes */}
      <div className="axis-x"></div>
      <div className="axis-y"></div>
      
      <div className="axis-label axis-label-left">Internal</div>
      <div className="axis-label axis-label-right">External</div>
      <div className="axis-label axis-label-top">How motivation operates</div>
      <div className="axis-label axis-label-bottom">What motivates</div>

      {/* SVG Overlay for Connections and Label Lines */}
      <svg className="connections-overlay" preserveAspectRatio="none">
        {activeTheories.map(theory => {
          const isActive = selectedTheory?.id === theory.id || hoveredTheory === theory.id;
          
          return (
            <React.Fragment key={theory.id}>
              {/* Main structure lines */}
              {theory.lines && theory.lines.map((line, idx) => {
                const p1 = theory.points.find(p => p.id === line.from);
                const p2 = theory.points.find(p => p.id === line.to);
                if (!p1 || !p2) return null;
                
                return (
                  <line
                    key={`${theory.id}-line-${idx}`}
                    x1={`${p1.x}%`}
                    y1={`${p1.y}%`}
                    x2={`${p2.x}%`}
                    y2={`${p2.y}%`}
                    stroke={isActive ? "#E53E3E" : "#ffffff"}
                    strokeWidth={isActive ? 4 : 2}
                    strokeDasharray={line.type === 'dashed' ? "6,6" : "none"}
                    style={{ transition: 'all 0.2s ease', filter: isActive ? 'drop-shadow(0px 0px 8px rgba(0,0,0,0.3))' : 'none' }}
                  />
                );
              })}
            
              {/* Pointer lines connecting dots to their labels */}
              {showLabels && theory.points.map(point => {
                const labelX = point.x + (point.dx || 0);
                const labelY = point.y + (point.dy || 0);

                // Only draw dashed pointer line if the label is significantly offset
                const dist = Math.hypot(point.dx || 0, point.dy || 0);
                if (dist > 1.5) {
                  return (
                    <line
                      key={`label-line-${point.id}`}
                      x1={`${point.x}%`}
                      y1={`${point.y}%`}
                      x2={`${labelX}%`}
                      y2={`${labelY}%`}
                      stroke={isActive ? "#E53E3E" : "rgba(0, 0, 0, 0.4)"}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      strokeDasharray="4,4"
                      style={{ transition: 'all 0.2s ease', filter: isActive ? 'drop-shadow(0px 0px 8px rgba(0,0,0,0.3))' : 'none' }}
                    />
                  );
                }
                return null;
              })}
            </React.Fragment>
          );
        })}
      </svg>

      {/* Theory Nodes and Labels */}
      {activeTheories.map((theory) => {
        const isSelected = selectedTheory?.id === theory.id;
        const handleEnter = () => setHoveredTheory(theory.id);
        const handleLeave = () => setHoveredTheory(null);
        
        return (
          <div 
            key={theory.id} 
            className={`theory-group ${isSelected ? 'selected' : ''} ${hoveredTheory === theory.id ? 'hovered' : ''}`}
          >
            {/* Main Group Label */}
            {showLabels && theory.labelPosition && (
              <div 
                className="group-main-label"
                onClick={() => onSelectTheory(theory)}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                style={{ 
                  left: `${theory.labelPosition.x}%`, 
                  top: `${theory.labelPosition.y}%`, 
                  transform: 'translate(-50%, -50%)',
                  zIndex: 50
                }}
              >
                {theory.labelPosition.text}
              </div>
            )}
            
            {/* Individual Points & Labels */}
            {theory.points.map(point => {
              const labelX = point.x + (point.dx || 0);
              const labelY = point.y + (point.dy || 0);
              
              return (
                <React.Fragment key={point.id}>
                  {/* The dot itself */}
                  <div 
                    className="theory-node"
                    onClick={() => onSelectTheory(theory)}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  >
                    <div className="node-dot"></div>
                  </div>
                  
                  {/* The text label */}
                  {showLabels && (
                    <div 
                      className={`node-label-floating ${isSelected ? 'selected' : ''}`}
                      onClick={() => onSelectTheory(theory)}
                      onMouseEnter={handleEnter}
                      onMouseLeave={handleLeave}
                      style={{ 
                        left: `${labelX}%`, 
                        top: `${labelY}%`,
                        zIndex: isSelected ? 45 : 35
                      }}
                    >
                      {point.label}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MapDiagram;
