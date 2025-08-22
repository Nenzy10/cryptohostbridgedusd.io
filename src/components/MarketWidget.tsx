import React, { useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PRICE_FEED_URL } from "@/lib/constants";
import { usePriceFeed } from "@/hooks/usePriceFeed";

export default function MarketWidget() {
  const { data, latest, changePct } = usePriceFeed(PRICE_FEED_URL, 15000, 120);
  const W = 720, H = 220, PAD = 16, innerW = W - PAD * 2, innerH = H - PAD * 2;
  const { pathD, points, min, max } = useMemo(() => {
    if (!data.length) return { pathD: "", points: [] as {x:number;y:number}[], min:0, max:0 };
    const min = Math.min(...data.map(d=>d.price)), max = Math.max(...data.map(d=>d.price));
    const span = max - min || 1e-9;
    const pts = data.map((d,i)=>({
      x: PAD + (i / Math.max(1, data.length - 1)) * innerW,
      y: PAD + (1 - (d.price - min) / span) * innerH
    }));
    const d = pts.reduce((a,p,i)=> a + (i?` L ${p.x} ${p.y}`:`M ${p.x} ${p.y}`), "");
    return { pathD: d, points: pts, min, max };
  }, [data]);
  const [hover,setHover]=useState<{i:number;cx:number;cy:number}|null>(null);
  const svgRef=useRef<SVGSVGElement>(null);
  function onMove(e: React.MouseEvent<SVGSVGElement>) {
    if (!svgRef.current || !points.length) return;
    const r = svgRef.current.getBoundingClientRect();
    const i = Math.round(((e.clientX - r.left - PAD)/innerW) * (points.length-1));
    const idx = Math.max(0, Math.min(points.length-1, i)); const p = points[idx];
    setHover({ i: idx, cx: p.x, cy: p.y });
  }
  const fmt = (n:number)=>`$${n.toFixed(4)}`;
  return (
    <Card className="rounded-2xl border bg-background/60 backdrop-blur">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Market</span><span className="text-xs text-muted-foreground">Live feed</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-4 mb-4">
          <div className="text-3xl font-bold">{latest!=null?fmt(latest):"—"}</div>
          <div className={`text-sm ${changePct>=0?"text-emerald-500":"text-red-500"}`}>
            {changePct>=0?"+":""}{changePct.toFixed(2)}%
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="w-full h-56"
               onMouseMove={onMove} onMouseLeave={()=>setHover(null)}>
            <g stroke="currentColor" opacity="0.12">
              {[0,0.25,0.5,0.75,1].map(t=>(
                <line key={t} x1={PAD} x2={W-PAD} y1={PAD+t*innerH} y2={PAD+t*innerH}/>
              ))}
            </g>
            <defs>
              <linearGradient id="cusdLine" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2"/>
              </linearGradient>
            </defs>
            {pathD && <path d={pathD} fill="none" stroke="url(#cusdLine)" strokeWidth="2.5" strokeLinejoin="round" />}
            {hover && (<g>
              <line x1={hover.cx} x2={hover.cx} y1={PAD} y2={H-PAD} stroke="currentColor" opacity="0.25"/>
              <circle cx={hover.cx} cy={hover.cy} r="3.5" fill="hsl(var(--primary))"/>
            </g>)}
          </svg>
        </div>
        {!!data.length && (
          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>Low: {fmt(min)}</span><span>High: {fmt(max)}</span>
            <span>Source: <a className="underline" href={PRICE_FEED_URL} target="_blank" rel="noreferrer">{PRICE_FEED_URL}</a></span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
