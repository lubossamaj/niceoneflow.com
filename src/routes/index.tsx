import { createFileRoute } from "@tanstack/react-router";
import appDashboard from "@/assets/app-dashboard.png";
import appInspection from "@/assets/app-inspection.png";
import appLogin from "@/assets/app-login.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NiceOneFlow — Facility software pro moderní správu budov" },
      {
        name: "description",
        content:
          "Software pro facility management a technickou údržbu. Kontroly, ticketing, revize a reporty v jednom přehledném prostředí.",
      },
      { property: "og:title", content: "NiceOneFlow — Facility software" },
      {
        property: "og:description",
        content:
          "Moderní platforma pro správu objektů, kontroly a technickou údržbu.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative size-7 rounded-md bg-brand grid place-items-center">
        <svg viewBox="0 0 24 24" className="size-4 text-brand-foreground" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20V8l8-5 8 5v12" />
          <path d="M9 20v-6h6v6" />
        </svg>
      </div>
      <span className="font-display font-bold tracking-tight text-base">
        niceone<span className="text-brand">flow</span>
      </span>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-border bg-[oklch(0.18_0.012_240)] shadow-2xl">
      {/* fake browser chrome */}
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-border bg-surface/80">
        <span className="size-2.5 rounded-full bg-[#ff5f57]/70" />
        <span className="size-2.5 rounded-full bg-[#febc2e]/70" />
        <span className="size-2.5 rounded-full bg-[#28c840]/70" />
        <div className="ml-4 flex-1 h-5 rounded bg-background/60 max-w-xs flex items-center px-3 text-[10px] font-mono text-muted-foreground/70">
          app.niceoneflow.com
        </div>
      </div>
      <img
        src={appDashboard}
        alt="NiceOneFlow dashboard — přehled aktivních kontrol, ticketů a budov"
        className="block w-full h-auto"
        loading="eager"
      />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#produkt" className="hover:text-foreground transition">Produkt</a>
            <a href="#moduly" className="hover:text-foreground transition">Moduly</a>
            <a href="#proces" className="hover:text-foreground transition">Jak to funguje</a>
            <a href="#cenik" className="hover:text-foreground transition">Ceník</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground">
              Přihlásit
            </a>
            <a
              href="#demo"
              className="bg-brand text-brand-foreground text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition"
            >
              Vyžádat demo
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section data-glow="soft" className="relative overflow-hidden">
        {/* glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 size-[800px] rounded-full bg-brand/20 blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse at center top, black, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
          <div className="rise inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-8">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 pulse-dot" />
              <span className="relative inline-flex rounded-full size-2 bg-brand" />
            </span>
            v4 · Live for facility teams
          </div>

          <h1 className="rise font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-balance max-w-5xl mx-auto">
            Facility management,
            <br />
            <span className="text-brand">který konečně dává smysl.</span>
          </h1>

          <p className="rise mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            NiceOneFlow je moderní software pro správu budov, technickou údržbu, kontroly a ticketing — vše v jednom přehledném prostředí.
          </p>

          <div className="rise mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href="#demo"
              className="bg-brand text-brand-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Vyžádat demo →
            </a>
            <a
              href="#produkt"
              className="bg-surface border border-border text-foreground font-medium px-6 py-3 rounded-full hover:bg-surface-2 transition"
            >
              Prohlédnout produkt
            </a>
          </div>

        </div>

        {/* dashboard preview - below the fold */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="rise mt-32 md:mt-48 relative max-w-6xl mx-auto" id="produkt">
            <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full -z-10" />
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section data-glow="strong" className="border-y border-border bg-surface/30 py-5 overflow-hidden whitespace-nowrap">
        <div className="marquee inline-flex gap-12 text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground/70">
          {[
            "VZT / Vzduchotechnika",
            "Elektro revize",
            "Sprinklery & PBZ",
            "BMS integrace",
            "Energetické audity",
            "Úklid & správa",
            "Reporting",
          ]
            .concat([
              "VZT / Vzduchotechnika",
              "Elektro revize",
              "Sprinklery & PBZ",
              "BMS integrace",
              "Energetické audity",
              "Úklid & správa",
              "Reporting",
            ])
            .map((t, i) => (
              <span key={i} className="flex items-center gap-12">
                {t}
                <span className="text-brand">◆</span>
              </span>
            ))}
        </div>
      </section>

      {/* BENTO MODULES */}
      <section id="moduly" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand">
              Co umí NiceOneFlow
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mt-3 text-balance">
              Všechny moduly, které facility tým potřebuje.
            </h2>
            <p className="text-muted-foreground mt-4">
              Žádné Excely, žádný e-mailový chaos. Jeden systém pro kontroly, revize, tickety a reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(220px,auto)]">
            {/* big */}
            <div className="md:col-span-4 md:row-span-2 rounded-2xl border border-border bg-surface p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 size-72 bg-brand/15 rounded-full blur-3xl group-hover:bg-brand/25 transition" />
              <div className="relative">
                <div className="size-10 rounded-lg bg-brand/15 grid place-items-center text-brand mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M9 11l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">
                  Kontroly a revize
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Plánujte pravidelné kontroly VZT, sprinklerů, elektro i rozváděčů. Systém hlídá termíny, generuje protokoly a posílá upomínky.
                </p>
              </div>
              <div className="relative grid grid-cols-3 gap-2 mt-8">
                {[
                  { l: "Po termínu", v: "26", c: "text-[#ff7a59]" },
                  { l: "Čeká", v: "4", c: "text-[#ffd166]" },
                  { l: "Nadcházející", v: "1", c: "text-brand" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-lg bg-background/60 border border-border p-3"
                  >
                    <div className={`font-display font-bold text-2xl ${s.c}`}>
                      {s.v}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* brand block */}
            <div data-glow="off" className="md:col-span-2 rounded-2xl bg-brand text-brand-foreground p-8 flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest opacity-70">
                  Ticketing
                </span>
                <h3 className="font-display font-bold text-2xl mt-3 leading-tight">
                  Nahlaš problém. Vyřeš. Hotovo.
                </h3>
              </div>
              <div className="text-[11px] font-mono opacity-80 mt-6">
                Průměrná doba vyřešení tiketu
                <div className="font-display text-4xl font-bold mt-1">
                  3.4h
                </div>
              </div>
            </div>

            {/* small 1 */}
            <div className="md:col-span-2 rounded-2xl border border-border bg-surface p-6">
              <div className="size-9 rounded-lg bg-brand/15 grid place-items-center text-brand mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                  <path d="M3 3h18v18H3z" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <h4 className="font-display font-semibold text-lg mb-1">
                Více budov
              </h4>
              <p className="text-sm text-muted-foreground">
                Spravujte portfolio objektů z jednoho účtu.
              </p>
            </div>

            {/* small 2 */}
            <div className="md:col-span-2 rounded-2xl border border-border bg-surface p-6">
              <div className="size-9 rounded-lg bg-brand/15 grid place-items-center text-brand mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <h4 className="font-display font-semibold text-lg mb-1">
                QR & mobil
              </h4>
              <p className="text-sm text-muted-foreground">
                Naskenuj zařízení v terénu, vyplň protokol z telefonu.
              </p>
            </div>

            {/* small 3 */}
            <div className="md:col-span-2 rounded-2xl border border-border bg-surface p-6">
              <div className="size-9 rounded-lg bg-brand/15 grid place-items-center text-brand mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 4 4 5-5" />
                </svg>
              </div>
              <h4 className="font-display font-semibold text-lg mb-1">
                Reporting
              </h4>
              <p className="text-sm text-muted-foreground">
                Měsíční reporty pro vlastníka i nájemce jedním klikem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL SCREENS */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand">
              Podívejte se dovnitř
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mt-3 text-balance">
              Reálné obrazovky z aplikace.
            </h2>
            <p className="text-muted-foreground mt-4">
              Žádné mockupy. Tohle používají facility týmy v MVGM každý den.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-surface overflow-hidden group relative">
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur border border-border text-[10px] font-mono uppercase tracking-widest text-brand">
                <span className="size-1.5 rounded-full bg-brand" /> Detail kontroly
              </div>
              <img
                src={appInspection}
                alt="Detail kontroly VZT jednotek v NiceOneFlow"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl border border-border bg-surface overflow-hidden flex flex-col">
              <div className="p-6 border-b border-border">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand">
                  Bezpečný přístup
                </span>
                <h3 className="font-display font-bold text-xl mt-2">
                  Jeden účet pro celý tým.
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  SSO, role a oprávnění pro správce, techniky i klienty.
                </p>
              </div>
              <div data-glow="off" className="flex-1 bg-[oklch(0.95_0.005_240)] grid place-items-center p-6">
                <img
                  src={appLogin}
                  alt="Přihlašovací obrazovka NiceOneFlow"
                  className="block w-full h-auto rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section id="proces" className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand">
                Jak to funguje
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mt-3 text-balance">
                Od nuly k běžícímu provozu za 14 dní.
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              [ FÁZE 01 — 04 ]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                n: "01",
                t: "Mapování objektu",
                d: "Společně naimportujeme budovy, zařízení, šablony kontrol a klienty.",
              },
              {
                n: "02",
                t: "Nasazení",
                d: "Nakonfigurujeme uživatele, role a notifikace přesně podle vašich procesů.",
              },
              {
                n: "03",
                t: "Trénink týmu",
                d: "Vyškolíme správce, techniky i management — online i prezenčně.",
              },
              {
                n: "04",
                t: "Optimalizace",
                d: "Měsíční reviews, vlastní reporty a continuous improvement.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-border bg-surface p-6 hover:border-brand/40 transition"
              >
                <div className="font-mono text-brand text-sm mb-6">{s.n}</div>
                <h4 className="font-display font-semibold text-lg mb-2">
                  {s.t}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: "100+", l: "Spravovaných objektů" },
            { v: "12k", l: "Dokončených kontrol" },
            { v: "3.4h", l: "Průměrná doba ticketu" },
            { v: "99.9%", l: "SLA dostupnost" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-bold text-5xl md:text-6xl text-brand tracking-tight">
                {s.v}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-mono mt-3">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="demo"
        data-glow="soft"
        className="py-24 px-6 border-t border-border relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-brand/15 blur-[140px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-balance">
            Připraveni na <span className="text-brand">flow</span>?
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg">
            Domluvte si 30minutové demo. Ukážeme vám systém na příkladu vaší budovy.
          </p>
          <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="vas@email.cz"
              className="flex-1 bg-surface border border-border rounded-full px-5 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-brand transition"
            />
            <button
              type="submit"
              className="bg-brand text-brand-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition whitespace-nowrap"
            >
              Vyžádat demo
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-sm">
            <Logo />
            <p className="text-sm text-muted-foreground mt-4">
              Software pro moderní facility management a technickou správu budov.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12 text-sm">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Produkt
              </div>
              <ul className="space-y-2">
                <li><a href="#moduly" className="hover:text-brand">Moduly</a></li>
                <li><a href="#cenik" className="hover:text-brand">Ceník</a></li>
                <li><a href="#" className="hover:text-brand">Změny</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Firma
              </div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-brand">O nás</a></li>
                <li><a href="#" className="hover:text-brand">Kariéra</a></li>
                <li><a href="#" className="hover:text-brand">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Kontakt
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>hello@niceoneflow.com</li>
                <li>Praha, ČR</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border flex justify-between items-center text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
          <span>© 2026 NiceOneFlow</span>
          <span>Made in Prague</span>
        </div>
      </footer>
    </div>
  );
}
