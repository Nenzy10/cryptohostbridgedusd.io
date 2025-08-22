import { useEffect, useRef, useState } from "react";

export type PricePoint = { t: number; price: number };

export function usePriceFeed(url: string, pollMs = 15000, maxPoints = 120) {
  const [data, setData] = useState<PricePoint[]>([]);
  const baseline = useRef<number | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let mounted = true;

    const poll = async () => {
      try {
        const res = await fetch(url, { cache: "no-store" });
        const feed = (await res.json()) as { price_usd: string; last_updated?: string };
        const p = parseFloat(feed.price_usd);
        if (!isFinite(p)) return;
        const t = feed.last_updated ? Date.parse(feed.last_updated) : Date.now();
        if (baseline.current == null) baseline.current = p;

        setData((prev) => [...prev, { t, price: p }].slice(-maxPoints));
      } catch {
        /* ignore transient errors */
      } finally {
        if (mounted) timer = setTimeout(poll, pollMs);
      }
    };

    poll();
    return () => {
      mounted = false;
      if (timer) clearTimeout(timer);
    };
  }, [url, pollMs, maxPoints]);

  const latest = data.length ? data[data.length - 1].price : null;
  const base = baseline.current ?? latest ?? null;
  const changePct = latest != null && base != null ? ((latest - base) / base) * 100 : 0;

  return { data, latest, changePct };
}
