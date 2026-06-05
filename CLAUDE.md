# NiceOneFlow — marketingový web

Marketingová landing page pro SaaS produkt **NiceOneFlow** — software pro facility management a technickou správu budov. Cílový trh: facility týmy v ČR (MVGM a podobné firmy).

## Stack

- **Framework:** React 19 + TanStack Start (SSR) + TanStack Router (file-based routing)
- **Build:** Vite 7 + Nitro (`node-server` preset pro Railway)
- **Styling:** Tailwind CSS 4 + shadcn/ui komponenty (Radix UI)
- **Jazyk UI:** čeština

## Vývoj

```bash
npm install --legacy-peer-deps   # nutné kvůli peer dep konfliktu v @lovable.dev/vite-tanstack-config
npm run dev                      # http://localhost:8080
npm run build                    # produkční build do .output/
```

> `npm ci` **nefunguje** — vždy používej `npm install --legacy-peer-deps`

## Deployment

- **Hosting:** Railway (projekt `niceoneflow.com`)
- **Start příkaz:** `node .output/server/index.mjs`
- **Konfigurace:** `railway.json` + `nixpacks.toml`
- **Doména:** niceoneflow.com (DNS u Active24, CNAME → `yqr8flx5.up.railway.app`)
- **CI/CD:** automatický deploy při push na `main` větev (GitHub: `lubossamaj/niceoneflow.com`)

## Struktura

```
src/
  routes/
    index.tsx        # hlavní landing page (jediná stránka)
    __root.tsx       # root layout
    logo-lab.tsx     # interní stránka
  components/
    ui/              # shadcn/ui komponenty
    CursorGlow.tsx   # efekt sledování kurzoru
  assets/            # screenshoty aplikace (app-dashboard, app-inspection, app-login)
  styles.css         # globální styly + Tailwind
```

## Sekce landing page

1. **Nav** — sticky header s logem a CTA "Vyžádat demo"
2. **Hero** — headline + dashboard mockup
3. **Ticker** — marquee s klíčovými oblastmi (VZT, Elektro revize...)
4. **Bento moduly** — Kontroly, Ticketing, Více budov, QR & mobil, Reporting
5. **Reálné screenshoty** — z produkční aplikace
6. **Proces** — 4 fáze onboardingu (14 dní)
7. **Statistiky** — 100+ objektů, 12k kontrol, 3.4h průměr ticket, 99.9% SLA
8. **CTA / Demo** — email formulář
9. **Footer**

## Důležité poznámky

- UI text je **česky**, zachovej češtinu při editaci obsahu
- Brand barva je `--color-brand` (fialová), používej třídu `text-brand`, `bg-brand`
- Fonty: Inter (body), Sora (display/headings), JetBrains Mono (mono)
- `data-glow` atribut na sekcích řídí efekt glowu pozadí
- Animace příchodu elementů přes třídu `rise`
