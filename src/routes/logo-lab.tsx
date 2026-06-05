import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/logo-lab")({
  head: () => ({
    meta: [
      { title: "Logo Lab — NiceOneFlow" },
      { name: "description", content: "Návrhy loga, písma a kombinací pro NiceOneFlow." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Sora:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&family=DM+Serif+Display&family=Instrument+Serif&family=Archivo+Black&family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: LogoLab,
});

/* ----------------------------- MARK PIECES ----------------------------- */

function MarkHouseFlow({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V8l8-5 8 5v12" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}
function MarkFlowN({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M4 20V4l16 16V4" />
    </svg>
  );
}
function MarkDiamond({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
      <path d="M12 2l10 10-10 10L2 12z" />
      <path d="M12 7l5 5-5 5-5-5z" />
    </svg>
  );
}
function MarkArrowDot({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="12" r="2.4" fill="currentColor" stroke="none" />
      <path d="M10 12h10M16 8l4 4-4 4" />
    </svg>
  );
}
function MarkWave({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M2 14c3 0 3-4 6-4s3 4 6 4 3-4 6-4 2 2 2 2" />
    </svg>
  );
}
function MarkGrid({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" opacity="0.55" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" opacity="0.55" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  );
}
function MarkCircleN({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} fill="none">
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="2" />
      <path d="M9 19V9l10 10V9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
function MarkBolt({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M13 2L3 14h7l-1 8 11-14h-7z" />
    </svg>
  );
}
function MarkBuilding({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" strokeLinecap="round" />
    </svg>
  );
}
function MarkOrbit({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="14" cy="14" r="4" fill="currentColor" />
      <ellipse cx="14" cy="14" rx="12" ry="6" />
    </svg>
  );
}
function MarkCheckSq({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  );
}
function MarkSlash({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M6 20L18 4" />
      <circle cx="6" cy="20" r="2" fill="currentColor" stroke="none" />
      <circle cx="18" cy="4" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

const MARKS = [
  { Comp: MarkHouseFlow, name: "House+flow" },
  { Comp: MarkFlowN, name: "Flow N" },
  { Comp: MarkDiamond, name: "Diamond" },
  { Comp: MarkArrowDot, name: "Arrow dot" },
  { Comp: MarkWave, name: "Wave" },
  { Comp: MarkGrid, name: "Grid 4" },
  { Comp: MarkCircleN, name: "Circle N" },
  { Comp: MarkBolt, name: "Bolt" },
  { Comp: MarkBuilding, name: "Building" },
  { Comp: MarkOrbit, name: "Orbit" },
  { Comp: MarkCheckSq, name: "Check sq" },
  { Comp: MarkSlash, name: "Slash" },
];

/* ----------------------------- SHELL ----------------------------- */

function Card({
  index,
  label,
  bg = "bg-surface",
  children,
}: {
  index: number;
  label: string;
  bg?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border overflow-hidden flex flex-col">
      <div className={`flex-1 grid place-items-center px-6 py-10 ${bg} min-h-[180px]`}>
        {children}
      </div>
      <div className="px-4 py-2.5 border-t border-border flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-background/40">
        <span className="text-brand">#{String(index).padStart(2, "0")}</span>
        <span>{label}</span>
      </div>
    </div>
  );
}

function Section({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-[11px] font-mono uppercase tracking-widest text-brand">{eyebrow}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mt-2">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {children}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- LOGO MARKS (20) ----------------------------- */

function LogoMarks() {
  // 20 self-contained mark designs.
  const items: { name: string; node: ReactNode; bg?: string }[] = [
    { name: "Mono tile", node: <div className="size-16 rounded-xl bg-brand grid place-items-center text-brand-foreground"><MarkHouseFlow size={32} /></div> },
    { name: "Outline tile", node: <div className="size-16 rounded-xl border-2 border-brand grid place-items-center text-brand"><MarkFlowN size={32} /></div> },
    { name: "Circle solid", node: <div className="size-16 rounded-full bg-brand grid place-items-center text-brand-foreground"><MarkArrowDot size={30} /></div> },
    { name: "Diamond cut", node: <div className="size-16 rotate-45 bg-brand grid place-items-center text-brand-foreground"><div className="-rotate-45"><MarkDiamond size={28} /></div></div> },
    { name: "Glass blur", bg: "bg-gradient-to-br from-brand/30 to-brand/5", node: <div className="size-16 rounded-2xl bg-background/40 backdrop-blur-xl border border-white/10 grid place-items-center text-brand"><MarkWave size={32} /></div> },
    { name: "Mono N", node: <div className="text-brand font-display font-black text-5xl leading-none tracking-tighter">N<span className="text-brand/40">F</span></div> },
    { name: "Stamp", node: <div className="size-16 rounded-md border-2 border-foreground grid place-items-center text-foreground"><MarkCheckSq size={30} /></div> },
    { name: "Soft chip", node: <div className="px-4 h-12 rounded-full bg-brand/15 text-brand grid place-items-center"><MarkOrbit size={26} /></div> },
    { name: "Stacked", node: <div className="flex flex-col items-center gap-1 text-brand"><MarkBolt size={26} /><div className="h-0.5 w-8 bg-brand/40 rounded-full" /></div> },
    { name: "Cut corner", node: <div className="size-16 bg-brand text-brand-foreground grid place-items-center" style={{ clipPath: "polygon(0 0,100% 0,100% 75%,75% 100%,0 100%)" }}><MarkBuilding size={28} /></div> },
    { name: "Ring", node: <div className="size-16 rounded-full border-[3px] border-brand grid place-items-center text-brand"><MarkSlash size={26} /></div> },
    { name: "Dual tone", node: <div className="size-16 rounded-xl overflow-hidden grid grid-cols-2"><div className="bg-brand" /><div className="bg-foreground/90" /></div> },
    { name: "Wordmark N", node: <div className="font-display font-black text-6xl text-brand leading-none tracking-tighter">n.</div> },
    { name: "Pixel", node: <div className="grid grid-cols-3 gap-1"><div className="size-3 bg-brand" /><div className="size-3 bg-brand" /><div className="size-3 bg-brand/30" /><div className="size-3 bg-brand/30" /><div className="size-3 bg-brand" /><div className="size-3 bg-brand" /><div className="size-3 bg-brand" /><div className="size-3 bg-brand/30" /><div className="size-3 bg-brand" /></div> },
    { name: "Outline circle", node: <div className="relative size-16"><div className="absolute inset-0 rounded-full border border-brand" /><div className="absolute inset-2 rounded-full border border-brand/60" /><div className="absolute inset-0 grid place-items-center text-brand"><MarkFlowN size={24} /></div></div> },
    { name: "Brand gradient", node: <div className="size-16 rounded-2xl grid place-items-center text-white" style={{ background: "linear-gradient(135deg, var(--brand) 0%, color-mix(in oklab, var(--brand) 60%, white 40%) 100%)" }}><MarkHouseFlow size={30} /></div> },
    { name: "Serif initial", node: <div className="size-16 rounded-full bg-foreground text-background grid place-items-center" style={{ fontFamily: "'Fraunces', serif", fontWeight: 800, fontSize: 36 }}>n</div> },
    { name: "Mono brackets", node: <div className="font-mono text-brand text-3xl tracking-tight">[ <span className="text-foreground">nf</span> ]</div> },
    { name: "Hex tile", node: <div className="text-brand"><svg width="64" height="64" viewBox="0 0 64 64"><polygon points="32,4 58,18 58,46 32,60 6,46 6,18" fill="currentColor" /><g fill="var(--brand-foreground, white)" transform="translate(20,20)"><MarkFlowN size={24} /></g></svg></div> },
    { name: "Underscore", node: <div className="flex flex-col items-center gap-1"><div className="font-display font-bold text-3xl text-foreground tracking-tight">nf</div><div className="h-1 w-10 bg-brand rounded-full" /></div> },
  ];

  return (
    <Section eyebrow="20 návrhů loga" title="Logo marks.">
      {items.map((it, i) => (
        <Card key={i} index={i + 1} label={it.name} bg={it.bg}>{it.node}</Card>
      ))}
    </Section>
  );
}

/* ----------------------------- WORDMARKS (20) ----------------------------- */

function Wordmarks() {
  const items: { name: string; node: ReactNode; bg?: string }[] = [
    { name: "Sora bold", node: <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 36, letterSpacing: "-0.03em" }}>niceone<span className="text-brand">flow</span></span> },
    { name: "Inter black", node: <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: 34, letterSpacing: "-0.04em" }}>NiceOne<span className="text-brand">Flow</span></span> },
    { name: "Mono cap", node: <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: 22, letterSpacing: "0.02em" }} className="uppercase">niceone<span className="text-brand">·flow</span></span> },
    { name: "Serif display", node: <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 40, letterSpacing: "-0.02em" }}>NiceOne<em className="text-brand not-italic">flow</em></span> },
    { name: "Fraunces italic", node: <span style={{ fontFamily: "Fraunces, serif", fontWeight: 600, fontStyle: "italic", fontSize: 38 }}>niceone<span className="text-brand">flow</span></span> },
    { name: "Space Grotesk", node: <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 34, letterSpacing: "-0.02em" }}>niceone<span className="text-brand">flow</span>.</span> },
    { name: "Stacked", node: <div className="text-left leading-[0.85]"><div className="font-display font-black text-3xl tracking-tight">niceone</div><div className="font-display font-black text-3xl tracking-tight text-brand">flow</div></div> },
    { name: "Underline accent", node: <span className="relative font-display font-bold text-4xl tracking-tight">niceoneflow<span className="absolute -bottom-1 left-0 h-1 w-full bg-brand/70 rounded-full" /></span> },
    { name: "Bracketed", node: <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: 22 }} className="text-foreground">&lt;niceone<span className="text-brand">flow</span>/&gt;</span> },
    { name: "Outfit thin/bold", node: <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 34, letterSpacing: "-0.02em" }}><span style={{ fontWeight: 300 }}>niceone</span><span style={{ fontWeight: 800 }} className="text-brand">flow</span></span> },
    { name: "Bebas tall", node: <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 44, letterSpacing: "0.04em" }}>NICEONE<span className="text-brand">FLOW</span></span> },
    { name: "Archivo black", node: <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 28, letterSpacing: "-0.03em" }} className="uppercase">niceone<span className="text-brand">flow</span></span> },
    { name: "Instrument serif", node: <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 44, letterSpacing: "-0.01em" }}>niceone<em className="text-brand">flow</em></span> },
    { name: "Manrope tight", node: <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 32, letterSpacing: "-0.05em" }}>niceone<span className="text-brand">flow</span></span> },
    { name: "Lowercase dot", node: <span className="font-display font-black text-4xl tracking-tighter lowercase">niceoneflow<span className="text-brand">.</span></span> },
    { name: "Syne wide", node: <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 32 }}>Nice One <span className="text-brand">Flow</span></span> },
    { name: "Space Mono", node: <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 24 }}>niceone_<span className="text-brand">flow</span></span> },
    { name: "Caps + line", node: <div className="flex items-center gap-3"><span className="font-mono uppercase tracking-[0.3em] text-xs text-muted-foreground">facility</span><span className="h-px w-6 bg-border" /><span className="font-display font-bold text-2xl">niceone<span className="text-brand">flow</span></span></div> },
    { name: "Two-line serif", node: <div className="text-left leading-tight" style={{ fontFamily: "Fraunces, serif" }}><div className="text-2xl text-muted-foreground">niceone</div><div className="text-4xl font-bold text-brand">flow.</div></div> },
    { name: "Gradient fill", node: <span className="font-display font-black text-4xl tracking-tighter bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, var(--foreground) 0%, var(--foreground) 55%, var(--brand) 55%, var(--brand) 100%)" }}>niceoneflow</span> },
  ];

  return (
    <Section eyebrow="20 návrhů písma" title="Wordmarks.">
      {items.map((it, i) => (
        <Card key={i} index={i + 1} label={it.name} bg={it.bg}>{it.node}</Card>
      ))}
    </Section>
  );
}

/* ----------------------------- COMBOS (20) ----------------------------- */

function Combos() {
  const word = (
    <span className="font-display font-bold text-2xl tracking-tight">
      niceone<span className="text-brand">flow</span>
    </span>
  );

  const items: { name: string; node: ReactNode; bg?: string }[] = MARKS.flatMap((m, i) => {
    const M = m.Comp;
    return [
      {
        name: `Tile + word — ${m.name}`,
        node: (
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-brand grid place-items-center text-brand-foreground"><M size={22} /></div>
            {word}
          </div>
        ),
      },
      {
        name: `Word + chip — ${m.name}`,
        node: (
          <div className="flex items-center gap-3">
            {word}
            <div className="size-9 rounded-full bg-brand/15 text-brand grid place-items-center"><M size={18} /></div>
          </div>
        ),
      },
    ];
  });

  // Pick a curated 20 (mix of left mark + right mark + integrated)
  const curated = items.slice(0, 12);

  // Integrated combos (mark replaces a letter / sits inside the word)
  const integrated: { name: string; node: ReactNode; bg?: string }[] = [
    {
      name: "Mark replaces 'o'",
      node: (
        <span className="font-display font-bold text-3xl tracking-tight inline-flex items-center gap-0.5">
          nice
          <span className="inline-grid place-items-center size-7 rounded-full bg-brand text-brand-foreground"><MarkHouseFlow size={16} /></span>
          ne<span className="text-brand">flow</span>
        </span>
      ),
    },
    {
      name: "Bolt inside flow",
      node: (
        <span className="font-display font-bold text-3xl tracking-tight inline-flex items-center">
          niceone<span className="text-brand inline-flex items-center">f<MarkBolt size={22} />ow</span>
        </span>
      ),
    },
    {
      name: "Brand brackets",
      node: (
        <span className="font-display font-bold text-3xl tracking-tight inline-flex items-center gap-2">
          <span className="text-brand text-4xl leading-none">[</span>
          niceoneflow
          <span className="text-brand text-4xl leading-none">]</span>
        </span>
      ),
    },
    {
      name: "Mark as dot",
      node: (
        <span className="font-display font-bold text-3xl tracking-tighter inline-flex items-baseline gap-1">
          niceoneflow
          <span className="size-3 rounded-full bg-brand inline-block translate-y-[-2px]" />
        </span>
      ),
    },
    {
      name: "Stacked w/ ring",
      node: (
        <div className="flex items-center gap-3">
          <div className="relative size-12 grid place-items-center"><div className="absolute inset-0 rounded-full border border-brand" /><MarkFlowN size={22} /></div>
          <div className="leading-tight">
            <div className="font-display font-black text-xl text-foreground tracking-tight">niceone</div>
            <div className="font-display font-black text-xl text-brand tracking-tight">flow</div>
          </div>
        </div>
      ),
    },
    {
      name: "Wave underline",
      node: (
        <div className="flex flex-col items-start gap-1">
          {word}
          <svg width="120" height="8" viewBox="0 0 120 8" className="text-brand"><path d="M2 4 Q15 -2 30 4 T60 4 T90 4 T118 4" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
        </div>
      ),
    },
    {
      name: "Slash divider",
      node: (
        <div className="flex items-center gap-3 font-display font-bold text-2xl tracking-tight">
          niceone<span className="text-brand text-3xl">/</span>flow
        </div>
      ),
    },
    {
      name: "Square + serif",
      node: (
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-sm bg-foreground text-background grid place-items-center" style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 22 }}>n</div>
          <span style={{ fontFamily: "Fraunces, serif", fontWeight: 600, fontSize: 26 }}>niceone<em className="text-brand">flow</em></span>
        </div>
      ),
    },
  ];

  const all = [...curated, ...integrated];

  return (
    <Section eyebrow="20 kombinací loga + písma" title="Lockups.">
      {all.map((it, i) => (
        <Card key={i} index={i + 1} label={it.name} bg={it.bg}>{it.node}</Card>
      ))}
    </Section>
  );
}

/* ----------------------------- PAGE ----------------------------- */

function LogoLab() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="size-7 rounded-md bg-brand grid place-items-center text-brand-foreground">
              <MarkHouseFlow size={16} />
            </div>
            <span className="font-display font-bold tracking-tight">
              niceone<span className="text-brand">flow</span>
            </span>
          </a>
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            Logo Lab · 60 návrhů
          </span>
        </div>
      </header>

      <section className="py-24 px-6 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-brand">Identity exploration</span>
        <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mt-3 text-balance max-w-3xl mx-auto">
          Vyber si směr. <span className="text-brand">60 verzí loga.</span>
        </h1>
        <p className="text-muted-foreground mt-5 max-w-xl mx-auto">
          20 značek (mark), 20 verzí písma (wordmark) a 20 kombinací. Klikni na to, co tě nejvíc chytne, a doladíme to do finální podoby.
        </p>
      </section>

      <LogoMarks />
      <Wordmarks />
      <Combos />

      <footer className="py-12 px-6 border-t border-border text-center text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
        Řekni mi číslo varianty (např. „marks #07 + wordmark #13 + lockup #04") a dotáhnu to.
      </footer>
    </div>
  );
}
