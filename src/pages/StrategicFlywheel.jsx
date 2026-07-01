import React, { useState, useEffect, useRef } from 'react';
import fw1 from '../assets/fw1.svg';
import fw2 from '../assets/fw2.svg';
import fw3 from '../assets/fw3.svg';
import fw4 from '../assets/fw4.svg';
import fw0 from '../assets/fw0.svg';
import './StrategicFlywheel.css';

// Smooth ease-in-out mathematical curve for reverting perfectly to 0
const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const StrategicFlywheel = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use refs to track animation state so we can mutate without re-rendering React endlessly
  const angleRef = useRef(0);
  const scaleRef = useRef(1);
  
  const scaleProgressRef = useRef(0);
  const velocityProgressRef = useRef(0);
  const rewindStartAngleRef = useRef(0);
  const rewindStartScaleProgressRef = useRef(0);
  
  const fw1Ref = useRef(null);
  const fw2Ref = useRef(null);
  
  // Timing references
  const lastFrameTimeRef = useRef(null);
  const wasHoveredRef = useRef(false);

  useEffect(() => {
    let animationFrameId;

    const animate = (time) => {
      if (!lastFrameTimeRef.current) lastFrameTimeRef.current = time;
      const deltaTime = time - lastFrameTimeRef.current;
      lastFrameTimeRef.current = time;

      if (isHovered) {
        wasHoveredRef.current = true;
        
        // 1. Accelerate scale progress over 15 seconds
        scaleProgressRef.current = Math.min(1, scaleProgressRef.current + (deltaTime / 15000));
        
        // 2. Accelerate velocity progress over 5 seconds
        velocityProgressRef.current = Math.min(1, velocityProgressRef.current + (deltaTime / 5000));
        
        // 3. Apply velocity to angle
        const maxVelocityPerSec = 300; 
        const currentVelocityPerSec = maxVelocityPerSec * (velocityProgressRef.current * velocityProgressRef.current);
        angleRef.current += currentVelocityPerSec * (deltaTime / 1000);
        
      } else {
        if (wasHoveredRef.current) {
          // Just un-hovered! Capture exact moment for smooth rewind
          wasHoveredRef.current = false;
          
          // Chop off massive rotation multiples so we only rewind the visual remainder (0 to 360)
          angleRef.current = angleRef.current % 360;
          if (angleRef.current < 0) angleRef.current += 360;
          
          rewindStartAngleRef.current = angleRef.current;
          rewindStartScaleProgressRef.current = scaleProgressRef.current;
        }
        
        // 1. Decelerate scale progress (full shrink takes 2 seconds)
        scaleProgressRef.current = Math.max(0, scaleProgressRef.current - (deltaTime / 2000));
        
        // 2. Tie the angle rewind perfectly to the scale shrink so they finish at exact same time
        if (rewindStartScaleProgressRef.current > 0) {
          const ratio = scaleProgressRef.current / rewindStartScaleProgressRef.current; // Goes from 1.0 down to 0.0
          // For a softer rewind, we can optionally use an ease function here, but ratio already eases out smoothly!
          angleRef.current = rewindStartAngleRef.current * ratio;
        } else {
          angleRef.current = 0;
        }
        
        // 3. Kill velocity so if we re-hover, it has to accelerate from 0 again
        velocityProgressRef.current = 0;
      }
      
      // Calculate actual scale using quadratic ease-in
      const targetScale = 20;
      const easeScale = scaleProgressRef.current * scaleProgressRef.current;
      scaleRef.current = 1 + (targetScale - 1) * easeScale;

      // Apply transforms directly to the DOM for 60fps buttery smoothness
      if (fw1Ref.current) {
        fw1Ref.current.style.transform = `rotate(${angleRef.current}deg) scale(${scaleRef.current})`;
      }
      if (fw2Ref.current) {
        fw2Ref.current.style.transform = `rotate(${angleRef.current}deg)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div className="page-container fade-in">
      <header className="page-header">
        <h1>The Strategic Flywheel</h1>
        <p>A cyclical model for embedding Good-Green Work</p>
      </header>
      
      <main className="main-content">
        <div className="flywheel-stack-container">
          <img 
            src={fw3} 
            className="fw-layer fw3" 
            alt="Background Flywheel Layer" 
          />
          <img 
            ref={fw2Ref}
            src={fw2} 
            className="fw-layer fw2" 
            alt="Rotating Flywheel Layer" 
          />
          <img 
            src={fw4} 
            className="fw-layer fw4" 
            alt="Static Flywheel Layer" 
          />
          <img 
            ref={fw1Ref}
            src={fw1} 
            className="fw-layer fw1" 
            alt="Central Flywheel Hub" 
          />
          <img 
            src={fw0} 
            className="fw-layer fw0" 
            alt="Static Central Hub Overlay" 
          />
          {/* Invisible target that only covers the center for hover events */}
          <div 
            className="fw-hover-target"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </main>
    </div>
  );
};

export default StrategicFlywheel;
