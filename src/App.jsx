import React, { useState } from 'react';
import MapDiagram from './components/MapDiagram';
import TheoryDetails from './components/TheoryDetails';
import { theories } from './data/theories';
import './index.css';

const MACRO_GROUPS = [
  { id: 1, name: "What Motivates" },
  { id: 2, name: "How Motivation Works" },
  { id: 3, name: "Cognitive Appraisal Theories" },
  { id: 4, name: "Motivational State / Psychophysiology" }
];

function App() {
  const [selectedTheory, setSelectedTheory] = useState(null);
  const [showLabels, setShowLabels] = useState(true);
  const [activeMacros, setActiveMacros] = useState([1, 2, 3, 4]);

  const toggleMacro = (id) => {
    setActiveMacros(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const activeTheories = theories.filter(t => activeMacros.includes(t.macroGroup));

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Motivation Theory Map</h1>
        <p>An interactive landscape of psychological theories of motivation</p>
      </header>
      
      <main className="main-content">
        <div className="controls-bar">
          <span className="filters-label">Filters:</span>
          <div className="filter-pills">
            <button 
              className={`filter-pill ${showLabels ? 'active' : ''}`}
              onClick={() => setShowLabels(!showLabels)}
            >
              Show theory labels
            </button>
            {MACRO_GROUPS.map(g => (
              <button 
                key={g.id}
                className={`filter-pill ${activeMacros.includes(g.id) ? 'active' : ''}`}
                onClick={() => toggleMacro(g.id)}
              >
                {g.name}
              </button>
            ))}
          </div>
        </div>
        
        <MapDiagram 
          selectedTheory={selectedTheory} 
          onSelectTheory={setSelectedTheory} 
          showLabels={showLabels}
          activeTheories={activeTheories}
        />
        <TheoryDetails theory={selectedTheory} />
      </main>
    </div>
  );
}

export default App;
