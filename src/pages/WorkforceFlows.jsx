import React, { useEffect, useMemo, useState } from 'react';
import VerticalSankey from '../components/VerticalSankey';
import './WorkforceFlows.css';

const DIM_ORDER = ['age', 'sex', 'edu', 'eth', 'occ', 'year'];
const DEFAULTS = { age: 'all', sex: 'all', edu: 'all', eth: 'all', occ: 'all', year: 'pooled' };

function FlowMiniList({ title, rows }) {
  return (
    <div className="flow-mini-list">
      <h3>{title}</h3>
      {rows.length === 0 && <p className="low-n-note">No publishable rows for this combination.</p>}
      {rows.map((row, i) => {
        const isResidual = row.label === 'Other';
        return (
          <div className={`flow-mini-row ${isResidual ? 'residual' : ''}`} key={i}>
            <span className="flow-mini-pct">{row.pct.toFixed(1)}%</span>
            <span className="flow-mini-label">
              {isResidual ? 'All other (combined)' : row.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function StatValue({ value, baseline }) {
  return (
    <>
      <div className="flow-stat-value">{value}%</div>
      {baseline != null && <div className="flow-stat-vs">vs {baseline}% all industries</div>}
    </>
  );
}

function FlowStats({ cell, baseline }) {
  return (
    <div className="flow-stats">
      <div className="flow-year-group">
        <div className="flow-year-label">Year t</div>
        <div className="flow-year-cards two">
          <div className="flow-stat-card stay">
            <div className="flow-stat-word">Keep</div>
            <StatValue value={cell.stayPct} baseline={baseline?.stayPct} />
          </div>
          <div className="flow-stat-card leave">
            <div className="flow-stat-word">Lose</div>
            <StatValue value={cell.leavePct} baseline={baseline?.leavePct} />
            <FlowMiniList title="Where leavers go" rows={cell.leavers} />
          </div>
        </div>
      </div>
      <div className="flow-year-group">
        <div className="flow-year-label">Year t+1</div>
        <div className="flow-year-cards">
          <div className="flow-stat-card join">
            <div className="flow-stat-word">Find</div>
            <StatValue value={cell.joinPct} baseline={baseline?.joinPct} />
            <FlowMiniList title="Where joiners come from" rows={cell.joiners} />
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkforceFlows() {
  const [data, setData] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [filters, setFilters] = useState(DEFAULTS);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/workforce-flows.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then(setData)
      .catch(() => setLoadError(true));
  }, []);

  const cell = useMemo(() => {
    if (!data) return null;
    const key = DIM_ORDER.map((d) => filters[d]).join('|');
    return data.cells[key] ?? { s: true };
  }, [data, filters]);

  // All-industry benchmark for the same demographic slice and year, computed
  // in the export and carried on the cell itself.
  const baseline = cell && !cell.s ? cell.bench : null;

  if (loadError) {
    return (
      <div className="page-container fade-in">
        <div className="empty-state">Could not load the flows dataset.</div>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="page-container fade-in">
        <div className="empty-state">Loading workforce flows…</div>
      </div>
    );
  }

  const suppressed = cell.s;

  return (
    <div className="page-container fade-in">
      <header className="page-header">
        <h1>Workforce Population: Joining, Staying and Leaving</h1>
        <p>
          Who stays in, joins and leaves UK construction each year. Data from
          Labour Force Survey five-quarter panels, 2022–2025.
        </p>
      </header>

      {data.meta.fixture && (
        <div className="fixture-banner">
          Placeholder data — for layout development only. Run the local export to
          generate real estimates.
        </div>
      )}

      <main className="main-content">
        <div className="flow-controls">
          {DIM_ORDER.map((dim) => (
            <div className="flow-filter-group" key={dim}>
              <span className="filters-label">{data.meta.dims[dim].label}</span>
              <div className="filter-pills">
                {Object.entries(data.meta.dims[dim].values).map(([slug, label]) => (
                  <button
                    key={slug}
                    className={`filter-pill ${filters[dim] === slug ? 'active' : ''}`}
                    onClick={() => setFilters((f) => ({ ...f, [dim]: slug }))}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {suppressed ? (
          <div className="empty-state">
            <p>
              <strong>Fewer than 10 survey respondents match this combination</strong>,
              so no estimate can be published under the data licence — and none would
              be statistically meaningful.
            </p>
            <p>
              This is itself part of the story: the LFS construction cohort is only a
              few hundred people a year, too small to measure most subgroups of the
              workforce.
            </p>
            <button className="filter-pill" onClick={() => setFilters(DEFAULTS)}>
              Reset filters
            </button>
          </div>
        ) : (
          <>
            <p className="flow-sample-line">
              Sample size: {cell.nC ?? cell.n} worked in construction at their
              first interview and {cell.nW ?? cell.nWf} a year later.
            </p>
            {cell.lowN && (
              <p className="low-n-note">
                Small sample — treat these estimates as indicative only.
              </p>
            )}
            <FlowStats cell={cell} baseline={baseline} />
            <div className="sankey-wrap">
              <VerticalSankey cell={cell} />
            </div>
          </>
        )}

        <div className="source-note">
          <p>{data.meta.source} {data.meta.note}</p>
        </div>
      </main>
    </div>
  );
}

export default WorkforceFlows;
