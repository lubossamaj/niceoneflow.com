import { useEffect, useRef, useState } from "react";

// Intensity presets per section. Sections can opt-in by adding
// `data-glow="soft" | "normal" | "strong" | "off"` on a wrapping element.
// The glow walks up the DOM from the cursor and uses the nearest match.
const INTENSITY: Record<string, { aura: number; core: number }> = {
  off: { aura: 0, core: 0 },
  soft: { aura: 0.28, core: 0.32 },   // light / bright backgrounds
  normal: { aura: 0.62, core: 0.68 }, // default dark surfaces
  strong: { aura: 0.78, core: 0.82 }, // muted / textured dark sections
};

export function CursorGlow() {
  const auraRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const targetIntensity = useRef(INTENSITY.normal);
  const currentIntensity = useRef({ aura: 0, core: 0 });
  const raf = useRef<number | null>(null);
  const lastSample = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    current.current = { ...target.current };

    const onMove = (e: PointerEvent | MouseEvent) => {
      setEnabled(true);
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const sampleIntensity = (x: number, y: number) => {
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      if (!el) return;
      const match = el.closest<HTMLElement>("[data-glow]");
      const key = match?.dataset.glow ?? "normal";
      targetIntensity.current = INTENSITY[key] ?? INTENSITY.normal;
    };

    const tick = (t: number) => {
      current.current.x += (target.current.x - current.current.x) * 0.24;
      current.current.y += (target.current.y - current.current.y) * 0.24;

      // Sample under-cursor section ~10x/sec to keep it cheap.
      if (t - lastSample.current > 90) {
        lastSample.current = t;
        sampleIntensity(target.current.x, target.current.y);
      }
      // Ease intensity toward target so transitions are smooth.
      currentIntensity.current.aura +=
        (targetIntensity.current.aura - currentIntensity.current.aura) * 0.12;
      currentIntensity.current.core +=
        (targetIntensity.current.core - currentIntensity.current.core) * 0.12;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${current.current.x - 170}px, ${current.current.y - 170}px, 0)`;
        auraRef.current.style.opacity = String(currentIntensity.current.aura);
      }
      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${target.current.x - 34}px, ${target.current.y - 34}px, 0)`;
        coreRef.current.style.opacity = String(currentIntensity.current.core);
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={auraRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 size-[340px] rounded-full"
        style={{
          zIndex: 2147483646,
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand) 58%, white 42%) 0%, color-mix(in oklab, var(--brand) 34%, transparent) 32%, color-mix(in oklab, var(--brand) 16%, transparent) 54%, transparent 78%)",
          filter: "blur(32px)",
          opacity: 0,
          willChange: "transform, opacity",
        }}
      />
      <div
        ref={coreRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 size-[68px] rounded-full"
        style={{
          zIndex: 2147483647,
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand) 74%, white 26%) 0%, color-mix(in oklab, var(--brand) 38%, transparent) 44%, transparent 74%)",
          boxShadow: "0 0 26px 8px color-mix(in oklab, var(--brand) 30%, transparent)",
          filter: "blur(8px)",
          opacity: 0,
          willChange: "transform, opacity",
        }}
      />
    </>
  );
}
