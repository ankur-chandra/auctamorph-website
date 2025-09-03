# AuctaMorph Add-ons (drop-in)

This package contains **new components and sample pages** to add the following to your site without touching your existing code:

- Grouped **Solutions mega-menu** (`components/NavBar.tsx`)
- **Breadcrumbs** and **Footer quick links** (`components/SiteChrome.tsx`)
- Sticky **On this page** sidebar (`components/OnThisPage.tsx`)
- **Partner logos** strip (`components/PartnerStrip.tsx`)
- Sample pages that show how to wire the components (`app_samples/...`)
- Placeholder partner logo SVGs (`public/partners/...`)

> ✅ You can copy only the files you want. Your current pages can remain unchanged.

## Folder structure

```
components/
  NavBar.tsx
  SiteChrome.tsx
  OnThisPage.tsx
  PartnerStrip.tsx
public/
  partners/
    automation-anywhere.svg
    power-automate.svg
    uipath.svg
    boomi.svg
app_samples/
  page.tsx                 (Home with PartnerStrip example)
  contact/page.tsx         (Contact with PartnerStrip example)
  solutions/page.tsx       (Solutions with OnThisPage + PartnerStrip example)
```

## How to use

### 1) Copy components

Copy any of these into your project `components/` folder:

- `NavBar.tsx` — grouped Solutions + Industries mega-menu. Add `<NavBar />` to `app/layout.tsx` if you want to use it.
- `SiteChrome.tsx` — `Breadcrumbs` and `FooterQuickLinks`. Import as needed.
- `OnThisPage.tsx` — sticky in-page nav (client component). Import into pages where your content uses `<section id="...">` blocks.
- `PartnerStrip.tsx` — partner logos (uses images from `/public/partners`).

> If your project **doesn't** have the `@` alias, change imports like `@/components/...` to relative paths (e.g., `../../components/...`).

### 2) Copy assets

Place the files under `public/partners/`. The included SVGs are **neutral placeholders** — replace them with your official logos when ready.

- `/public/partners/automation-anywhere.svg`
- `/public/partners/power-automate.svg`
- `/public/partners/uipath.svg`
- `/public/partners/boomi.svg`

### 3) (Optional) Use sample pages

Inside `app_samples/` you'll find examples that **do not overwrite** your existing pages:

- `app_samples/solutions/page.tsx` — demonstrates the sticky sidebar + partner strip + grouped TOC.
- `app_samples/page.tsx` — Home with `PartnerStrip` under the hero.
- `app_samples/contact/page.tsx` — Contact with `PartnerStrip` at the bottom.

Copy snippets from these into your existing pages whenever you decide.

### 4) Tailwind/Next notes

- Components assume Tailwind is available.
- `OnThisPage.tsx` is a client component and requires a page layout where main content sections use `<section id="...">`.

- The sticky right rail uses `scroll-mt-28` on your anchors to avoid header overlap.
- The partner strip uses Next `Image`. Ensure `next/image` is configured (default is fine for local assets).

---

Generated: 2025-09-02
