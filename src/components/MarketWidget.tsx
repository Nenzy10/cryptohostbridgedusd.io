import React, { useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PRICE_FEED_URL } from "@/lib/constants";
import { usePriceFeed } from "@/hooks/usePriceFeed";

type P = { x: number; y: number };

export default function MarketWidget() {
  const { data, latest, changePct } = usePriceFeed(PRICE_FEED_URL, 15000, 120);

  // chart layout
  const W = 720, H = 220, PAD = 16;
  const innerW = W - PAD * 2, innerH = H - PAD * 2;

  const { pathD, points, min, max } = useMemo(() => {
    if (data.length === 0) return { pathD: "", points: [] as P[], min: 0, max: 0 };
    const prices = data.map((d) => d.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const span = max - min || 1e-9;

    const pts: P[] = data.map((d, i) => {
      const x = PAD + (i / Math.max(1, data.length - 1)) * innerW;
      const y = PAD + (1 - (d.price - min) / span) * innerH;
      return { x, y };
    });

    const d = pts.reduce((acc, p, i) => acc + (i ? ` L ${p.x} ${p.y}` : `M ${p.x} ${p.y}`), "");
    return { pathD: d, points: pts, min, max };
  }, [data]);

  // simple hover tooltip
  const [hover, setHover] = useState<{ i: number; cx: number; cy: number } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  function onMove(e: React.MouseEvent<SVGSVGElement>) {
    if (!svgRef.current || points.length === 0) return;
    const rect = svgRef.current.getBoundingClientRect();
    const xRel = e.clientX - rect.left - PAD;
    const i = Math.round((xRel / innerW) * (points.length - 1));
    const clamped = Math.max(0, Math.min(points.length - 1, i));
    const p = points[clamped];
    setHover({ i: clamped, cx: p.x, cy: p.y });
  }
  function onLeave() { setHover(null); }

  // helpers
  const fmt = (n: number) => `$${n.toFixed(4)}`;
  const latestStr = latest != null ? fmt(latest) : "—";

  return (
    <Card className="rounded-2xl border bg-background/60 backdrop-blur">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Market</span>
          <span className="text-xs font-medium text-muted-foreground">Live feed</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-4 mb-4">
          <div className="text-3xl font-bold">{latestStr}</div>
          <div
            className={`text-sm ${changePct >= 0 ? "text-emerald-500" : "text-red-500"}`}
            title="Change since you opened the page"
          >
            {changePct >= 0 ? "+" : ""}{changePct.toFixed(2)}%
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-56"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
          >
            {/* grid */}
            <g stroke="currentColor" opacity="0.12">
              {[0, 0.25, 0.5, 0.75, 1].map((t) => (
                <line key={t} x1={PAD} x2={W - PAD} y1={PAD + t * innerH} y2={PAD + t * innerH} />
              ))}
            </g>

            {/* area gradient */}
            <defs>
              <linearGradient id="cusdLine" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* line */}
            {pathD && (
              <path d={pathD} fill="none" stroke="url(#cusdLine)" strokeWidth="2.5" strokeLinejoin="round" />
            )}

            {/* hover cursor */}
            {hover && (
              <g>
                <line
                  x1={hover.cx} x2={hover.cx}
                  y1={PAD} y2={H - PAD}
                  stroke="currentColor" opacity="0.25"
                />
                <circle cx={hover.cx} cy={hover.cy} r="3.5" fill="hsl(var(--primary))" />
              </g>
            )}
          </svg>
        </div>

        {/* min/max legend */}
        {data.length > 0 && (
          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>Low: {fmt(min)}</span>
            <span>High: {fmt(max)}</span>
            <span>
              Source:{" "}
              <a className="underline" href={PRICE_FEED_URL} target="_blank" rel="noreferrer">
                {PRICE_FEED_URL}
              </a>
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
