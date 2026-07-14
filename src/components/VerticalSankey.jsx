import React from 'react';

// Vertical sankey for one workforce transition (year t at the top flowing to
// year t+1 at the bottom). Stayers run down the centre; leaver ribbons branch
// to destination bars on the right margin; joiner ribbons enter from origin
// bars on the left margin. All widths are proportional to weighted headcounts
// supplied by the pre-aggregated data cell; no statistics are computed here.

const W = 900;
const H = 640;
const BAR_H = 16;
const TOP_Y = 56;
const BOT_Y = H - 64;
const MAX_BAND = 380;      // px width of the largest stock bar
const MIN_SEG = 3;         // px floor so small flows stay visible
const MARGIN_BAR_W = 150;  // px length of margin node bars

// Ribbon between a horizontal source edge (sx0-sx1 at ys) and a horizontal
// target edge (tx0-tx1 at yt), with vertical tangents at both ends.
function ribbon(sx0, sx1, ys, tx0, tx1, yt) {
  const ym = (ys + yt) / 2;
  return `M ${sx0},${ys} C ${sx0},${ym} ${tx0},${ym} ${tx0},${yt} ` +
         `L ${tx1},${yt} C ${tx1},${ym} ${sx1},${ym} ${sx1},${ys} Z`;
}

function VerticalSankey({ cell }) {
  const { stayPct, leavers, joiners, stockT, stockT1 } = cell;
  const px = MAX_BAND / Math.max(stockT, stockT1); // pixels per weighted person

  const stayW = Math.max(stockT * px * (stayPct / 100), MIN_SEG);
  const stayX0 = (W - stayW) / 2;

  // Top bar: stay segment + leaver segments appended rightward.
  // Bottom bar: joiner segments appended leftward of the stay segment.
  const leaverSegs = [];
  let cursor = stayX0 + stayW;
  leavers.forEach((row) => {
    const w = Math.max(row.w * px, MIN_SEG);
    leaverSegs.push({ ...row, x0: cursor, x1: cursor + w });
    cursor += w;
  });
  const topBarX0 = stayX0;
  const topBarX1 = cursor;

  const joinerSegs = [];
  cursor = stayX0;
  joiners.forEach((row) => {
    const w = Math.max(row.w * px, MIN_SEG);
    joinerSegs.push({ ...row, x0: cursor - w, x1: cursor });
    cursor -= w;
  });
  const botBarX0 = cursor;
  const botBarX1 = stayX0 + stayW;

  // Margin bars: destinations on the right, origins on the left.
  const destYs = leaverSegs.map((_, i) =>
    160 + (i * (H - 320)) / Math.max(leaverSegs.length - 1, 1));
  const originYs = joinerSegs.map((_, i) =>
    160 + (i * (H - 320)) / Math.max(joinerSegs.length - 1, 1));
  const destX = W - MARGIN_BAR_W - 8;
  const originX = 8;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      role="img"
      aria-label="Workforce flow diagram: stayers, leavers and joiners between year t and year t+1"
    >
      {/* stayer ribbon */}
      <path
        className="sankey-ribbon-stay"
        d={ribbon(stayX0, stayX0 + stayW, TOP_Y + BAR_H, stayX0, stayX0 + stayW, BOT_Y)}
      />

      {/* leaver ribbons: top bar segment -> right margin bar */}
      {leaverSegs.map((seg, i) => {
        const barW = Math.max(seg.x1 - seg.x0, MIN_SEG);
        const bx0 = destX;
        const bx1 = destX + Math.min(barW, MARGIN_BAR_W);
        return (
          <g key={`l${i}`}>
            <path
              className="sankey-ribbon-out"
              d={ribbon(seg.x0, seg.x1, TOP_Y + BAR_H, bx0, bx1, destYs[i])}
            />
            <rect className="sankey-node out" x={bx0} y={destYs[i]} width={bx1 - bx0} height={8} rx={2} />
            <text className="sankey-node-label" x={destX} y={destYs[i] + 24} textAnchor="start">
              {seg.label} · {seg.pct}%
            </text>
          </g>
        );
      })}

      {/* joiner ribbons: left margin bar -> bottom bar segment */}
      {joinerSegs.map((seg, i) => {
        const barW = Math.max(seg.x1 - seg.x0, MIN_SEG);
        const bx0 = originX;
        const bx1 = originX + Math.min(barW, MARGIN_BAR_W);
        return (
          <g key={`j${i}`}>
            <path
              className="sankey-ribbon-in"
              d={ribbon(bx0, bx1, originYs[i] + 8, seg.x0, seg.x1, BOT_Y)}
            />
            <rect className="sankey-node in" x={bx0} y={originYs[i]} width={bx1 - bx0} height={8} rx={2} />
            <text className="sankey-node-label" x={originX} y={originYs[i] - 8} textAnchor="start">
              {seg.label} · {seg.pct}%
            </text>
          </g>
        );
      })}

      {/* stock bars */}
      <rect className="sankey-node stock" x={topBarX0} y={TOP_Y} width={topBarX1 - topBarX0} height={BAR_H} rx={3} />
      <rect className="sankey-node stock" x={botBarX0} y={BOT_Y} width={botBarX1 - botBarX0} height={BAR_H} rx={3} />
      <text className="sankey-stock-label" x={topBarX0} y={TOP_Y - 12} textAnchor="start">
        Construction, year t
      </text>
      <text className="sankey-stock-label" x={botBarX0} y={BOT_Y + BAR_H + 24} textAnchor="start">
        Construction, year t+1
      </text>
      <text className="sankey-stay-label" x={W / 2} y={(TOP_Y + BOT_Y) / 2} textAnchor="middle">
        {cell.stayPct}% stay
      </text>
    </svg>
  );
}

export default VerticalSankey;
