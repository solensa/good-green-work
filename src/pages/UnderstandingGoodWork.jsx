import React, { useState, useEffect, useRef, useCallback } from 'react';
import { mechanisms, mechanismSections } from '../data/mechanisms';
import './UnderstandingGoodWork.css';

// Diagrams are inlined rather than embedded via <img> so the page webfont
// applies to their text, matching the approach used on the motivation map.
// Fetched markup is cached so opening the modal does not refetch.
const cache = new Map();

const useDiagram = (id) => {
  const [svg, setSvg] = useState(() => cache.get(id) || '');

  useEffect(() => {
    if (!id || cache.has(id)) {
      setSvg(cache.get(id) || '');
      return undefined;
    }
    let alive = true;
    fetch(`${import.meta.env.BASE_URL}mechanisms/${id}.svg`)
      .then((r) => (r.ok ? r.text() : ''))
      .then((text) => {
        cache.set(id, text);
        if (alive) setSvg(text);
      })
      .catch(() => {
        cache.set(id, '');
        if (alive) setSvg('');
      });
    return () => {
      alive = false;
    };
  }, [id]);

  return svg;
};

const Diagram = ({ id, name, className }) => {
  const svg = useDiagram(id);
  if (!svg) {
    return <div className={`${className} ugw-diagram-missing`}>Diagram to follow</div>;
  }
  return (
    <div
      className={className}
      role="img"
      aria-label={`${name} diagram`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

const MechanismModal = ({ mechanism, onClose }) => {
  const closeRef = useRef(null);
  const section = mechanismSections.find((s) => s.id === mechanism.section);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="ugw-overlay" onClick={onClose}>
      <div
        className="ugw-modal"
        role="dialog"
        aria-modal="true"
        aria-label={mechanism.name}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="ugw-close"
          onClick={onClose}
          ref={closeRef}
          aria-label="Close"
        >
          ×
        </button>

        <div className="ugw-modal-head">
          {section && <span className="ugw-tag">{section.name}</span>}
          <h2>{mechanism.name}</h2>
          <p className="ugw-byline">{mechanism.byline}</p>
          <p className="ugw-claim">{mechanism.claim}</p>
        </div>

        <Diagram id={mechanism.id} name={mechanism.name} className="ugw-modal-diagram" />

        <div className="ugw-modal-body">
          {mechanism.description.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const UnderstandingGoodWork = () => {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <div className="ugw-page">
      <header className="ugw-header">
        <h1>Understanding Good Work</h1>
        <p>
          The mechanisms that link work to the people who do it, from the features of a
          job through to what it leaves behind. Select any diagram to see it larger,
          with what it claims and where it came from.
        </p>
      </header>

      {mechanismSections.map((section) => {
        const items = mechanisms.filter((m) => m.section === section.id);
        if (!items.length) return null;
        return (
          <section key={section.id} className="ugw-group">
            <div className="ugw-group-head">
              <h2>{section.name}</h2>
              <p>{section.blurb}</p>
            </div>
            <div className="ugw-grid">
              {items.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className="ugw-card"
                  onClick={() => setSelected(m)}
                >
                  <Diagram id={m.id} name={m.name} className="ugw-card-diagram" />
                  <span className="ugw-card-meta">
                    <span className="ugw-card-name">{m.name}</span>
                    <span className="ugw-card-byline">{m.byline}</span>
                  </span>
                </button>
              ))}
            </div>
          </section>
        );
      })}

      {selected && <MechanismModal mechanism={selected} onClose={close} />}
    </div>
  );
};

export default UnderstandingGoodWork;
