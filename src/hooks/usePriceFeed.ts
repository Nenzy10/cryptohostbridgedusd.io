import { useEffect, useRef, useState } from "react";
export type PricePoint = { t: number; price: number };

export function usePriceFeed(url: string, pollMs = 15000, maxPoints = 120) {
  const [data, setData] = useState<PricePoint[]>([]);
  const baseline = useRef<number | null>(null);

  useEffect(() => {
    let timer: any, mounted = true;
    const poll = async () => {
      try {
        const r = await fetch(url, { cache: "no-store" });
        const j = await r.json();
        const p = parseFloat(j.price_usd); if (!isFinite(p)) return;
        const t = j.last_updated ? Date.parse(j.last_updated) : Date.now();
        if (baseline.current == null) baseline.current = p;
        setData((prev) => [...prev, { t, price: p }].slice(-maxPoints));
      } catch {} finally { if (mounted) timer = setTimeout(poll, pollMs); }
    };
    poll();
    return () => { mounted = false; if (timer) clearTimeout(timer); };
  }, [url, pollMs, maxPoints]);

  const latest = data.length ? data[data.length - 1].price : null;
  const base = baseline.current ?? latest ?? null;
  const changePct = latest != null && base != null ? ((latest - base) / base) * 100 : 0;

  return { data, latest, changePct };
}
