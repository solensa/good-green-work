import React, { useRef, useEffect, useState } from 'react';
import './GoodWorkMechanism.css';

// SVG Arrow component to cleanly render paths
const Arrow = ({ start, end, startSide, endSide, dashed, pathOffset = 0 }) => {
  if (!start || !end) return null;

  // Simple orthagonal path generator
  let path = '';
  
  if (startSide === 'bottom' && endSide === 'top') {
    const midY = start.y + (end.y - start.y) / 2;
    path = `M ${start.x} ${start.y} L ${start.x} ${midY} L ${end.x} ${midY} L ${end.x} ${end.y - 5}`;
  } else if (startSide === 'right' && endSide === 'left') {
    const midX = start.x + (end.x - start.x) / 2;
    path = `M ${start.x} ${start.y} L ${midX} ${start.y} L ${midX} ${end.y} L ${end.x - 5} ${end.y}`;
  } else if (startSide === 'left' && endSide === 'right') {
    const midX = start.x + (end.x - start.x) / 2;
    path = `M ${start.x} ${start.y} L ${midX} ${start.y} L ${midX} ${end.y} L ${end.x + 5} ${end.y}`;
  } else if (startSide === 'left' && endSide === 'left') {
    // Feedback loop on the left
    const offX = Math.min(start.x, end.x) - pathOffset;
    path = `M ${start.x} ${start.y} L ${offX} ${start.y} L ${offX} ${end.y} L ${end.x - 5} ${end.y}`;
  } else if (startSide === 'right' && endSide === 'right') {
    // Feedback loop on the right
    const offX = Math.max(start.x, end.x) + pathOffset;
    path = `M ${start.x} ${start.y} L ${offX} ${start.y} L ${offX} ${end.y} L ${end.x + 5} ${end.y}`;
  }

  // Double arrow ends
  let markerStart = '';
  if (dashed && startSide === 'right' && endSide === 'left') {
    // This is for bidirectional dashed lines
    // We'll simplify and just add two arrows if needed, or handle it via SVG markers
  }

  return (
    <>
      <path 
        className={`arrow-path ${dashed ? 'dashed' : ''}`} 
        d={path} 
        markerEnd="url(#arrowhead)" 
        markerStart={dashed ? "url(#arrowstart)" : ""}
      />
    </>
  );
};

const GoodWorkMechanism = () => {
  const containerRef = useRef(null);
  
  // Refs for each box
  const refs = {
    env: useRef(null),
    workerChar: useRef(null),
    align: useRef(null),
    workChar: useRef(null),
    interp: useRef(null),
    motiv: useRef(null),
    physio: useRef(null),
    behav: useRef(null),
    expState: useRef(null)
  };

  const [coords, setCoords] = useState({});
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const updateCoords = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      
      const newCoords = {};
      Object.keys(refs).forEach(key => {
        if (refs[key].current) {
          const rect = refs[key].current.getBoundingClientRect();
          newCoords[key] = {
            top: { x: rect.left + rect.width / 2 - containerRect.left, y: rect.top - containerRect.top },
            bottom: { x: rect.left + rect.width / 2 - containerRect.left, y: rect.bottom - containerRect.top },
            left: { x: rect.left - containerRect.left, y: rect.top + rect.height / 2 - containerRect.top },
            right: { x: rect.right - containerRect.left, y: rect.top + rect.height / 2 - containerRect.top },
          };
        }
      });
      setCoords(newCoords);
    };

    updateCoords();
    window.addEventListener('resize', updateCoords);
    // Slight delay to ensure fonts/layout are fully rendered
    setTimeout(updateCoords, 100);
    setTimeout(updateCoords, 400);

    return () => window.removeEventListener('resize', updateCoords);
  }, []);

  return (
    <div className="page-container fade-in">
      <header className="page-header">
        <h1>Conceptual Map of the Good Work Mechanism</h1>
        <p>The goal is to have all aspects of the conceptual map feed into the improvement of the work environment and characteristics.</p>
      </header>

      <div className="mechanism-diagram-container" ref={containerRef}>
        {/* SVG Overlay for Lines */}
        <svg className="mechanism-svg-overlay">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#1e293b" />
            </marker>
            <marker id="arrowstart" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto">
              <polygon points="10 0, 0 3.5, 10 7" fill="#1e293b" />
            </marker>
          </defs>

          {/* Render lines if coords are ready */}
          {Object.keys(coords).length > 0 && (
            <>
              {/* Env -> Work Char */}
              <Arrow start={coords.env.bottom} end={coords.workChar.top} startSide="bottom" endSide="top" />
              
              {/* Worker Char <--> Align (dashed) */}
              <Arrow start={coords.workerChar.right} end={coords.align.left} startSide="right" endSide="left" dashed />
              
              {/* Align <--> Work Char (dashed) */}
              <Arrow start={coords.align.right} end={coords.workChar.left} startSide="right" endSide="left" dashed />
              
              {/* Merged arrows from Row 2 to Interp */}
              <path className="arrow-path" d={`M ${coords.workerChar.bottom.x} ${coords.workerChar.bottom.y} L ${coords.workerChar.bottom.x} ${coords.align.bottom.y + 35} L ${coords.align.bottom.x} ${coords.align.bottom.y + 35}`} />
              <path className="arrow-path" d={`M ${coords.workChar.bottom.x} ${coords.workChar.bottom.y} L ${coords.workChar.bottom.x} ${coords.align.bottom.y + 35} L ${coords.align.bottom.x} ${coords.align.bottom.y + 35}`} />
              <path className="arrow-path" d={`M ${coords.align.bottom.x} ${coords.align.bottom.y} L ${coords.align.bottom.x} ${coords.interp.top.y - 5}`} markerEnd="url(#arrowhead)" />
              
              {/* Interp -> Experienced State */}
              <Arrow start={coords.interp.bottom} end={coords.expState.top} startSide="bottom" endSide="top" />
              
              {/* Motiv <--> Physio */}
              <Arrow start={coords.motiv.right} end={coords.physio.left} startSide="right" endSide="left" dashed />
              
              {/* Experienced State -> Behaviour */}
              <Arrow start={coords.expState.bottom} end={coords.behav.top} startSide="bottom" endSide="top" />
              
              {/* Longer-term feedback loop (Left: Behav -> Worker Char) */}
              <path className="arrow-path" d={`M ${coords.behav.bottom.x - 20} ${coords.behav.bottom.y} L ${coords.behav.bottom.x - 20} ${coords.behav.bottom.y + 30} L ${coords.workerChar.left.x - 80} ${coords.behav.bottom.y + 30} L ${coords.workerChar.left.x - 80} ${coords.workerChar.left.y} L ${coords.workerChar.left.x - 5} ${coords.workerChar.left.y}`} markerEnd="url(#arrowhead)" />
              
              {/* Longer-term feedback loop (Right: Behav -> Env) */}
              <path className="arrow-path" d={`M ${coords.behav.bottom.x + 20} ${coords.behav.bottom.y} L ${coords.behav.bottom.x + 20} ${coords.behav.bottom.y + 30} L ${Math.max(coords.behav.right.x, coords.env.right.x) + 80} ${coords.behav.bottom.y + 30} L ${Math.max(coords.behav.right.x, coords.env.right.x) + 80} ${coords.env.right.y} L ${coords.env.right.x + 5} ${coords.env.right.y}`} markerEnd="url(#arrowhead)" />
              
              {/* Branch to Work Char */}
              <path className="arrow-path" d={`M ${Math.max(coords.behav.right.x, coords.env.right.x) + 80} ${coords.workChar.right.y} L ${coords.workChar.right.x + 5} ${coords.workChar.right.y}`} markerEnd="url(#arrowhead)" />
              
              {/* Shorter-term feedback loop (Left: Behav -> Interp) */}
              <path className="arrow-path" d={`M ${coords.behav.left.x} ${coords.behav.left.y} L ${coords.expState.left.x - 40} ${coords.behav.left.y} L ${coords.expState.left.x - 40} ${coords.interp.left.y} L ${coords.interp.left.x - 5} ${coords.interp.left.y}`} markerEnd="url(#arrowhead)" />
            </>
          )}
        </svg>

        {/* Labels for loops */}
        {coords.behav && (
          <>
            <div className="loop-label" style={{ top: (coords.workerChar.left.y + coords.behav.left.y)/2, left: coords.workerChar.left.x - 80 - 65, transform: 'rotate(-90deg)' }}>
              longer-term feedback loop
            </div>
            <div className="loop-label" style={{ top: coords.behav.bottom.y + 10, left: coords.behav.right.x + 20 }}>
              longer-term feedback loop
            </div>
            <div className="loop-label" style={{ top: (coords.interp.left.y + coords.behav.left.y)/2 - 10, left: coords.expState.left.x - 40 - 65, transform: 'rotate(-90deg)' }}>
              shorter-term feedback loop
            </div>
          </>
        )}


        <div className="mech-row">
          <div />
          <div />
          <div className="mech-box bg-mint" ref={refs.env}>
            <p className="mech-box-title">WORK ENVIRONMENT</p>
            <p className="mech-box-subtitle">Broad setting that shapes the work</p>
            <button className="examples-btn" onClick={() => setActiveModal({ title: 'WORK ENVIRONMENT', examples: 'e.g. onsite | offsite | office' })}>
              EXAMPLES
            </button>
          </div>
        </div>

        <div className="mech-row">
          <div className="mech-box bg-blue" ref={refs.workerChar}>
            <p className="mech-box-title">WORKER CHARACTERISTICS</p>
            <p className="mech-box-subtitle">What you consciously/unconsciously bring to work</p>
            <button className="examples-btn" onClick={() => setActiveModal({ title: 'WORKER CHARACTERISTICS', examples: '(explicit/implicit) e.g. personality | trait domains, aspects, facets | needs | motives | values | fitness | age | health | experience | tacit knowledge' })}>
              EXAMPLES
            </button>
          </div>
          
          <div className="mech-box border-dashed" ref={refs.align}>
            <p className="mech-box-title">WORKER-WORK ALIGNMENT</p>
            <p className="mech-box-subtitle">The match or mismatch (fit) between work & worker</p>
            <button className="examples-btn" onClick={() => setActiveModal({ title: 'WORKER-WORK ALIGNMENT', examples: 'e.g. needs-supplies | demands-abilities | values-identity' })}>
              EXAMPLES
            </button>
          </div>

          <div className="mech-box bg-mint" ref={refs.workChar}>
            <p className="mech-box-title">WORK CHARACTERISTICS</p>
            <p className="mech-box-subtitle">Designable features of roles, work & tasks</p>
            <button className="examples-btn" onClick={() => setActiveModal({ title: 'WORK CHARACTERISTICS', examples: 'e.g. workload | autonomy | support | safety | monitoring | goals | salary' })}>
              EXAMPLES
            </button>
          </div>
        </div>

        <div className="mech-row" style={{ marginTop: '3rem' }}>
          <div />
          <div className="mech-box bg-purple" ref={refs.interp}>
            <p className="mech-box-title">WORKER INTERPRETATION / EXPERIENCE</p>
            <p className="mech-box-subtitle">How you interpret work (extrinsic → intrinsic)</p>
            <button className="examples-btn" onClick={() => setActiveModal({ title: 'WORKER INTERPRETATION / EXPERIENCE', examples: 'e.g. fair / unfair | controllable / uncontrollable | meaningful / pointless | threatening / challenging' })}>
              EXAMPLES
            </button>
          </div>
          <div />
        </div>

        <div className="mech-row-single">
          <div className="experienced-state-container" ref={refs.expState}>
            <p className="experienced-state-title">EXPERIENCED STATE</p>
            <div className="experienced-state-boxes">
              <div className="mech-box bg-yellow-light" ref={refs.motiv}>
                <p className="mech-box-title">MOTIVATIONAL-AFFECTIVE STATE</p>
                <p className="mech-box-subtitle">The experienced state of motivation & needs</p>
                <button className="examples-btn" onClick={() => setActiveModal({ title: 'MOTIVATIONAL-AFFECTIVE STATE', examples: 'e.g. energetic arousal | tense arousal | engagement | boredom | stress | confidence | frustration' })}>
                  EXAMPLES
                </button>
              </div>
              <div className="mech-box bg-orange" ref={refs.physio}>
                <p className="mech-box-title">PHYSIOLOGICAL STATE</p>
                <p className="mech-box-subtitle">Your physical state during work</p>
                <button className="examples-btn" onClick={() => setActiveModal({ title: 'PHYSIOLOGICAL STATE', examples: 'e.g. autonomic arousal | cardiovascular load | fatigue | musculoskeletal strain | heat strain | recovery' })}>
                  EXAMPLES
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mech-row">
          <div />
          <div className="mech-box bg-tan" ref={refs.behav}>
            <p className="mech-box-title">BEHAVIOUR / OUTCOMES</p>
            <p className="mech-box-subtitle">What you do and what follows</p>
            <button className="examples-btn" onClick={() => setActiveModal({ title: 'BEHAVIOUR / OUTCOMES', examples: 'e.g. wellbeing | productivity | green results | safety | effort | persistence | errors | rework | learning | absence' })}>
              EXAMPLES
            </button>
          </div>
          <div />
        </div>

      </div>

      {activeModal && (
        <div className="mech-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="mech-modal-content" onClick={e => e.stopPropagation()}>
            <button className="mech-modal-close" onClick={() => setActiveModal(null)}>&times;</button>
            <h3>{activeModal.title}</h3>
            <p className="mech-box-examples" style={{ display: 'block', border: 'none', padding: 0 }}>
              {activeModal.examples}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoodWorkMechanism;
